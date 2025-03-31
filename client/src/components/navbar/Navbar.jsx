import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CustomNavbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#FFDE59" }}>
      <Container fluid>
        <Navbar.Brand href="/">BookBuddies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/add-book">Add a book</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          
          {/* Center the search bar */}
          <Form className="d-flex mx-auto search-bar">
            <Form.Control
              type="search"
              placeholder="Search anything you want to read"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
          {/* Authentication button - shows login or logout based on auth state */}
          <div className="auth-buttons">
            {isAuthenticated ? (
              <Button 
                variant="danger" 
                onClick={handleLogout}
                className="me-2"
              >
                Logout
              </Button>
            ) : (
              <Link to='/login'>
                <Button 
                  variant="success" 
                  className="me-2"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
