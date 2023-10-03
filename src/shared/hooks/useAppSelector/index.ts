import { RootState } from "app/providers/StoreProvider/RootReducer"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
