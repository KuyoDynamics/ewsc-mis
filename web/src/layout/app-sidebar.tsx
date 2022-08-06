/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  CssBaseline,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Drawer as MuiDrawer,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Users as UsersIcon,
  ChartBar as ChartBarIcon,
  Cog as CogIcon,
  Selector as SelectorIcon,
} from 'icons';
import {
  FireExtinguisher,
  ShoppingBag as ShoppingBagIcon,
  Public as PublicIcon,
  Paid as PaidIcon,
  ManageAccounts,
  OpenInNew as OpenInNewIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

import { useReactiveVar } from '@apollo/client';
import NavItem from 'components/nav-item';
import { currentUserVar } from 'cache';
import menuItems from 'app-menu-items';
import {
  Province,
  User,
  UserDistrict,
  UserOrganisation,
} from '../../graphql/generated';

const items = [
  {
    to: '/',
    icon: <ChartBarIcon fontSize="small" />,
    title: 'Dashboard',
    caption: 'Default',
  },
  {
    to: '/technical',
    icon: <FireExtinguisher fontSize="small" />,
    title: 'Technical',
  },
  {
    to: '/commercial',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Commercial',
  },
  {
    to: '/public_relations',
    icon: <PublicIcon fontSize="small" />,
    title: 'Public Relations',
  },
  {
    to: '/personnel',
    icon: <UsersIcon fontSize="small" />,
    title: 'Personnel',
  },
  {
    to: '/finance',
    icon: <PaidIcon fontSize="small" />,
    title: 'Finance',
  },
];

const adminTasks = [
  {
    to: '/admin',
    icon: <CogIcon fontSize="small" />,
    title: 'Admin',
  },
  {
    to: '/account',
    icon: <ManageAccounts fontSize="small" />,
    title: 'Account',
  },
];

type AppSidebarProps = {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  open: boolean;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface ICompanyInfoProps {
  defaultOrganisation: UserOrganisation;
  defaultDistrict: UserDistrict;
}

function CompanyInfo({
  defaultOrganisation,
  defaultDistrict,
}: ICompanyInfoProps) {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <NavLink to="/">
          <img
            style={{
              height: 42,
              width: 42,
            }}
            src={defaultOrganisation?.logo}
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
              {defaultOrganisation?.name}
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
    </>
  );
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

function AppSidebar(props: AppSidebarProps) {
  const theme = useTheme();

  const navigate = useNavigate();

  const { open, toggleDrawer } = props;

  const currentUser = useReactiveVar(currentUserVar);

  const defaultDistrict = React.useMemo(
    () =>
      currentUser
        ? currentUser.user_default_organisation?.user_districts?.find(
            (district) => district.is_default_user_district === true
          )
        : null,
    [currentUser]
  );

  if (!currentUser) return <p>loading user scope...</p>;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <>
          <DrawerHeader>
            <IconButton onClick={toggleDrawer(false)}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <CompanyInfo
            defaultDistrict={defaultDistrict!}
            defaultOrganisation={currentUser?.user_default_organisation!}
          />
          <Divider />
          <List>
            {menuItems.items.map((item) => (
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  // onClick={() => navigate(item.to)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {/* {item.icon} */}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    // secondary={
                    //   item.caption && (
                    //     <Typography
                    //       variant="caption"
                    //       sx={{ ...theme.typography.caption }}
                    //       display="block"
                    //       gutterBottom
                    //     >
                    //       {item.caption}
                    //     </Typography>
                    //   )
                    // }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      </Drawer>
    </Box>
  );

  // return (
  //   <SwipeableDrawer
  //     anchor="left"
  //     onClose={toggleDrawer(false)}
  //     open={open}
  //     onOpen={toggleDrawer(true)}
  //     PaperProps={{
  //       sx: {
  //         backgroundColor: 'neutral.900',
  //         color: '#FFFFFF',
  //         width: 280,
  //       },
  //     }}
  //     sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
  //     variant="temporary"
  //     disableBackdropTransition={!iOS}
  //     disableDiscovery={iOS}
  //   >
  //     {renderContent()}
  //   </SwipeableDrawer>
  // );
}

export default AppSidebar;
