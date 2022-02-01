import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categorySlice from "./slices/category-slice";
import productsSlice from "./slices/products-slice";
import salesSlice from "./slices/sales-slice";

const store = configureStore({
  reducer: {
    ctgReducer: categorySlice.reducer,
    salesReducer: salesSlice.reducer,
    productsReducer: productsSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
