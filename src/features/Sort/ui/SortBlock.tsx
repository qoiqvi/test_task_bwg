import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SortBlock.module.scss"
import { memo, useCallback } from "react"
import { pageSize, sortFieds } from "../model/config"
import { useAppSelector } from "shared/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { SortBy, SortOrder, changeOrder, changePageSize, changeSort } from "widgets/SortAndSearch"
import { Select } from "shared/ui/Listbox"
import { Button } from "shared/ui/Button"
import { ArrowIcon } from "shared/icons/ArrowIcon"

export interface SortBlockProps {
	className?: string
}

export const SortBlock = memo((props: SortBlockProps) => {
	const { className } = props
	const sort = useAppSelector((state) => state.queryParams.sort)
	const pagesize = useAppSelector((state) => state.queryParams.pagesize)
	const dispatch = useDispatch()

	const onChangeSortField = useCallback(
		(option: SelectOptions) => {
			dispatch(changeSort(option.value as SortBy))
		},
		[dispatch]
	)

	const onChangeSortOrder = useCallback(
		(value: SortOrder) => {
			dispatch(changeOrder(value))
		},
		[dispatch]
	)

	const onChangePageSize = useCallback(
		(option: SelectOptions) => {
			dispatch(changePageSize(option.value as string))
		},
		[dispatch]
	)

	const sortDirection = useAppSelector((state) => state.queryParams.order)

	return (
		<div className={classNames(cls.SortBlock, {}, [className])}>
			<Select
				options={sortFieds}
				value={sort}
				placeholder="Сортировать по"
				onSelect={onChangeSortField}
			/>
			<Select
				options={pageSize}
				value={pagesize}
				placeholder="Показать"
				onSelect={onChangePageSize}
			/>
			<Button
				square
				size="size_xl"
				theme="clear"
				className={cls.iconBtn}
				onClick={() => onChangeSortOrder("desc")}
				style={{ border: sortDirection === "desc" ? "3px solid var(--accent-color)" : "none" }}
			>
				<ArrowIcon direction="bottom" />
			</Button>
			<Button
				theme="clear"
				square
				size="size_xl"
				className={cls.iconBtn}
				onClick={() => onChangeSortOrder("asc")}
				style={{ border: sortDirection === "asc" ? "3px solid var(--accent-color)" : "none" }}
			>
				<ArrowIcon direction="top" />
			</Button>
		</div>
	)
})
