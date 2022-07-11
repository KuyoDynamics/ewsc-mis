/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useLocation, NavLink, NavLinkProps } from 'react-router-dom';

function QueryNavLink({ to, ...props }: NavLinkProps) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default QueryNavLink;
