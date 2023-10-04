import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MainPage.module.scss"
import { Page } from "widgets/Page"
import { QuestionsTable } from "widgets/QuestionsTable"
import { SortAndSearch } from "widgets/SortAndSearch"

const MainPage = () => {
	return (
		<Page className={classNames(cls.MainPage, {}, [])}>
			<SortAndSearch />
			<QuestionsTable />
		</Page>
	)
}

export default MainPage
