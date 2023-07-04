import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../Views/Register/Register";
import Signup from "../Views/Signup/Signup";
import Home from "../Home/Home";
import Service from "../Views/Servise/Service";
import About from "../Views/About/About";
import Contact from "../Views/Contact/Contact";

function RegisterRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/signup" exact element={<Signup />}></Route>
          <Route path="/service" exact element={<Service />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RegisterRoutes;
