import { categoryActions } from "./slices/category-slice";
import { salesActions } from "./slices/sales-slice";
import { productsActions } from "./slices/products-slice";
import { cartActions } from "./slices/cart-slice";
import { userActions } from "./slices/user-slice";
import { ordersActions } from "./slices/orders-slice";
import { db } from "../config/config";
import { noImage } from "../assets/img";
import { selectTrendingItems } from "../helpers/select-trending-items";

const getProdData = (docRef) => {
  return docRef.get().then((doc) => {
    if (doc.exists) {
      return doc.data();
    } else {
      return null;
    }
  });
};

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
  const getProdData = (docRef) => {
    return docRef.get().then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return null;
      }
    });
  };
  const data = await response.get();
  const payload = await Promise.all(
    data.docs.map(async (item) => {
      const productObj = item.data();
      if (!productObj.productImage) productObj.productImage = noImage;
      productObj.itemId = item.id;
      const categoryRef = productObj.category;
      const prodCategorie = await getProdData(categoryRef);
      return { ...productObj, category: prodCategorie.name };
    })
  );
  dispatch(productsActions.getProducts(payload));
};

const getUserData = (uid) => async (dispatch) => {
  try {
    const docRef = db.doc(`users/${uid}`);
    const userSnapshot = await docRef.get();
    const userData = userSnapshot.data();

    dispatch(userActions.getUserData(userData));
  } catch (err) {
    console.log("err");
  }
};

const updateUserBudget = (updatedBudget) => (dispatch) => {
  dispatch(userActions.updateBudget(updatedBudget));
};

const changeCurrency = (val) => (dispatch) => {
  dispatch(productsActions.changeCurrency(val));
  dispatch(cartActions.changeCurrency(val));
  dispatch(userActions.changeCurrency(val));
};

const addToCart = (product) => (dispatch) => {
  dispatch(cartActions.addToCart(product));
};

const removeFromCart = (product) => (dispatch) => {
  dispatch(cartActions.removeFromCart(product));
};

const decreaseCartQuantity = (product) => (dispatch) => {
  dispatch(cartActions.decreaseCartQuantity(product));
};

const addToFavorites = (product) => (dispatch) => {
  dispatch(cartActions.addToFavorites(product));
};

const removeFromFavorites = (product) => (dispatch) => {
  dispatch(cartActions.removeFromFavorites(product));
};

const getInitialCartState = (cart) => (dispatch) => {
  dispatch(cartActions.getInitialState(cart));
};

const clearCart = () => (dispatch) => {
  dispatch(cartActions.clearCart());
};

const getTrendingItems = () => async (dispatch) => {
  try {
    const response = db.collection("orders");
    const data = await response.get();
    const dataArr = data.docs.map((item) => item.data());

    const allOrders = dataArr
      .map((data) => {
        return data.ordered_product;
      })
      .flat();

    const ordersData = await Promise.all(
      allOrders.map(async (order) => {
        const productRef = order.product;
        const productData = await getProdData(productRef);
        const productCode = productData.productCode;
        return { quantity: order.quantity, productCode };
      })
    );
    const topFourItems = selectTrendingItems(ordersData, 4);
    dispatch(ordersActions.getTrendingItems(topFourItems));
  } catch (err) {
    console.log(err);
  }
};

// ORDERS

const getMyOrders = (userId) => async (dispatch) => {
  if (!userId) return;
  try {
    const res = db.collection("orders");
    const data = await res.get();

    const dataArr = data.docs
      .map((item) => item.data())
      .filter((order) => order.order_Owner === userId);

    // User's ordered products

    const allUserOrders = dataArr
      .map((data) => {
        return data.ordered_product;
      })
      .flat();

    let prodCategoryData = [];

    const ordersData = await Promise.all(
      allUserOrders.map(async (order) => {
        const productRef = order.product;
        const productData = await getProdData(productRef);
        prodCategoryData.push(await getProdData(productData.category));
        return productData;
      })
    );
    dispatch(ordersActions.getMyProductCategories(prodCategoryData));
    dispatch(ordersActions.getMyProductOrders(ordersData));
    dispatch(ordersActions.getMyOrders(dataArr));
  } catch (err) {
    console.log(err);
  }
};

const addReview = (product, review) => (dispatch) => {
  const allReviews = [review, ...product.reviews];
  const docRef = db.collection("products").doc(product.itemId);
  docRef
    .update({ reviews: allReviews })
    .then(() =>
      dispatch(productsActions.addReview({ product, reviews: allReviews }))
    )
    .catch((err) => console.log(err));
};

export {
  getCategories,
  getSales,
  getProducts,
  getUserData,
  updateUserBudget,
  changeCurrency,
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
  getInitialCartState,
  decreaseCartQuantity,
  clearCart,
  getTrendingItems,
  getMyOrders,
  addReview,
};
