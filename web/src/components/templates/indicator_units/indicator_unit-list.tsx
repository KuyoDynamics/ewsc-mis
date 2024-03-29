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
  MuiEvent,
} from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import { Alert, Box, Collapse, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomFooterWithFab from 'components/data-grid-helpers/customer-footer-with-fab';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import ExcelExportMenuItem from 'components/data-grid-helpers/excel-export-menu-item';
import JsonExportMenuItem from 'components/data-grid-helpers/json-export-menu-item';
import IndicatorUnitForm from './indicator_unit-form';
import {
  GetIndicatorUnitsDocument,
  Indicator,
  IndicatorUnit,
  useDeleteIndicatorUnitMutation,
  useGetIndicatorUnitsQuery,
  useUpdateIndicatorUnitMutation,
} from '../../../../graphql/generated';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

const csvOptions: GridCsvExportOptions = {
  delimiter: ';',
  fileName: 'indicator units',
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
        <Typography variant="h3">{title}</Typography>
        <Box>
          <GridToolbarQuickFilter />
        </Box>
      </Box>
      <GridToolbarExportContainer>
        <ExcelExportMenuItem
          fileName={csvOptions.fileName}
          worksheetName={csvOptions.fileName}
          ext="xlsx"
        />
        <GridCsvExportMenuItem options={csvOptions} />
        <JsonExportMenuItem fileName={csvOptions.fileName} />
      </GridToolbarExportContainer>
    </GridToolbarContainer>
  );
}

interface IIndicatorUnitFormInputs {
  name?: string;
  unit?: string;
  id: string;
}

const schema = Yup.object({
  unit: Yup.string()
    .required()
    .transform((value, oValue) => {
      return value.toLowerCase();
    }),
  name: Yup.string().required(),
  id: Yup.string().uuid().required(),
});

const initialRowModesModel: GridRowModesModel = {};

function IndicatorUnitList() {
  const navigate = useNavigate();

  const [pageSize, setPageSize] = React.useState<number>(5);

  const renderId = uuidv4();

  const [openAlert, setOpenAlert] = useState(false);

  const [openCreateIndicatorUnitModal, setOpenCreateIndicatorUnitModal] =
    useState(false);

  const [selectedRow, setSelectedRow] =
    useState<IIndicatorUnitFormInputs | null>(null);

  const { data: indicatorUnitsData, loading } = useGetIndicatorUnitsQuery({
    fetchPolicy: 'network-only',
  });

  const rows = indicatorUnitsData?.indicator_units ?? [];

  const [updateIndicatorUnit, { loading: updating }] =
    useUpdateIndicatorUnitMutation({
      refetchQueries: [GetIndicatorUnitsDocument],
    });

  const [
    deleteIndicatorUnit,
    { data: deleteIndicatorUnitResponse, loading: deleting },
  ] = useDeleteIndicatorUnitMutation({
    refetchQueries: [GetIndicatorUnitsDocument],
  });

  const deleteErrors =
    deleteIndicatorUnitResponse?.deleteIndicatorUnit.__typename ===
    'ApiDeleteError'
      ? deleteIndicatorUnitResponse.deleteIndicatorUnit
      : null;

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<IIndicatorUnitFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({ name, id, unit }: IIndicatorUnitFormInputs) => {
    updateIndicatorUnit({
      variables: {
        input: {
          id,
          update: {
            display_name: name,
            unit,
          },
        },
      },
      onCompleted: (result) => {
        if (result.updateIndicatorUnit.__typename === 'IndicatorUnit') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateIndicatorUnit.__typename === 'ApiUpdateError') {
          if (result.updateIndicatorUnit.field) {
            setError(
              result.updateIndicatorUnit
                .field as keyof IIndicatorUnitFormInputs,
              {
                type: 'server',
                message: result.updateIndicatorUnit.message,
              }
            );
          } else if (
            !result.updateIndicatorUnit.errors &&
            !result.updateIndicatorUnit.field
          ) {
            setError('unknown' as keyof IIndicatorUnitFormInputs, {
              type: 'server',
              message: result.updateIndicatorUnit.message,
            });
          } else {
            result.updateIndicatorUnit.errors?.forEach((err) =>
              setError(err.field as keyof IIndicatorUnitFormInputs, {
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
            unit: item.unit,
            name: item.display_name,
          }
        : null
    );
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setValue('id', id as string);
    handleSubmit(onSubmit)();
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    deleteIndicatorUnit({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteIndicatorUnit.__typename === 'ApiDeleteError') {
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
      field: 'display_name',
      headerName: 'Display Name',
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
      headerName: 'IndicatorUnit ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
    {
      field: 'unit',
      headerName: 'Unit',
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
            name="unit"
            fullWidth
            label="Unit"
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
      field: 'indicators',
      headerName: 'Used By',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params) => {
        return (params.value as Indicator[])?.length;
      },
      valueFormatter: (params) => {
        return `${params.value} indicators`;
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
      {errors['unknown' as keyof IIndicatorUnitFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof IIndicatorUnitFormInputs]?.message}.
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
              onClick: () => setOpenCreateIndicatorUnitModal(true),
              title: 'Add IndicatorUnit',
            },
            toolbar: {
              title: 'Indicator Unit',
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
      <IndicatorUnitForm
        key={renderId}
        open={openCreateIndicatorUnitModal}
        onClose={() => setOpenCreateIndicatorUnitModal(false)}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default IndicatorUnitList;
