import React from 'react';
import { Typography } from '@mui/material';
import NavGroup from 'layout/main-layout/sidebar/menu-list/nav-group';
import menuItem from 'app-menu-items';

function MenuList() {
  return (
    <>
      {menuItem.items.map((item) => {
        if (item.type === 'group') {
          return <NavGroup key={item.id} item={item} />;
        }
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
      })}
    </>
  );
}

export default MenuList;
