import React, { useState, useEffect } from 'react'

import MiniCart from "./MiniCart";
import Login from "./Login";
import { cart } from "cart/cart";
import { currency } from "home/products";

const CartContent = () => {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState("");

  
  // console.log(cart.value)
  // cart.subscribe((cartItems) => console.log(cartItems));
  console.log(cart.value)
 
  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );



  if (items.length == 0) return <Login/>
  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
       
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {currency.format(
            items.reduce((a, v) => a + v.quantity * v.price, 0)
          )}
        </div>
      </div>
    </>
  )
}

export default CartContent