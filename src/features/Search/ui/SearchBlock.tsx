import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchBlock.module.scss"
import { memo, useCallback, useState } from "react"
import { Input } from "shared/ui/Input"
import { useDispatch } from "react-redux"
import { changeTitle } from "widgets/SortAndSearch"
import { useAppSelector } from "shared/hooks/useAppSelector"
import { useDebounce } from "shared/hooks/useDebounce/useDebounce"

export interface SearchBlockProps {
	className?: string
}

export const SearchBlock = memo((props: SearchBlockProps) => {
	const { className } = props
	const dispatch = useDispatch()
	const title = useAppSelector((state) => state.queryParams.title)
	const [query, setQuery] = useState(title)

	const fetchData = useCallback(() => {
		dispatch(changeTitle(query))
		console.log("debounced")
	}, [dispatch, query])

	const debouncedFetchData = useDebounce(fetchData, 500)

	const onChangeSearch = useCallback(
		(value: string) => {
			setQuery(value)
			debouncedFetchData()
		},
		[debouncedFetchData]
	)
	return (
		<div className={classNames(cls.SearchBlock, {}, [className])}>
			<Input
				value={query}
				onChange={onChangeSearch}
				placeholder="Поиск по заголовку"
			/>
		</div>
	)
})
