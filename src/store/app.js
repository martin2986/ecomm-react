import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const appAction = appSlice.actions;

export default appSlice.reducer;
