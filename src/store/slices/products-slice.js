import { createSlice } from "@reduxjs/toolkit";
import { convertCurrency } from "../../helpers/convert-currency";

const initialState = { products: [], currency: "USD" };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
      console.log(action.payload);
    },
    changeCurrency(state, action) {
      state.products = state.products.map((product) => {
        const updatedPrice = convertCurrency(
          product.price,
          state.currency,
          action.payload
        );

        return { ...product, price: updatedPrice };
      });
      state.currency = action.payload;

      console.log(state.products);
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
