import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Mars" className="hero__image" />
      <h1 className="hero__title">Welcome to Mars.</h1>
    </div>
  );
};

export default Hero;
