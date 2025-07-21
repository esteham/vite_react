import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const Register = () => {
  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Register Here</h3>
      <Form>
        <Form.Group controlId="loginEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>

        <Form.Group controlId="loginEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>

        <Form.Group controlId="loginEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>

        <Form.Group controlId="loginPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default Register;
