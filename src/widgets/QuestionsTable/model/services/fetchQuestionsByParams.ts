import { ShortQuestion } from "entities/Question"
import { Api } from "shared/api"
import { Data } from "shared/types/Data"
import { QueryParamsStateSchema } from "widgets/SortAndSearch"

interface fetchQuestionsByParamsProps {
	params: QueryParamsStateSchema
	setIsLoading: (arg: boolean) => void
}

export async function fetchQuestionsByParams({
	params,
	setIsLoading,
}: fetchQuestionsByParamsProps): Promise<Data<ShortQuestion>> {
	const { order, page, pagesize, sort, title } = params
	setIsLoading(true)
	try {
		const data = await Api.get("/search/advanced", {
			params: {
				order,
				sort,
				title,
				pagesize,
				page: 1,
				filter: "!0Xl1gtmW(_BbDPGUp1Z8NFfdi",
			},
		})

		if (!data) {
			throw new Error()
		}

		return data.data
	} catch (error: any) {
		console.error(error)
		return error
	} finally {
		setIsLoading(false)
	}
}
