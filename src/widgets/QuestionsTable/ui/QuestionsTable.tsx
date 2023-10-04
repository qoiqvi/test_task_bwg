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
import { Spinner } from "shared/ui/Spinner"

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

	// const onScrollEnd = useCallback(() => {
	// 	if (!isLoading) {
	// 		fetchNexthQuestions({ params, hasMore: hasMore.current, isLoading, setIsLoading }).then((data) =>
	// 			setQuestions((prev) => (prev.length ? [...prev, data.items] : data))
	// 		)
	// 	}
	// }, [isLoading, params])

	// useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef })

	// useEffect(() => {
	// 	fetchQuestionsByParams({ params, setIsLoading }).then((data) => {
	// 		hasMore.current = data.has_more
	// 		setQuestions(data.items)
	// 	})
	// }, [params])

	return (
		<div
			className={classNames(cls.container, {}, [className])}
			ref={wrapperRef}
		>
			<div className={cls.QuestionsTable}>
				{/* <table className={cls.table}>
					<thead>
						<tr>
							<th>Автор</th>
							<th>Топик</th>
							<th>Ответы</th>
							<th>Тэги</th>
						</tr>
					</thead>
					<tbody>
						{questions?.length > 1
							? questions.map((question) => (
									<tr key={question.question_id}>
										<td>
											<div className={cls.owner}>
												<Avatar
													src={question.owner?.profile_image || ""}
													alt="profile icon"
													size={80}
												/>
												<p
													className={cls.nickname}
													dangerouslySetInnerHTML={{
														__html: question.owner?.display_name,
													}}
												/>
											</div>
										</td>
										<td>
											<AppLink
												to={`${RoutePath.question}${question.question_id}`}
												dangerouslySetInnerHTML={{ __html: question.title }}
											/>
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
				</table> */}
				{isLoading ? <Spinner /> : null}
			</div>
			<div
				style={{ display: isLoading ? "none" : "block" }}
				className={cls.trigger}
				ref={triggerRef}
			/>
		</div>
	)
})

{
	/* <div className={classNames(cls.QuestionsTable, {}, [className])}>
				<div className={cls.table}>
					<Skeleton
						className={cls.skeleton}
						border="30px"
					/>
				</div>
			</div> */
}
