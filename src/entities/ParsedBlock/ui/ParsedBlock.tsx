import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ParsedBlock.module.scss"
import { memo } from "react"
import parse from "html-react-parser"
import { Question } from "entities/Question"
import { IAnswer } from "entities/Answer"
import { Tag } from "entities/Tag"
import { getDate } from "shared/lib/utils"
import { Skeleton } from "shared/ui/Skeleton"

export interface ParsedBlockProps {
	className?: string
	entity: IAnswer | Question
	isLoading: boolean
}

export const ParsedBlock = memo((props: ParsedBlockProps) => {
	const { className, entity, isLoading } = props

	if (isLoading) {
		return (
			<div className={classNames(cls.ParsedBlock, {}, [className])}>
				<Skeleton
					height={700}
					width={600}
				/>
			</div>
		)
	}

	return (
		<div className={classNames(cls.ParsedBlock, {}, [className])}>
			{entity ? <h4 className={cls.creation}>{getDate(entity?.creation_date)}</h4> : null}
			<h1 className={cls.title}>{entity?.title}</h1>
			{entity?.body ? <div>{parse(entity.body)}</div> : null}
			<div className={cls.tagsContainer}>
				{entity?.tags.map((tag) => (
					<Tag
						title={tag}
						key={tag}
					/>
				))}
			</div>
		</div>
	)
})
