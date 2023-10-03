export interface ShortQuestion {
	tags: string[]
	owner: {
		account_id: number
		reputation: number
		user_id: number
		user_type: string
		accept_rate: number
		profile_image: string
		display_name: string
		link: string
	}
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
