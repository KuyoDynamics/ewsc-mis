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
  MenuItem,
  Select,
  SelectChangeEvent,
  TableFooterProps,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { utils, writeFile } from 'xlsx';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import useGetDefaultOrganisation from 'utils/hooks/use-get-default-organisation';
import ProvinceForm from './province-form';
import {
  Province,
  GetProvincesDocument,
  useDeleteProvinceMutation,
  useGetProvincesQuery,
  useUpdateProvinceMutation,
  useGetCountriesQuery,
  District,
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

        saveExcelFile('provinces', 'provinces', 'xlsx', json);

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
        exportBlob(blob, 'provinces.json');

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
  handleChange: () => void;
  selectedCountryId: string;
}

function CustomToolbar({
  title,
  handleChange,
  selectedCountryId,
}: CustomToolbarProps) {
  const { data } = useGetCountriesQuery();

  const countries = useMemo(
    () => data?.countries?.map((c) => ({ name: c.name, id: c.id })),
    [data]
  );

  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Select
          value={selectedCountryId}
          onChange={handleChange}
          fullWidth
          size="small"
          name="theme"
          variant="outlined"
        >
          {countries &&
            countries.map((country) => (
              <MenuItem value={country.id}>{country.name}</MenuItem>
            ))}
        </Select>
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
      <Tooltip title="Add Province">
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

interface IProvinceFormInputs {
  name: string;
  code: string;
  id: string;
}

const schema = Yup.object({
  name: Yup.string().required().min(4).max(255),
  code: Yup.string().required().min(5).max(5),
});

const initialRowModesModel: GridRowModesModel = {};

function ProvinceList() {
  const navigate = useNavigate();

  const renderId = uuidv4();

  const { country_id: countryId } = useGetDefaultOrganisation();

  const [selectedCountryId, setSelectedCountryId] = useState(countryId);

  const [openAlert, setOpenAlert] = useState(false);

  const [openCreateProvinceModal, setOpenCreateProvinceModal] = useState(false);

  const [selectedRow, setSelectedRow] = useState<IProvinceFormInputs | null>(
    null
  );

  const { data, loading } = useGetProvincesQuery({
    fetchPolicy: 'network-only',
    variables: {
      countryId: selectedCountryId,
    },
  });

  const [updateProvince, { data: updatedProvinceResponse, loading: updating }] =
    useUpdateProvinceMutation({
      refetchQueries: [GetProvincesDocument],
    });

  const [deleteProvince, { data: deleteProvinceResponse, loading: deleting }] =
    useDeleteProvinceMutation({
      refetchQueries: [GetProvincesDocument],
    });

  const deleteErrors =
    deleteProvinceResponse?.deleteProvince.__typename === 'ApiDeleteError'
      ? deleteProvinceResponse.deleteProvince
      : null;
  const rows = data?.provinces ?? [];

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<IProvinceFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({ code, name, id }: IProvinceFormInputs) => {
    updateProvince({
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
        if (result.updateProvince.__typename === 'Province') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateProvince.__typename === 'ApiUpdateError') {
          if (result.updateProvince.field) {
            setError(result.updateProvince.field as keyof IProvinceFormInputs, {
              type: 'server',
              message: result.updateProvince.message,
            });
          } else if (
            !result.updateProvince.errors &&
            !result.updateProvince.field
          ) {
            setError('unknown' as keyof IProvinceFormInputs, {
              type: 'server',
              message: result.updateProvince.message,
            });
          } else {
            result.updateProvince.errors?.forEach((err) =>
              setError(err.field as keyof IProvinceFormInputs, {
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
    deleteProvince({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteProvince.__typename === 'ApiDeleteError') {
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
      headerName: 'Province Name',
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
      headerName: 'Province Code',
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
      field: 'districts',
      headerName: 'districts',
      type: 'number',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      headerAlign: 'left',
      align: 'left',
      renderCell: (params: GridRenderCellParams) => {
        const { districts, id } = params.row as Province;
        return (
          <Button
            variant="text"
            size="small"
            endIcon={<EditLocationOutlined />}
            onClick={() => navigate(`/system/districts/${id}`)}
          >
            {districts && districts.length === 1
              ? districts[0].name
              : `${districts?.length} districts`}
          </Button>
        );
      },
      valueGetter: (params: GridValueGetterParams) => {
        return (params.value as District[]).length;
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
      {errors['unknown' as keyof IProvinceFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof IProvinceFormInputs]?.message}. Please
            contact support or try again!
          </Alert>
        </Box>
      )}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          pageSize={5}
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
            footer: { onClick: () => setOpenCreateProvinceModal(true) },
            toolbar: {
              title: 'Provinces',
              handleChange: handleCountrySelectionChange,
              selectedCountryId,
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
      <ProvinceForm
        key={renderId}
        open={openCreateProvinceModal}
        onClose={() => setOpenCreateProvinceModal(false)}
        selectedCountryId={selectedCountryId}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default ProvinceList;
