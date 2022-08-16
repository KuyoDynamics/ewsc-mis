import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  ContactMail as ContactEmailIcon,
  RoomPreferences as RoomPreferencesIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const admin: IMenuItem = {
  id: 'admin',
  title: 'Admin Panel',
  caption: 'Manage Organisation',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Users',
      caption: 'User Accounts',
      type: 'item',
      url: '/admin/users',
      icon: AdminPanelSettingsIcon,
    },
    {
      id: 'invitations',
      title: 'Invitations',
      caption: 'User Invitations',
      type: 'item',
      url: '/admin/invitations',
      icon: ContactEmailIcon,
    },
    {
      id: 'organisation',
      title: 'Organisation Settings',
      caption: 'Manage Organisation Settings',
      type: 'item',
      url: '/admin/organisation',
      icon: RoomPreferencesIcon,
    },
  ],
};

export default admin;
