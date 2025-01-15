// react
import { getHomeRoute } from "@/shared/libs/constants/routes";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AuthRequiredGuardProps {}

export const AuthRequiredGuard: FC<AuthRequiredGuardProps> = ({}) => {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? <Outlet /> : <Navigate to={getHomeRoute()} replace />;
};
