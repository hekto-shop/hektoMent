import { createSlice } from "@reduxjs/toolkit";

const initialState = { trendingItems: [], myOrders: [] };

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
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice;
