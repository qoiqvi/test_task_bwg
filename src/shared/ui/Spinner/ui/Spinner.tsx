import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Spinner.module.scss"
import { memo } from "react"

export interface SpinnerProps {
	className?: string
}

export const Spinner = memo((props: SpinnerProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.spinnerContainer, {}, [className])}>
			<div className={cls.spinner}></div>
		</div>
	)
})
