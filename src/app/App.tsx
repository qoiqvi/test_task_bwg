import { Navbar } from "widgets/Navbar/ui/Navbar"
import AppRouter from "./providers/router/AppRouter"

export const App = () => {
	return (
		<div className="app">
			<Navbar />
			<AppRouter />
		</div>
	)
}
