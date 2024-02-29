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
  },
  {
    "id":2,
    "title":"Mens Casual Premium Slim Fit T-Shirts ",
    "price":22.3,
    "quantity": 21,
    "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating":{
      "rate":4.1,
      "count":259
    }
  },],
  reducers: {
    addToProducts(state, action) {
      const productId = action.payload;
      const product = state.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    
    removeFromProducts(state, action) {
      // action.payload.quantity--
      // console.log(action.payload.quantity);
      // let quantity = action.payload.quantity
      // quantity--
      return state.map(product => {
        if (product.id === action.payload.id) {
          // Create a new object with updated quantity
          return {
            ...product,
            quantity: product.quantity - 1
          };
        }
        return product;
      });
    }
  },
})

export const { addToCart, addAll, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const { addToProducts, removeFromProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;

