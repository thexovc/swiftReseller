import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <footer>
        <div className="footer__container">
          <div className="logo">
            <img src={logo} alt="" />
            <p>Swift</p>
          </div>

          <div className="footer__row">
            <div className="footer__col">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Tickets</li>
                {/* <li>Contact us</li> */}
              </ul>
            </div>

            <div className="footer__col">
              <h4>GET HELP</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>API Documentation</li>
                <li>FAQs</li>
                <li>Recommendations</li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Contact Informations</h4>
              <ul>
                <li className="email">
                  E-mail: Swiftreseller@Swiftreseller.com
                </li>
              </ul>
              <br />
              <div className="social__links">
                <a href="#" target="_blank" className="fa">
                  <FaFacebook />
                </a>
                <a href="#" target="_blank" className="ig">
                  <FiInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright 2022 - Swiftreseller</p>
      </div>
    </div>
  );
};

export default Footer;
