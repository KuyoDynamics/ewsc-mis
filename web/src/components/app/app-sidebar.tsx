import React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { NavLink } from 'react-router-dom';
import {
  Users as UsersIcon,
  ChartBar as ChartBarIcon,
  Cog as CogIcon,
  Selector as SelectorIcon,
  ShoppingBag as ShoppingBagIcon,
} from 'icons';
import {
  FireExtinguisher,
  Public as PublicIcon,
  Paid as PaidIcon,
} from '@mui/icons-material';

import NavItem from 'components/nav-item';
import { useGetCurrentUserQuery } from '../../../graphql/generated';

const items = [
  {
    href: '/',
    icon: <ChartBarIcon fontSize="small" />,
    title: 'Dashboard',
  },
  {
    href: '/technical',
    icon: <FireExtinguisher fontSize="small" />,
    title: 'Technical',
  },
  {
    href: '/commercial',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Commercial',
  },
  {
    href: '/public_relations',
    icon: <PublicIcon fontSize="small" />,
    title: 'Public Relations',
  },
  {
    href: '/personnel',
    icon: <UsersIcon fontSize="small" />,
    title: 'Personnel',
  },
  {
    href: '/finance',
    icon: <PaidIcon fontSize="small" />,
    title: 'Finance',
  },
];

const adminTasks = [
  {
    href: '/admin',
    icon: <CogIcon fontSize="small" />,
    title: 'Admin',
  },
];

type AppSidebarProps = {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  open: boolean;
};

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

function AppSidebar(props: AppSidebarProps) {
  const { open, toggleDrawer } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  const {
    loading: loadingCurrentUser,
    data: currentUserResponse,
    // error: currentUserError,
  } = useGetCurrentUserQuery({
    fetchPolicy: 'cache-first',
  });

  const currentUser = React.useMemo(
    () =>
      currentUserResponse?.me.__typename === 'User'
        ? currentUserResponse.me
        : null,
    [currentUserResponse]
  );

  const defaultDistrict = React.useMemo(
    () =>
      currentUserResponse?.me.__typename === 'User'
        ? currentUserResponse.me.user_default_organisation?.user_districts?.find(
            (district) => district.is_default_user_district === true
          )
        : null,
    [currentUserResponse]
  );

  const renderContent = () => {
    if (loadingCurrentUser) return <p>loading user scope...</p>;
    if (currentUser)
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div>
            <Box sx={{ p: 3 }}>
              <NavLink to="/">
                <img
                  style={{
                    height: 42,
                    width: 42,
                  }}
                  src={currentUser.user_default_organisation?.logo}
                  alt="logo"
                />
              </NavLink>
            </Box>
            <Box sx={{ px: 2 }}>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  px: 3,
                  py: '11px',
                  borderRadius: 1,
                }}
              >
                <div>
                  <Typography color="inherit" variant="subtitle1">
                    {currentUser.user_default_organisation?.name}
                  </Typography>
                  <Typography color="inherit" variant="subtitle2">
                    {defaultDistrict?.province?.name}
                  </Typography>
                  <Typography color="neutral.400" variant="body2">
                    Your district : {defaultDistrict?.name}
                  </Typography>
                </div>
                <SelectorIcon
                  sx={{
                    color: 'neutral.500',
                    width: 14,
                    height: 14,
                  }}
                />
              </Box>
            </Box>
          </div>
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 3,
            }}
          />
          <Box
            sx={{ flexGrow: 1 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {items.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                to={item.href}
                title={item.title}
              />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 3,
            }}
          />
          <Box
            sx={{ flexGrow: 1 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {adminTasks.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                to={item.href}
                title={item.title}
              />
            ))}
          </Box>
          <Divider sx={{ borderColor: '#2D3748' }} />
          <Box
            sx={{
              px: 2,
              py: 3,
            }}
          >
            <Typography color="neutral.100" variant="subtitle2">
              Need more features?
            </Typography>
            <Typography color="neutral.500" variant="body2">
              Check out other solutions by Kuyo Dynamics.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                mt: 2,
                mx: 'auto',
                width: '160px',
                '& img': {
                  width: '100%',
                },
              }}
            >
              <img alt="Kuyo" src="/static/images/sidebar_pro.png" />
            </Box>
            <NavLink to="https://kuyodynamics.com">
              <Button
                color="secondary"
                component="a"
                endIcon={<OpenInNewIcon />}
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
              >
                Kuyo Dynamics
              </Button>
            </NavLink>
          </Box>
        </Box>
      );
    return <p>failed to load user scope</p>;
  };

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {renderContent()}
      </Drawer>
    );
  }

  return (
    <SwipeableDrawer
      anchor="left"
      onClose={toggleDrawer(false)}
      open={open}
      onOpen={toggleDrawer(true)}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      {renderContent()}
    </SwipeableDrawer>
  );
}

export default AppSidebar;
