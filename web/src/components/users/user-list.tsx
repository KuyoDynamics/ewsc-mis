import React, { useState } from 'react';
import DataTable, { HeadCellType, TableDataType } from 'components/data-table';
import UserItem from 'components/users/user-item';
import UserInvitationForm from 'components/users/user-invitation-form';
import UserInvitationButton from 'components/users/user-invitation-button';
import { useGetDefaultOrganisationUsersQuery } from '../../../graphql/generated';

function UserList() {
  const [showInvitationModal, setShowInvitationModal] = useState(false);

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

  const handleShowInvitationModal = () => setShowInvitationModal(true);
  const handleHideInvitationModal = () => setShowInvitationModal(false);

  // const dummy: readonly string[] = [];

  if (loading) return <p>loading organisation users...</p>;
  if (error) return <p>failed to load organisation users</p>;

  return (
    <>
      <DataTable
        rows={rows}
        headCells={headCells}
        ItemComponent={UserItem}
        toolBarTitle="User List"
        TableActionButton={UserInvitationButton}
        handleDelete={(dummy: any) =>
          console.log('nothing is being deleted', dummy)
        }
        handleResend={(selectedItems: readonly string[]) =>
          console.log('Nothing yet')
        }
        tableActionButtonProps={{
          onClick: handleShowInvitationModal,
        }}
      />
      <UserInvitationForm
        open={showInvitationModal}
        onClose={handleHideInvitationModal}
      />
    </>
  );
}

export default UserList;
