import { QueryParamsStateSchema } from "widgets/SortAndSearch"

export function addQueryParams(params: QueryParamsStateSchema) {
	const searchParams = new URLSearchParams(window.location.search)
	Object.entries(params).forEach(([name, value]) => {
		if (value !== undefined) {
			searchParams.set(name, value)
			window.location.search
		}
	})
	window.location.search = `?${searchParams.toString()}`
	return `?${searchParams.toString()}`
}

export function getQueryParams(params: QueryParamsStateSchema) {
	window.history.pushState(null, "", addQueryParams(params))
}
