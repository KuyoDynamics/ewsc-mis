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
      id: 'water_networks',
      title: 'Water Networks',
      caption: 'Manage Water Networks',
      type: 'item',
      url: '/waternetworks',
      icon: ContactEmailIcon,
    },
    {
      id: 'sewernetworks',
      title: 'Sewer Networks',
      caption: 'Manage Sewer Networks',
      type: 'item',
      url: '/sewer_networks',
      icon: RoomPreferencesIcon,
    },
    {
      id: 'water_prodution_sites',
      title: 'Water Production Sites',
      caption: 'Manage Water Production Sites',
      type: 'item',
      url: '/water_production_sites',
      icon: RoomPreferencesIcon,
    },
  ],
};

export default baseTables;
