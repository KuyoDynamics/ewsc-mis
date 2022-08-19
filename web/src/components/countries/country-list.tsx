/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
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
  gridVisibleColumnFieldsSelector,
  MuiEvent,
  useGridApiContext,
} from '@mui/x-data-grid';
import {
  Alert,
  Box,
  Button,
  Collapse,
  Fab,
  MenuItem,
  TableFooterProps,
  Tooltip,
  Typography,
} from '@mui/material';
import { utils, writeFile } from 'xlsx';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import CountryForm from './country-form';
import {
  Country,
  GetCountriesDocument,
  useDeleteCountryMutation,
  useGetCountriesQuery,
  useUpdateCountryMutation,
} from '../../../graphql/generated';
import { EditLocationOutlined, MoreHoriz } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

type CustomFooterProps = {
  onClick: () => void;
} & TableFooterProps;

export interface CustomToolbarProps {
  title: string;
}

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

        saveExcelFile(
          'countries',
          'countries',
          'xlsx',
          json.map((item) => ({
            ...item,
            provinces: item.provinces.length,
          }))
        );

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
        exportBlob(blob, 'countries.json');

        hideMenu?.();
      }}
    >
      Download as JSON
    </MenuItem>
  );
}

const csvOptions: GridCsvExportOptions = { delimiter: ';' };

function CustomToolbar({ title }: CustomToolbarProps) {
  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h3">{title}</Typography>
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
      <Tooltip title="Add Country">
        <Fab
          size="small"
          color="primary"
          aria-label="invite user"
          sx={{ mr: '20px', ml: '20px' }}
          onClick={onClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </GridFooterContainer>
  );
}

interface ICountryFormInputs {
  name: string;
  code: string;
  id: string;
}

const schema = Yup.object({
  code: Yup.string().required().min(2).max(3),
  name: Yup.string().required().min(4).max(255),
});

const initialRowModesModel: GridRowModesModel = {};

function CountryList() {
  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);

  const [openCreateCountryModal, setOpenCreateCountryModal] = useState(false);

  const [selectedRow, setSelectedRow] = useState<ICountryFormInputs | null>(
    null
  );

  const { data, loading } = useGetCountriesQuery({
    fetchPolicy: 'network-only',
  });

  const [updateCountry, { data: updatedCountryResponse, loading: updating }] =
    useUpdateCountryMutation({
      refetchQueries: [GetCountriesDocument],
    });

  const [deleteCountry, { data: deleteCountryResponse, loading: deleting }] =
    useDeleteCountryMutation({
      refetchQueries: [GetCountriesDocument],
    });

  const deleteErrors =
    deleteCountryResponse?.deleteCountry.__typename === 'ApiDeleteError'
      ? deleteCountryResponse.deleteCountry
      : null;
  const rows = data?.countries ?? [];

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<ICountryFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({ code, name, id }: ICountryFormInputs) => {
    updateCountry({
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
        if (result.updateCountry.__typename === 'Country') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateCountry.__typename === 'ApiUpdateError') {
          if (result.updateCountry.field) {
            setError(result.updateCountry.field as keyof ICountryFormInputs, {
              type: 'server',
              message: result.updateCountry.message,
            });
          } else if (
            !result.updateCountry.errors &&
            !result.updateCountry.field
          ) {
            setError('unknown' as keyof ICountryFormInputs, {
              type: 'server',
              message: result.updateCountry.message,
            });
          } else {
            result.updateCountry.errors?.forEach((err) =>
              setError(err.field as keyof ICountryFormInputs, {
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
    deleteCountry({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteCountry.__typename === 'ApiDeleteError') {
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
      headerName: 'Country Name',
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
      headerName: 'Country Code',
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
      field: 'provinces',
      headerName: 'provinces',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      renderCell: (params: GridRenderCellParams) => {
        const { provinces, id } = params.row as Country;
        return (
          <Button
            variant="text"
            size="small"
            endIcon={<EditLocationOutlined />}
            onClick={() => navigate(`/system/provinces/${id}`)}
          >
            {provinces && provinces.length === 1
              ? provinces[0].name
              : `${provinces?.length} provinces`}
          </Button>
        );
      },
      valueFormatter: (params: GridValueFormatterParams) => {
        return params.value.length;
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
      {errors['unknown' as keyof ICountryFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof ICountryFormInputs]?.message}. Please
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
            footer: { onClick: () => setOpenCreateCountryModal(true) },
            toolbar: { title: 'Countries' },
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
      <CountryForm
        open={openCreateCountryModal}
        onClose={() => setOpenCreateCountryModal(false)}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default CountryList;
