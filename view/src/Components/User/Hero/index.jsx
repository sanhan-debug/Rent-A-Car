import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div
      className="hero-wrap d-flex align-items-center justify-content-center"
    >
      <div className="overlay"></div>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} className="hero-text">
            <h1 className="mb-4">Fast & Easy Way To Rent A Car</h1>
            <p className="lead">
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts
            </p>
            <a
              href="https://vimeo.com/45830194"
              className="icon-wrap d-inline-flex align-items-center mt-4"
            >
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="ion-ios-play"></span>
              </div>
              <div className="heading-title ml-3">
                <span>Easy steps for renting a car</span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
