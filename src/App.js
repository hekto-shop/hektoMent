import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getCategories, getSales } from "./store/thunk";
import { useDispatch } from "react-redux";
import { useSession } from "./contexts/auth-context";

import SplashPage from "./pages/SplashPage/SplashPage";
import Signup from "./pages/Signup";

function App() {
  const { user } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSales());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {!user ? <SplashPage /> : <Redirect to="/shop" />}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/homepage">
          <h1 className="temporary">Home Page</h1>
        </Route>
        <Route path="/login">
          <h1 className="temporary">Login Page</h1>
        </Route>
        <Route path="/cart">
          <h1 className="temporary">Cart Page</h1>
        </Route>
        <Route path="/products">
          <h1 className="temporary">Products Page</h1>
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
