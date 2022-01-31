import { categoryActions } from "./slices/category-slice";
import { salesActions } from "./slices/sales-slice";
import { db } from "../config/config";

const getCategories = () => async (dispatch) => {
  try {
    const response = db.collection("categories");
    const data = await response.get();

    const dataArr = data.docs.map((item) => item.data().name);

    dispatch(categoryActions.getCategories(dataArr));
  } catch (err) {}
};

const getSales = () => async (dispatch) => {
  try {
    const response = db.collection("sales");
    const data = await response.get();

    const dataArr = data.docs.map((item) => item.data());

    dispatch(salesActions.getCategories(dataArr));
  } catch (err) {}
};

export { getCategories, getSales };
