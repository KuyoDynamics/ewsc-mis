import {
  ManageAccounts as ManageAccountsIcon,
  ContactMail as ContactEmailIcon,
  RoomPreferences as RoomPreferencesIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const systemTables: IMenuItem = {
  id: 'system',
  title: 'System Tables',
  caption: 'Manage System Tables',
  type: 'group',
  children: [
    {
      id: 'residences',
      title: 'Residential Areas',
      caption: 'System Residential Areas',
      type: 'item',
      url: '/system/residences',
      icon: RoomPreferencesIcon,
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
      id: 'provinces',
      title: 'Provinces',
      caption: 'System Provinces',
      type: 'item',
      url: '/system/provinces',
      icon: ContactEmailIcon,
    },
    {
      id: 'countries',
      title: 'Countries',
      caption: 'System Countries',
      type: 'item',
      url: '/system/countries',
      icon: ManageAccountsIcon,
    },
  ],
};

export default systemTables;
