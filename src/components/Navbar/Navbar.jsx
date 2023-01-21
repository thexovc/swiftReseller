import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Media from "react-media";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const openState = () => {
    setOpen(!open);
  };
  return (
    <div className="nav__container">
      <Media queries={{ small: "(max-width: 700px)" }}>
        {(matches) =>
          matches.small ? (
            <div className="nav__con">
              <div className="nav__content">
                <div className="bar"></div>
                <div className="nav__center">
                  <img src={logo} alt="" />
                  <p>Swift</p>
                </div>
                <div onClick={openState} className="bar">
                  <FiMenu className="menu__icon" />
                </div>
              </div>
              <div className={open ? "s__nav__items" : "closed"}>
                <div className="s__nav__content">

                  <span className="s__nav__item">
                    <NavLink to="/">
                      Home
                    </NavLink>
                  </span>

                  <span className="s__nav__item">
                    <NavLink to="/ss">Services
                    </NavLink>
                  </span>

                  <span className="s__nav__item">
                    <NavLink to="/ss">
                      Market
                    </NavLink>
                  </span>

                  <span className="s__nav__item">
                    <NavLink to="/login">Login </NavLink>
                  </span>

                  <span className="s__nav__item s__signup">
                    <NavLink to="/signup" className="!text-white">
                      Sign Up
                    </NavLink>
                  </span>

                </div>
              </div>
            </div>
          ) : (
            <div className="nav__content">
              <div className="nav__left">
                <NavLink to="/">
                  <span className="nav__item">Home</span>
                </NavLink>
                <NavLink to="/">
                  <span className="nav__item">Services</span>
                </NavLink>
                <NavLink to="/">
                  <span className="nav__item">Market</span>
                </NavLink>
              </div>

              <div className="nav__center">
                <img src={logo} alt="" />
                <p>Swift</p>
              </div>

              <div className="nav__right">
                <span className="login">
                  <NavLink to="/login">Log In</NavLink>
                </span>
                <span className="signup ">
                  <NavLink to="/signup" className="!text-white">
                    Sign Up
                  </NavLink>
                </span>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default Navbar;
