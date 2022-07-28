/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridEventListener,
  GridRenderEditCellParams,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridRowsProp,
  GridToolbarContainer,
  MuiEvent,
  useGridApiContext,
} from '@mui/x-data-grid';

import { randomId } from '@mui/x-data-grid-generator';
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useReactiveVar } from '@apollo/client';
import { USER_DISTRICT_ROLE_OPTIONS } from 'utils';
import { currentUserVar } from 'cache';
import { CreateUserInvitationCatchmentDistrictInput } from '../../../graphql/generated';

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

function EditToolBar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows: any) => [
      ...oldRows,
      { id, catchment_district_id: '', roles: ['USER'], isNew: true },
    ]);
    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'catchment_district_id' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Tooltip title="Optional! Only if you want invited users to be able to see data entry masks. Otherwise, every user has access to the dashboard.">
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add District
        </Button>
      </Tooltip>
    </GridToolbarContainer>
  );
}
const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function CustomEditComponent({
  id,
  field,
  value,
}: GridRenderEditCellParams<any, any, any>) {
  const apiRef = useGridApiContext();
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const eventValue = event.target.value;
    const newValue =
      typeof eventValue === 'string' ? value.split(',') : eventValue;
    apiRef.current.setEditCellValue({
      id,
      field,
      value: newValue.filter((x: string) => x !== ''),
    });
  };

  return (
    <FormControl size="small" variant="filled">
      <Select
        id="user-roles"
        multiple
        autoComplete="false"
        value={value}
        input={<OutlinedInput />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        onChange={handleChange}
      >
        {USER_DISTRICT_ROLE_OPTIONS.map((option) => (
          <MenuItem key={option} value={option} disabled={option === 'USER'}>
            <Checkbox checked={value.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const initialRowModesModel: GridRowModesModel = {};

const initialRows: GridRowsProp = [];

interface IUserDistrictDataGridProps {
  setCatchmentDistricts?: (
    catchmentDistricts: CreateUserInvitationCatchmentDistrictInput[]
  ) => void;
}

function UserDistrictDataGrid({
  setCatchmentDistricts,
}: IUserDistrictDataGridProps) {
  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);
  const [rows, setRows] = React.useState<GridRowsProp>(initialRows);

  const currentUser = useReactiveVar(currentUserVar);

  const inviteCatchmentDistricts: CreateUserInvitationCatchmentDistrictInput[] =
    React.useMemo(
      () =>
        rows.map((row) => ({
          catchment_district_id: row.catchment_district_id,
          roles: row.roles,
        })),
      [rows]
    );
  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns: GridColumns = [
    {
      field: 'catchment_district_id',
      headerName: 'District',
      type: 'singleSelect',
      valueOptions: currentUser.user_default_organisation?.user_districts
        ? currentUser.user_default_organisation.user_districts.map((item) => ({
            label: item.name,
            value: item.catchment_district_id,
          }))
        : [],
      valueFormatter: ({ value, field, api }) => {
        const colDef = api.getColumn(field);

        const option = colDef.valueOptions
          ? (colDef.valueOptions as Record<string, string>[]).find(
              (params: any) => value === params.value
            )
          : {};

        return option?.label;
      },
      width: 180,
      editable: true,
    },
    {
      field: 'roles',
      headerName: 'District Role(s)',
      width: 180,
      type: 'singleSelect',
      editable: true,
      valueOptions: USER_DISTRICT_ROLE_OPTIONS,
      valueFormatter: ({ value }) => {
        return value ? value.join(', ') : '';
      },
      renderEditCell: CustomEditComponent,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
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
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
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
    if (setCatchmentDistricts) {
      setCatchmentDistricts(inviteCatchmentDistricts);
    }
  }, [inviteCatchmentDistricts, setCatchmentDistricts]);

  return (
    <Card
      elevation={5}
      sx={{
        mt: '5px',
      }}
    >
      <Box
        sx={{
          height: 300,
          width: '100%',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGrid
          rows={rows}
          autoPageSize
          rowsPerPageOptions={[5, 10]}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          components={{
            Toolbar: EditToolBar,
          }}
          componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Card>
  );
}

export default UserDistrictDataGrid;
