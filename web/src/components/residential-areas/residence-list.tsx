/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
  Save as SaveIcon,
  Close as CancelIcon,
} from '@mui/icons-material';

import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridCsvExportMenuItem,
  GridCsvExportOptions,
  GridEventListener,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridToolbarQuickFilter,
  GridValueGetterParams,
  MuiEvent,
} from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import {
  Alert,
  Box,
  Collapse,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomFooterWithFab from 'components/data-grid-helpers/customer-footer-with-fab';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import useGetDefaultOrganisation from 'utils/hooks/use-get-default-organisation';
import useGetDefaultProvince from 'utils/hooks/use-get-default-province';
import FormSelect from 'components/form-input-helpers/form-select';
import { COST_CLASSIFICATION_OPTIONS, ILocationFilterState } from 'utils';
import useGetDefaultDistrict from 'utils/hooks/use-get-default-district';
import ExcelExportMenuItem from 'components/data-grid-helpers/excel-export-menu-item';
import JsonExportMenuItem from 'components/data-grid-helpers/json-export-menu-item';
import ResidenceForm from './residence-form';
import {
  GetResidencesDocument,
  useDeleteResidenceMutation,
  useGetResidencesQuery,
  useUpdateResidenceMutation,
  useGetCountriesQuery,
  Residence,
  ResidenceClassification,
  District,
} from '../../../graphql/generated';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

const csvOptions: GridCsvExportOptions = {
  delimiter: ';',
  fileName: 'residential areas',
};
export interface ICustomToolbarDataProps {
  name: string;
  id: string;
}
export interface CustomToolbarProps {
  title: string;
  handleCountrySelectionChange: () => void;
  handleProvinceSelectionChange: () => void;
  handleDistrictSelectionChange: () => void;
  countryId: string;
  provinceId: string;
  districtId: string;
  provinceOptions: JSX.Element[];
  countryOptions: JSX.Element[];
  districtOptions: JSX.Element[];
}

function CustomToolbar({
  title,
  handleCountrySelectionChange,
  handleProvinceSelectionChange,
  handleDistrictSelectionChange,
  countryId,
  provinceId,
  districtId,
  provinceOptions,
  countryOptions,
  districtOptions,
}: CustomToolbarProps) {
  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <FormControl>
          <Select
            value={countryId}
            onChange={handleCountrySelectionChange}
            displayEmpty
            size="small"
            name="country_id"
            variant="outlined"
          >
            {countryOptions}
          </Select>
        </FormControl>
        <FormControl>
          <Select
            value={provinceId}
            onChange={handleProvinceSelectionChange}
            displayEmpty
            size="small"
            name="province_id"
          >
            {provinceOptions}
          </Select>
        </FormControl>
        <FormControl>
          <Select
            value={districtId}
            onChange={handleDistrictSelectionChange}
            displayEmpty
            size="small"
            name="district_id"
          >
            {districtOptions}
          </Select>
        </FormControl>
        <Box>
          <GridToolbarQuickFilter />
        </Box>
      </Box>
      <GridToolbarExportContainer>
        <ExcelExportMenuItem
          fileName="residential areas"
          worksheetName="residential areas"
          ext="xlsx"
        />
        <GridCsvExportMenuItem options={csvOptions} />
        <JsonExportMenuItem fileName="residential areas" />
      </GridToolbarExportContainer>
    </GridToolbarContainer>
  );
}

interface IResidenceFormInputs {
  name?: string;
  cost_classification?: ResidenceClassification;
  id: string;
}

const schema = Yup.object({
  cost_classification: Yup.mixed<ResidenceClassification>()
    .oneOf(COST_CLASSIFICATION_OPTIONS as ResidenceClassification[])
    .required(),
  name: Yup.string().required().min(4).max(255),
  id: Yup.string().uuid().required(),
});

const initialRowModesModel: GridRowModesModel = {};

type LocationStateType = {
  countryId: string;
  provinceId: string;
  districtId: string;
};

