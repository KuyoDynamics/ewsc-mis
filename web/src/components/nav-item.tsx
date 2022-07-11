/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, ListItem } from '@mui/material';
import { Box, SxProps } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom';

type NavItemProps = {
  to: string;
  title: string;
  icon: React.ReactNode;
};

function NavItem(props: NavItemProps) {
  const { to, icon, title, ...others } = props;
  const { pathname } = useLocation();
  const active = to ? pathname === to : false;

  const buttonStyle: SxProps = {
    backgroundColor: active ? 'rgba(255,255,255, 0.08)' : undefined,
    borderRadius: 1,
    color: active ? 'secondary.main' : 'neutral.300',
    fontWeight: active ? 'fontWeightBold' : undefined,
    justifyContent: 'flex-start',
    px: 3,
    textAlign: 'left',
    textTransform: 'none',
    width: '100%',
    '& .MuiButton-startIcon': {
      color: active ? 'secondary.main' : 'neutral.400',
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, 0.08)',
    },
  };

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <NavLink to={to}>
        <Button component="a" startIcon={icon} disableRipple sx={buttonStyle}>
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </NavLink>
    </ListItem>
  );
}

export default NavItem;
