import { Api } from "shared/api"
import { QueryParamsStateSchema } from "widgets/SortAndSearch"

export async function fetchQuestionsByParams(params: QueryParamsStateSchema, setIsLoading: (arg: boolean) => void) {
	const { order, page, pagesize, sort, title } = params
	setIsLoading(true)
	try {
		const data = await Api.get("/search/advanced", {
			params: {
				order,
				sort,
				title,
				pagesize,
				page,
				filter: "!0Xl1gtmW(_BbDPGUp1Z8NFfdi",
			},
		})

		console.log(data)
		console.log(data.data.items)

		return data.data.items
	} catch (error) {
		console.error(error)
		return error
	} finally {
		setIsLoading(false)
	}
}
