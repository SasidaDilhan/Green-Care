import React from "react";
import "./Hero.css";
import hero1 from "../../Assests/hero/1.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <img src={hero1} alt="Hero image 1" />
        <div className="hero-text">
          <h1>Start your journy</h1>
          <p>Chose your best parner</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
