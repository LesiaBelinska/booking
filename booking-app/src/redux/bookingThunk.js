import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDestinations, fetchHotelsByCity } from "../services/api.js";

export const getDestinations = createAsyncThunk(
  "booking/getDestinations",
  async () => {
    return await fetchDestinations();
  }
);

export const searchHotels = createAsyncThunk(
  "booking/searchHotels",
  async (city) => {
    return await fetchHotelsByCity(city);
  }
);
