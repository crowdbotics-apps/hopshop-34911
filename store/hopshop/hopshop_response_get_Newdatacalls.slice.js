import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const hopshop_get__read = createAsyncThunk(
  "hopshop_response_get_Newdatacalls/hopshop_get__read",
  async payload => {
    const response = await apiService.hopshop_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hopshop_response_get_NewdatacallsSlice = createSlice({
  name: "hopshop_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [hopshop_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [hopshop_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [hopshop_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  hopshop_get__read,
  slice: hopshop_response_get_NewdatacallsSlice
}
