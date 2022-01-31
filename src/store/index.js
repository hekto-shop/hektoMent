import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category-slice";
import salesSlice from "./slices/sales-slice";

const store = configureStore({
  reducer: {
    ctgReducer: categorySlice.reducer,
    salesReducer: salesSlice.reducer,
  },
});

export default store;
