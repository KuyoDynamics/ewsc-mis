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
  GridToolbarContainer,
} from '@mui/x-data-grid';
import FullFeaturedCrudGrid, {
  EditToolbarProps,
} from 'components/full-featured-crud-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { Button, Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { USER_DISTRICT_ROLE_OPTIONS } from 'utils';
import {
  CreateUserInvitationCatchmentDistrictInput,
  DistrictUserRoleType,
} from '../../../graphql/generated';

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
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add District
      </Button>
    </GridToolbarContainer>
  );
}

const initialRowModesModel: GridRowModesModel = {};

const initialRows: GridRowsProp = [];

function UserDistrictList2() {
  const [rowModesModel, setRowModesModel] =
    React.useState<GridRowModesModel>(initialRowModesModel);
  const [rows, setRows] = React.useState<GridRowsProp>(initialRows);

  const catchmentDistricts: CreateUserInvitationCatchmentDistrictInput[] =
    rows.map((row) => ({
      catchment_district_id: row.catchment_district_id,
      roles: [row.roles],
    }));

  console.log('catchmentDistricts', catchmentDistricts);

  console.log('rows', rows);

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

  const columns: GridColumns = [
    {
      field: 'catchment_district_id',
      headerName: 'District',
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

  return (
    <Card>
      <FullFeaturedCrudGrid
        rows={rows}
        columns={columns}
        rowModesModel={rowModesModel}
        setRowModesModel={setRowModesModel}
        setRows={setRows}
        EditToolBar={EditToolBar}
      />
    </Card>
  );
}

export default UserDistrictList2;
