import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { isLoggedInVar } from 'cache';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function logout(client: ApolloClient<object>) {
  localStorage.removeItem('token');
  localStorage.removeItem('apollo-cache-persist');
  isLoggedInVar(false);
  client.clearStore();
}

function observeTokenForExternalChanges(client: ApolloClient<object>) {
  window.addEventListener('storage', ({ key }) => {
    if (key === 'token' || key === 'apollo-cache-persist' || !key) {
      logout(client);
    }
  });
}

function setToken(token: string, client: ApolloClient<object>) {
  localStorage.setItem('token', token);
  isLoggedInVar(true);
  client.resetStore();
}

export { logout, setToken, authLink, observeTokenForExternalChanges };
