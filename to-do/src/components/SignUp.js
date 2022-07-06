import React, { useState } from "react";
import "../styles/_SignIn.scss";
import { useNavigate } from "react-router-dom";
import { authSignUp, getError } from "./database/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const history = useNavigate();
  const handleBackToLogin = () => {
    history("/");
  };
  // AUTH VARIABLES & Functions
  const [email, setEmail] = useState(""); // tracks email input
  const [password, setPassword] = useState(""); // tracks password input
  const [confrimPassword, setconfrimPassword] = useState(""); // tracks ,Confrimpassword input

  // sets the values every change
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confrimPasswordChangeHandler = (event) => {
    setconfrimPassword(event.target.value);
  };
  //----------------------------------------
  // Sumbit
  const handleSumbit = async (event) => {
    event.preventDefault();
    if (confrimPassword === "" || password === "" || email === "") {
      toast.error("Fill the fields correctly", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (password !== confrimPassword) {
      toast.error("Passwords doesn't match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    try {
      await authSignUp(email, password).then((response) => {
        history("/home");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      });
    } catch (e) {
      toast.error(getError(e.code), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="signin">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
    </div>
  );
};

export default SignUp;
