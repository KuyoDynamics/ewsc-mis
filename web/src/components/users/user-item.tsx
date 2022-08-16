import React, { useState } from 'react';
import { Button, Switch, TableCell, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  ArrowDropDownOutlined,
  EditLocationOutlined,
  MoreHoriz,
} from '@mui/icons-material';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import UserDistrictList from './user-district-list';
import {
  GetDefaultOrganisationUsersDocument,
  OrganisationUserRoleType,
  useDisableUserMutation,
  UserDistrict,
} from '../../../graphql/generated';

export type UserItemType = {
  id: string;
  organisation_user_id: string;
  name: string;
  role: OrganisationUserRoleType;
  disabled: boolean;
  user_districts: UserDistrict[];
  email: string;
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export interface UserItemProps {
  row: UserItemType;
  // eslint-disable-next-line react/require-default-props
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

function UserItem({ align, row: user }: UserItemProps) {
  const [open, setOpen] = useState(false);

  const currentUser = useReactiveVar(currentUserVar);

  const [
    disableUser,
    {
      loading: disablingUser,
      data: disabledUserResponse,
      error: disableUserError,
    },
  ] = useDisableUserMutation();

  const handleChange = (event: any, checked: boolean) => {
    disableUser({
      variables: {
        input: {
          id: user.id,
          update: {
            disabled: checked,
          },
        },
      },
      refetchQueries: [GetDefaultOrganisationUsersDocument],
    });
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const isCurrentUser = currentUser?.id === user.id;
  return (
    <>
      <TableCell align={align}>
        <Link to={`/admin/users/${user.id}`}>{user.name}</Link>
      </TableCell>

      <TableCell align={align}>
        <Link to={`/admin/users/${user.id}`}>{user.email}</Link>
      </TableCell>

      <TableCell align={align}>
        <Button variant="text" size="small" endIcon={<ArrowDropDownOutlined />}>
          {user.role}
        </Button>
      </TableCell>
      <TableCell align={align}>
        <Button
          variant="text"
          size="small"
          endIcon={
            user.user_districts.length > 1 ? (
              <MoreHoriz />
            ) : (
              <EditLocationOutlined />
            )
          }
          onClick={handleModalOpen}
        >
          {user.user_districts.length === 1
            ? user.user_districts[0].name
            : `${user.user_districts.length} districts`}
        </Button>
        <UserDistrictList
          userDistricts={user.user_districts}
          userName={user.name}
          onClose={handleModalClose}
          open={open}
        />
      </TableCell>

      <TableCell align={align}>
        <Tooltip
          title={isCurrentUser ? 'You cannot disable your own account.' : ''}
        >
          <AntSwitch
            name="disabled"
            checked={user.disabled}
            disabled={isCurrentUser}
            disableRipple={isCurrentUser}
            disableFocusRipple={isCurrentUser}
            disableTouchRipple={isCurrentUser}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'user disabled' }}
          />
        </Tooltip>
      </TableCell>
    </>
  );
}

export default UserItem;
