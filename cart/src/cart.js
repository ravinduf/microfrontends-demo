import { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject(null);

// jwt.subscribe((token) => console.log("subscribe token", token));
cart.subscribe((value) => console.log("subscribe value", value));
// console.log(cart.observed)

export const getCart = async () => {
  const res = await fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  }).catch(err => { console.log(err) });

  const data = await res.json();
  cart.next(data);
  return data;
}

export const addToCart = async (id) => {
  const res = await fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ id }),
  }).catch(err => { console.log(err) });

  const data = await res.json();
  getCart()
}

export const clearCart = async () => {
  const res = await fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  }).catch((err) => console.log(err));

  const data = await res.json();
  getCart()
}

export const login = async (username, password) => {

  const data = await fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })

  const { access_token } = await data.json();
  if (!!access_token) {
    jwt.next(access_token);
    getCart();
    localStorage.setItem("token", access_token);
    return access_token;
  }

  return null;
}

export const useLoggedIn = () => {
  // console.log(`jwt value cart ${!!jwt.value}`)
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    return jwt.subscribe(() => {
      setLoggedIn(!!jwt.value);
    })
  }, [])

  return loggedIn;
}