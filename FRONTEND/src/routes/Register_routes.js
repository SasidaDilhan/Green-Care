import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../Views/Register";
import Signup from "../Views/Signup";

function RegisterRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/signup" exact element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RegisterRoutes;
