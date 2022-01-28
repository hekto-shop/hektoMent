import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category-slice";

const store = configureStore({
  reducer: { ctgReducer: categorySlice.reducer },
});

export default store;
