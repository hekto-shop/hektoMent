import { createSlice } from "@reduxjs/toolkit";

const initialState = { blogs: [] };

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getBlogs(state, action) {
      state.blogs = action.payload;
    },
  },
});

export const blogsActions = blogsSlice.actions;
export default blogsSlice;