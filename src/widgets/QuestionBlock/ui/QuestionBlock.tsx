import { classNames } from "shared/lib/classNames/classNames"
import cls from "./QuestionBlock.module.scss"
import { memo, useEffect, useState } from "react"
import { Question } from "entities/Question"
import { fetchQuestionById } from "../model/fetchQuestionById"
import { ParsedBlock } from "entities/ParsedBlock"

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
		<div className={classNames(cls.QuestionBlock, {}, [className])}>
			<div className={cls.question}>
				{question ? (
					<ParsedBlock
						isLoading={isQuestionLoading}
						entity={question}
					/>
				) : null}
			</div>
		</div>
	)
})
