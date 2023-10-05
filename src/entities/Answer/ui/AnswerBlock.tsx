import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AnswerBlock.module.scss"
import { memo } from "react"
import { IAnswer } from "../model/types"
import { UserInfoBlock } from "entities/User"
import { ParsedBlock } from "entities/ParsedBlock"

export interface AnswerBlockProps {
	className?: string
	answer: IAnswer
	isLoading: boolean
}

export const AnswerBlock = memo((props: AnswerBlockProps) => {
	const { className, answer, isLoading } = props

	return (
		<div className={classNames(cls.AnswerBlock, {}, [className])}>
			<UserInfoBlock
				user={answer.owner}
				isLoading={isLoading}
			/>
			<div className={cls.answerContainer}>
				<ParsedBlock
					entity={answer}
					isLoading={isLoading}
				/>
			</div>
		</div>
	)
})
