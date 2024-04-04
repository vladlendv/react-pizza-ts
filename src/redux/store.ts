import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./searchSlice"
import cartReducer from "./cartSlice"
import pizzaReducer from "./pizzaSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
