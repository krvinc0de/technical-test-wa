import { configureStore } from '@reduxjs/toolkit'
import paginationSlice from './paginationSlice'

export const store = configureStore({
  reducer: {
    pagination: paginationSlice
  },
})