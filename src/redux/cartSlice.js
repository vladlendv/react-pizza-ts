import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  totalPizzaCount: 0,
  orderList: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (!state.orderList.find((item) => item.id === action.payload.id)) {
        state.orderList.push({ ...action.payload, currentPizzaCount: 1 })
      } else {
        state.orderList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.currentPizzaCount += 1
          }
        })
      }

      state.totalPizzaCount = state.orderList.reduce(
        (acc, item) => acc + item.currentPizzaCount,
        0
      )
      state.totalPrice = state.orderList.reduce(
        (acc, item) => acc + (item.price * item.currentPizzaCount || 0),
        0
      )
    },
    removeItem(state, action) {
      state.orderList.forEach((item) => {
        if (item.id === action.payload.id) {
          if (item.currentPizzaCount > 0) item.currentPizzaCount -= 1
        }
      })

      state.orderList = state.orderList.filter(
        (item) => item.currentPizzaCount > 0
      )

      state.totalPizzaCount = state.orderList.reduce(
        (acc, item) => acc + item.currentPizzaCount,
        0
      )
      state.totalPrice = state.orderList.reduce(
        (acc, item) => acc + (item.price * item.currentPizzaCount || 0),
        0
      )
    },
    removeByType(state, action) {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload
      )
      state.totalPizzaCount = state.orderList.reduce(
        (acc, item) => acc + item.currentPizzaCount,
        0
      )
      state.totalPrice = state.orderList.reduce(
        (acc, item) => acc + (item.price * item.currentPizzaCount || 0),
        0
      )
    },
    clearItems(state) {
      state.totalPizzaCount = 0
      state.totalPrice = 0
      state.orderList = []
    },
  },
})

export const { addItem, removeItem, clearItems, removeByType } =
  cartSlice.actions
export default cartSlice.reducer
