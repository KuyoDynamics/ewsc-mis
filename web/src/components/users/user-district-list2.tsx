import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridActionsCellItem,
  GridColumns,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import FullFeaturedCrudGrid from 'components/full-featured-crud-grid';
import { randomId, randomTraderName } from '@mui/x-data-grid-generator';
import { Card } from '@mui/material';

const initialRowModesModel: GridRowModesModel = {};

const initialRows: GridRowsProp = [
  // {
  //   id: randomId(),
  //   name: randomTraderName(),
  //   role: 'ADMIN',
  // },
  // {
  //   id: randomId(),
  //   name: randomTraderName(),
  //   role: 'ADMIN',
  // },
];

function UserDistrictList2() {
  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);
  const [rows, setRows] = React.useState<GridRowsProp>(initialRows);

  const handleEditClick = (id: GridRowId) => () => {
    console.log('handleEditClick called');
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    console.log('handleSaveClick called');
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    console.log('handleDeleteClick called');
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    console.log('handleCancelClick called');
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'District',
      width: 180,
      editable: true,
    },
    { field: 'role', headerName: 'District Role', width: 180, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        console.log('Chaiwa, is this reached when error occurs?', isInEditMode);

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

  return (
    <Card>
      <FullFeaturedCrudGrid
        rows={rows}
        columns={columns}
        rowModesModel={rowModesModel}
        setRowModesModel={setRowModesModel}
        setRows={setRows}
      />
    </Card>
  );
}

export default UserDistrictList2;
