import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], favorites: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.productCode !== action.payload.productCode
      );
    },
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.productCode !== action.payload.productCode
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
