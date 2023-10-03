import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MainPage.module.scss"
import { Page } from "widgets/Page"
import { QuestionsTable } from "widgets/QuestionsTable"

const MainPage = () => {
	return (
		<Page className={classNames(cls.MainPage, {}, [])}>
			<div>БЛОК С ФИЛЬТРАМИ</div>
			<QuestionsTable />
		</Page>
	)
}

export default MainPage
