import React from "react";
import { Container } from "react-bootstrap";
import "./BannerPhoto.css";

const BannerPhoto = () => {
  return (
    <div className="bg-image">
      <Container className="d-flex align-items-end justify-content-start h-100 text-container">
        <div className="text-white font-weight-bold">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </Container>
    </div>
  );
};

export default BannerPhoto;
