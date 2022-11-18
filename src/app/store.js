import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/Car/carSlice.js";
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
