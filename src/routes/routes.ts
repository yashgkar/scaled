import { lazy } from "react";

export const routes = [
  {
    path: "/home",
    component: lazy(() => import("../pages/home/container"))
  },
  {
    path: "/",
    component: lazy(() => import("../pages/auth/container"))
  }
];