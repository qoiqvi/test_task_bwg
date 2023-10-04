export function getDate(timestamp: number) {
	const date = new Date(timestamp * 1000)
	const year = date.getFullYear()
	const month = date.getMonth()
	const day = date.getDate()
	return year ? `${year}-${month}-${day}` : month ? `${month}-${day}` : day
}
