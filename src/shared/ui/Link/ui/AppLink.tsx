import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"
import { Link, LinkProps } from "react-router-dom"
import { memo } from "react"

export type AppLinkTheme = "primary" | "secondary" | "inverted_primary" | "inverted_secondary" | "red"

export interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
	const { className, theme = "primary", children, to, ...other } = props
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...other}
		>
			{children}
		</Link>
	)
})
