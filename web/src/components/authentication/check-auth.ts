import { useEffect } from 'react';
import { isTokenExpired, isLoggedInVar } from 'cache';

function CheckAuth({ children }: { children: JSX.Element }) {
  const tokenExpired = isTokenExpired();

  useEffect(() => {
    isLoggedInVar(!tokenExpired);
  }, [tokenExpired]);

  return { children };
}

export default CheckAuth;
