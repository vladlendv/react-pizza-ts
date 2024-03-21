import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  orderList: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalCount += 1
      state.totalPrice += action.payload.price
      state.orderList.push(action.payload)
    },
    removeItem(state, action) {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload.id
      )
      if (state.totalCount > 0) state.totalCount -= 1
      state.totalPrice -= action.payload.price
    },
    clearItems(state) {
      state.totalCount = 0
      state.totalPrice = 0
      state.orderList = []
    },
  },
})

export const { addItem, removeItem, clearItems } = cartSlice.actions
export default cartSlice.reducer
