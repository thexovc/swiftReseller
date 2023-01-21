import React from "react";
import { NavLink } from "react-router-dom";
import "./Heroarea.css";

const Heroarea = () => {
  return (
    <div className="heroarea__container">
      <div className="heroarea__content">
        <div className="heroarea__text">
          <h2>
            Buy Cheap Social Media Accounts, Followers, Likes, Views, Share
            Instantly
          </h2>
          <p>
            We provide the cheapest social media reseller panel services. If
            you’re looking for a super-easy way to offer additional marketing
            services to your existing and new clients, look no further!b
          </p>
        </div>
        <NavLink className="heroarea__button cursor-pointer" to="/neworder">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Heroarea;
