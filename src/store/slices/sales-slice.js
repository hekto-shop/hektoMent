import { createSlice } from "@reduxjs/toolkit";

const initialState = { sales: [] };

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    getSaleItems(state, action) {
      state.sales = action.payload;
      console.log(action.payload);
    },
  },
});

export const salesActions = salesSlice.actions;
export default salesSlice;
