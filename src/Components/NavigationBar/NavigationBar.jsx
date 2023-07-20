import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home" className="text-success">
          ATG WORLD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add any additional navigation links here */}
          </Nav>
          <Form
            className="d-flex mx-auto  position-relative pe-2"
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
            >
              Create Account, <span className="text-primary">It's Free</span>
              <span className="ml-2">▼</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
