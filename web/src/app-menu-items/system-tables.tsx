// import React from 'react';
import {
  ManageAccounts as ManageAccountsIcon,
  ContactMail as ContactEmailIcon,
  RoomPreferences as RoomPreferencesIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const admin: IMenuItem = {
  id: 'system',
  title: 'System Tables',
  caption: 'Manage System Tables',
  type: 'group',
  children: [
    {
      id: 'countries',
      title: 'Countries',
      caption: 'System Countries',
      type: 'item',
      url: '/system/countries',
      icon: ManageAccountsIcon,
    },
    {
      id: 'provinces',
      title: 'Provinces',
      caption: 'System Provinces',
      type: 'item',
      url: '/system/provinces',
      icon: ContactEmailIcon,
    },
    {
      id: 'districts',
      title: 'Districts',
      caption: 'System Districts',
      type: 'item',
      url: '/system/districts',
      icon: RoomPreferencesIcon,
    },
    {
      id: 'residences',
      title: 'Residential Areas',
      caption: 'System Residential Areas',
      type: 'item',
      url: '/system/residences',
      icon: RoomPreferencesIcon,
    },
  ],
};

export default admin;
