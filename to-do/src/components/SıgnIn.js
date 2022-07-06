import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/_SignIn.scss";
import { authLogin, getError } from "./database/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = (props) => {
  const [email, setEmail] = useState(""); // tracks email input
  const [password, setPassword] = useState(""); // tracks password input
  const history = useNavigate(); // changes the directory of the page
  const handleCreateAccountButtonClick = () => {
    history("signup"); // navigates user to signup page
  };

  const emailChangeHandler = (event) => {
    // sets email input every change
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    // sets password input every change
    setPassword(event.target.value);
  };
  const handleSumbit = async (event) => {
    event.preventDefault();
    // I check for empty input first show an error depending on the condition
    if (email === "" || password === "") {
      toast.error(
        "Empty or uncorrect filling please fill the fields correctly",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      try {
        // Firebase auth signIn function exports from Firebase.js file
        await authLogin(email, password).then((response) => {
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
    }
  };
  return (
    <div className="container">
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
