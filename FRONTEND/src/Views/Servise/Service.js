import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Views/Hero/Hero";
import heroimg3 from "../../Assests/hero/4.png";

function Service() {
  return (
    <>
      <div>
        <NavBar />
        <Hero
          cName="hero"
          heroImg={heroimg3}
          title="Your journy is here"
          text="Come collabarate with us"
          btnText="Register"
          url="/register"
          btnClass="btn-link"
        />
      </div>
    </>
  );
}

export default Service;
