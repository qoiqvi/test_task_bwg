import { useRef, useState, type ReactNode } from "react"
import cls from "./Select.module.scss"
import { useOnClickOutside } from "shared/hooks/useOnClickOutside/useOnClickOutside"
import { classNames } from "shared/lib/classNames/classNames"

interface SelectProps {
	options: SelectOptions[]
	value: string | string[] | undefined
	placement?: "bottom-start" | "bottom-end"
	placeholder: string
	className?: string
	startIcon?: ReactNode
	onSelect: (option: SelectOptions) => void
}

export const Select = ({
	className,
	options,
	onSelect,
	value,
	placement = "bottom-start",
	startIcon,
	placeholder,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const selected = options.find((option) => option?.value === value) ?? options[0]
	const selectRef = useRef<HTMLDivElement>(null)

	const handleClose = () => setIsOpen(false)

	useOnClickOutside(selectRef, handleClose)

	const handleSelect = (option: SelectOptions) => {
		onSelect(option)
		handleClose()
	}

	return (
		<div
			className={classNames(cls.select, { [cls.isOpen]: isOpen }, [className])}
			ref={selectRef}
		>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={cls.top}
			>
				{startIcon && <span className={cls.icon}>{startIcon}</span>}
				<span className={cls.value}>{selected.value ? selected.content : placeholder}</span>
			</div>
			<div className={classNames(cls.options, {}, [cls[placement]])}>
				{options?.map((option) => {
					const isSelected = selected.value === option?.value

					return (
						<div
							onClick={() => handleSelect(option)}
							key={option.content}
							className={classNames(cls.option, { [cls.isSelected]: isSelected })}
						>
							{option?.content}
						</div>
					)
				})}
			</div>
		</div>
	)
}
