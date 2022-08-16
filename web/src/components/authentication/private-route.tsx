import React, { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { useLocation, Navigate } from 'react-router-dom';
import { isTokenExpired, isLoggedInVar, currentUserVar } from 'cache';
import { useGetCurrentUserQuery, User } from '../../../graphql/generated';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const tokenExpired = isTokenExpired();

  const location = useLocation();
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const { data } = useGetCurrentUserQuery();

  const currentUser = React.useMemo(
    () => (data?.me.__typename === 'User' ? data.me : null),
    [data]
  );

  useEffect(() => {
    currentUserVar(currentUser as User);
  }, [currentUser]);

  useEffect(() => {
    isLoggedInVar(!tokenExpired);
  }, [tokenExpired]);

  return isLoggedIn && !tokenExpired ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
