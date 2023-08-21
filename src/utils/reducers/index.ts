import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~/utils/reducers/store'

import type { TypedUseSelectorHook } from 'react-redux'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
