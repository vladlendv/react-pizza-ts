import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./searchSlice"
import cartReducer from "./cartSlice"
import pizzaReducer from './pizzaSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
})
