import React from "react";
import { Container, Row, Col, ListGroup, Form, InputGroup, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row>
          {/* Şirkət Məlumatları */}
          <Col md={4} className="mb-4">
            <h2 className="text-success border-bottom pb-3 border-light">SS Rent a Car</h2>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light border-0">
                <FaMapMarkerAlt className="me-2" />
                123 Main Street, City, Country
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0">
                <FaPhone className="me-2" />
                <a href="tel:+1234567890" className="text-decoration-none text-light">+1 234 567 890</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0">
                <FaEnvelope className="me-2" />
                <a href="mailto:info@rentacar.com" className="text-decoration-none text-light">info@rentacar.com</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Avtomobil Kateqoriyaları */}
          <Col md={4} className="mb-4">
            <h2 className="border-bottom pb-3 border-light">Car Categories</h2>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">Luxury Cars</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">SUVs</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">Economy Cars</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">Convertible</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">Electric Cars</a></ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Əlavə Məlumat */}
          <Col md={4} className="mb-4">
            <h2 className="border-bottom pb-3 border-light">Further Info</h2>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">Home</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">About Us</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">FAQs</a></ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0"><a href="#" className="text-decoration-none text-light">Contact</a></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Sosial Mediya və Abunəlik Forması */}
        <Row className="text-light mt-4">
          <Col md={6} className="mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="http://facebook.com/" className="text-light"><FaFacebookF size={24} /></a>
              <a href="https://www.instagram.com/" className="text-light"><FaInstagram size={24} /></a>
              <a href="https://twitter.com/" className="text-light"><FaTwitter size={24} /></a>
              <a href="https://www.linkedin.com/" className="text-light"><FaLinkedin size={24} /></a>
            </div>
          </Col>
          <Col md={6}>
            <h5>Subscribe to Our Newsletter</h5>
            <Form>
              <InputGroup>
                <Form.Control type="email" placeholder="Enter your email" className="bg-dark text-light border-light" />
                <Button variant="success">Subscribe</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="w-100 bg-black py-3 mt-4 text-center">
          <p className="mb-0">
            Copyright &copy; 2024 SS Rent a Car | Made by{" "}
            <a href="www.linkedin.com/in/sənhan-sayılov-8494a72b3" className="text-success">
              Sanhan
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;


