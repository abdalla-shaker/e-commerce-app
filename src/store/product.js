import { createSlice } from "@reduxjs/toolkit";

const productInitialState = [];

const product = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    replaceProducts(state, action) {
      const productArr = action.payload;
      productArr.map((product) => state.push(product));
    },
    updateProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const productActions = product.actions;
export default product.reducer;
