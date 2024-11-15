import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product.js";

const store = configureStore({
  reducer: { product: productReducer },
});

export default store;
