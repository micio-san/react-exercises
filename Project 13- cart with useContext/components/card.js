import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { cartContext } from "./cart-context";

function Card({ prop }) {
  const { itemsBought, setItemsBought } = useContext(cartContext);

  return (
    <article data-id={prop.category} key={prop.id}>
      <div className="img-container">
        <img src={prop.img} alt={prop.name} />
      </div>
      <div className="text-container">
        <p>{prop.name}</p>
        <div>
          <h1 className="price">${prop.price}</h1>
          <button
            className="add-to-cart"
            onClick={() => {
              setItemsBought((prev) => [...prev, { prop }]);
            }}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
