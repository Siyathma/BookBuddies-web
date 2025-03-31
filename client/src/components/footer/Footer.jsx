import React from 'react';
import { Container, Row, Col, Form, Button, Image, Nav } from 'react-bootstrap';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Github 
} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }} className="py-5">
      <Container>
        <Row className="mb-5">
          {/* Company Info Column */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <Image 
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" 
              alt="Company Logo" 
              height={36} 
              className="mb-3"
            />
           <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
            </p>
            <div className="d-flex mt-4">
              <Nav.Link 
                href="#" 
                className="me-2 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '32px', height: '32px' }}
              >
                <Twitter size={16} />
              </Nav.Link>
              <Nav.Link 
                href="#" 
                className="me-2 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '32px', height: '32px' }}
              >
                <Facebook size={16} />
              </Nav.Link>
              <Nav.Link 
                href="#" 
                className="me-2 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '32px', height: '32px' }}
              >
                <Instagram size={16} />
              </Nav.Link>
              <Nav.Link 
                href="#" 
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '32px', height: '32px' }}
              >
                <Github size={16} />
              </Nav.Link>
            </div>
          </Col>

          {/* Company Links Column */}
          <Col lg={2} md={6} xs={6} className="mb-4 mb-lg-0">
            <h6 className="text-uppercase text-white fw-bold small mb-3">Company</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white p-0 mb-2">About</Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2">Features</Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2">Works</Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2">Career</Nav.Link>
            </Nav>
          </Col>

          {/* Help Links Column */}
          <Col lg={2} md={6} xs={6} className="mb-4 mb-lg-0">
            <h6 className="text-uppercase text-white fw-bold small mb-3">Help</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white p-0 mb-2">Customer Support</Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2">Delivery Details</Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2">Terms & Conditions</Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2">Privacy Policy</Nav.Link>
            </Nav>
          </Col>

          {/* Newsletter Column */}
          <Col lg={4} md={6}>
            <h6 className="text-uppercase text-white fw-bold small mb-3">Subscribe to newsletter</h6>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  className="py-3"
                />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit" 
                className="py-2 px-4 fw-semibold"
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />
        <p className="text-center text-white small">© Copyright 2021, All Rights Reserved by Postcraft</p>
      </Container>
    </footer>
  );
};

export default Footer;
