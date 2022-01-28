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
    console.log(response);
    const data = await response.get();
    console.log(data);
    const dataArr = data.docs.map((item) => {
      console.log(item);
      return item.data();
    });

    dispatch(salesActions.getSaleItems(dataArr));
  } catch (err) {}
};

export { getCategories, getSales };
