import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchBlock.module.scss"
import { memo, useCallback } from "react"
import { Input } from "shared/ui/Input"
import { useDispatch } from "react-redux"
import { changeTitle } from "widgets/SortAndSearch"
import { useAppSelector } from "shared/hooks/useAppSelector"

export interface SearchBlockProps {
	className?: string
	// params: QueryParamsStateSchema
}

export const SearchBlock = memo((props: SearchBlockProps) => {
	const { className } = props
	const dispatch = useDispatch()
	const title = useAppSelector((state) => state.queryParams.title)

	const onChangeSearch = useCallback(
		(value: string) => {
			dispatch(changeTitle(value))
		},
		[dispatch]
	)
	return (
		<div className={classNames(cls.SearchBlock, {}, [className])}>
			<Input
				value={title}
				onChange={onChangeSearch}
				placeholder="Поиск по заголовку"
			/>
		</div>
	)
})
