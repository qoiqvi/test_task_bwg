import { classNames } from "shared/lib/classNames/classNames"
import cls from "./QuestionBlock.module.scss"
import { memo, useEffect, useState } from "react"
import { Question } from "entities/Question"
import { fetchQuestionById } from "../model/fetchQuestionById"
import { ParsedBlock } from "entities/ParsedBlock"
import { UserInfoBlock } from "entities/User"

export interface QuestionBlockProps {
	className?: string
	id: string
}

export const QuestionBlock = memo((props: QuestionBlockProps) => {
	const { className, id } = props
	const [isQuestionLoading, setIsQuestionLoading] = useState(false)
	const [question, setQuestion] = useState<Question>()

	useEffect(() => {
		fetchQuestionById({ id: id, setIsLoading: setIsQuestionLoading }).then((data) => setQuestion(data.items[0]))
	}, [id])

	return (
		<div>
			<h1 className={cls.title}>Вопрос:</h1>
			<div className={classNames(cls.QuestionBlock, {}, [className])}>
				{question ? (
					<>
						<UserInfoBlock
							user={question?.owner}
							isLoading={isQuestionLoading}
						/>
						<div className={cls.question}>
							<ParsedBlock
								isLoading={isQuestionLoading}
								entity={question}
							/>
						</div>
					</>
				) : null}
			</div>
		</div>
	)
})
