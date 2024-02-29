import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    addAll(state, action) {
      return [...state, ...action.payload];
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, addAll, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
