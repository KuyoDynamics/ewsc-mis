import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from 'App';
import theme from 'theme';
import NotFound from 'components/404';
import Login from 'routes/login';
import PrivateRoute from 'components/authentication/private-route';
import { cacheConfig } from 'cache';
import { authLink, observeTokenForExternalChanges } from 'utils/session';
import Dashboard from 'routes/dashboard';
import Admin from 'routes/admin';

observeTokenForExternalChanges();

const httpLink = createHttpLink({
  uri: '/api',
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(cacheConfig),
});

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <ApolloProvider client={client}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* <Route index element={<App />} /> */}
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
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  </ApolloProvider>
);
