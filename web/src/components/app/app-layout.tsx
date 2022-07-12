import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import AppNavbar from 'components/app/app-navbar';
import AppSidebar from 'components/app/app-sidebar';

const AppLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSidebarOpen(open);
    };

  return (
    <>
      <AppLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </AppLayoutRoot>
      <AppSidebar toggleDrawer={toggleDrawer} open={isSidebarOpen} />
      <AppNavbar onSidebarOpen={toggleDrawer(true)} />
    </>
  );
}

export default AppLayout;
