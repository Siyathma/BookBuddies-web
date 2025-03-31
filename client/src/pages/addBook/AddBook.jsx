import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import "./AddBook.css";

const AddBook = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    location: "",
    contactNumber: "",
    category: "",
    description: "",
  });

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate book name
    if (!formData.bookName.trim()) {
      newErrors.bookName = "Book title is required";
    }
    
    // Validate author
    if (!formData.author.trim()) {
      newErrors.author = "Author name is required";
    }
    
    // Validate location
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    // Validate contact number
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) {
      newErrors.contactNumber = "Please enter a valid 10-digit phone number";
    }
    
    // Validate category
    if (!formData.category) {
      newErrors.category = "Please select a category";
    }
    
    // Validate description (optional validation - remove if description is not required)
    if (!formData.description.trim()) {
      newErrors.description = "Please provide a brief description";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    
    if (validateForm()) {
      console.log("Book added:", formData);
      
      // Show success alert
      setShowAlert(true);
      
      // Reset form after submission
      setFormData({
        bookName: "",
        author: "",
        location: "",
        contactNumber: "",
        category: "",
        description: "",
      });
      
      // Reset validation state
      setValidated(false);
      
      // Hide alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="add-book-container">
      <div className="overlay"></div>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {showAlert && (
              <Alert 
                variant="success" 
                onClose={() => setShowAlert(false)} 
                dismissible
                className="mb-4 alert-floating"
              >
                Book successfully added to the library!
              </Alert>
            )}
            
            <Card className="form-card">
              <Card.Body className="p-4 p-md-5">
                <h2 className="text-center mb-4 form-title">Share Your Book</h2>
                <p className="text-center text-muted mb-4">
                  Fill in the details below to add your book to our community library
                </p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Book Title <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="bookName"
                      value={formData.bookName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter the title of the book"
                      className="form-input"
                      isInvalid={!!errors.bookName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.bookName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Author <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter the author's name"
                      className="form-input"
                      isInvalid={!!errors.author}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.author}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Location <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          placeholder="Where are you located?"
                          className="form-input"
                          isInvalid={!!errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.location}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Contact Number <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="Your phone number"
                          className="form-input"
                          isInvalid={!!errors.contactNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.contactNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Category <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      isInvalid={!!errors.category}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="Fiction">Fiction</option>
                      <option value="Non-fiction">Non-fiction</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Science">Science</option>
                      <option value="History">History</option>
                      <option value="Mystery">Mystery</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.category}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Description <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      placeholder="Add a brief description of the book"
                      className="form-input"
                      isInvalid={!!errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-grid">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg"
                      className="submit-button"
                    >
                      Add Book
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddBook;
