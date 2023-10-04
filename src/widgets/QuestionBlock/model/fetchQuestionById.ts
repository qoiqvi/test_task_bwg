import { Data } from "shared/types/Data"
import { Question } from "entities/Question"
import { Api } from "shared/api"

interface fetchQuestionByIdProps {
	id: string
	setIsLoading: (arg: boolean) => void
}

export async function fetchQuestionById({ id, setIsLoading }: fetchQuestionByIdProps): Promise<Data<Question>> {
	setIsLoading(true)
	try {
		const data = await Api.get(`/questions/${id}`, {
			params: {
				filter: "!6WPIomnMOOD*e",
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
