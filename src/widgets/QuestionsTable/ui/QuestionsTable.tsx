import { classNames } from "shared/lib/classNames/classNames"
import cls from "./QuestionsTable.module.scss"
import { memo, useEffect, useState } from "react"
import { Tag } from "entities/Tag"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { AppLink } from "shared/ui/Link"
import { ShortQuestion } from "entities/Question"
import { useAppSelector } from "shared/hooks/useAppSelector"
import { fetchQuestionsByParams } from "../model/services/fetchQuestionsByParams"
import { sklonenie } from "../model/utils/sklonenie/sklonenie"
import { Avatar } from "shared/ui/Avatar"

export interface QuestionsTableProps {
	className?: string
}

export const QuestionsTable = memo((props: QuestionsTableProps) => {
	const { className } = props
	const [questions, setQuestions] = useState<ShortQuestion[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const params = useAppSelector((state) => state.queryParams)

	useEffect(() => {
		fetchQuestionsByParams(params, setIsLoading).then((data) => setQuestions(data))
	}, [params])

	return (
		<div className={classNames(cls.QuestionsTable, {}, [className])}>
			<table className={cls.table}>
				<thead>
					<tr>
						<th>Автор</th>
						<th>Топик</th>
						<th>Ответы</th>
						<th>Тэги</th>
					</tr>
				</thead>
				<tbody>
					{questions.map((question) => (
						<tr key={question.question_id}>
							<td>
								<div className={cls.owner}>
									<Avatar
										src={question.owner.profile_image}
										alt="profile icon"
										size={80}
									/>
									<p dangerouslySetInnerHTML={{ __html: question.owner.display_name }} />
								</div>
							</td>
							<td>
								<AppLink
									to={`${RoutePath.question}${question.question_id}`}
									dangerouslySetInnerHTML={{ __html: question.title }}
								/>
							</td>
							<td>
								{question.answer_count > 0 ? sklonenie(question.answer_count) : `Еще никто не ответил`}
							</td>
							<td className={cls.tagsContainer}>
								{question.tags.map((tag) => (
									<Tag
										key={tag}
										title={tag}
									/>
								))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
})
