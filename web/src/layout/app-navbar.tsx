import React from 'react';
import { styled } from '@mui/system';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Bell as BellIcon } from 'icons';
import theme from 'theme';
import UserMenu from 'components/users/user-menu';

const AppNavbarRoot = styled(AppBar)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows instanceof Array ? theme.shadows[3] : undefined,
});

type AppNavbarProps = {
  onSidebarOpen: (event: any) => void;
};

function AppNavbar(props: AppNavbarProps) {
  const { onSidebarOpen } = props;

  return (
    <AppNavbarRoot
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              // lg: 'none', this only shows on smaller devices
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Notifications">
          <IconButton sx={{ ml: 1 }}>
            <Badge badgeContent={4} color="primary" variant="dot">
              <BellIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>
        <UserMenu />
      </Toolbar>
    </AppNavbarRoot>
  );
}

export default AppNavbar;
