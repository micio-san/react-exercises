import React, { useContext, useRef } from "react";
import { cartContext } from "./cart-context";
import CartCard from "./cart-card";

function Cart() {
const { itemsBought, setItemsBought } = useContext(cartContext);
const prices = itemsBought.map((item) => Number(item.prop.price)  )

function removeItem(e) {
const btnClicked = Number(e.target.parentElement.id) ;

setItemsBought((prev)=>{
  return prev.filter((item, idx)=>{
    return item.prop.id !== btnClicked
  }) 
})
//console.log(item.prop.id)
console.log( btnClicked)
}

  return (
    <main>
      <div className="title-container">
        <h1 className="title">Cart</h1>
      </div>
      <div className="boughtItems-container">
        {itemsBought.length != 0 ? (
          itemsBought.map((item, idx) => {
            return <CartCard key={idx} propOne={item.prop} propDue ={removeItem}/>;
          })
        ) : (
          <h1 className="noItems">no items</h1>
        )}
        <div className="total-container">
          <div className="text"><h2>total</h2>
          <h1>${
           prices.reduce((prev, current)=>{
            return prev + current
           },0).toFixed(2)
          }</h1>
          </div>
          <button className="order-btn" >proceed to order</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
