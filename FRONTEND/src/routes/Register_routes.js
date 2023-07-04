import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../Views/Register/Register";
import Signup from "../Views/Signup";
import Home from "../Home/Home";

function RegisterRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/signup" exact element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RegisterRoutes;