function ResidenceList() {
  const navigate = useNavigate();

  const [pageSize, setPageSize] = React.useState<number>(5);

  const renderId = uuidv4();

  const { country_id: defaultCountryId } = useGetDefaultOrganisation();

  const { id: defaultDistrictId } = useGetDefaultDistrict();

  const { id: defaultProvinceId } = useGetDefaultProvince();

  const { state } = useLocation();

  const { data: countryData } = useGetCountriesQuery();

  const [{ countryId, provinceId, districtId }, setFilter] =
    useState<ILocationFilterState>({
      countryId: (state as LocationStateType)?.countryId || defaultCountryId,
      provinceId: (state as LocationStateType)?.provinceId || defaultProvinceId,
      districtId: (state as LocationStateType)?.districtId || defaultDistrictId,
      organisationId: '',
      residenceId: '',
    });

  const countryOptions = countryData?.countries?.map((c) => (
    <MenuItem value={c.id}>{c.name}</MenuItem>
  ));

  const provinceOptions = countryData?.countries
    ?.find((item) => item.id === countryId)
    ?.provinces?.map((p) => <MenuItem value={p.id}>{p.name}</MenuItem>);

  const districtOptions = countryData?.countries
    ?.find((item) => item.id === countryId)
    ?.provinces?.find((p) => p.id === provinceId)
    ?.districts?.map((d) => <MenuItem value={d.id}>{d.name}</MenuItem>);

  const [openAlert, setOpenAlert] = useState(false);

  const [openCreateResidenceModal, setOpenCreateResidenceModal] =
    useState(false);

  const [selectedRow, setSelectedRow] = useState<IResidenceFormInputs | null>(
    null
  );

  const { data: residenceData, loading } = useGetResidencesQuery({
    fetchPolicy: 'network-only',
    variables: {
      districtId,
    },
  });

  const rows = residenceData?.residences ?? [];

  const [updateResidence, { loading: updating }] = useUpdateResidenceMutation({
    refetchQueries: [GetResidencesDocument],
  });

  const [
    deleteResidence,
    { data: deleteResidenceResponse, loading: deleting },
  ] = useDeleteResidenceMutation({
    refetchQueries: [GetResidencesDocument],
  });

  const deleteErrors =
    deleteResidenceResponse?.deleteResidence.__typename === 'ApiDeleteError'
      ? deleteResidenceResponse.deleteResidence
      : null;

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<IResidenceFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({
    cost_classification,
    name,
    id,
  }: IResidenceFormInputs) => {
    updateResidence({
      variables: {
        input: {
          id,
          update: {
            cost_classification,
            name,
          },
        },
      },
      onCompleted: (result) => {
        if (result.updateResidence.__typename === 'Residence') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateResidence.__typename === 'ApiUpdateError') {
          if (result.updateResidence.field) {
            setError(
              result.updateResidence.field as keyof IResidenceFormInputs,
              {
                type: 'server',
                message: result.updateResidence.message,
              }
            );
          } else if (
            !result.updateResidence.errors &&
            !result.updateResidence.field
          ) {
            setError('unknown' as keyof IResidenceFormInputs, {
              type: 'server',
              message: result.updateResidence.message,
            });
          } else {
            result.updateResidence.errors?.forEach((err) =>
              setError(err.field as keyof IResidenceFormInputs, {
                type: 'server',
                message: err.message,
              })
            );
          }
        }
      },
      onError: (err) => {
        // throw it and let it be handled by the Error Boundary
        console.log('Chaiwa, something bad happened', err);
      },
    });
  };

  const handleCountrySelectionChange = (event: SelectChangeEvent) => {
    setFilter((prevData) => ({
      ...prevData,
      provinceId: '',
      districtId: '',
      countryId: event.target.value,
    }));
  };

  const handleProvinceSelectionChange = (event: SelectChangeEvent) => {
    setFilter((prevData) => ({
      ...prevData,
      districtId: '',
      provinceId: event.target.value,
    }));
  };

  const handleDistrictSelectionChange = (event: SelectChangeEvent) => {
    setFilter((prevData) => ({
      ...prevData,
      districtId: event.target.value,
    }));
  };

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handleEditClick = (id: GridRowId) => () => {
    const item = rows.find((row) => row.id === id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    setSelectedRow(() =>
      item
        ? {
            id: item.id,
            cost_classification: item.cost_classification,
            name: item.name,
          }
        : null
    );
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setValue('id', id as string);
    handleSubmit(onSubmit)();
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    deleteResidence({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteResidence.__typename === 'ApiDeleteError') {
          setOpenAlert(true);
        }
      },
    });
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const handleRowEditStart = (
    _params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    _params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };

  const columns: GridColumns = [
    {
      field: 'country',
      headerName: 'Country',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params: GridValueGetterParams) => {
        return (params.row as Residence)?.district?.province?.country?.name;
      },
    },
    {
      field: 'country_id',
      headerName: 'Country ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params: GridValueGetterParams) => {
        return (params.row as Residence)?.district?.province?.country?.id;
      },
    },
    {
      field: 'province',
      headerName: 'Province',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params: GridValueGetterParams) => {
        return (params.row as Residence)?.district?.province?.name;
      },
    },
    {
      field: 'province_id',
      headerName: 'Province ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params: GridValueGetterParams) => {
        return (params.row as Residence)?.district?.province?.id;
      },
    },
    {
      field: 'district',
      headerName: 'District',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params: GridValueGetterParams) => {
        return (params.value as District)?.name;
      },
    },
    {
      field: 'district_id',
      headerName: 'District ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'name',
      headerName: 'Residence Name',
      type: 'string',
      width: 180,
      editable: true,
      hideable: false,
      flex: 1,
      resizable: true,
      renderEditCell: () => {
        return (
          <FormInput
            control={control}
            name="name"
            fullWidth
            label="Name"
            margin="none"
            size="small"
            variant="outlined"
            inputProps={{
              autoCapitalize: 'on',
            }}
          />
        );
      },
    },
    {
      field: 'id',
      headerName: 'Residence ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'cost_classification',
      headerName: 'Cost Classification',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
      resizable: true,
      renderEditCell: () => {
        return (
          <FormSelect
            control={control}
            name="cost_classification"
            errors={errors}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
          >
            {COST_CLASSIFICATION_OPTIONS &&
              COST_CLASSIFICATION_OPTIONS.map((c) => (
                <MenuItem value={c}>{c}</MenuItem>
              ))}
          </FormSelect>
        );
      },
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      type: 'dateTime',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'created_by',
      headerName: 'Created By',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'last_modified_at',
      headerName: 'Last Modified At',
      type: 'dateTime',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'last_modified_by',
      headerName: 'Last Modified By',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      disableExport: true,
      disableColumnMenu: true,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              disabled={!isDirty || !isValid || loading || updating}
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            disabled={loading || deleting}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            disabled={loading || deleting}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    resetForm(selectedRow!);
  }, [selectedRow, resetForm]);

  return (
    <MainCard>
      {deleteErrors && (
        <Box>
          <Collapse in={openAlert}>
            <Alert severity="error" onClose={handleClose}>
              {deleteErrors.message}
              {deleteErrors.errors && (
                <Typography>
                  Reason: {deleteErrors.errors[0].message}
                </Typography>
              )}
              .Please contact support or try again!
            </Alert>
          </Collapse>
        </Box>
      )}
      {errors['unknown' as keyof IResidenceFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof IResidenceFormInputs]?.message}. Please
            contact support or try again!
          </Alert>
        </Box>
      )}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10]}
          columns={columns}
          editMode="row"
          disableSelectionOnClick
          rowModesModel={rowModesModel}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          components={{
            Footer: CustomFooterWithFab,
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            footer: {
              onClick: () => setOpenCreateResidenceModal(true),
              title: 'Add Residence',
            },
            toolbar: {
              title: 'Residential Area',
              handleCountrySelectionChange,
              handleProvinceSelectionChange,
              handleDistrictSelectionChange,
              countryId,
              provinceId,
              districtId,
              provinceOptions,
              countryOptions,
              districtOptions,
            },
          }}
          loading={loading || deleting}
          experimentalFeatures={{ newEditingApi: true }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                created_at: false,
                created_by: false,
                modified_at: false,
                last_modified_at: false,
                last_modified_by: false,
                id: false,
                district_id: false,
                country_id: false,
                province_id: false,
              },
            },
          }}
          sx={{
            color: 'inherit',
          }}
        />
      </Box>
      <ResidenceForm
        key={renderId}
        open={openCreateResidenceModal}
        onClose={() => setOpenCreateResidenceModal(false)}
        selectedCountryId={countryId}
        selectedProvinceId={provinceId}
        selectedDistrictId={districtId}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default ResidenceList;
