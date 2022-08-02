import { ApolloClient } from '@apollo/client';
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
  client.clearStore();
  isLoggedInVar(false);
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
  client.resetStore();
  isLoggedInVar(true);
}

export { logout, setToken, authLink, observeTokenForExternalChanges };
