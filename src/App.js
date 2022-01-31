import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getCategories, getSales } from "./store/thunk";
import { useDispatch } from "react-redux";
import { useSession } from "./contexts/auth-context";

import SplashPage from "./pages/SplashPage/SplashPage";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart/Cart";

function App() {
  const { user } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSales());
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {!user ? <SplashPage /> : <Redirect to="/shop" />}
        </Route>
        <Route path="/signup">
          <Signup />
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
        <Route path="/blog">
          <h1 className="temporary">Blog</h1>
        </Route>
        <Route path="/shop">
          <h1 className="temporary">Shop</h1>
        </Route>
        <Route path="/wishlist">
          <h1 className="temporary">Wishlist</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
