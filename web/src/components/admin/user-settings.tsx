import React from 'react';
import UserList from 'components/users/user-list';
import UserDashboard from 'components/users/user-dashboard';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function UserSettings() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="manage-user-accounts">
            <ManageAccountsIcon />
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Users"
        subheader="Manage Organisation Users"
      />
      <CardContent>
        <UserDashboard />
      </CardContent>
      <CardActionArea>
        <UserList />
      </CardActionArea>
    </Card>
  );
}

export default UserSettings;
