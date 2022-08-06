// import React from 'react';
import {
  ManageAccounts as ManageAccountsIcon,
  ContactMail as ContactEmailIcon,
  RoomPreferences as RoomPreferencesIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const baseTables: IMenuItem = {
  id: 'basetables',
  title: 'Base Tables',
  caption: 'Organisation Base Tables',
  type: 'group',
  children: [
    {
      id: 'serviceareas',
      title: 'Service Areas',
      caption: 'Organisation Service Areas',
      type: 'item',
      url: '/serviceareas',
      icon: ManageAccountsIcon,
    },
    {
      id: 'waterplants',
      title: 'Water Networks and Treatment Plants',
      caption: 'Manage Water Treatment Plants/Networks',
      type: 'item',
      url: '/water',
      icon: ContactEmailIcon,
    },
    {
      id: 'sewerplants',
      title: 'Sewer Networks and Treatment Plants',
      caption: 'Manage Sewer Treatment Plants/Networks',
      type: 'item',
      url: '/sewer',
      icon: RoomPreferencesIcon,
    },
    {
      id: 'templates',
      title: 'Report Templates and Indicators',
      caption: 'Manage Report Templates and Indicatos',
      type: 'item',
      url: '/templates',
      icon: RoomPreferencesIcon,
    },
  ],
};

export default baseTables;
