import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SortAndSearch.module.scss"
import { memo } from "react"
import { SortBlock } from "features/Sort"
import { SearchBlock } from "features/Search"

export interface SortAndSearchProps {
	className?: string
}

export const SortAndSearch = memo((props: SortAndSearchProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.SortAndSearch, {}, [className])}>
			<SortBlock />
			<SearchBlock className={cls.search} />
		</div>
	)
})
