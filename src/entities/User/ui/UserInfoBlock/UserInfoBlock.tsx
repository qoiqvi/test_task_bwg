import { classNames } from "shared/lib/classNames/classNames"
import cls from "./UserInfoBlock.module.scss"
import { memo } from "react"
import { User } from "../../model/types"
import { Avatar } from "shared/ui/Avatar"
import { Skeleton } from "shared/ui/Skeleton"

export interface UserInfoBlockProps {
	className?: string
	user: User
	isLoading: boolean
}

export const UserInfoBlock = memo((props: UserInfoBlockProps) => {
	const { className, user, isLoading } = props
	if (isLoading) {
		return (
			<div className={classNames(cls.UserInfoBlock, {}, [className])}>
				<Skeleton
					className={cls.profile_image}
					width={85}
					height={85}
				/>
				<div className={cls.textInfo}>
					<Skeleton
						height={26}
						width={100}
						className={cls.nickname}
					/>
					<Skeleton
						height={20}
						width={80}
						className={cls.type}
					/>
				</div>
			</div>
		)
	}
	return (
		<div className={classNames(cls.UserInfoBlock, {}, [className])}>
			<Avatar
				src={user.profile_image}
				alt="profile_image"
				size={85}
			/>
			<div className={cls.textInfo}>
				<h1 className={cls.nickname}>{user.display_name}</h1>
				<h4 className={cls.type}>{user.user_type}</h4>
			</div>
		</div>
	)
})
