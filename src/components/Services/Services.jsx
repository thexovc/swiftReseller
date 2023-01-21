import React from "react";
import "./Services.css";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__content">
        <h2>Services We Offer</h2>
        <div className="services__cards">
          <div className="services__card">
            <div className="services__card__content">
              <div className="services__image">
                <img className=" image" src={service5} alt="" />
              </div>

              <div className="services__text">
                <h4>Resellers</h4>
                <p>
                  You can resell our services and grow your profit easily
                  resellers are important part of social media panel
                </p>
              </div>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card__content">
              <div className="services__image">
                <img className="image" src={service2} alt="" />
              </div>

              <div className="services__text">
                <h4>Secure Payments</h4>
                <p>
                  We have popular payment methods such as card payments, bank
                  transfer cryptocurrencies and many more can be enabled upon
                  request
                </p>
              </div>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card__content">
              <div className="services__image">
                <img className="image" src={service3} alt="" />
              </div>

              <div className="services__text">
                <h4>High Quality Services</h4>
                <p>Get the best high quality services in less time here</p>
              </div>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card__content">
              <div className="services__image">
                <img className="image" src={service4} alt="" />
              </div>

              <div className="services__text">
                <h4>Anonymity</h4>
                <p>We do not disclose data to third parties</p>
              </div>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card__content">
              <div className="services__image">
                <img className="image" src={service5} alt="" />
              </div>

              <div className="services__text">
                <h4>Updates</h4>
                <p>
                  Services are updated daily in order to be further improves and
                  to provide you with the best experience
                </p>
              </div>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card__content">
              <div className="services__image">
                <img className="image" src={service6} alt="" />
              </div>

              <div className="services__text">
                <h4>Supports</h4>
                <p>Technical support for all our services 24/7 to help you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Services;
