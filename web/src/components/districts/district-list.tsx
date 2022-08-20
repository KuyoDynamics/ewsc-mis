/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
  Save as SaveIcon,
  Close as CancelIcon,
  EditLocationOutlined,
} from '@mui/icons-material';

import {
  DataGrid,
  GridActionsCellItem,
  GridApi,
  gridColumnDefinitionsSelector,
  GridColumns,
  GridCsvExportMenuItem,
  GridCsvExportOptions,
  GridEventListener,
  GridExportMenuItemProps,
  gridFilteredSortedRowIdsSelector,
  GridFooter,
  GridFooterContainer,
  GridRenderCellParams,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridValueFormatterParams,
  GridValueGetterParams,
  gridVisibleColumnFieldsSelector,
  MuiEvent,
  useGridApiContext,
} from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import {
  Alert,
  Box,
  Button,
  Collapse,
  Fab,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TableFooterProps,
  Tooltip,
  Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { utils, writeFile } from 'xlsx';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import useGetDefaultOrganisation from 'utils/hooks/use-get-default-organisation';
import DistrictForm from './district-form';
import {
  GetDistrictsDocument,
  useDeleteDistrictMutation,
  useGetDistrictsQuery,
  useUpdateDistrictMutation,
  useGetCountriesQuery,
  District,
  useGetProvincesQuery,
  Residence,
} from '../../../graphql/generated';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

type CustomFooterProps = {
  onClick: () => void;
} & TableFooterProps;

const getJson = (apiRef: React.MutableRefObject<GridApi>) => {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);

  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  const disableExportCols = gridColumnDefinitionsSelector(apiRef)
    .filter((col) => col.disableExport)
    .map((col) => col.field);

  const exportableVisibleColumnsField = visibleColumnsField.filter(
    (field) => disableExportCols.indexOf(field) === -1
  );

  const data = filteredSortedRowIds.map((id) => {
    const row: Record<string, any> = {};
    exportableVisibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  return { jsonString: JSON.stringify(data, null, 2), json: data };
};

const exportBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};

function saveExcelFile(
  fileName: string,
  worksheetName: string,
  ext: string,
  rows: Record<string, any>[]
): void {
  const wb = utils.book_new();

  const worksheet = utils.json_to_sheet(rows);

  utils.book_append_sheet(wb, worksheet, worksheetName);

  writeFile(wb, `${fileName}.${ext}`);
}

function ExcelExportMenuItem(props: GridExportMenuItemProps<{}>) {
  const apiRef = useGridApiContext();

  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={() => {
        const { json } = getJson(apiRef);

        saveExcelFile('districts', 'districts', 'xlsx', json);

        hideMenu?.();
      }}
    >
      Download as Excel(xlsx)
    </MenuItem>
  );
}

function JsonExportMenuItem(props: GridExportMenuItemProps<{}>) {
  const apiRef = useGridApiContext();

  const { hideMenu } = props;
  return (
    <MenuItem
      onClick={() => {
        const { jsonString } = getJson(apiRef);
        const blob = new Blob([jsonString], {
          type: 'text/json',
        });
        exportBlob(blob, 'districts.json');

        hideMenu?.();
      }}
    >
      Download as JSON
    </MenuItem>
  );
}

const csvOptions: GridCsvExportOptions = { delimiter: ';' };

export interface CustomToolbarProps {
  title: string;
  handleCountrySelectionChange: () => void;
  handleProvinceSelectionChange: () => void;
  selectedCountryId: string;
  selectedProvinceId: string;
}

