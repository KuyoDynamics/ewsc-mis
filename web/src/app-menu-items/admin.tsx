// import React from 'react';
import {
  ManageAccounts as ManageAccountsIcon,
  ContactMail as ContactEmailIcon,
  RoomPreferences as RoomPreferencesIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const admin: IMenuItem = {
  id: 'admin',
  title: 'Admin',
  caption: 'Manage Organisation',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Users',
      caption: 'User Accounts',
      type: 'item',
      url: '/users',
      icon: ManageAccountsIcon,
    },
    {
      id: 'invitations',
      title: 'Invitations',
      caption: 'User Invitations',
      type: 'item',
      url: '/invitations',
      icon: ContactEmailIcon,
    },
    {
      id: 'organisation',
      title: 'Organisation Settings',
      caption: 'Manage Organisation Settings',
      type: 'item',
      url: '/organisation',
      icon: RoomPreferencesIcon,
    },
  ],
};

export default admin;
