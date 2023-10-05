import { classNames } from "shared/lib/classNames/classNames"
import cls from "./QuestionsTable.module.scss"
import { memo, useEffect, useRef, useState } from "react"
import { Tag } from "entities/Tag"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { AppLink } from "shared/ui/Link"
import { ShortQuestion } from "entities/Question"
import { useAppSelector } from "shared/hooks/useAppSelector"
import { fetchQuestionsByParams } from "../model/services/fetchQuestionsByParams"
import { sklonenie } from "../model/utils/sklonenie/sklonenie"
import { Avatar } from "shared/ui/Avatar"
import parser from "html-react-parser"
import { Spinner } from "shared/ui/Spinner"

export interface QuestionsTableProps {
	className?: string
}

export const QuestionsTable = memo((props: QuestionsTableProps) => {
	const { className } = props
	const [questions, setQuestions] = useState<ShortQuestion[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const hasMore = useRef(true)
	const params = useAppSelector((state) => state.queryParams)
	const page = useAppSelector((state) => state.queryParams.page)
	const sort = useAppSelector((state) => state.queryParams.sort)
	const title = useAppSelector((state) => state.queryParams.title)
	const pagesize = useAppSelector((state) => state.queryParams.pagesize)
	const order = useAppSelector((state) => state.queryParams.order)

	useEffect(() => {
		fetchQuestionsByParams({ params: { page, sort, title, pagesize, order }, setIsLoading }).then((data) => {
			hasMore.current = data.has_more
			setQuestions(data?.items)
		})
	}, [order, page, pagesize, sort, title])

	if (isLoading) {
		return (
			<div className={cls.spinnerCont}>
				<Spinner />
			</div>
		)
	}

	return (
		<div className={classNames(cls.container, {}, [className])}>
			<div className={cls.QuestionsTable}>
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
						{questions?.length > 0
							? questions.map((question) => (
									<tr key={question.question_id}>
										<td>
											<div className={cls.owner}>
												<Avatar
													src={question.owner.profile_image || ""}
													alt="profile icon"
													size={80}
												/>
												<p className={cls.nickname}>{parser(question.owner.display_name)}</p>
											</div>
										</td>
										<td>
											<AppLink to={`${RoutePath.question}/${question.question_id}`}>
												{parser(question.title)}
											</AppLink>
										</td>
										<td className={cls.answers}>
											{question.answer_count > 0
												? sklonenie(question.answer_count)
												: `Еще никто не ответил`}
										</td>
										<td className={cls.tagsContainer}>
											{question?.tags.map((tag) => (
												<Tag
													key={tag}
													title={tag}
												/>
											))}
										</td>
									</tr>
							  ))
							: null}
					</tbody>
				</table>
			</div>
		</div>
	)
})
