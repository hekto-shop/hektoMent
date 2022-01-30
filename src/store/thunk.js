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
  const getProdData = (docRef) => {
    return docRef.get().then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return null;
      }
    });
  };
  try {
    const response = db.collection("sales");

    const data = await response.get();

    const dataArr = await Promise.all(
      data.docs.map(async (item) => {
        try {
          const sale = item.data();
          const prodDocRef = sale.product;
          const productData = await getProdData(prodDocRef);
          return { ...sale, product: productData };
        } catch (err) {
          console.log(err);
        }
      })
    );

    dispatch(salesActions.getSaleItems(dataArr));
  } catch (err) {}
};

export { getCategories, getSales };
