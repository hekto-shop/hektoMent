import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categorySlice from "./slices/category-slice";
import productsSlice from "./slices/products-slice";
import salesSlice from "./slices/sales-slice";
import cartSlice from "./slices/cart-slice";
import userSlice from "./slices/user-slice";
import ordersSlice from "./slices/orders-slice";

const store = configureStore({
  reducer: {
    ctgReducer: categorySlice.reducer,
    salesReducer: salesSlice.reducer,
    productsReducer: productsSlice.reducer,
    cartReducer: cartSlice.reducer,
    userReducer: userSlice.reducer,
    ordersReducer: ordersSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
