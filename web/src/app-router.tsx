import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from 'routes/dashboard';
import Login from 'routes/login';
import Admin from 'routes/admin';
import App from 'App';
import NotFound from 'components/404';
import PrivateRoute from 'components/authentication/private-route';
import UserInvitations from 'routes/admin/user-invitations';
import Signup from 'routes/signup';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/invitations"
            element={
              <PrivateRoute>
                <UserInvitations />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
