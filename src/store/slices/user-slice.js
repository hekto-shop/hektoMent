import { createSlice } from "@reduxjs/toolkit";
import { convertCurrency } from "../../helpers/convert-currency";

const initialState = { user: {}, currency: "USD" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData(state, action) {
      state.user = action.payload;
    },
    changeCurrency(state, action) {
      if (state.user) {
        state.user.budget = convertCurrency(
          state.user.budget,
          state.currency,
          action.payload
        );
      }

      state.currency = action.payload;
    },
    updateBudget(state, action) {
      state.user.budget = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