function CustomToolbar({
  title,
  handleCountrySelectionChange,
  handleProvinceSelectionChange,
  selectedCountryId,
  selectedProvinceId,
}: CustomToolbarProps) {
  const { data } = useGetCountriesQuery();

  const countries = useMemo(
    () => data?.countries?.map((c) => ({ name: c.name, id: c.id })),
    [data]
  );

  const { data: provinceData } = useGetProvincesQuery({
    variables: {
      countryId: selectedCountryId,
    },
  });

  const provinces = useMemo(
    () => provinceData?.provinces?.map((p) => ({ name: p.name, id: p.id })),
    [provinceData]
  );

  useEffect(() => {
    if (provinces?.length === 0) {
      handleProvinceSelectionChange();
    }
  }, [provinces, handleProvinceSelectionChange]);

  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <FormControl>
          <Select
            value={selectedCountryId}
            onChange={handleCountrySelectionChange}
            displayEmpty
            size="small"
            name="country_id"
            variant="outlined"
          >
            {countries &&
              countries.map((country) => (
                <MenuItem value={country.id}>{country.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl>
          <Select
            value={selectedProvinceId}
            onChange={handleProvinceSelectionChange}
            // fullWidth
            displayEmpty
            size="small"
            name="province_id"
            // variant="outlined"
          >
            {provinces?.length! <= 0 && (
              <MenuItem disabled value="">
                <em>empty</em>
              </MenuItem>
            )}
            {provinces &&
              provinces.map((province) => (
                <MenuItem value={province.id}>{province.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <GridToolbarExportContainer>
        <ExcelExportMenuItem />
        <GridCsvExportMenuItem options={csvOptions} />
        <JsonExportMenuItem />
      </GridToolbarExportContainer>
    </GridToolbarContainer>
  );
}

function CustomFooter({ onClick, ...props }: CustomFooterProps) {
  return (
    <GridFooterContainer>
      <GridFooter {...props} />
      <Tooltip title="Add District">
        <Fab
          size="small"
          color="primary"
          aria-label="add province"
          sx={{ mr: '20px', ml: '20px' }}
          onClick={onClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </GridFooterContainer>
  );
}

interface IDistrictFormInputs {
  name: string;
  code: string;
  id: string;
}

const schema = Yup.object({
  name: Yup.string().required().min(4).max(255),
  code: Yup.string().required().min(8).max(8),
});

const initialRowModesModel: GridRowModesModel = {};

type LocationStateType = {
  countryId: string;
  provinceId: string;
};

function DistrictList() {
  const navigate = useNavigate();

  const [pageSize, setPageSize] = React.useState<number>(5);

  const renderId = uuidv4();

  const { country_id: countryId } = useGetDefaultOrganisation();

  const { state } = useLocation();

  const [selectedCountryId, setSelectedCountryId] = useState(
    (state as LocationStateType)?.countryId || countryId
  );

  const [selectedProvinceId, setSelectedProvinceId] = useState(
    (state as LocationStateType)?.provinceId
  );

  const [openAlert, setOpenAlert] = useState(false);

  const [openCreateDistrictModal, setOpenCreateDistrictModal] = useState(false);

  const [selectedRow, setSelectedRow] = useState<IDistrictFormInputs | null>(
    null
  );

  const { data: DistrictData, loading } = useGetDistrictsQuery({
    fetchPolicy: 'network-only',
    variables: {
      provinceId: selectedProvinceId,
    },
  });

  const [updateDistrict, { data: updatedDistrictResponse, loading: updating }] =
    useUpdateDistrictMutation({
      refetchQueries: [GetDistrictsDocument],
    });

  const [deleteDistrict, { data: deleteDistrictResponse, loading: deleting }] =
    useDeleteDistrictMutation({
      refetchQueries: [GetDistrictsDocument],
    });

  const deleteErrors =
    deleteDistrictResponse?.deleteDistrict.__typename === 'ApiDeleteError'
      ? deleteDistrictResponse.deleteDistrict
      : null;

  // TODO: Fix the cascading for when country changes, should show empty list
  const rows = DistrictData?.districts ?? [];

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<IDistrictFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({ code, name, id }: IDistrictFormInputs) => {
    updateDistrict({
      variables: {
        input: {
          id,
          update: {
            code,
            name,
          },
        },
      },
      onCompleted: (result) => {
        if (result.updateDistrict.__typename === 'District') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateDistrict.__typename === 'ApiUpdateError') {
          if (result.updateDistrict.field) {
            setError(result.updateDistrict.field as keyof IDistrictFormInputs, {
              type: 'server',
              message: result.updateDistrict.message,
            });
          } else if (
            !result.updateDistrict.errors &&
            !result.updateDistrict.field
          ) {
            setError('unknown' as keyof IDistrictFormInputs, {
              type: 'server',
              message: result.updateDistrict.message,
            });
          } else {
            result.updateDistrict.errors?.forEach((err) =>
              setError(err.field as keyof IDistrictFormInputs, {
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
    setSelectedCountryId(event.target.value);
  };

  const handleProvinceSelectionChange = (event: SelectChangeEvent) => {
    setSelectedProvinceId(event?.target?.value);
  };

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handleEditClick = (id: GridRowId) => () => {
    const item = rows.find((row) => row.id === id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    setSelectedRow(() =>
      item ? { id: item.id, code: item.code, name: item.name } : null
    );
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setValue('id', id as string);
    handleSubmit(onSubmit)();
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    deleteDistrict({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteDistrict.__typename === 'ApiDeleteError') {
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
      field: 'name',
      headerName: 'District Name',
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
      field: 'code',
      headerName: 'District Code',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
      resizable: true,
      renderEditCell: () => {
        return (
          <FormInput
            control={control}
            name="code"
            fullWidth
            label="Code"
            margin="none"
            size="small"
            variant="outlined"
            inputProps={{
              style: { textTransform: 'uppercase' },
            }}
          />
        );
      },
    },
    {
      field: 'residences',
      headerName: 'Residential Areas',
      type: 'number',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      headerAlign: 'left',
      align: 'left',
      renderCell: (params: GridRenderCellParams) => {
        const { residences, id } = params.row as District;
        return (
          <Button
            variant="text"
            size="small"
            endIcon={<EditLocationOutlined />}
            onClick={() => navigate(`/system/residences/${id}`)}
          >
            {residences && residences.length === 1
              ? residences[0].name
              : `${residences?.length} residential areas`}
          </Button>
        );
      },
      valueGetter: (params: GridValueGetterParams) => {
        return (params.value as Residence[])?.length;
      },
    },
    {
      field: 'id',
      headerName: 'ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
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
      {errors['unknown' as keyof IDistrictFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof IDistrictFormInputs]?.message}. Please
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
            Footer: CustomFooter,
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            footer: { onClick: () => setOpenCreateDistrictModal(true) },
            toolbar: {
              title: 'Districts',
              handleCountrySelectionChange,
              handleProvinceSelectionChange,
              selectedCountryId,
              selectedProvinceId,
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
              },
            },
          }}
          sx={{
            color: 'inherit',
          }}
        />
      </Box>
      <DistrictForm
        key={renderId}
        open={openCreateDistrictModal}
        onClose={() => setOpenCreateDistrictModal(false)}
        selectedCountryId={selectedCountryId}
        selectedProvinceId={selectedProvinceId}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default DistrictList;
