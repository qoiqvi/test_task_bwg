import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { AppLink } from "shared/ui/Link"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.infoContainer}>
				<AppLink
					to={"/"}
					className={cls.link}
				>
					Домой
				</AppLink>
				<AppLink
					to={"https://github.com/qoiqvi"}
					target="_blank"
					className={cls.dimitri}
				>
					dmitrivasch
				</AppLink>
				<AppLink
					className={cls.link}
					to={"/"}
				>
					Выйти
				</AppLink>
			</div>
		</div>
	)
})
