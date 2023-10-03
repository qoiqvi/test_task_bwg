import { combineReducers } from "redux"
import { QueryParamsReducer } from "widgets/SortAndSearch"

export const RootReducer = combineReducers({
	queryParams: QueryParamsReducer,
})

export type RootState = ReturnType<typeof RootReducer>
