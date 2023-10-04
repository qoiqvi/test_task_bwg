import { User } from "entities/User"

export interface ShortQuestion {
	tags: string[]
	owner: User
	is_answered: boolean
	view_count: number
	accepted_answer_id: number | null
	answer_count: number
	score: number
	last_activity_date: number
	creation_date: number
	question_id: number
	content_license: string
	link: string
	title: string
}

export interface Question extends ShortQuestion {
	body: string
}
