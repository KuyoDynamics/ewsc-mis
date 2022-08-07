import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  CssBaseline,
  Theme,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { IconChevronRight } from '@tabler/icons';
// import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from 'layout/main-layout/header';
import Sidebar from 'layout/main-layout/sidebar';
import navigation from 'app-menu-items';
import { drawerWidth } from 'theme/constants';
import { MUIStyledCommonProps } from '@mui/system';
import AppNavbar from 'layout/app-navbar';
// import theme from 'theme'

// assets
type MainPropType = {
  open: boolean;
} & MUIStyledCommonProps<Theme> &
  React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement>;
// styles
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open, theme }: MainPropType) => ({
  ...theme!.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme?.transitions?.create('margin', {
      easing: theme?.transitions?.easing.sharp,
      duration: theme?.transitions?.duration?.leavingScreen,
    }),
    [theme!.breakpoints.up('md')]: {
      marginLeft: -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme!.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
    },
    [theme!.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px',
    },
  }),
  ...(open && {
    transition: theme?.transitions.create('margin', {
      easing: theme?.transitions.easing.easeOut,
      duration: theme?.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme!.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
    [theme!.breakpoints?.down('sm')]: {
      marginLeft: '10px',
    },
  }),
}));

// ==============================|| MAIN LAYOUT ||============================== //

function MainLayout() {
  const theme = useTheme();
  console.log('Chaiwa, show me Theme', theme);
  const [leftDrawerOpened, setLeftDrawerOpened] = useState(false);
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

  const handleLeftDrawerToggle = () => {
    setLeftDrawerOpened(!leftDrawerOpened);
  };

  useEffect(() => {
    setLeftDrawerOpened(!matchDownMd);
  }, [matchDownMd]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened
            ? theme.transitions.create('width')
            : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        {/* <Breadcrumbs
          separator={IconChevronRight}
          navigation={navigation}
          icon
          title
          rightAlign
        /> */}
        <Outlet />
      </Main>
    </Box>
  );
}

export default MainLayout;
