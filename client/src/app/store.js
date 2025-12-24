import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice.js";
import userReducer from "../features/userSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
