import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: [] };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
