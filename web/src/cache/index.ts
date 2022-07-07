import { InMemoryCacheConfig, makeVar, ReactiveVar } from '@apollo/client';
import jwt from 'jwt-decode';
import { StrictTypedTypePolicies } from '../../graphql/generated';

interface IJwt {
  exp: number;
  iat: number;
  roles: string[];
  sub: string;
}

function isTokenExpired(): boolean {
  const token = localStorage.getItem('token');

  if (token) {
    const { exp }: IJwt = jwt(token);
    const isExpired = exp < new Date().getTime() / 1000;
    if (isExpired) {
      localStorage.removeItem('token');
    }
    return isExpired;
  }
  return true;
}

const tokenExpired = isTokenExpired();

const isLoggedInVar: ReactiveVar<boolean> = makeVar(tokenExpired);

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      isLoggedIn: {
        read() {
          return isLoggedInVar();
        },
      },
    },
  },
};

const cacheConfig: InMemoryCacheConfig = {
  typePolicies,
};

export { isTokenExpired, isLoggedInVar, cacheConfig };
