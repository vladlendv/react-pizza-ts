import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sortParams: [
    { type: "rating", title: "По рейтингу", id: 0 },
    { type: "price", desc: "desc", id: 1, title: "По убыванию цены" },
    { type: "price", desc: "asc", id: 2, title: "По возрастанию цены" },
    { type: "title", id: 3, title: "По названию" },
  ],
  activeSort: { type: "rating", title: "По рейтингу", id: 0 },
  categories: [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегитарианские", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 },
  ],
  active: 0,
  searchParams: null,
  searchText: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setActiveSort: (state, action) => {
      state.activeSort = action.payload
    },
    setActiveCategory: (state, action) => {
      state.active = action.payload
    },
    setSearchParams: (state, action) => {
      state.activeSort = action.payload.sort
      state.active = Number(action.payload.category)
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    },
    removeSearchText: (state) => {
      state.searchText = ""
    },
  },
})

export const {
  setActiveSort,
  setActiveCategory,
  setSearchParams,
  setSearchText,
  removeSearchText,
} = searchSlice.actions
export default searchSlice.reducer
