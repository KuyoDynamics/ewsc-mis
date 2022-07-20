import React from 'react';
import DataTable, { HeadCellType, TableDataType } from 'components/data-table';
import UserDistrictItem from 'components/users/user-district-item';
import { Dialog, DialogContent, DialogTitle, PaperProps } from '@mui/material';
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

function DraggableUserDistrictsList(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#user-district-dialog-title" />;
}

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
      PaperComponent={DraggableUserDistrictsList}
      aria-label="user district list dialog"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px', // Set your width here
          },
        },
      }}
    >
      <DialogTitle style={{ cursor: 'move' }} id="user-district-dialog-title" />
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
