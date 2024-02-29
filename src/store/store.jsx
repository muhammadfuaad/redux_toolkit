import { cartReducer, productReducer } from "./mySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  
});

export default store;
