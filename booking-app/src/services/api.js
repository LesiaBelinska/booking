import axios from "axios";

const BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDestinations = async () => {
  try {
    const response = await api.get("/destination");
    return response.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw new Error("Failed to fetch destinations");
  }
};

export const fetchHotelsByCity = async (city) => {
  try {
    const response = await api.post("/hotels", { city });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw new Error("Failed to fetch hotels");
  }
};
