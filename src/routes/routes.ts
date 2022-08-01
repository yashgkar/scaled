import { lazy } from "react"

const routes = [
	{
		path: "/home",
		component: lazy(() => import("../pages/home/container"))
	},
	{
		path: "/",
		component: lazy(() => import("../pages/auth/container"))
	}
]

export default routes
