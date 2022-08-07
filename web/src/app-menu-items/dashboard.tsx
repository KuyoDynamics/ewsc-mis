import { ChipProps } from '@mui/material';
import { IconDashboard } from '@tabler/icons';

const icons = { IconDashboard };

export interface IMenuItem {
  id: string;
  title: string;
  type: string;
  caption?: string;
  icon?: any;
  url?: string;
  target?: boolean;
  breadcrumbs?: boolean;
  disabled?: boolean;
  chip?: ChipProps;
  external?: boolean;
  children?: IMenuItem[];
}

const dashboard: IMenuItem = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  url: '/',
  breadcrumbs: false,
  children: [
    {
      id: 'default',
      title: 'Default',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
  ],
};

export default dashboard;
