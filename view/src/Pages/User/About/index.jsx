import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='m-4'>
      <Row noGutters>
        <Col md={6} className="p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("public/images/aboutas.webp")',backgroundPosition:'center',backgroundClip:'center',backgroundRepeat:'no-repeat',backgroundSize:'contain' }}>
          {/* Image Section */}
        </Col>
        <Col md={6} className="wrap-about ftco-animate">
          <div className="heading-section heading-section-white pl-md-5 m-2">
            <h2 className="subheading">About us</h2>
            <h4 className="mb-4">Welcome to Carbook</h4>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
              <Button variant="primary" className="">Search Vehicle</Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
