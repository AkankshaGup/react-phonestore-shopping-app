import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/navbar.js"
import ProductList from "./component/product-list";
import Details from "./component/details.js";
import Cart from "./component/cart/cart.js";
import Default from "./component/default.js";
import Modal from "./component/modal";

function App() {
  return (
  <React.Fragment>
    <Navbar />
    <Switch>
    <Route path="/" component={ProductList} exact />
    <Route path="/details" component={Details}/>
    <Route path="/cart" component={Cart} />
    <Route component={Default} />
    </Switch>
    <Modal />
  </React.Fragment>
    );
}

export default App;
