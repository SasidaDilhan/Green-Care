import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="hero imge one" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            <button className="btnhero">{props.btnText}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
