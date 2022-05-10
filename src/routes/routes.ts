import { lazy } from "react";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/home/container"))
  },
  {
    path: "/auth",
    component: lazy(() => import("../pages/auth/container"))
  }
];