import React, { useState } from "react";
import { Container, Row, Col, Form, Button, AlertLink } from "react-bootstrap";
import axios from 'axios';
import "./LoginSignup.css"; // Import external styles

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    nic: "",
    gender: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
        username: "",
        password: "",
        email: "",
        nic: "",
        gender: "",
      });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${state} Function Executed`, formData);
    let endpoint = state === "Signup" ? "signup" : "login";
    try {
        const response = await axios.post(`http://localhost:3001/${endpoint}`,formData)
        console.log("Success", formData);
        if(response.data.success){
            localStorage.setItem('auth-token',response.data.token);
            alert("Signed up successfully!");
            navigate('/');
        }else{
            alert("Error singing up!");
        }
    } catch (error) {
        console.log("Error signing up", error);
    }
    resetForm();
    
  };
  


  return (
    <Container fluid className="loginsignup-container">
      <Row className="loginsignup-content">
        {/* Form Section */}
        <Col md={6} className="loginsignup-form">
          <h1 className="text-center">{state}</h1>
          <Form onSubmit={handleSubmit}>
            {state === "Signup" && (
              <>
                <Form.Group controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={changeHandler}
                  />
                </Form.Group>

                <Form.Group controlId="formGridNic">
                  <Form.Label>NIC No.</Form.Label>
                  <Form.Control
                    name="nic"
                    placeholder="Enter your NIC"
                    value={formData.nic}
                    onChange={changeHandler}
                  />
                </Form.Group>

                <Form.Group controlId="formGridGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={formData.gender}
                    onChange={changeHandler}
                  >
                    <option>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </>
            )}

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={changeHandler}
              />
            </Form.Group>

            <p className="text-center toggle-text">
              {state === "Signup" ? (
                <>
                  Already have an account?{" "}
                  <span onClick={() => setState("Login")}>Login here</span>
                </>
              ) : (
                <>
                  Create an account?{" "}
                  <span onClick={() => setState("Signup")}>Click here</span>
                </>
              )}
            </p>

            <Button variant="success" className="w-100 mt-3 submit-button" type="submit">
              {state === "Signup" ? "Sign Up" : "Login"}
            </Button>
          </Form>
        </Col>

        {/* Image Section */}
        <Col md={6} className="loginsignup-image">
          <h2>Start your journey now</h2>
          <p>Join us to explore amazing features and experiences!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;
