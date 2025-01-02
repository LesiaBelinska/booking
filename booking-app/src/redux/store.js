import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import bookingReducer from "./bookingSlice.js";

const persistConfig = {
  key: "booking",
  storage,
};

const persistedReducer = persistReducer(persistConfig, bookingReducer);

const store = configureStore({
  reducer: {
    booking: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
