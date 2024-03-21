import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPizzaCount: [],
}

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setCurrentPizzaCount: (state, action) => {
      if (
        !state.currentPizzaCount.find((item) => item.id === action.payload.id)
      ) {
        state.currentPizzaCount.push({
          id: action.payload.id,
          count: 0,
        })
      }

      switch (action.payload.type) {
        case "increase":
          state.currentPizzaCount.forEach((item) => {
            if (item.id === action.payload.id) {
              item.count++
            }
          })
          break
        case "decrease":
          break

        default:
          break
      }
    },
    clearCurrentPizzaCount: (state) => {
      state.currentPizzaCount = []
    },
    removeCurrentPizzaCount: (state, action) => {
      state.currentPizzaCount = state.currentPizzaCount.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const {
  setCurrentPizzaCount,
  clearCurrentPizzaCount,
  removeCurrentPizzaCount,
} = pizzaSlice.actions

export default pizzaSlice.reducer
