import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories(state, action) {
      const categories = action.payload;
      state = categories;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
