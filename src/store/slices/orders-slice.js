import { createSlice } from "@reduxjs/toolkit";

const initialState = { trendingItems: [] };

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getTrendingItems(state, action) {
      state.trendingItems = action.payload;
    },
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice;
