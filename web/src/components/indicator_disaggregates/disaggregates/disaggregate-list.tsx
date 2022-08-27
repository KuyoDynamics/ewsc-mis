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
  ViewList,
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
  MuiEvent,
} from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import {
  Alert,
  Box,
  Button,
  Collapse,
  MenuItem,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { INDICATOR_DISAGGREGATE_TYPE_OPTIONS } from 'utils';
import FormSelect from 'components/form-input-helpers/form-select';
import CustomFooterWithFab from 'components/data-grid-helpers/customer-footer-with-fab';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import ExcelExportMenuItem from 'components/data-grid-helpers/excel-export-menu-item';
import JsonExportMenuItem from 'components/data-grid-helpers/json-export-menu-item';
import DisaggregateForm from './disaggregate-form';
import {
  GetDisaggregatesDocument,
  useDeleteDisaggregateMutation,
  useGetDisaggregatesQuery,
  useUpdateDisaggregateMutation,
  Disaggregate,
  DisaggregateType,
} from '../../../../graphql/generated';
import DisaggregateDetail from './disaggregate-detail';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

const csvDisaggregates: GridCsvExportOptions = {
  delimiter: ';',
  fileName: 'system indicator disaggregates',
};
export interface ICustomToolbarDataProps {
  name: string;
  id: string;
}
export interface CustomToolbarProps {
  title: string;
}

function CustomToolbar({ title }: CustomToolbarProps) {
  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h3" sx={{ mb: '2px' }}>
          {title}
        </Typography>
        <GridToolbarQuickFilter />
      </Box>
      <GridToolbarExportContainer>
        <ExcelExportMenuItem
          fileName={csvDisaggregates.fileName}
          worksheetName={csvDisaggregates.fileName}
          ext="xlsx"
        />
        <GridCsvExportMenuItem options={csvDisaggregates} />
        <JsonExportMenuItem fileName={csvDisaggregates.fileName} />
      </GridToolbarExportContainer>
    </GridToolbarContainer>
  );
}

interface IDisaggregateFormInputs {
  name?: string;
  type: DisaggregateType;
  id: string;
}

const schema = Yup.object({
  name: Yup.string().required().min(1).max(255),
  id: Yup.string().uuid().required(),
});

const initialRowModesModel: GridRowModesModel = {};

function DisaggregateList() {
  const navigate = useNavigate();

  const [pageSize, setPageSize] = React.useState<number>(5);

  const renderId = uuidv4();

  const [openAlert, setOpenAlert] = useState(false);

  const [disaggregate, setDisaggregate] = useState<Disaggregate>();

  const [openCreateDisaggregateModal, setOpenCreateDisaggregateModal] =
    useState(false);

  const [openDisaggregateDetailModal, setOpenDisaggregateDetailModal] =
    useState(false);

  const [selectedRow, setSelectedRow] =
    useState<IDisaggregateFormInputs | null>(null);

  const { data: disaggregatesData, loading } = useGetDisaggregatesQuery({
    fetchPolicy: 'network-only',
  });

  const rows = disaggregatesData?.disaggregates ?? [];

  const [updateDisaggregate, { loading: updating }] =
    useUpdateDisaggregateMutation({
      refetchQueries: [GetDisaggregatesDocument],
    });

  const [
    deleteDisaggregate,
    { data: deleteDisaggregateResponse, loading: deleting },
  ] = useDeleteDisaggregateMutation({
    refetchQueries: [GetDisaggregatesDocument],
  });

  const deleteErrors =
    deleteDisaggregateResponse?.deleteDisaggregate.__typename ===
    'ApiDeleteError'
      ? deleteDisaggregateResponse.deleteDisaggregate
      : null;

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<IDisaggregateFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({ name, type, id }: IDisaggregateFormInputs) => {
    updateDisaggregate({
      variables: {
        input: {
          id,
          update: {
            name,
            type,
          },
        },
      },
      onCompleted: (result) => {
        if (result.updateDisaggregate.__typename === 'Disaggregate') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateDisaggregate.__typename === 'ApiUpdateError') {
          if (result.updateDisaggregate.field) {
            setError(
              result.updateDisaggregate.field as keyof IDisaggregateFormInputs,
              {
                type: 'server',
                message: result.updateDisaggregate.message,
              }
            );
          } else if (
            !result.updateDisaggregate.errors &&
            !result.updateDisaggregate.field
          ) {
            setError('unknown' as keyof IDisaggregateFormInputs, {
              type: 'server',
              message: result.updateDisaggregate.message,
            });
          } else {
            result.updateDisaggregate.errors?.forEach((err) =>
              setError(err.field as keyof IDisaggregateFormInputs, {
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
      item
        ? {
            id: item.id,
            name: item.name,
            type: item.type,
          }
        : null
    );
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setValue('id', id as string);
    handleSubmit(onSubmit)();
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    deleteDisaggregate({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteDisaggregate.__typename === 'ApiDeleteError') {
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

  const handleShowDisaggregateDetailModal = (params: Disaggregate) => {
    setDisaggregate(params);
    setOpenDisaggregateDetailModal(true);
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
      headerName: 'Disaggregate Name',
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
      field: 'type',
      headerName: 'Disaggregate Type',
      type: 'string',
      width: 180,
      editable: false,
      hideable: false,
      flex: 1,
      resizable: true,
      renderEditCell: () => {
        return (
          <FormSelect
            control={control}
            name="type"
            errors={errors}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
          >
            {INDICATOR_DISAGGREGATE_TYPE_OPTIONS &&
              INDICATOR_DISAGGREGATE_TYPE_OPTIONS.map((c) => (
                <MenuItem value={c}>{c}</MenuItem>
              ))}
          </FormSelect>
        );
      },
    },
    {
      field: 'parameters',
      headerName: 'Disaggregate Parameters',
      type: 'number',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      align: 'left',
      headerAlign: 'left',
      valueGetter: (params) => {
        return (params.row as Disaggregate).disaggregate_options?.length;
      },
      renderCell: (params) => {
        const parameters = (params.row as Disaggregate).disaggregate_options;
        return (
          <Button
            variant="text"
            size="small"
            endIcon={<ViewList />}
            disabled={parameters?.length === 0}
            onClick={() =>
              handleShowDisaggregateDetailModal(params.row as Disaggregate)
            }
          >
            {parameters?.length}
          </Button>
        );
      },
    },

    {
      field: 'id',
      headerName: 'Disaggregate ID',
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
      {errors['unknown' as keyof IDisaggregateFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof IDisaggregateFormInputs]?.message}.
            Please contact support or try again!
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
              onClick: () => setOpenCreateDisaggregateModal(true),
              title: 'Add Disaggregate',
            },
            toolbar: {
              title: 'Disaggregates',
            },
          }}
          loading={loading || deleting}
          experimentalFeatures={{ newEditingApi: true }}
          initialState={{
            sorting: {
              sortModel: [{ field: 'name', sort: 'asc' }],
            },
            // rowGrouping:
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
      <DisaggregateForm
        key={renderId}
        open={openCreateDisaggregateModal}
        onClose={() => setOpenCreateDisaggregateModal(false)}
      />
      <DisaggregateDetail
        open={openDisaggregateDetailModal}
        onClose={() => setOpenDisaggregateDetailModal(false)}
        disaggregate={disaggregate}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default DisaggregateList;
