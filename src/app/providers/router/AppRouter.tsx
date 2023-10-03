import { useCallback } from "react"
import { Routes, Route, RouteProps } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: RouteProps) => {
		return (
			<Route
				path={route.path}
				key={route.path}
				element={route.element}
			/>
		)
	}, [])

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default AppRouter
