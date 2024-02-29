import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    addAll(state, action) {
      return [...state, ...action.payload];
    },
    removeFromCart(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: [{
    "id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "quantity": 21,
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{
      "rate":3.9,
      "count":120
    },
  }],
  reducers: {
    addToProducts(state, action) {
      const productId = action.payload;
      const product = state.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    
    removeFromProducts(state, action) {
      const productId = action.payload;
      const product = state.find(item => item.id === productId);
      if (product) {
        product.quantity -= 1;
      }
    },
  },
})

export const { addToCart, addAll, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const { addToProducts, removeFromProducts } = cartSlice.actions;
export const productReducer = productSlice.reducer;

