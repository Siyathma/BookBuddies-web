import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import "./AboutHero.css"

const AboutHero = () => {
  return (
    <div className="bg-light overflow-hidden">
      <section className="py-5 py-lg-7">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              {/* Badge
              <div className="d-inline-block mb-4">
                <span className="border border-secondary rounded-pill px-4 py-2 text-dark">
                  Made by Developers, for Developers
                </span>
              </div> */}
              
              {/* Heading */}
              <h1 className="display-4 fw-bold mb-4">
                Quality resources shared by the community
              </h1>
              
              {/* Subheading */}
              <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '32rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
              </p>
              
              {/* CTA Button with gradient effect */}
              <div className="position-relative d-inline-block">
                <div 
                  className="position-absolute w-100 h-100 rounded-3 blur-lg"
                  style={{
                    background: 'linear-gradient(90deg, #44BCFF -0.55%, #FF44EC 50%, #FF675E 99.34%)',
                    opacity: 0.7,
                    top: 0,
                    left: 0,
                    transition: 'all 0.3s ease',
                    transform: 'scale(1.02)',
                    zIndex: 0
                  }}
                ></div>
                <Button 
                  variant="dark" 
                  size="lg" 
                  className="position-relative fw-bold px-4 py-3 rounded-3"
                  style={{ zIndex: 1 }}
                >
                  Get access to 4,958 resources
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        
        {/* Hero Image */}
        <div className="mt-5 mt-md-7">
          <Image 
            src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" 
            alt="Hero illustration" 
            fluid 
            className="mx-auto d-block"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'top',
              transform: 'scale(1.5)',
              maxWidth: '100%'
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
