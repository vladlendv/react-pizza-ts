import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type Id = number | string

export type Item = {
  title: string
  type: number
  size: number
  price: number
  imageUrl: string
  id: Id
  currentPizzaCount?: any
}

export type CartState = {
  totalPrice: number
  totalPizzaCount: number
  orderList: Item[]
}

const initialState: CartState = {
  totalPrice: 0,
  totalPizzaCount: 0,
  orderList: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      if (!state.orderList.find((item) => item.id === action.payload.id)) {
        state.orderList.push({ ...action.payload, currentPizzaCount: 1 })
      } else {
        state.orderList.forEach((item) => {
          if (item.currentPizzaCount && item.id === action.payload.id) {
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
    setDataFromLocalStorage(state, action) {
      state.orderList = action.payload.list
      state.totalPizzaCount = action.payload.count
      state.totalPrice = action.payload.price
    },
    removeItem(state, action: PayloadAction<Item>) {
      state.orderList.forEach((item) => {
        if (item.currentPizzaCount && item.id === action.payload.id) {
          if (item.currentPizzaCount > 0) item.currentPizzaCount -= 1
        }
      })

      state.orderList = state.orderList.filter(
        (item) => item.currentPizzaCount && item.currentPizzaCount > 0
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
    removeByType(state, action: PayloadAction<Id>) {
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

export const { addItem, removeItem, clearItems, removeByType, setDataFromLocalStorage } =
  cartSlice.actions
export default cartSlice.reducer
