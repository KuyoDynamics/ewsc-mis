import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import theme from 'theme';
import { authLink, observeTokenForExternalChanges } from 'utils/session';
import { cache } from 'cache';
import AppRouter from 'app-router';

const httpLink = createHttpLink({
  uri: '/api',
});

await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache,
});

observeTokenForExternalChanges(client);

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <ApolloProvider client={client}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </LocalizationProvider>
  </ApolloProvider>
);
