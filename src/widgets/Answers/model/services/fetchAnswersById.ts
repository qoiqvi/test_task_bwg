import { Data } from "shared/types/Data"
import { IAnswer } from "entities/Answer"
import { Api } from "shared/api"

interface fetchAnswerByIdProps {
	id: string
	setIsLoading: (arg: boolean) => void
}

export async function fetchAnswerById({ id, setIsLoading }: fetchAnswerByIdProps): Promise<Data<IAnswer>> {
	setIsLoading(true)
	try {
		const data = await Api.get(`/questions/${id}/answers`, {
			params: {
				filter: "!6WPIomp1ageEa",
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
