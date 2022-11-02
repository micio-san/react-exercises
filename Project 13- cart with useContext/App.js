import React from "react";
import Cart from "./components/cart";
import CategoriesProvider from "./components/categoryes-context";
import CartProvider from "./components/cart-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import "./style.scss";

function App() {
  return (
    <CategoriesProvider>
      <CartProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </CategoriesProvider>
  );
}

export default App;
