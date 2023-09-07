import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./categoriesSlice"
import sortSlice from "./sortSlice"

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    sort: sortSlice,
  },
})
