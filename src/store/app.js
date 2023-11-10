import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  items: "",
  filetedProduct: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts(state, action) {
      const newItem = action.payload;
      const loadedData = [];
      for (const key in newItem) {
        loadedData.push({
          id: key,
          title: newItem[key].title,
          description: newItem[key].description,
          img1: newItem[key].img1,
          img2: newItem[key].img2,
          price: newItem[key].price,
          isNew: newItem[key].isNew,
          type: newItem[key].type,
        });
      }
      state.products = loadedData;
    },
    filteredProduct(state, action) {
      const selectedCategory = action.payload;
      state.items = selectedCategory;
      if (selectedCategory === "all") {
        state.filetedProduct = [...state.products];
      } else {
        state.filetedProduct = state.products.filter(
          ({ type }) => type === selectedCategory
        );
      }
    },
  },
});

export const appAction = appSlice.actions;

export default appSlice.reducer;
