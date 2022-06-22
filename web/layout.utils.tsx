import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { NavLinkProps } from "remix";

function QueryNavLink({ to, ...props }: NavLinkProps) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default QueryNavLink;
