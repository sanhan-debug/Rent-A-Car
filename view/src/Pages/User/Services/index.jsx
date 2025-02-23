import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCar, FaShuttleVan, FaPlane, FaCity } from 'react-icons/fa';  // Import icons from react-icons

const Services = () => {
  return (
    <Container className='bg-light'>
      <Row className="justify-content-center mb-5">
        <Col md={7} className="text-center heading-section ftco-animate">
          <span className="subheading">Services</span>
          <h2 className="mb-3">Our Latest Services</h2>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <FaCar size={40} />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">Wedding Ceremony</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <FaShuttleVan size={40} />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">City Transfer</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <FaPlane size={40} />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">Airport Transfer</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <FaCity size={40} />
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">Whole City Tour</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
