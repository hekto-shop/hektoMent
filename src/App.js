import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getCategories,
  getSales,
  getProducts,
  getUserData,
  getInitialCartState,
  getTrendingItems,
  getMyOrders,
} from "./store/thunk";
import { useDispatch } from "react-redux";
import { useSession } from "./contexts/auth-context";

import * as localStorage from "./helpers/local-storage";

import SplashPage from "./pages/SplashPage/SplashPage";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Order from "./pages/Order";
import OrderCompleted from "./pages/OrderCompleted";
import Profile from "./pages/Profile";
import OrderTracking from "./pages/OrderTracking";
import OrderHistory from "./pages/OrderHistory";

import ToggleColorMode from "./theme/Toggle";

const cartItemsLS = localStorage.get("cart");
const favoritesLS = localStorage.get("favorites");
const initialCartState = { cartItems: cartItemsLS, favorites: favoritesLS };

function App() {
  const { user } = useSession();
  const dispatch = useDispatch();

  console.log("AppUser", user);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSales());
    dispatch(getProducts());
    dispatch(getUserData(user?.uid));
    dispatch(getInitialCartState(initialCartState));
    dispatch(getTrendingItems());
    dispatch(getMyOrders(user?.uid));
  }, [initialCartState, dispatch, user]);

  return (
    <ToggleColorMode>
      <Switch>
        <Route exact path="/">
          {!user ? <SplashPage /> : <Redirect to="/homepage" />}
        </Route>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <h1 className="temporary">Contact form</h1>
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route path="/order-completed">
          <OrderCompleted />
        </Route>
        <Route path="/order-history">
          <OrderHistory />
        </Route>
        <Route path="/order-tracking">
          <OrderTracking />
        </Route>
      </Switch>
    </ToggleColorMode>
  );
}

export default App;
