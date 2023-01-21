import React from "react";
import "./Wcu.css";

import { BiSupport } from "react-icons/bi";
import { TiSpanner } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { BsCashStack } from "react-icons/bs";
import { BsCash } from "react-icons/bs";

const Wcu = () => {
  return (
    <div className="wcu__container">
      <div className="wcu__content">
        <h2>Why Use Swift</h2>
        <div className="wcu__cards">
          <div className="wcu__card">
            <div className="wcu__icon__div">
              <BiSupport className="wcu__icon" />
            </div>

            <div className="wcu__text">
              <h2>Best Support</h2>
              <p>Techinical support for all our services 24/7 to help you</p>
            </div>
          </div>

          <div className="wcu__card">
            <div className="wcu__icon__div">
              <TiSpanner className="wcu__icon" />
            </div>

            <div className="wcu__text">
              <h2>Classic Service</h2>
              <p>Get the best high quality services in less time here</p>
            </div>
          </div>

          <div className="wcu__card">
            <div className="wcu__icon__div">
              <IoIosPeople className="wcu__icon" />
            </div>

            <div className="wcu__text">
              <h2>Resellers</h2>
              <p>
                You can resell our services and grow your profit easily.
                Resellers are important part of social media panel
              </p>
            </div>
          </div>

          <div className="wcu__card">
            <div className="wcu__icon__div">
              <BsCash className="wcu__icon" />
            </div>

            <div className="wcu__text">
              <h2>Secure Payment</h2>
              <p>
                We have popular payment methods such as card payments, bank
                transfer, cryptocurrency and many more can be enabled upon
                request{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wcu;
