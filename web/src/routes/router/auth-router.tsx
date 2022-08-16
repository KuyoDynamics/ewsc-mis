import React, { lazy } from 'react';
import Loadable from 'components/loadable';

const Login = Loadable(lazy(() => import('routes/login')));
const Signup = Loadable(lazy(() => import('routes/signup')));
const NotFound = Loadable(lazy(() => import('components/404')));
const ResetPassword = Loadable(
  lazy(() => import('routes/users/reset-password'))
);

const AuthRouter = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: 'resetPassword',
    element: <ResetPassword />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default AuthRouter;
