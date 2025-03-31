import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";

const Features = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Container style={{ maxWidth: "90%" }}>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-center text-md-start px-4">
            <h2 className="fw-bold display-5">Grow business with <br /> Celebration.</h2>
            <p className="text-muted mt-3 fs-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
              sunt nostrud amet.
            </p>
          </Col>

          {/* Right Content (Image + Stats) */}
          <Col md={6} className="position-relative px-4 mt-4 mt-md-0">
            {/* Image */}
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Team celebration"
              className="img-fluid rounded shadow"
            />

            {/* Floating Stats Card */}
            <Card className="position-absolute bottom-0 start-0 bg-warning p-3 shadow-lg"
              style={{ maxWidth: "150px", transform: "translate(-20px, 20px)" }}>
              <Card.Body className="text-dark text-center">
                <h3 className="fw-bold display-6">53%</h3>
                <p className="mb-0 fw-semibold">High Conversions</p>
                <p className="small">Everything</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Features