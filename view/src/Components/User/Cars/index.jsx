import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

const CarCard = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 cars ">
      <Card className="glass-card text-center" style={{ width: "24rem" }}>
        <div className="banner-image "></div>
        <Card.Body>
          <Card.Title className="title">Toyota Supra</Card.Title>
          <Card.Text className="description">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </Card.Text>
          <div className="button-wrapper d-flex justify-content-center gap-3 mt-3">
            <Button className="btn outline">DETAILS</Button>
            <Button className="btn fill">BUY NOW</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarCard;
