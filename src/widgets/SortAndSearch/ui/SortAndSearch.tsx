import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SortAndSearch.module.scss"
import { memo } from "react"
import { SortBlock } from "features/Sort"
import { SearchBlock } from "features/Search"
import { Button } from "shared/ui/Button"
import { useDispatch } from "react-redux"
import { changePage } from "../model/actions"
import { useAppSelector } from "shared/hooks/useAppSelector"

export interface SortAndSearchProps {
	className?: string
}

export const SortAndSearch = memo((props: SortAndSearchProps) => {
	const { className } = props
	const dispatch = useDispatch()
	const page = useAppSelector((state) => state.queryParams.page)
	return (
		<div className={classNames(cls.SortAndSearch, {}, [className])}>
			<SortBlock />
			<SearchBlock className={cls.search} />
			{/* <Button onClick={() => dispatch(changePage(page + 1))}>Следующая</Button> */}
		</div>
	)
})
