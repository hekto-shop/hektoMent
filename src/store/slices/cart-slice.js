import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], favorites: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
