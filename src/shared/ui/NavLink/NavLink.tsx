// react
import { FC, ReactNode } from "react";
// react-router-dom
import { NavLink as ReactRouterLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <ReactRouterLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </ReactRouterLink>
  );
};
