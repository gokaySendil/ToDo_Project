import React, { useState } from "react";
import "../styles/_SignIn.scss";
import { useNavigate } from "react-router-dom";
import { authSignUp } from "./database/Firebase";
const SignUp = () => {
  const history = useNavigate();
  const handleBackToLogin = () => {
    history("/");
  };
  // AUTH VARIABLES & Functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setconfrimPassword] = useState("");
  const [error, setError] = useState("");
  const [foundError, setFoundError] = useState(false);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confrimPasswordChangeHandler = (event) => {
    setconfrimPassword(event.target.value);
  };
  // Sumbit
  const handleSumbit = async (event) => {
    setFoundError(false);
    setError("");
    event.preventDefault();
    try {
      if (password === confrimPassword) {
        authSignUp(email, password).then((response) => {
          history("/");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        });
      }
    } catch (e) {
      console.log(e);
      setFoundError(true);
      setError(e);
    }
  };

  return (
    <div className="signin">
      {!foundError && (
        <form id="signup-form" onSubmit={handleSumbit}>
          <h3>Sign Up</h3>
          <label>Email</label>
          <input
            onChange={emailChangeHandler}
            type="text"
            placeholder="Email"
            id="email"
          ></input>
          <label>Password</label>
          <input
            onChange={passwordChangeHandler}
            type="password"
            placeholder="Password"
            id="password"
          ></input>
          <label>Password</label>
          <input
            onChange={confrimPasswordChangeHandler}
            type="password"
            placeholder="Confrim Password"
            id="Confrimpassword"
          ></input>
          <div>
            <button form="signup-form" className="button-sumbit" type="sumbit">
              Register
            </button>
          </div>
          <div className="button-holder">
            <button
              type="button"
              className="button-transparent"
              onClick={handleBackToLogin}
            >
              back to Login
            </button>
          </div>
        </form>
      )}
      {foundError && (
        <form id="signup-form" onSubmit={handleSumbit}>
          <h3>Sign Up</h3>
          <h2>{error}</h2>
          <label>Email</label>
          <input
            onChange={emailChangeHandler}
            type="text"
            placeholder="Email"
            id="email"
          ></input>
          <label>Password</label>
          <input
            onChange={passwordChangeHandler}
            type="password"
            placeholder="Password"
            id="password"
          ></input>
          <label>Password</label>
          <input
            onChange={confrimPasswordChangeHandler}
            type="password"
            placeholder="Confrim Password"
            id="Confrimpassword"
          ></input>
          <div>
            <button form="signup-form" className="button-sumbit" type="sumbit">
              Register
            </button>
          </div>
          <div className="button-holder">
            <button
              type="button"
              className="button-transparent"
              onClick={handleBackToLogin}
            >
              back to Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
