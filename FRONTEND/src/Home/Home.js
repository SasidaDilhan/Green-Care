import React from "react";
import "./Home.css";
import { Carousel } from "bootstrap";
import img1 from "../Assests/1.jpg";
import img2 from "../Assests/2.jpg";
import img3 from "../Assests/3.jpg";
import img4 from "../Assests/4.jpg";

function Home() {
  return (
    <>
      <div className="hero">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img src={img1} class="img-fluid img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img2} class="img-fluid img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="img" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
