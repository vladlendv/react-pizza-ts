import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type SearchParams = {
  type: string
  title: string
  id: number
  desc?: string
}

export type SearchCategories = {
  name: string
  id: number
}

type ActiveSortObj = {
  type: string
  title: string
  id: number
}

export type SearchState = {
  sortParams: SearchParams[]
  activeSort: ActiveSortObj
  categories: SearchCategories[]
  activeCategory: number
  searchParams: string | null
  searchText: string
}

const initialState: SearchState = {
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
  activeCategory: 0,
  searchParams: null,
  searchText: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setActiveSort: (state, action: PayloadAction<ActiveSortObj>) => {
      state.activeSort = action.payload
    },
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload
    },
    setSearchText: (state, action: PayloadAction<string>) => {
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
  setSearchText,
  removeSearchText,
} = searchSlice.actions
export default searchSlice.reducer
