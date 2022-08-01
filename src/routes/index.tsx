import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import routes from "./routes"

function RootRoutes() {
	return (
		<Routes>
			{routes.map((route) => (
				<Route
					element={(
						<Suspense fallback={<div>Loading...</div>}>
							<route.component />
						</Suspense>
					)}
					path={route.path}
					key={route.path}
				/>
			))}
		</Routes>
	)
}

export default RootRoutes
