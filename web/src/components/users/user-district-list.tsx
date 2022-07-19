import React from 'react';
import DataTable, { HeadCellType, TableDataType } from 'components/data-table';
import UserDistrictItem from 'components/users/user-district-item';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import DraggablePaper from 'components/draggable-paper';
import { UserDistrict } from '../../../graphql/generated';

interface UserDistrictListProps {
  userDistricts: UserDistrict[];
  userName: string;
  open: boolean;
  onClose: () => void;
}

const headCells: HeadCellType[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'District',
  },
  {
    id: 'roles',
    numeric: false,
    disablePadding: true,
    label: 'District User Roles',
  },
  {
    id: 'province',
    numeric: false,
    disablePadding: true,
    label: 'Province',
  },
];

function UserDistrictList({
  userDistricts,
  userName,
  onClose,
  open,
}: UserDistrictListProps) {
  const rows: TableDataType[] = userDistricts;

  const handleModalClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleModalClose}
      open={open}
      PaperComponent={DraggablePaper}
      aria-labelledby="draggable-dialog-title"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px', // Set your width here
          },
        },
      }}
      // fullWidth
      // maxWidth="lg"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" />
      <DialogContent>
        <DataTable
          rows={rows}
          headCells={headCells}
          ItemComponent={UserDistrictItem}
          toolBarTitle={`Districts Assigned to ${userName}`}
          align="left"
        />
      </DialogContent>
    </Dialog>
  );
}

export default UserDistrictList;
