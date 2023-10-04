import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Answers.module.scss"
import { memo, useEffect, useState } from "react"
import { IAnswer, AnswerBlock } from "entities/Answer"
import { fetchAnswerById } from "../model/services/fetchAnswersById"

export interface AnswerProps {
	className?: string
	id: string
}

export const Answers = memo((props: AnswerProps) => {
	const { className, id } = props
	const [isAnswersLoading, setIsAnswersLoading] = useState(false)
	const [answers, setAnswers] = useState<IAnswer[]>([])

	useEffect(() => {
		fetchAnswerById({ id: id ?? "44792241", setIsLoading: setIsAnswersLoading }).then((data) =>
			setAnswers(data.items)
		)
	}, [id])

	return (
		<div className={classNames(cls.Answers, {}, [className])}>
			{answers?.map((answer) => (
				<AnswerBlock
					isLoading={isAnswersLoading}
					answer={answer}
					key={answer.answer_id}
				/>
			))}
		</div>
	)
})
