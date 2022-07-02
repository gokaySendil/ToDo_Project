import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/_SignIn.scss";
import { authLogin } from "./database/Firebase";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const handleCreateAccountButtonClick = () => {
    history("signup");
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      authLogin(email, password).then((response) => {
        history("/home");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="signin">
        <form id="sign-in_form" onSubmit={handleSumbit}>
          <h3>Sign In</h3>
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
          <div>
            <button form="sign-in_form" className="button-sumbit" type="sumbit">
              Log In
            </button>
          </div>
          <div className="button-holder">
            <button
              className="button-transparent"
              onClick={handleCreateAccountButtonClick}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
