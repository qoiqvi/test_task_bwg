import { User } from "entities/User"

export interface IAnswer {
	tags: string[]
	owner: User
	is_accepted: boolean
	score: number
	last_activity_date: number
	last_edit_date: number
	creation_date: number
	answer_id: number
	question_id: number
	content_license: string
	title: string
	body: string
}
