// react
import { FC } from "react";
// react-router-dom
import { Route, Routes } from "react-router-dom";
// layouts
import { HeaderLayout } from "../../layout/header/HeaderLayout";
// pages
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/notFound";
import { UserPage } from "@/pages/user";
import { TablePage } from "@/pages/table/TablePage";
// constants
import {
  getHomeRoute,
  getNotFoundRoute,
  getTableRoute,
  getUserRoute,
} from "@/shared/libs/constants/routes";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={getHomeRoute()} element={<HomePage />} />
        <Route path={getNotFoundRoute()} element={<NotFoundPage />} />
        <Route path={getUserRoute(":id")} element={<UserPage />} />
        <Route path={getTableRoute()} element={<TablePage/>} />
      </Route>
    </Routes>
  );
};
