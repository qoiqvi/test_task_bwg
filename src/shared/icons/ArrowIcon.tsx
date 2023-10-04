export interface ArrowIconProps {
	className?: string
	direction: "top" | "bottom"
}

export const ArrowIcon = (props: ArrowIconProps) => {
	const { className, direction = "top" } = props
	return (
		<svg
			style={{ transform: direction === "bottom" ? "rotate(180deg)" : "" }}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M12 19V5"
				stroke="#575757"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5 12L12 5L19 12"
				stroke="#575757"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
