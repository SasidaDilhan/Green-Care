import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Views/Hero/Hero";
import heroimg2 from "../../Assests/hero/5.png";

function About() {
  return (
    <>
      <div>
        <NavBar />
        <Hero
          cName="hero"
          heroImg={heroimg2}
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

export default About;
