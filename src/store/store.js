import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./sliceCategories"

export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
})
