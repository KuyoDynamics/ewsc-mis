import React, { lazy } from 'react';
import Loadable from 'components/loadable';
import MainLayout from 'layout/main-layout';
import PrivateRoute from 'components/authentication/private-route';
import { RouteObject, RouteProps, RoutesProps } from 'react-router-dom';

const DashboardDefault = Loadable(lazy(() => import('routes/dashboard')));

const AdminDashboard = Loadable(lazy(() => import('routes/admin')));
const UserInivitations = Loadable(
  lazy(() => import('routes/admin/user-invitations'))
);
const NotFound = Loadable(lazy(() => import('components/404')));
const UsersDashboard = Loadable(lazy(() => import('routes/users')));
const UserAccount = Loadable(lazy(() => import('routes/users/user-account')));

const MainRouter: RouteObject = {
  path: '/',
  element: (
    <PrivateRoute>
      <MainLayout />
    </PrivateRoute>
  ),
  children: [
    { index: true, element: <DashboardDefault /> },
    {
      path: '/dashboard',
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
          path: 'users',
          element: <UsersDashboard />,
          children: [
            {
              path: ':id',
              element: <UserAccount />,
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
