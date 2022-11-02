import React, { useState, useEffect, useContext } from "react";
import { categoriesContext } from "./categoryes-context";
import Card from "./card";
import items from "../data";
import { cartContext } from "./cart-context";

function Home() {
  const { category, setCategory } = useContext(categoriesContext);
  const [itemsList, setItemsList] = useState([]);

  function handleItemsList() {
    const chosenCateg = category.categ;
    switch (chosenCateg) {
      case "shoes":
        setItemsList(() => {
          return items.filter((item) => item.category == category.categ);
        });
        break;
      case "shirt":
        setItemsList(() => {
          return items.filter((item) => item.category == category.categ);
        });
        break;
      case "pants":
        setItemsList(() => {
          return items.filter((item) => item.category == category.categ);
        });
        break;
      default:
        setItemsList(() => {
          return items.map((item) => item);
        });
    }
  }

  useEffect(() => {
    handleItemsList();
  }, [category]);

  return (
    <main>
      <div className="title-container">
        <h1 className="title">Store</h1>
        <p>{category.categ}</p>
      </div>

      <div className="store-container">
        {itemsList.map((item) => {
          return <Card key={item.id} prop={item} />;
        })}
      </div>
    </main>
  );
}

export default Home;
