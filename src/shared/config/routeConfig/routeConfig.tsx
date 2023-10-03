import { MainPage } from "pages/MainPage"
import { QuestionPage } from "pages/QuestionPage"
import { RouteProps } from "react-router-dom"
import { PageError } from "widgets/PageError"

export enum AppRoutes {
	MAIN = "main",
	QUESTION = "question",
	NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.QUESTION]: "/question/",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
	},
	[AppRoutes.QUESTION]: {
		element: <QuestionPage />,
		path: RoutePath.question + ":id",
	},
	[AppRoutes.NOT_FOUND]: {
		element: <PageError />,
		path: RoutePath.not_found,
	},
}
