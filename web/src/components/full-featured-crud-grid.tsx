/* eslint-disable no-param-reassign */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColumns,
  GridRowParams,
  MuiEvent,
  GridToolbarContainer,
  GridEventListener,
  GridRowModel,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows: any) => [
      ...oldRows,
      { id, name: '', role: '', isNew: true },
    ]);
    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add District
      </Button>
    </GridToolbarContainer>
  );
}

export interface IFullFeaturedCrudGrid {
  columns: GridColumns;
  rows: GridRowsProp;
  rowModesModel: GridRowModesModel;
  setRowModesModel: (newModel: any) => void;
  setRows: (newRows: any) => void;
}

export default function FullFeaturedCrudGrid({
  columns,
  rows,
  rowModesModel,
  setRowModesModel,
  setRows,
}: IFullFeaturedCrudGrid) {
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

  return (
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
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
