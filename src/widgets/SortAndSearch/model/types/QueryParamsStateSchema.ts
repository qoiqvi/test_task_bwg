export type SortOrder = "desc" | "asc"

export type SortBy = "activity" | "votes" | "creation" | "relevance"

export interface Action {
	type: string
	payload: any
}

export interface QueryParamsStateSchema {
	order: SortOrder
	sort: SortBy
	title: string
	page: number
	pagesize: number
}
