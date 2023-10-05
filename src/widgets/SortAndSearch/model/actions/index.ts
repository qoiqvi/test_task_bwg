import { SortOrder, SortBy } from "../types/QueryParamsStateSchema"

export enum ActionTypes {
	CHANGE_ORDER = "CHANGE_ORDER",
	CHANGE_SORT = "CHANGE_SORT",
	CHANGE_PAGE = "CHANGE_PAGE",
	CHANGE_TITLE = "CHANGE_TITLE",
	CHANGE_PAGESIZE = "CHANGE_PAGESIZE",
}

export const changeOrder = (order: SortOrder) => ({
	type: ActionTypes.CHANGE_ORDER,
	payload: order,
})

export const changeSort = (sort: SortBy) => ({
	type: ActionTypes.CHANGE_SORT,
	payload: sort,
})

export const changePage = (page: string) => ({
	type: ActionTypes.CHANGE_PAGE,
	payload: page,
})

export const changeTitle = (title: string) => ({
	type: ActionTypes.CHANGE_TITLE,
	payload: title,
})

export const changePageSize = (num: string) => ({
	type: ActionTypes.CHANGE_PAGESIZE,
	payload: num,
})
