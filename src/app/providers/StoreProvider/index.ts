import { legacy_createStore as createStore } from "redux"
import { RootReducer } from "./RootReducer"

export const store = createStore(RootReducer)
