import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    getSaleItems(state, action) {
      state = action.payload;
    },
  },
});

export const salesActions = salesSlice.actions;
export default salesSlice;
