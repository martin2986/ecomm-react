import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  search: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    searchInput(state, action) {
      state.search = action.payload;
    },
  },
});

export const appAction = appSlice.actions;

export default appSlice.reducer;
