import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Tag.module.scss"
import { memo } from "react"

export interface TagProps {
	className?: string
	title: string
}

export const Tag = memo((props: TagProps) => {
	const { className, title } = props
	return <div className={classNames(cls.Tag, {}, [className])}>{title}</div>
})
