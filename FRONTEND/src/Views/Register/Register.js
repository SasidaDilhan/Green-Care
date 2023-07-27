import React from "react";
import "./register.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    addresss1: "",
    address2: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="div1">
      <div className="div2">
        <Form onSubmit={registerUser}>
          <Row className="row1 mb-3">
            <Form.Group as={Col} controlId="formGridFname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLnamed">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="password" placeholder="Last name" />
            </Form.Group>
          </Row>
          <Row className="row1 mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="076-5263141" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <p className="text-end mt-2">
            Frogot <a href="#">Password</a>
            <Link to="/signup" className="ms-2">
              signup
            </Link>
          </p>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
