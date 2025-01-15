import { routeConfig } from "@/app/config/route/routeConfig";

export const getHomeRoute = () => routeConfig.home;

export const getProfileRoute = () => routeConfig.profile;

export const getNotFoundRoute = () => routeConfig.notFound;

export const getUserRoute = (id: string) => routeConfig.user.replace(":id", id);

export const getTableRoute = () => routeConfig.table;