import { classNames } from "shared/lib/classNames/classNames"
import cls from "./QuestionsTable.module.scss"
import { MutableRefObject, memo, useCallback, useEffect, useRef, useState } from "react"
import { Tag } from "entities/Tag"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { AppLink } from "shared/ui/Link"
import { ShortQuestion } from "entities/Question"
import { useAppSelector } from "shared/hooks/useAppSelector"
import { fetchQuestionsByParams } from "../model/services/fetchQuestionsByParams"
import { sklonenie } from "../model/utils/sklonenie/sklonenie"
import { Avatar } from "shared/ui/Avatar"
import { useInfiniteScroll } from "shared/hooks/useInfiniteScroll/useInfiniteScroll"
import { fetchNexthQuestions } from "../model/services/fetchNextQuestions"
import parser from "html-react-parser"
import { useDispatch } from "react-redux"

export interface QuestionsTableProps {
	className?: string
}

export const QuestionsTable = memo((props: QuestionsTableProps) => {
	const { className } = props
	const [questions, setQuestions] = useState<ShortQuestion[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const hasMore = useRef(true)
	const params = useAppSelector((state) => state.queryParams)
	const dispatch = useDispatch()

	// const onScrollEnd = useCallback(() => {
	// 	if (!isLoading && hasMore && questions?.length) {
	// 		fetchNexthQuestions({ params, hasMore: hasMore.current, isLoading, setIsLoading }).then((data) =>
	// 			setQuestions((prev) => [...prev, ...data.items])
	// 		)
	// 	}
	// }, [isLoading, params, questions.length])

	// useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef })

	useEffect(() => {
		fetchQuestionsByParams({ params, setIsLoading }).then((data) => {
			hasMore.current = data.has_more
			setQuestions(data?.items)
		})
		console.log("fetch")
	}, [params])

	return (
		<div
			className={classNames(cls.container, {}, [className])}
			ref={wrapperRef}
		>
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
										<td>
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
			<div
				style={{ display: isLoading ? "none" : "block" }}
				className={cls.trigger}
				ref={triggerRef}
			/>
		</div>
	)
})

// const onScrollEnd = useCallback(() => {
// 	if (questions.length && hasMore && !isLoading) {
// 		dispatch(changePage(params.page + 1))
// 		fetchNexthQuestions({ params, hasMore: hasMore.current, isLoading, setIsLoading }).then((data) =>
// 			setQuestions((prev) => (prev.length ? [...prev, ...data.items] : data))
// 		)
// 	}
// }, [dispatch, isLoading, params, questions.length])

// useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef })
