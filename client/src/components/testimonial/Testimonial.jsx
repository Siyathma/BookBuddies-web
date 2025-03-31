import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const Testimonial = () => {
  // Helper function to render 5 stars
  const renderStars = () => {
    return (
      <div className="d-flex mb-4">
        {[...Array(5)].map((_, index) => (
          <StarFill key={index} className="text-warning me-1" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <p className="text-muted lead">
              2,157 people have said how good Rareblocks
            </p>
            <h2 className="display-5 fw-bold mb-4">
              Our happy clients say about us
            </h2>
            <Button 
              variant="link" 
              className="text-dark fw-bold text-decoration-none border-bottom border-dark pb-1"
            >
              Check all 2,157 reviews
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="position-relative">
              {/* Colored background effect */}
              <div 
                className="position-absolute" 
                style={{
                  top: "10%", 
                  left: "5%", 
                  right: "5%", 
                  bottom: "10%", 
                  background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  filter: "blur(50px)",
                  opacity: "0.3",
                  borderRadius: "24px",
                  zIndex: 0
                }}
              ></div>

              {/* Testimonial cards */}
              <Row className="position-relative" style={{ zIndex: 1 }}>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow">
                    <Card.Body className="d-flex flex-column p-4">
                      {renderStars()}
                      
                      <blockquote className="mb-4 flex-grow-1">
                        <p className="fs-5">
                          "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
                        </p>
                      </blockquote>
                      
                      <div className="d-flex align-items-center">
                        <Image 
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" 
                          roundedCircle 
                          width={44} 
                          height={44} 
                          className="me-3"
                        />
                        <div>
                          <p className="fw-bold mb-0">Leslie Alexander</p>
                          <small className="text-muted">Freelance React Developer</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow">
                    <Card.Body className="d-flex flex-column p-4">
                      {renderStars()}
                      
                      <blockquote className="mb-4 flex-grow-1">
                        <p className="fs-5">
                          "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users."
                        </p>
                      </blockquote>
                      
                      <div className="d-flex align-items-center">
                        <Image 
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" 
                          roundedCircle 
                          width={44} 
                          height={44} 
                          className="me-3"
                        />
                        <div>
                          <p className="fw-bold mb-0">Jacob Jones</p>
                          <small className="text-muted">Digital Marketer</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow">
                    <Card.Body className="d-flex flex-column p-4">
                      {renderStars()}
                      
                      <blockquote className="mb-4 flex-grow-1">
                        <p className="fs-5">
                          "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."
                        </p>
                      </blockquote>
                      
                      <div className="d-flex align-items-center">
                        <Image 
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" 
                          roundedCircle 
                          width={44} 
                          height={44} 
                          className="me-3"
                        />
                        <div>
                          <p className="fw-bold mb-0">Jenny Wilson</p>
                          <small className="text-muted">Graphic Designer</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
