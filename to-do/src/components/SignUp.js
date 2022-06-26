import React from "react";
import "../styles/_SignIn.scss";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const history = useNavigate();
  const handleBackToLogin = () => {
    history("/");
  };
  return (
    <div className="signin">
      <form>
        <h3>Sign Up</h3>
        <label>Email</label>
        <input type="text" placeholder="Email" id="email"></input>
        <label>Password</label>
        <input type="password" placeholder="Password" id="password"></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Confrim Password"
          id="password"
        ></input>
        <div>
          <button className="button-sumbit" type="sumbit">
            Register
          </button>
        </div>
        <div className="button-holder">
          <button className="button-transparent" onClick={handleBackToLogin}>
            back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
