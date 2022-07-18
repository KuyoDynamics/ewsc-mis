import React from 'react';
import DataTable, { HeadCellType, TableDataType } from 'components/data-table';
import { useGetDefaultOrganisationUsersQuery } from '../../../graphql/generated';
import UserItem from './user-item';

// const UserItemFC = (props: UserItemProps)=>{return(<UserItem ...props />)}

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
      id: 'districts',
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

  console.log('organisation_users', organisationUsers);
  if (loading) return <p>loading organisation users...</p>;
  if (error) return <p>failed to load organisation users</p>;

  return (
    <DataTable
      rows={rows}
      headCells={headCells}
      ItemComponent={UserItem}
      toolBarTitle="User List"
    />
  );
}

export default UserList;
