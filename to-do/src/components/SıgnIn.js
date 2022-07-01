import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/_SignIn.scss";

const SignIn = (props) => {
  const history = useNavigate();
  const handleCreateAccountButtonClick = () => {
    history("signup");
  };
  return (
    <div className="container">
      <div className="signin">
        <form>
          <h3>Sign In</h3>
          <label>Email</label>
          <input type="text" placeholder="Email" id="email"></input>
          <label>Password</label>
          <input type="password" placeholder="Password" id="password"></input>
          <div>
            <button className="button-sumbit" type="sumbit">
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
