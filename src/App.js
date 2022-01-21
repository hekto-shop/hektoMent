import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <p>Home Page</p>
        </Route>
        <Route path="/login">
          <p>Login Page</p>
        </Route>
        <Route path="/cart">
          <p>Cart Page</p>
        </Route>
        <Route path="/products">
          <p>Products Page</p>
        </Route>
        <Route path="/somepage">
          <p>lorem ipsum dolor sit amet, consectetur</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
