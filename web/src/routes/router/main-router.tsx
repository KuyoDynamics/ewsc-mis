import React, { lazy } from 'react';
import Loadable from 'components/loadable';
import MainLayout from 'layout/main-layout';
import PrivateRoute from 'components/authentication/private-route';

const DashboardDefault = Loadable(lazy(() => import('routes/dashboard')));

const AdminDashboard = Loadable(lazy(() => import('routes/admin')));
const UserInivitations = Loadable(
  lazy(() => import('routes/admin/user-invitations'))
);
const NotFound = Loadable(lazy(() => import('components/404')));

const MainRouter = {
  path: '/',
  element: (
    <PrivateRoute>
      <MainLayout />
    </PrivateRoute>
  ),
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    {
      path: 'admin',
      element: <AdminDashboard />,
      children: [
        {
          path: 'invitations',
          element: <UserInivitations />,
        },
        {
          path: 'accounts',
          element: <p>Hello</p>,
          children: [
            {
              path: ':id',
              element: <p>Bang!</p>,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRouter;
