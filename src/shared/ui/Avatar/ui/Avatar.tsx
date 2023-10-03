import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"
import { CSSProperties, useMemo } from "react"

export interface AvatarProps {
	className?: string
	src: string | undefined
	size?: number
	alt?: string
}

export const Avatar = (props: AvatarProps) => {
	const { className, src, size, alt } = props

	const styles = useMemo<CSSProperties>(() => {
		return {
			height: size || 100,
			width: size || 100,
		}
	}, [size])

	return (
		<img
			src={src || "src/shared/assets/profile_fallback.jpg"}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, {}, [className])}
		/>
	)
}
