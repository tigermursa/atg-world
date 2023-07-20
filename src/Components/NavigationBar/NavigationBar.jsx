// NavigationBar.js

import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Modal,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BsFillSquareFill,
  BsFillTriangleFill,
  BsFillCircleFill,
} from "react-icons/bs";
import Signup from "../Signup/Signup";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCreateAccount = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Navbar bg="white" variant="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/" className="text-success d-none d-md-block">
            ATG WORLD
          </Navbar.Brand>
          <div className="text-body d-flex justify-content-end w-100 gap-2 text-muted mr-3 d-sm-block d-md-none">
            <BsFillSquareFill />
            <BsFillCircleFill />
            <BsFillTriangleFill />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto">
              {/* Add any additional navigation links here */}
            </Nav>
            <Form
              className="d-flex mx-auto position-relative pe-2"
              style={{ width: "350px" }}
            >
              <AiOutlineSearch
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                }}
              />
              <FormControl
                type="text"
                placeholder=" Search for your favorite groups in ATG"
                className="rounded-pill text-center  pr-3 bg-danger-subtle"
              />
            </Form>
            <Nav>
              <Nav.Link
                href="#create-account"
                className="text-dark font-weight-bold"
                onClick={handleCreateAccount}
              >
                Create Account, <span className="text-primary">It's Free</span>
                <span className="ml-2">▼</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Create Account Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="custom-modal-dialog">
        <Modal.Header closeButton>
          <Modal.Title className="text-success fs-6 ">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title>
        </Modal.Header>
        <Modal.Body dialogClassName="custom-modal-dialog2">
          <Signup />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default NavigationBar;
