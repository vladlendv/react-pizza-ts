import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  pizzaList: [],
  status: "loading",
  errorMessage: "",
}

export const fetchPizza = createAsyncThunk(
  "pizza/requestStatus",
  async (params) => {
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
    return data
  }
)

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.pizzaList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzaList = action.payload
      state.status = "succeeded"
    })
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = "failed"
      state.errorMessage = action.error.code + ": " + action.error.message
    })
  },
})

export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer
