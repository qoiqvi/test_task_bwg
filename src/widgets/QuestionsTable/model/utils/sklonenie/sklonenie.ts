export function sklonenie(count: number) {
	const cases = [2, 0, 1, 1, 1, 2]
	const titles = ["ответ", "ответа", "ответов"]
	const index = count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]

	return `${count} ${titles[index]}`
}
