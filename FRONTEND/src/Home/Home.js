import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Views/Hero/Hero";
import heroimg1 from "../Assests/hero/1.png";
import Storedisplay from "../Views/store/Storedisplay";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={heroimg1}
        title="Your journy is here"
        text="Come collabarate with us"
        btnText="Register"
        url="/register"
        btnClass="btn-link"
      />
      <Storedisplay />
    </>
  );
}

export default Home;
