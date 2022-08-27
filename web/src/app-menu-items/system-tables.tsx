import {
  ManageAccounts as ManageAccountsIcon,
  ContactMail as ContactEmailIcon,
  RoomPreferences as RoomPreferencesIcon,
  Apps as AppsIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const systemTables: IMenuItem = {
  id: 'system',
  title: 'System Tables',
  caption: 'Manage System Tables',
  type: 'group',
  children: [
    {
      id: 'templates',
      title: 'Report Templates and Indicators',
      caption: 'System Report Templates and Indicators',
      type: 'collapse',
      icon: AppsIcon,
      children: [
        {
          id: 'report_templates',
          title: 'Report Templates',
          caption: 'System Report Templates',
          type: 'item',
          url: '/system/templates/report_templates',
          icon: RoomPreferencesIcon,
        },
        {
          id: 'indicators',
          title: 'Indicators',
          caption: 'System Indicators',
          type: 'item',
          url: '/system/templates/indicators',
          icon: RoomPreferencesIcon,
        },
      ],
    },
    {
      id: 'indicator_disaggregates',
      title: 'Indicator Disaggregates',
      caption: 'System Indicator Disaggregates',
      type: 'collapse',
      icon: AppsIcon,
      children: [
        {
          id: 'disaggregates',
          title: 'Disaggregates',
          caption: 'System Disaggregates',
          type: 'item',
          url: '/system/indicator_disaggregates/disaggregates',
          icon: RoomPreferencesIcon,
        },
        {
          id: 'options',
          title: 'Disaggregate Options',
          caption: 'System Disaggregate Options',
          type: 'item',
          url: '/system/indicator_disaggregates/options',
          icon: RoomPreferencesIcon,
        },
      ],
    },
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
