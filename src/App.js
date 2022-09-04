import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProuductList";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";
import FavoritesBaskes from "./components/FavoritesBasket";

import React from "react";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Banner/>
            <ProductList/>
          </React.Fragment>
        }/>
        <Route exact path='/checkout' element={
          <React.Fragment>
            <CheckoutAd/>
            <ShoppingBasket/>
          </React.Fragment>
        } />
        <Route exact path='/favorites' element={
          <React.Fragment>
            <FavoritesBaskes/>
          </React.Fragment>
        } />
      </Routes>
    </Router>
  );
}

export default App;
