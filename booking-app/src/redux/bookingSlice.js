import { createSlice } from "@reduxjs/toolkit";
import { getDestinations, searchHotels } from "./bookingThunk.js";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    destinations: [],
    hotels: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDestinations.fulfilled, (state, action) => {
        state.destinations = action.payload;
        state.loading = false;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(searchHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.loading = false;
      })
      .addCase(searchHotels.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default bookingSlice.reducer;
