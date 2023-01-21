import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import "../Login/Login.css";

const ForgotPassword = () => {
  return (
    <div className="login__container">
      <Navbar />
      <div className="login__content">
        <form action="">
          <h1>Forgot password</h1>
          <p>
            Enter your registration email address to receive password reset
            instructions.
          </p>
          <div className="form__inputs">
            <input placeholder="Email Address" type="email" />
          </div>

          <div className="signup__div">
            <div className="signup__button">Submit</div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
