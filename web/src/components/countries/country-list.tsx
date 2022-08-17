/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridEventListener,
  GridFooter,
  GridFooterContainer,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridRowsProp,
  GridToolbarContainer,
  MuiEvent,
} from '@mui/x-data-grid';
import {
  Box,
  Card,
  Fab,
  IconButton,
  Paper,
  TableFooterProps,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MainCard from 'components/cards/main-card';
import CountryForm from './country-form';
import { useGetCountriesQuery } from '../../../graphql/generated';

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

function CustomToolbar({ title }: CustomToolbarProps) {
  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h3">{title}</Typography>
      <IconButton
        aria-label="options"
        // sx={{ display: 'flex', justify: 'flex-end' }}
      >
        <MoreVertIcon />
      </IconButton>
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

const initialRowModesModel: GridRowModesModel = {};

let initialRows: GridRowsProp = [];

function CountryList() {
  const [openCreateCountryModal, setOpenCreateCountryModal] = useState(false);
  const { data, loading, error } = useGetCountriesQuery({
    fetchPolicy: 'network-only',
  });

  const rows = data?.countries ?? [];
  console.log('initial rows', rows);

  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);

  // const [rows, setRows] = useState<GridRowsProp>(initialRows);
  console.log('rows', rows);

  const [rowErrors, setRowErrors] = useState({ isPristine: true });

  const handleEditClick = (id: GridRowId) => () => {
    // Replace this with api calls
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    // Replace this with api call
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    // Replace this with api call
    // setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    // if (editedRow?.isNew) {
    //   // setRows(rows.filter((row) => row.id !== id));
    // }
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
    // const updatedRow = { ...newRow, isNew: false };
    const updatedRow = { ...newRow };
    // Replace this with api call
    // setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
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
    },
    {
      field: 'code',
      headerName: 'Country Code',
      type: 'string',
      width: 180,
      editable: true,
      flex: 1,
    },
    {
      field: 'id',
      headerName: 'ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
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
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              disabled={Object.values(rowErrors).some((err) => err === true)}
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

  return (
    <MainCard>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          components={{
            Footer: CustomFooter,
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            footer: { onClick: () => setOpenCreateCountryModal(true) },
            toolbar: { title: 'Countries' },
          }}
          loading={loading}
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
            // '& .MuiDataGrid-cell:hover': {
            //   color: 'primary.main',
            // },
            color: 'inherit',
            // width: '100%',
          }}
        />
      </Box>
      <CountryForm
        open={openCreateCountryModal}
        onClose={() => setOpenCreateCountryModal(false)}
      />
    </MainCard>
  );
}

export default CountryList;
