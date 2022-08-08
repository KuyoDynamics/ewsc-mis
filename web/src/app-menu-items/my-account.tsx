import {
  ManageAccounts as ManageAccountsIcon,
  Key as PasswordIcon,
} from '@mui/icons-material';
import { IMenuItem } from './dashboard';

const myAccount: IMenuItem = {
  id: 'account_settings',
  title: 'Account Settings',
  caption: 'Manage Your Account',
  type: 'group',
  children: [
    {
      id: 'account',
      title: 'Account',
      caption: 'Account Profile',
      type: 'item',
      url: '/account',
      icon: ManageAccountsIcon,
    },
    {
      id: 'password',
      title: 'Change Password',
      caption: 'Account Password',
      type: 'item',
      url: '/account/changePassword',
      icon: PasswordIcon,
    },
  ],
};

export default myAccount;
