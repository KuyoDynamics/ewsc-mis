import React, {
  useState,
  forwardRef,
  Ref,
  ReactElement,
  MouseEvent,
} from 'react';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/SettingsSharp';
import { useNavigate } from 'react-router-dom';
import { Avatar, Divider, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useApolloClient } from '@apollo/client';
import { logout } from 'utils/session';
import { UserCircle as UserCircleIcon } from 'icons';
import { useGetCurrentUserQuery } from '../../../graphql/generated';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="left" ref={ref} {...props} />
);

function UserMenu() {
  const client = useApolloClient();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseOver = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loading, data, error } = useGetCurrentUserQuery({
    fetchPolicy: 'cache-first',
  });

  console.log('error', error);
  console.log('data', data);
  console.log('error', error);

  const navigate = useNavigate();

  return (
    <div>
      <Avatar
        sx={{
          height: 40,
          width: 40,
          ml: 1,
        }}
        src="/static/images/avatars/avatar_1.png"
      >
        <IconButton onMouseOver={handleMouseOver}>
          <UserCircleIcon fontSize="small" />
        </IconButton>
      </Avatar>
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
          {data?.me.__typename === 'User' && !loading ? (
            `Hi, ${data.me.first_name}`
          ) : (
            <h1>loading...</h1>
          )}
        </Typography>
        <Divider />
        <MenuItem
          id="account-settings"
          href="/account"
          onClick={() => navigate('/account')}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </MenuItem>
        <MenuItem id="logout" onClick={() => logout(client)}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default UserMenu;
