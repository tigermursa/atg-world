import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Lottie from "react-lottie";
import animationData from "/public/signup.json";
import "./Signup.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Login from "../Login/Login";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebasecongif";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, signInGoogle } = useContext(AuthContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [userPhoto, setUserPhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const googleProvider = new GoogleAuthProvider();
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match!");
      return;
    }
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((user) => {
        console.log("User account created successfully:", user);
        const displayName = `${formData.firstName} ${formData.lastName}`;
        user.updateProfile({
          displayName: displayName,
        });
        navigate(from) || "/";
      })
      .catch((error) => {
        console.log("Error creating user account:", error);
      });
  };

  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoogleSignIn = () => {
    signInGoogle(googleProvider)
      .then((result) => {
        const theUser = result.user;
        if (!theUser.displayName) {
          const displayName = `${formData.firstName} ${formData.lastName}`;
          theUser.updateProfile({
            displayName: displayName,
          });
        }
        createUser(theUser)
          .then(() => {
            console.log("User created successfully!");
            navigate(from) || "/";
          })
          .catch((error) => {
            console.log("Error creating user:", error);
          });
      })
      .catch((error) => {
        console.log("Error signing in with Google:", error);
      });
  };

  return (
    <Container className="signup-body">
      <Row className="justify-content-center ">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <div>
              <p className="fs-4 font-weight-bolder">Create Account</p>
            </div>
            <div className="d-flex">
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
                className="bg-light rounded-0"
              />
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
                className="bg-light rounded-0"
              />
            </div>

            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="bg-light rounded-0"
            />

            <div className="password-input-container">
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
                className="bg-light rounded-0"
              />
              <span
                className="eye-icon"
                onClick={toggleShowPassword}
                role="button"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              required
              className="bg-light rounded-0"
            />
            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-3 rounded-5 mb-5"
            >
              Create Account
            </Button>
            <div className="text-center mb-3">Or sign up with:</div>
            <Button variant="outline-primary" className="mb-2 w-100">
              <BsFacebook /> Sign up with Facebook
            </Button>
            <Button
              variant="outline-danger"
              className="w-100"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle /> Sign up with Google
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={10} md={8} lg={6} className="mt-5">
          <div className="text-center pb-5">
            Already have an account?
            <a
              className="font-weight-bold"
              href="#"
              onClick={handleSignInClick}
            >
              Sign In
            </a>
          </div>
          <div className="d-none d-md-block">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
          <div className="d-block d-sm-none">
            <p className="text-muted font-weight-bold">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-success fs-6 ">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Signup;
