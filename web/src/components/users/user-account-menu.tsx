import React, { forwardRef, Ref, ReactElement, useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Divider, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import { LockReset, Person, PersonOff } from '@mui/icons-material';
import { User } from '../../../graphql/generated';
import UserAccountDisableDialog from './user-account-disable-dialog';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="left" ref={ref} {...props} />
);

interface IUserAccountMenuProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  user: User;
  handleOpenPasswordResetModal: () => void;
}

function UserAccountMenu({
  open,
  handleClose,
  anchorEl,
  user,
  handleOpenPasswordResetModal,
}: IUserAccountMenuProps) {
  const [showUserAccountDisableDialog, setShowUserAccountDisableDialog] =
    useState(false);

  const currentUser = useReactiveVar(currentUserVar);

  const isCurrentUser = currentUser.id === user?.id;

  const navigate = useNavigate();

  return (
    <>
      <Menu
        id="user-menu-app-bar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <Typography
          sx={{
            height: 40,
            alignContent: 'center',
            textAlign: 'center',
          }}
          component="div"
          variant="subtitle1"
        >
          Manage Account
        </Typography>
        <Divider />
        <MenuItem
          id="change-password"
          href="/change-password"
          onClick={() => {
            handleClose();
            if (isCurrentUser) {
              navigate('/account/changePassword');
            } else {
              handleOpenPasswordResetModal();
            }
          }}
        >
          <ListItemIcon>
            <LockReset />
          </ListItemIcon>
          <ListItemText
            primary={
              isCurrentUser
                ? 'Change Password'
                : `Request ${user?.first_name} to change password`
            }
          />
        </MenuItem>
        <MenuItem
          id="disable-account"
          onClick={() => {
            handleClose();
            setShowUserAccountDisableDialog(true);
          }}
          disabled={isCurrentUser}
        >
          <ListItemIcon>
            {user?.disabled ? <PersonOff /> : <Person />}
          </ListItemIcon>
          <ListItemText
            primary={user?.disabled ? 'Enable Account' : 'Disable Account'}
          />
        </MenuItem>
      </Menu>
      <UserAccountDisableDialog
        onClose={() => setShowUserAccountDisableDialog(false)}
        user={user}
        open={showUserAccountDisableDialog}
      />
    </>
  );
}

export default UserAccountMenu;
