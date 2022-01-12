import React from "react";
import Book from "../Components/Book/Book";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyCart from "../Components/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import Page from "../Pages/Page/Page";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Home/Book" component={Book} />
          <Route exact path="/Home/book/MyCart" component={MyCart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;