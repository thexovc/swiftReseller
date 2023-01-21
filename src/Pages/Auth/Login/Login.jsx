import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div className="login__container">
      <Navbar />
      <div className="login__content">
        <form action="">
          <h1>LOGIN</h1>
          <div className="form__inputs">
            <input placeholder="Email Address" type="email" />
            <input placeholder="Password" type="password" />
          </div>
          <div className="rem">
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <a href="">Forget password</a>
          </div>

          <div className="signup__div">
            <div className="signup__button">Sign In</div>
            <div className="signup__text">
              <p>Already have an account? </p>
              <a href="">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
