// import React from 'react';
import {
  FireExtinguisher,
  ShoppingBag as ShoppingBagIcon,
  Public as PublicIcon,
  SupportAgent as UsersIcon,
  Paid as PaidIcon,
  Apps as AppsIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const dataEntryForms: IMenuItem = {
  id: 'dataentry',
  title: 'Data Entry',
  caption: 'Report Templates',
  type: 'group',
  children: [
    {
      id: 'technical',
      title: 'Technical',
      caption: 'Technical Report',
      type: 'item',
      url: '/technical',
      icon: FireExtinguisher,
    },
    {
      id: 'commercial',
      title: 'Commercial',
      caption: 'Commercial Report',
      type: 'item',
      url: '/commercial',
      icon: ShoppingBagIcon,
    },
    {
      id: 'relations',
      title: 'Public Relations',
      caption: 'PR Report',
      type: 'item',
      url: '/relations',
      icon: PublicIcon,
    },
    {
      id: 'personnel',
      title: 'Personnel',
      caption: 'Personnel Report',
      type: 'item',
      url: '/personnel',
      icon: UsersIcon,
    },
    {
      id: 'finance',
      title: 'Finance',
      caption: 'Finance Report',
      type: 'item',
      url: '/finance',
      icon: PaidIcon,
    },
    {
      id: 'custom',
      title: 'Custom Reports',
      type: 'collapse',
      icon: AppsIcon,

      children: [
        {
          id: 'template1',
          title: 'Template1',
          type: 'item',
          url: '/template1',
        },
      ],
    },
  ],
};

export default dataEntryForms;
