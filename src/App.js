import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
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
