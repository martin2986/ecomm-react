import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";
import cartreducer from "./cart";
const store = configureStore({
  reducer: { products: appReducer, cart: cartreducer },
});

export default store;
