import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UserSteps = () => {
  return (
    <section className="py-5 py-md-8 bg-white">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-5 fw-bold mb-3">How does it work?</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '32rem' }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
          </Col>
        </Row>

        <div className="position-relative mt-5">
          {/* Curved dotted line - visible only on md screens and up */}
          <div className="position-absolute d-none d-md-block" style={{ top: '2rem', left: 0, right: 0 }}>
            <img 
              className="w-100" 
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" 
              alt="Dotted line connecting steps" 
            />
          </div>

          <Row className="text-center">
            {/* Step 1 */}
            <Col md={4} className="mb-5 mb-md-0">
              <div className="d-flex justify-content-center">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white border border-2 shadow-sm"
                  style={{ width: '64px', height: '64px' }}
                >
                  <span className="fs-4 fw-semibold text-secondary">1</span>
                </div>
              </div>
              <h3 className="fs-4 fw-semibold mt-4 mt-md-5">Create a free account</h3>
              <p className="text-muted mt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </Col>

            {/* Step 2 */}
            <Col md={4} className="mb-5 mb-md-0">
              <div className="d-flex justify-content-center">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white border border-2 shadow-sm"
                  style={{ width: '64px', height: '64px' }}
                >
                  <span className="fs-4 fw-semibold text-secondary">2</span>
                </div>
              </div>
              <h3 className="fs-4 fw-semibold mt-4 mt-md-5">Build your website</h3>
              <p className="text-muted mt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </Col>

            {/* Step 3 */}
            <Col md={4}>
              <div className="d-flex justify-content-center">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white border border-2 shadow-sm"
                  style={{ width: '64px', height: '64px' }}
                >
                  <span className="fs-4 fw-semibold text-secondary">3</span>
                </div>
              </div>
              <h3 className="fs-4 fw-semibold mt-4 mt-md-5">Release & Launch</h3>
              <p className="text-muted mt-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default UserSteps;
