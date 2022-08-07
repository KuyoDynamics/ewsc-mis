import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';
import { drawerWidth } from 'theme/constants';
import MenuList from 'layout/main-layout/sidebar/menu-list';
import LogoSection from 'layout/main-layout/logo-section';
// import Logo from '../../../../public/static/images/ewsc_logo.png';

interface ISidebarProps {
  drawerOpen: boolean;
  drawerToggle: () => void;
  //   window: object;
}

function Sidebar({ drawerOpen, drawerToggle }: ISidebarProps) {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  console.log('mathUpMd', matchUpMd);
  console.log("theme.breakpoints.up('md')", theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box
          sx={{
            display: 'flex',
            p: 2,
            mx: 'auto',
            width: 'auto',
          }}
        >
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <MenuList />
          {/* Add this later */}
          {/* <MenuCard /> */}
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          {/* <MenuCard /> */}
        </Box>
      </MobileView>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
