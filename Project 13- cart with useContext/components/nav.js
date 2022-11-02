import React, { useContext } from "react";
import items from "../data";
import { FaStore, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { categoriesContext } from "./categoryes-context";
import { cartContext } from "./cart-context";

function Nav() {
  const { category, setCategory } = useContext(categoriesContext);
  const { itemsBought, setItemsBought } = useContext(cartContext);
  const all = [
    "All Categories",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <FaStore />
        </Link>
      </div>
      <ul>
        {all.map((categ) => (
          <li onClick={() => setCategory({ categ })}>{categ}</li>
        ))}
      </ul>
      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingBag />
        </Link>
        <div className="total-container">
          <span>{itemsBought.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
