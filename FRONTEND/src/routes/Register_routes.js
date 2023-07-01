import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../Views/Register";

function RegisterRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RegisterRoutes;
