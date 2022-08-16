import {
  InMemoryCacheConfig,
  InMemoryCache,
  makeVar,
  ReactiveVar,
} from '@apollo/client';
import jwt from 'jwt-decode';
import { isExpired } from 'utils';
import { StrictTypedTypePolicies, User } from '../../graphql/generated';

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
    const expired = isExpired(exp);
    if (expired) {
      localStorage.removeItem('token');
    }
    return expired;
  }
  return true;
}

const tokenExpired = isTokenExpired();

const isLoggedInVar: ReactiveVar<boolean> = makeVar(!tokenExpired);

const currentUserVar: ReactiveVar<User> = makeVar(null as unknown as User);

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

const cache = new InMemoryCache(cacheConfig);

export { isTokenExpired, isLoggedInVar, cache, currentUserVar };
