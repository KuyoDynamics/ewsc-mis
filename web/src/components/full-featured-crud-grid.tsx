/* eslint-disable no-param-reassign */
import React, { ReactElement } from 'react';
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

export interface EditToolbarProps {
  setRows: (newRows: any) => void;
  setRowModesModel: (newModel: any) => void;
}

export interface IFullFeaturedCrudGrid {
  columns: GridColumns;
  rows: GridRowsProp;
  rowModesModel: GridRowModesModel;
  setRowModesModel: (newModel: any) => void;
  setRows: (newRows: any) => void;
  EditToolBar: (props: EditToolbarProps) => ReactElement<any, any> | null;
}

export default function FullFeaturedCrudGrid({
  columns,
  rows,
  rowModesModel,
  setRowModesModel,
  setRows,
  EditToolBar,
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
          Toolbar: EditToolBar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
