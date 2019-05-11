import React from "react";
import { Switch, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ShopPage from "./pages/Shop";

export const Main = (
  <Switch>
    {/* <Route path="/login" render={() => <Login />} />
    <Route path="/register" render={() => <Register />} /> */}
    <Route exact path="/" render={() => <LandingPage />} />
    <Route path="/books" render={() => <CategoryPage />} />
    <Route path="/shop" render={() => <ShopPage />} />
  </Switch>
);
