import { classNames } from "shared/lib/classNames/classNames"
import cls from "./QuestionPage.module.scss"
import { Page } from "widgets/Page"
import { useParams } from "react-router"
import { Answers } from "widgets/Anwer"
import { QuestionBlock } from "widgets/QuestionBlock"

const QuestionPage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<Page className={classNames(cls.QuestionPage, {}, [])}>
			<QuestionBlock id={id || "123132"} />
			<Answers id={id || "123132"} />
		</Page>
	)
}

export default QuestionPage
