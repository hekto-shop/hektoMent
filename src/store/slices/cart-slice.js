import { createSlice } from "@reduxjs/toolkit";

import * as localStorage from "../../helpers/local-storage";

const initialState = { cartItems: [], favorites: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = JSON.parse(JSON.stringify(action.payload));
      const existingItem = state.cartItems.find(
        (elem) => elem.productCode === newProduct.productCode
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newProduct.price;
      } else {
        newProduct.quantity = 1;
        newProduct.totalPrice = newProduct.price;
        state.cartItems = [...state.cartItems, newProduct];
      }
      localStorage.set("cart", state.cartItems);
    },
    decreaseCartQuantity(state, action) {
      const newProduct = JSON.parse(JSON.stringify(action.payload));
      const existingItem = state.cartItems.find(
        (elem) => elem.productCode === newProduct.productCode
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= newProduct.price;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.productCode !== action.payload.productCode
        );
      }

      localStorage.set("cart", state.cartItems);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.productCode !== action.payload.productCode
      );
      localStorage.set("cart", state.cartItems);
    },
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];

      localStorage.set("favorites", state.favorites);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.productCode !== action.payload.productCode
      );
      localStorage.set("favorites", state.favorites);
    },

    getInitialState(state, action) {
      const newState = action.payload;
      if (newState.cartItems?.length > 0) state.cartItems = newState.cartItems;
      if (newState.favorites?.length > 0) state.favorites = newState.favorites;
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.set("cart", state.cartItems);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
