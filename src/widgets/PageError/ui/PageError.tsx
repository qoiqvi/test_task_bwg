import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PageError.module.scss"

export interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>Произошла непредвиденная ошибка</p>
			<button onClick={reloadPage}>Обновить страницу</button>
		</div>
	)
}
