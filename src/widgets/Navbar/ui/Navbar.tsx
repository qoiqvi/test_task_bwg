import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { useAppSelector } from "shared/hooks/useAppSelector"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	const state = useAppSelector((state) => state)
	console.log(state)
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Text text={"Главная"} />
			<Text text={"Главная"} />
		</div>
	)
})
