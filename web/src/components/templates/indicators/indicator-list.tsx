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
import { Alert, Box, Collapse, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import CustomFooterWithFab from 'components/data-grid-helpers/customer-footer-with-fab';
import FormInput from 'components/form-input-helpers/form-input';
import MainCard from 'components/cards/main-card';
import ExcelExportMenuItem from 'components/data-grid-helpers/excel-export-menu-item';
import JsonExportMenuItem from 'components/data-grid-helpers/json-export-menu-item';
import { INDICATOR_TYPE_OPTIONS } from 'utils';
import FormSelect from 'components/form-input-helpers/form-select';
import useGetIndicatorUnits from 'utils/hooks/use-get-indicator-units';
import useGetReportTemplates from 'utils/hooks/use-get-report-templates';
import IndicatorForm from './indicator-form';
import {
  GetIndicatorsDocument,
  Indicator,
  IndicatorType,
  IndicatorUnit,
  OrganisationIndicator,
  ReportTemplate,
  useDeleteIndicatorMutation,
  useGetIndicatorsQuery,
  useUpdateIndicatorMutation,
} from '../../../../graphql/generated';
import useGetDefaultOrganisation from 'utils/hooks/use-get-default-organisation';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

const csvOptions: GridCsvExportOptions = {
  delimiter: ';',
  fileName: 'indicators',
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

interface IIndicatorFormInputs {
  name: string;
  indicator_number: string;
  id: string;
  category: string;
  type: IndicatorType;
  indicator_unit_id: string;
  report_template_id: string;
  contributing_organisation: string;
}

const schema = Yup.object({
  indicator_number: Yup.string().required(),
  id: Yup.string().required(),
  name: Yup.string().required(), // this is mapped to description
  type: Yup.mixed<IndicatorType>()
    .oneOf(INDICATOR_TYPE_OPTIONS as IndicatorType[])
    .required(),
  indicator_unit_id: Yup.string().uuid().required(),
  contributing_organisation: Yup.string().required(),
  // report_template_id: Yup.string().uuid().required(),
});

const initialRowModesModel: GridRowModesModel = {};

function IndicatorList() {
  const navigate = useNavigate();

  const [pageSize, setPageSize] = React.useState<number>(5);

  const renderId = uuidv4();

  const [openAlert, setOpenAlert] = useState(false);

  const [openCreateIndicatorModal, setOpenCreateIndicatorModal] =
    useState(false);

  const [selectedRow, setSelectedRow] = useState<IIndicatorFormInputs | null>(
    null
  );

  const { data, loading, error } = useGetIndicatorsQuery({
    fetchPolicy: 'network-only',
  });

  const indicatorUnits = useGetIndicatorUnits();

  const reportTemplates = useGetReportTemplates();

  const defaultOrganisation = useGetDefaultOrganisation();

  console.log('indicatorData', data);

  console.log('indicatorData error', error);

  const rows = data?.indicators ?? [];

  console.log('rows', rows);

  const [updateIndicator, { loading: updating }] = useUpdateIndicatorMutation({
    refetchQueries: [GetIndicatorsDocument],
  });

  const [
    deleteIndicator,
    { data: deleteIndicatorResponse, loading: deleting },
  ] = useDeleteIndicatorMutation({
    refetchQueries: [GetIndicatorsDocument],
  });

  const deleteErrors =
    deleteIndicatorResponse?.deleteIndicator.__typename === 'ApiDeleteError'
      ? deleteIndicatorResponse.deleteIndicator
      : null;

  const {
    formState: { isDirty, isValid, errors },
    setValue,
    register,
    control,
    setError,
    handleSubmit,
    reset: resetForm,
  } = useForm<IIndicatorFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const indicatorType = useWatch({
    control,
    name: 'type',
  });

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  const onSubmit = async ({
    name,
    id,
    category,
    indicator_number,
    indicator_unit_id,
    report_template_id,
    type,
    contributing_organisation,
  }: IIndicatorFormInputs) => {
    updateIndicator({
      variables: {
        input: {
          id,
          update: {
            description: name,
            category,
            indicator_number,
            indicator_unit_id,
            report_template_id,
            type,
            contributing_organisation,
          },
        },
      },
      onCompleted: (result) => {
        if (result.updateIndicator.__typename === 'Indicator') {
          setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
          });
        } else if (result.updateIndicator.__typename === 'ApiUpdateError') {
          if (result.updateIndicator.field) {
            setError(
              result.updateIndicator.field as keyof IIndicatorFormInputs,
              {
                type: 'server',
                message: result.updateIndicator.message,
              }
            );
          } else if (
            !result.updateIndicator.errors &&
            !result.updateIndicator.field
          ) {
            setError('unknown' as keyof IIndicatorFormInputs, {
              type: 'server',
              message: result.updateIndicator.message,
            });
          } else {
            result.updateIndicator.errors?.forEach((err) =>
              setError(err.field as keyof IIndicatorFormInputs, {
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
            category: item.category,
            name: item.description,
            indicator_number: item.indicator_number,
            indicator_unit_id: item.indicator_unit_id,
            report_template_id: item.report_template_id,
            type: item.type,
            contributing_organisation: item.contributing_organisation,
          }
        : null
    );
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setValue('id', id as string);
    handleSubmit(onSubmit)();
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    deleteIndicator({
      variables: {
        input: {
          id: id as string,
        },
      },
      onCompleted: (result) => {
        if (result.deleteIndicator.__typename === 'ApiDeleteError') {
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

  // name,
  // id,
  // category,
  // indicator_number,
  // indicator_unit_id,
  // report_template_id,
  // type,

  const columns: GridColumns = [
    {
      field: 'description',
      headerName: 'Description',
      type: 'string',
      width: 180,
      editable: true,
      hideable: false,
      flex: 1,
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
      field: 'category',
      headerName: 'Category Description',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
      renderEditCell: () => {
        return (
          <FormInput
            control={control}
            name="category"
            fullWidth
            label="Category"
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
      headerName: 'Indicator ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
    },
    {
      field: 'indicator_number',
      headerName: 'Indicator Number',
      type: 'string',
      width: 180,
      editable: true,
      hideable: false,
      flex: 1,
      renderEditCell: () => {
        return (
          <FormInput
            control={control}
            name="indicator_number"
            fullWidth
            label="Indicator Number"
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
      field: 'indicator_unit',
      headerName: 'Unit of measurement',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
      valueGetter: (params) => {
        return (params.value as IndicatorUnit)?.display_name;
      },
      renderEditCell: () => {
        return (
          <FormSelect
            control={control}
            name="indicator_unit_id"
            errors={errors}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
          >
            {indicatorUnits &&
              indicatorUnits.map((i) => (
                <MenuItem key={i.id} value={i.id}>
                  {i.display_name}
                </MenuItem>
              ))}
          </FormSelect>
        );
      },
    },
    {
      field: 'type',
      headerName: 'Indicator Type',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
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
            {INDICATOR_TYPE_OPTIONS &&
              INDICATOR_TYPE_OPTIONS.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
          </FormSelect>
        );
      },
    },
    {
      field: 'report_template',
      headerName: 'Report Template',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
      valueGetter: (params) => {
        return (params.value as ReportTemplate)?.name ?? '---';
      },
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
            {reportTemplates &&
              reportTemplates.map((t) => (
                <MenuItem key={t.id} value={t.id}>
                  {t.name}
                </MenuItem>
              ))}
          </FormSelect>
        );
      },
    },
    {
      field: 'contributing_organisation',
      headerName: 'Contributing Organisation',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
    },
    {
      field: 'indicator_organisations',
      headerName: 'Used By',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      valueGetter: (params) => {
        return (params.value as OrganisationIndicator[])?.length;
      },
      valueFormatter(params) {
        return `${params.value} organisations`;
      },
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      type: 'dateTime',
      width: 180,
      editable: false,
      flex: 1,
    },
    {
      field: 'created_by',
      headerName: 'Created By',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
    },
    {
      field: 'last_modified_at',
      headerName: 'Last Modified At',
      type: 'dateTime',
      width: 180,
      editable: false,
      flex: 1,
    },
    {
      field: 'last_modified_by',
      headerName: 'Last Modified By',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
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
    if (indicatorType === IndicatorType.Custom) {
      setValue('contributing_organisation', defaultOrganisation.name);
    } else {
      setValue('contributing_organisation', 'nis');
    }
  }, [indicatorType, setValue, defaultOrganisation.name]);

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
      {errors['unknown' as keyof IIndicatorFormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof IIndicatorFormInputs]?.message}. Please
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
              onClick: () => setOpenCreateIndicatorModal(true),
              title: 'Add Indicator',
            },
            toolbar: {
              title: 'Indicators',
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
                category: false,
                contributing_organisation: false,
                indicator_organisations: false,
              },
            },
          }}
          sx={{
            color: 'inherit',
          }}
        />
      </Box>
      <IndicatorForm
        key={renderId}
        open={openCreateIndicatorModal}
        onClose={() => setOpenCreateIndicatorModal(false)}
      />
      <input id="id" type="hidden" required {...register('id')} />
    </MainCard>
  );
}

export default IndicatorList;
