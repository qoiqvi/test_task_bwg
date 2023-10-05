import { classNames } from "shared/lib/classNames/classNames"
import cls from "./TablePagination.module.scss"
import { memo, useCallback } from "react"
import { Button } from "shared/ui/Button"
import { useAppSelector } from "shared/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { changePage } from "widgets/SortAndSearch"

export interface TablePaginationProps {
	className?: string
}

export const TablePagination = memo((props: TablePaginationProps) => {
	const { className } = props
	const currPage = useAppSelector((state) => state.queryParams.page)
	const dispatch = useDispatch()

	const switchPage = useCallback(
		(type: "decrese" | "increse") => {
			if (type === "decrese") {
				dispatch(changePage(String(+currPage - 1)))
			}
			if (type === "increse") {
				dispatch(changePage(String(+currPage + 1)))
			}
		},
		[currPage, dispatch]
	)

	return (
		<div className={classNames(cls.TablePagination, {}, [className])}>
			<Button
				theme="outlined"
				onClick={() => switchPage("decrese")}
				disabled={currPage === "1"}
			>
				Предыдущая
			</Button>
			<Button
				theme="outlined"
				onClick={() => switchPage("increse")}
			>
				Следующая
			</Button>
		</div>
	)
})
