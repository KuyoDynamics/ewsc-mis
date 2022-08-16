/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, forwardRef, Ref, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Chip,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Slide,
  Typography,
} from '@mui/material';
import {
  ExitToApp as ExitToAppIcon,
  ManageAccounts as ManageAccountsIcon,
} from '@mui/icons-material';

import { IconSettings } from '@tabler/icons';
import { TransitionProps } from '@mui/material/transitions';
import { useApolloClient, useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import { logout } from 'utils/session';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
  ) => <Slide direction="left" ref={ref} {...props} />
);

function ProfileSection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const client = useApolloClient();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentUser = useReactiveVar(currentUserVar);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light,
            },
          },
          '& .MuiChip-label': {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar
            // src={User1}
            sx={{
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer',
            }}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={
          <IconSettings
            stroke={1.5}
            size="1.5rem"
            color={theme.palette.primary.main}
          />
        }
        variant="outlined"
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
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
        >
          {currentUser ? `Hi, ${currentUser.first_name}` : <h1>loading...</h1>}
        </Typography>
        <Divider />
        <MenuItem
          id="account-settings"
          onClick={() => {
            handleClose();
            navigate('/account');
          }}
        >
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </MenuItem>
        <MenuItem
          id="logout"
          onClick={() => {
            handleClose();
            logout(client);
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileSection;
