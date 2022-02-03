import { categoryActions } from "./slices/category-slice";
import { salesActions } from "./slices/sales-slice";
import { productsActions } from "./slices/products-slice";
import { cartActions } from "./slices/cart-slice";
import { db } from "../config/config";
import { noImage } from "../assets/img";

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
        } catch (err) {}
      })
    );

    const payload = dataArr.filter((el) => !!el);

    dispatch(salesActions.getSaleItems(payload));
  } catch (err) {}
};

const getProducts = () => async (dispatch) => {
  const response = db.collection("products");
  const data = await response.get();
  const payload = data.docs.map((item) => {
    const productObj = item.data();
    if (!productObj.productImage) productObj.productImage = noImage;
    return productObj;
  });
  dispatch(productsActions.getProducts(payload));
};

const changeCurrency = (val) => (dispatch) => {
  dispatch(productsActions.changeCurrency(val));
};

const addToCart = (product) => (dispatch) => {
  dispatch(cartActions.addToCart(product));
};

const removeFromCart = (product) => (dispatch) => {
  dispatch(cartActions.removeFromCart(product));
};

const addToFavorites = (product) => (dispatch) => {
  dispatch(cartActions.addToFavorites(product));
};

const removeFromFavorites = (product) => (dispatch) => {
  dispatch(cartActions.removeFromFavorites(product));
};

export {
  getCategories,
  getSales,
  getProducts,
  changeCurrency,
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
};
