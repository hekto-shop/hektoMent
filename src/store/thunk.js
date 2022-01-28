import { categoryActions } from "./slices/category-slice";
import { db } from "../config/config";

const getCategories = () => async (dispatch) => {
  try {
    const response = db.collection("categories");
    const data = await response.get();

    const dataArr = data.docs.map((item) => item.data().name);
    console.log(dataArr);

    dispatch(categoryActions.getCategories(dataArr));
  } catch (err) {}
};

export { getCategories };
