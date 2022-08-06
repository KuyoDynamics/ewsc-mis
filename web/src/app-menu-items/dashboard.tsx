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
  breadcrumbs?: false;
  disabled?: boolean;
  chip?: ChipProps;
  external?: boolean;
  children?: IMenuItem[];
}

const dashboard: IMenuItem = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
