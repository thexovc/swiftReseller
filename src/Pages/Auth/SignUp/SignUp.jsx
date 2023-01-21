import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import "../Login/Login.css";

const SignUp = () => {
  return (
    <div className="login__container">
      <Navbar />
      <div className="login__content">
        <form action="">
          <h1>SIGN UP</h1>
          <div className="form__inputs">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
            <input placeholder="Email Address" type="email" />
            <input placeholder="Password" type="password" />
            <input placeholder="Confirm Password" type="password" />
            <select name="" id="">
              <option selected value="">
                (UTC +01:00) Africa/Lagos
              </option>
              <option value="">(UTC +01:00) Africa/Abuja</option>
              <option value="">(UTC +01:00) Africa/Ibadan</option>
              <option value="">(UTC +01:00) Africa/Kano</option>
            </select>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>
              I agree with the <a href="">Terms and Policy</a>{" "}
            </p>
          </div>

          <div className="signup__div">
            <div className="signup__button">Sign Up</div>
            <div className="signup__text">
              <p>Already have an account? </p>
              <a href="">Sign In</a>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
