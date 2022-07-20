import React from 'react';
import DataTable, { HeadCellType, TableDataType } from 'components/data-table';
import UserItem from 'components/users/user-item';
import { Alert, Fab, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Pending } from '@mui/icons-material';
import { useGetDefaultOrganisationUsersQuery } from '../../../graphql/generated';

function UserInvitationButton() {
  return (
    <>
      <Alert
        variant="standard"
        severity="info"
        action={
          <IconButton aria-label="view invitations" color="inherit">
            <Pending />
          </IconButton>
        }
      >
        5 invitations pending user action
      </Alert>
      <Fab
        size="small"
        color="primary"
        aria-label="invite user"
        title="Add User"
        sx={{ mr: '20px', ml: '20px' }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

function UserList() {
  const { loading, data, error } = useGetDefaultOrganisationUsersQuery({
    fetchPolicy: 'cache-first',
  });
  const organisationUsers = React.useMemo(
    () =>
      data?.me.__typename === 'User'
        ? data.me.user_default_organisation?.users?.map((user) => ({
            id: user.id,
            organisation_user_id: user.organisation_user_id,
            name: `${user.last_name} ${user.first_name} `,
            role: user.role,
            disabled: user.disabled,
            user_districts: user.user_districts,
          }))
        : null,
    [data]
  );

  const rows: TableDataType[] = organisationUsers!;
  const headCells: HeadCellType[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'role',
      numeric: false,
      disablePadding: true,
      label: 'Organisation Role',
    },
    {
      id: 'user_districts',
      numeric: false,
      disablePadding: true,
      label: 'User Districts',
    },
    {
      id: 'disabled',
      numeric: false,
      disablePadding: true,
      label: 'Disabled',
    },
  ];

  if (loading) return <p>loading organisation users...</p>;
  if (error) return <p>failed to load organisation users</p>;

  return (
    <DataTable
      rows={rows}
      headCells={headCells}
      ItemComponent={UserItem}
      toolBarTitle="User List"
      TableActionButton={UserInvitationButton}
    />
  );
}

export default UserList;
