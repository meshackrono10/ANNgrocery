import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import "./SignIn.css";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [buttonSearch, setButtonSearch] = useState("");
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
  };
  return (
    <div className="signIn">
      <div onClick={backToHome} className="signin_logo">
        <h1>
          <strong>ANN</strong>grocries
        </h1>
      </div>
      <div className="signin_form">
        <form>
          <div className="signin_email">
            <label htmlFor="">E-mail</label>
            <input type="email" required />
          </div>
          <div className="signinpassword">
            <label htmlFor="">Password</label>
            <input type="password" required />
          </div>
          <button
            type="submit"
            onSubmit={(e) => setButtonSearch(e.preventDefault)}
            className="signIn_btn"
          >
            Sign sin
          </button>

          <p>
            By singning-in you agree to Anngrocries's Condition of Use & Sale.
            Please see our Privacy Notice Cookies Notice and our
            internest-Basesd Ads Notice
          </p>

          <button
            type="submit"
            onSubmit={(e) => setButtonSearch(e.preventDefault)}
            className="signIn_btn1"
          >
            Create Your Anngrocries Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
