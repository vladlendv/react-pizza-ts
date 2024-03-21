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
        !state.currentPizzaCount.find((item) => item.title === action.payload.title)
      ) {
        console.log('add new item counter')
        state.currentPizzaCount.push({
          id: action.payload.id,
          title: action.payload.title,
          count: 0,
        })
      }

      switch (action.payload.type) {
        case "increase":
          state.currentPizzaCount.forEach((item) => {
            if (item.title === action.payload.title) {
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
      state.currentPizzaCount.forEach(item => item.title === action.payload ? item.count = item.count - 1 : item.count)
    },
  },
})

export const {
  setCurrentPizzaCount,
  clearCurrentPizzaCount,
  removeCurrentPizzaCount,
} = pizzaSlice.actions

export default pizzaSlice.reducer
