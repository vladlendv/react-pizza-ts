import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type PizzaList = {
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
  id: any
}

enum FetchStatus {
  Loading = 'loading',
  Success = 'succeeded',
  Failed = 'failed'
}

type PizzaState = {
  pizzaList: PizzaList[]
  status: FetchStatus
  errorMessage: string
}

export type Sort = {
  type: string
  title: string
  id: number
  desc?: string
}

type FetchPizzaProps = {
  activeSort: Sort
  activeCategory: number
}

const initialState: PizzaState = {
  pizzaList: [],
  status: FetchStatus.Loading,
  errorMessage: "",
}

export const fetchPizza = createAsyncThunk(
  "pizza/requestStatus",
  async (params: FetchPizzaProps) => {
    const API_URL = "https://64ba3cb25e0670a501d5d86e.mockapi.io/pizza"
    const { activeSort, activeCategory } = params
    const { data } = await axios.get(
      `${API_URL}?sortBy=${activeSort.type}${
        activeSort.desc === "asc"
          ? "&order=asc"
          : activeSort.desc === "desc"
          ? "&order=desc"
          : ""
      }${activeCategory > 0 ? "&category=" + activeCategory : ""}`
    )
    
    return data as PizzaList[]
  }
)

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaList[]>) {
      state.pizzaList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = FetchStatus.Loading
    })
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzaList = action.payload
      state.status = FetchStatus.Success
    })
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = FetchStatus.Failed
      state.errorMessage = action.error.code + ": " + action.error.message
    })
  },
})

export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer
