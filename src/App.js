import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SplashPage from "./pages/SplashPage/SplashPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {!isAuthorized ? <SplashPage /> : <Redirect to="/shop" />}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/homepage">
          <h1 className="temporary">Home Page</h1>
        </Route>
        <Route path="/login">
          <Login />
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
