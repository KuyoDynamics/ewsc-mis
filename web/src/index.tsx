import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  split,
} from '@apollo/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import theme from 'theme';
import { authLink, observeTokenForExternalChanges } from 'utils/session';
import { cache } from 'cache';
import { getMainDefinition } from '@apollo/client/utilities';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000/api',
    connectionParams: {
      authToken: localStorage.getItem('token'),
    },
  })
);

const httpLink = createHttpLink({
  uri: '/api',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: splitLink,
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  </ApolloProvider>
);
