import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactPage = () => {
  useEffect(() => {
    const map = L.map("mapid").setView([40.409264, 49.867092], 13); // Bakı koordinatları

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    L.marker([40.409264, 49.867092]).addTo(map)
      .bindPopup("<b>SS Rent a Car</b><br />Baku, Azerbaijan").openPopup();
   
    map.scrollWheelZoom.disable();
  }, []);

  return (
    <div>
      {/* Giriş bölməsi */}
      <div className="container-fluid bg-light py-5 text-center">
        <h1 className="h1">Bizimlə Əlaqə</h1>
        <p>🚗 Bakı şəhərində ən yaxşı avtomobil icarəsi xidməti üçün bizimlə əlaqə saxlayın!</p>
      </div>

      {/* Xəritə */}
      <div id="mapid" style={{ width: "100%", height: "400px" }}></div>

      {/* Əlaqə Forması */}
      <Container className="py-5">
        <Row className="py-5">
          <Col md={9} className="m-auto">
            <Form method="post">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Ad</Form.Label>
                    <Form.Control type="text" placeholder="Adınızı daxil edin" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Emailinizi daxil edin" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Mövzu</Form.Label>
                <Form.Control type="text" placeholder="Mövzunu daxil edin" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mesaj</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Mesajınızı yazın..." />
              </Form.Group>
              <div className="text-end mt-2">
                <Button variant="success" size="lg">
                  Bizimlə Əlaqə
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Şəkil Bölməsi */}
      <Container className="text-center my-5">
        <img
          src="https://source.unsplash.com/800x400/?car,rental"
          alt="Car Rental"
          className="img-fluid rounded"
        />
      </Container>
    </div>
  );
};

export default ContactPage;
