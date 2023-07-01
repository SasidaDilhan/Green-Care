import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User_Reg = /^[a-zA-Z][a-zA-Z0-9_]{3,20}$/;
const Pass_Reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#$%]).{8,24}$/;

function Register() {
  return <div></div>;
}

export default Register;
