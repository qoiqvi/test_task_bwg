import { App } from "./app/App"
import { createRoot } from "react-dom/client"
import "./app/styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "app/providers/StoreProvider"

const container = document.getElementById("root")
const root = createRoot(container as HTMLElement)

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
