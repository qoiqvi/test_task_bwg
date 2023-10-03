import { lazy } from "react"

export const QuestionPageAsync = lazy(async () => await import("./QuestionPage"))
