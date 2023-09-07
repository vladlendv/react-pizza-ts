import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sortParams: [
    { type: "rating", title: "По рейтингу", id: 0 },
    { type: "price", desc: "desc", id: 1, title: "По убыванию цены" },
    { type: "price", desc: "asc", id: 2, title: "По возрастанию цены" },
    { type: "title", id: 3, title: "По названию" },
  ],
  activeSort: { type: "rating", title: "По рейтингу", id: 0 },
}

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setActiveSort: (state, action) => {
      state.activeSort = action.payload
    },
  },
})

export const { setActiveSort } = sortSlice.actions
export default sortSlice.reducer
