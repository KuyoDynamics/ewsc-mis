import React, { useState, useEffect } from 'react';
import {
  Button,
  CircularProgress,
  FormControl,
  MenuItem,
  Switch,
  TableCell,
  Tooltip,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  ArrowDropDownCircleOutlined,
  ArrowDropDownOutlined,
  EditLocation,
  EditLocationAlt,
  EditLocationOutlined,
  More,
  MoreHoriz,
  MoreOutlined,
  MoreTime,
  ViewList,
} from '@mui/icons-material';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import { getEnumKeys } from 'utils';
import UserDistrictList from './user-district-list';
import {
  GetDefaultOrganisationUsersDocument,
  OrganisationUserRoleType,
  useDisableUserMutation,
  User,
  UserDistrict,
  useUpdateUserOrganisationRoleMutation,
} from '../../../graphql/generated';

export type UserItemType = {
  id: string;
  organisation_user_id: string;
  name: string;
  role: OrganisationUserRoleType;
  disabled: boolean;
  user_districts: UserDistrict[];
  // [key: string]: any;
};

interface SwitchIconProps {
  switchValue: boolean;
  loading: boolean;
}

function SwitchIcon({ loading, switchValue }: SwitchIconProps) {
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor:
          switchValue && !loading
            ? theme.palette.secondary.main
            : theme.palette.background.default,
        boxShadow: theme.shadows[1],
        // backgroundColor: theme.palette.secondary.main,
      }}
    >
      {loading && (
        <CircularProgress size={14} color="secondary" thickness={6} />
      )}
    </div>
  );
}

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
  // headCells: HeadCellType[];
}

function UserItem({ align, row: user }: UserItemProps) {
  const [switchValue, setSwitchValue] = useState(false);
  const [orgUserRole, setOrgUserRole] = useState(user.role);
  const [open, setOpen] = useState(false);

  const currentUser = useReactiveVar(currentUserVar) as User;

  const [
    disableUser,
    {
      loading: disablingUser,
      data: disabledUserResponse,
      error: disableUserError,
    },
  ] = useDisableUserMutation();

  const [
    updateUserOrgRole,
    {
      loading: updatingUserOrgRole,
      data: updateUserOrgRoleResponse,
      error: updateUserOrgRoleError,
    },
  ] = useUpdateUserOrganisationRoleMutation();

  const handleChange = () => {
    setSwitchValue(!switchValue);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleUserRoleChange = (event: SelectChangeEvent) => {
    setOrgUserRole(event.target.value as OrganisationUserRoleType);
  };

  useEffect(() => {
    disableUser({
      variables: {
        input: {
          id: user.id,
          update: {
            disabled: switchValue,
          },
        },
      },
      refetchQueries: [GetDefaultOrganisationUsersDocument],
    });
  }, [switchValue, user.id, disableUser]);

  useEffect(() => {
    updateUserOrgRole({
      variables: {
        input: {
          id: user.organisation_user_id,
          update: {
            role: orgUserRole,
          },
        },
      },
      refetchQueries: [GetDefaultOrganisationUsersDocument],
    });
  }, [orgUserRole, updateUserOrgRole, user.organisation_user_id]);

  //   <FormControl fullWidth size="small" variant="filled">
  //   <Select id="role" value={orgUserRole} onChange={handleUserRoleChange}>
  //     {getEnumKeys(OrganisationUserRoleType)
  //       .filter((role) => role !== 'Support' && role !== 'Owner')
  //       .map((key) => (
  //         <MenuItem key={key} value={OrganisationUserRoleType[key]}>
  //           {key}
  //         </MenuItem>
  //       ))}
  //   </Select>
  // </FormControl>

  const isCurrentUser = currentUser?.id === user.id;
  return (
    <>
      <TableCell align={align}>
        <Link to="/account" state={{ id: user.id }}>
          {user.name}
        </Link>
      </TableCell>

      <TableCell align={align}>
        <Button
          variant="text"
          size="small"
          endIcon={<ArrowDropDownOutlined />}
          // onClick={handleRolesModalOpen}
        >
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
            // checkedIcon={
            //   <SwitchIcon
            //     loading={disablingUser}
            //     switchValue={user.disabled}
            //   />
            // }
            // icon={
            //   <SwitchIcon
            //     loading={disablingUser}
            //     switchValue={user.disabled}
            //   />
            // }
            onChange={handleChange}
            inputProps={{ 'aria-label': 'user disabled' }}
          />
        </Tooltip>
      </TableCell>
      {/* <TableCell align={align}>{value ?? '---'}</TableCell> */}
    </>
  );
}

export default UserItem;
