import React,{useContext} from 'react'
import {FaTimes} from "react-icons/fa"
import { cartContext } from './cart-context'

function CartCard({propOne, propDue}) {
  const {itemsBought, setItemsBought } = useContext(cartContext);
 
  return (
    <article id={propOne.id} className='cart-item' >
      <button className='remove-item' onClick={propDue} >
           <FaTimes/>
      </button>
        <div className="img-container">
            <img src={propOne.img} alt={propOne.name} />
        </div>
        <div className="text-container">
            <h2>{propOne.name}</h2>
            <h4>{propOne.category}</h4>
            <div className="price">
                <h1>${propOne.price}</h1>
            </div>
        </div>
    </article>
  )
}

export default CartCard