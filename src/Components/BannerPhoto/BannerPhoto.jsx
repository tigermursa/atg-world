import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./BannerPhoto.css";

const BannerPhoto = () => {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinToggle = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className="bg-image">
      <Container className="d-flex align-items-end justify-content-start h-100 text-container position-relative">
        <div className="text-white font-weight-bold">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        <Button
          variant="outline-light"
          className="position-absolute top-0 end-0 p-2 d-md-none mt-3 mr-3"
          onClick={handleJoinToggle}
        >
          {isJoined ? "Leave Group" : "Join Group"}
        </Button>
      </Container>
    </div>
  );
};

export default BannerPhoto;
