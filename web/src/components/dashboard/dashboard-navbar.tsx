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
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from 'icons';
import theme from 'theme';
import UserMenu from 'components/account/user-menu';

const DashboardNavbarRoot = styled(AppBar)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows instanceof Array ? theme.shadows[3] : undefined,
});

type DashboardNavbarProps = {
  onSidebarOpen: (event: any) => void;
};

function DashboardNavbar(props: DashboardNavbarProps) {
  const { onSidebarOpen } = props;

  return (
    <DashboardNavbarRoot
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
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Tooltip title="Search">
          <IconButton sx={{ ml: 1 }}>
            <SearchIcon fontSize="small" />
          </IconButton>
        </Tooltip>
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
    </DashboardNavbarRoot>
  );
}

export default DashboardNavbar;
