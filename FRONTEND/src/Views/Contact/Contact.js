import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Views/Hero/Hero";
import heroimg4 from "../../Assests/hero/3.png";

function Contact() {
  return (
    <>
      <div>
        <NavBar />
        <Hero
          cName="hero"
          heroImg={heroimg4}
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

export default Contact;
