import React from "react";
import "./Carosule.css";
import { Button, Carousel } from "bootstrap";
import img1 from "../Assests/1.png";
import img2 from "../Assests/2.png";
import img3 from "../Assests/3.png";
import img4 from "../Assests/4.png";

function Home() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 img" alt="..." />
            <div className="centered">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 img" alt="..." />
            <div className="centered">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 img" alt="..." />
            <div className="centered">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 img" alt="..." />
            <div className="centered">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
