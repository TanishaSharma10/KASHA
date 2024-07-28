import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1fa77.gif"
          alt="logo"
        />
        <h3>KASHA, WHERE WOMEN CONNECT</h3>
        <button onClick={handleSubmit} className="btn-login">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Login;