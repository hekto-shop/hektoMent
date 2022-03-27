import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingItems: [],
  myOrders: [],
  myProductOrders: [],
  myProductCategories: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getTrendingItems(state, action) {
      state.trendingItems = action.payload;
    },
    getMyOrders(state, action) {
      state.myOrders = action.payload;
    },
    getMyProductOrders(state, action) {
      state.myProductOrders = action.payload;
    },
    getMyProductCategories(state, action) {
      state.myProductCategories = action.payload
    },
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice;
