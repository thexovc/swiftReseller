import React from "react";
import intro from "../../assets/intro.mp4";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro__container">
      <div className="intro__content">
        <div className="intro__text">
          <p>NEW AT SWIFT? CHECK THIS SHORT INSTRUCTION VIDEO</p>
        </div>
        <div className="intro__video">
          <video src={intro} loop controls autoPlay></video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
