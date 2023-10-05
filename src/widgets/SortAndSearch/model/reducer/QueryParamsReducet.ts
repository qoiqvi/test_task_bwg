import { ActionTypes } from "../actions"
import { Action, QueryParamsStateSchema } from "../types/QueryParamsStateSchema"

const initialState: QueryParamsStateSchema = {
	order: "desc",
	sort: "activity",
	page: "1",
	pagesize: "15",
	title: "",
}

export const QueryParamsReducer = (state = initialState, action: Action): QueryParamsStateSchema => {
	switch (action.type) {
		case ActionTypes.CHANGE_ORDER:
			return { ...state, order: action.payload }
		case ActionTypes.CHANGE_TITLE:
			return { ...state, title: action.payload }
		case ActionTypes.CHANGE_SORT:
			return { ...state, sort: action.payload }
		case ActionTypes.CHANGE_PAGE:
			return { ...state, page: action.payload }
		case ActionTypes.CHANGE_PAGESIZE:
			return { ...state, pagesize: action.payload }
		default:
			return state
	}
}
