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
const IndicatorDisaggregatesDashboard = Loadable(
  lazy(() => import('routes/system/indicator_disaggregates'))
);
const DisaggregateOptions = Loadable(
  lazy(() => import('routes/system/indicator_disaggregates/options'))
);
const Disaggregates = Loadable(
  lazy(() => import('routes/system/indicator_disaggregates/disaggregates'))
);

const TemplatesDashboard = Loadable(
  lazy(() => import('routes/system/templates'))
);

const IndicatorUnits = Loadable(
  lazy(() => import('routes/system/templates/indicator_units'))
);

const Indicators = Loadable(
  lazy(() => import('routes/system/templates/indicators'))
);

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
        {
          path: 'indicator_disaggregates',
          element: <IndicatorDisaggregatesDashboard />,
          children: [
            {
              path: 'options',
              element: <DisaggregateOptions />,
            },
            {
              path: 'disaggregates',
              element: <Disaggregates />,
            },
          ],
        },
        {
          path: 'templates',
          element: <TemplatesDashboard />,
          children: [
            {
              path: 'indicators',
              element: <Indicators />,
            },
            {
              path: 'indicator_units',
              element: <IndicatorUnits />,
            },
          ],
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
