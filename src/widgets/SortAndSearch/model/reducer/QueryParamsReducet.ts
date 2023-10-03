import { Action, QueryParamsStateSchema, SortOrder } from "../types/QueryParamsStateSchema"

const CHANGE_ORDER = "CHANGE_ORDER"
const CHANGE_SORT = "CHANGE_SORT"
const CHANGE_PAGE = "CHANGE_PAGE"
const CHANGE_TITLE = "CHANGE_TITLE"

const initialState: QueryParamsStateSchema = {
	order: "desc",
	sort: "activity",
	page: 1,
	pagesize: 15,
	title: "",
}

export const QueryParamsReducer = (state = initialState, action: Action): QueryParamsStateSchema => {
	switch (action.type) {
		case CHANGE_ORDER:
			return { ...state, order: action.payload as SortOrder }
		case CHANGE_TITLE:
			return state
		case CHANGE_SORT:
			return state
		case CHANGE_PAGE:
			return state
		default:
			return state
	}
}
