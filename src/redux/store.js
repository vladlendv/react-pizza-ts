import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./categoriesSlice"
import sortReducer from "./sortSlice"

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    sort: sortReducer,
  },
})
