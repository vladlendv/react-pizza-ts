import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегитарианские", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 },
  ],
  active: 0,
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload
    },
  },
})

export const { setActive } = categoriesSlice.actions
export default categoriesSlice.reducer
