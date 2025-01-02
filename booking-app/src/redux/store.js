import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice.js";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;
