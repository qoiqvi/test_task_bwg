import { Navbar } from "widgets/Navbar"
import AppRouter from "./providers/router/AppRouter"
import { Suspense } from "react"

export const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Suspense fallback="">
				<AppRouter />
			</Suspense>
		</div>
	)
}
