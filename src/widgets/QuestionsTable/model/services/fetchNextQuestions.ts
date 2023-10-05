import { QueryParamsStateSchema } from "widgets/SortAndSearch"
import { fetchQuestionsByParams } from "./fetchQuestionsByParams"

interface fetchNextQuestionsProps {
	params: QueryParamsStateSchema
	hasMore: boolean
	isLoading: boolean
	setIsLoading: (arg: boolean) => void
}

export async function fetchNexthQuestions({ params, hasMore, isLoading, setIsLoading }: fetchNextQuestionsProps) {
	try {
		if (hasMore && !isLoading) {
			return fetchQuestionsByParams({ params, setIsLoading })
		}
	} catch (error: any) {
		console.error(error)
		return error
	}
}
