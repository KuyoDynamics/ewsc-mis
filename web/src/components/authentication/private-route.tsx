import React, { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { useLocation, Navigate } from 'react-router-dom';
import { isTokenExpired, isLoggedInVar } from 'cache';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const tokenExpired = isTokenExpired();

  const location = useLocation();
  const isLoggedIn = useReactiveVar(isLoggedInVar);

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
