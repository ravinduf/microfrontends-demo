import React, { useState, useEffect, useContext } from 'react'

import { login, useLoggedIn, jwt } from "./cart";

const Login = () => {
  // console.log(context);
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  // console.log(loggedIn);
  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  // jwt.subscribe((val) => console.log(val, "login"))
  if (loggedIn) return null;
  // console.log(loggedIn, "Login");
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            // left: -250,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-3 rounded-md w-full"
          />

          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />

          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => {
              login(username, password)
              setShowLogin(!showLogin)
            }}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  )
}

export default Login