import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import UserSettings from 'components/admin/user-settings';
import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  return <Outlet />;
}

export default AdminDashboard;
