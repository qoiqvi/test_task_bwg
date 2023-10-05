import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SortAndSearch.module.scss"
import { memo } from "react"
import { SortBlock } from "features/Sort"
import { SearchBlock } from "features/Search"
import { TablePagination } from "features/TablePagination"

export interface SortAndSearchProps {
	className?: string
}

export const SortAndSearch = memo((props: SortAndSearchProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.SortAndSearch, {}, [className])}>
			<SortBlock />
			<TablePagination className={cls.pagination} />
			<SearchBlock className={cls.search} />
		</div>
	)
})
