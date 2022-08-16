import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { IconMenu2, IconChevronRight } from '@tabler/icons';
import LogoSection from 'layout/main-layout/logo-section';
import ProfileSection from 'layout/main-layout/header/profile-section';
import navigation from 'app-menu-items';
import Breadcrumbs from 'components/extended/breadcrumbs';
// import NotificationSection from './NotificationSection';

interface IHeaderProps {
  handleLeftDrawerToggle: () => void;
}
function Header({ handleLeftDrawerToggle }: IHeaderProps) {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        {/* Do not show the logo for now until when confident enough */}
        {/* <Box
          component="span"
          sx={{
            display: { xs: 'none', md: 'block' },
            // flexGrow: 1,
            width: '130px',
            height: '130px',
            mt: '10px',
          }}
        >
          <LogoSection />
        </Box> */}
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      {/* breadcrumb */}
      <Breadcrumbs
        separator={IconChevronRight}
        navigation={navigation}
        icon
        title
        rightAlign
        maxItems={3}
        card={false}
        divider={false}
      />
      {/* header search */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      {/* <NotificationSection /> */}
      <ProfileSection />
    </>
  );
}

export default Header;
