import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Loadable from 'components/loadable';
import MainLayout from 'layout/main-layout';
import PrivateRoute from 'components/authentication/private-route';

const DashboardDefault = Loadable(lazy(() => import('routes/dashboard')));

const AdminDashboard = Loadable(lazy(() => import('routes/admin')));
const UserInivitations = Loadable(
  lazy(() => import('routes/admin/user-invitations'))
);
const NotFound = Loadable(lazy(() => import('components/404')));
const UsersDashboard = Loadable(lazy(() => import('routes/users')));
const UserAccount = Loadable(lazy(() => import('routes/users/user-account')));
const ChangePassword = Loadable(
  lazy(() => import('routes/users/change-password'))
);
const SystemDashboard = Loadable(lazy(() => import('routes/system')));
const Countries = Loadable(lazy(() => import('routes/system/countries')));
const Provinces = Loadable(lazy(() => import('routes/system/provinces')));
const Districts = Loadable(lazy(() => import('routes/system/districts')));
const Residences = Loadable(lazy(() => import('routes/system/residences')));

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
        },
        {
          path: 'users/:id',
          element: <UserAccount />,
        },
      ],
    },
    {
      path: 'system',
      element: <SystemDashboard />,
      children: [
        {
          path: 'countries',
          element: <Countries />,
        },
        {
          path: 'provinces',
          element: <Provinces />,
        },
        {
          path: 'districts',
          element: <Districts />,
        },
        {
          path: 'residences',
          element: <Residences />,
        },
      ],
    },
    {
      path: 'account',
      element: <UserAccount />,
    },
    {
      path: 'account/changePassword',
      element: <ChangePassword />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRouter;
