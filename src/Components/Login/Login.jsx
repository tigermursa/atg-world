import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Lottie from "react-lottie";
import animationData from "/public/signup.json"; // Remove "/public" from the path
import "./Login.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Signup from "../Signup/Signup";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth"; 
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn, signInGoogle } = useContext(AuthContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State variable for success modal

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSignInSuccess = () => {
    setShowSuccessModal(true); // Show the success modal
    setFormData({ // Reset the form data
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSignInForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        form.reset();
        console.log(loggedInUser);
        handleSignInSuccess(); // Call the function to handle sign-in success
        navigate(from); // Navigate to the '/' route
      })
      .catch((error) => {
        console.error("Your email or password not valid", error);
      });
  };

  // Google Sign In here >>>>>>>>>>
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInGoogle(googleProvider)
      .then((result) => {
        const theUser = result.user;
        console.log(theUser);
        navigate(from);
      })
      .catch((error) => {
        console.error("Error signing in with Google", error);
      });
  };

  return (
    <Container className="signup-body">
      <Row className="justify-content-center ">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Form onSubmit={handleSignInForm}>
            <div>
              <p className="fs-4 font-weight-bolder">Sign In</p>
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
            <div>
              <Button
                type="submit"
                variant="primary"
                className="w-100 mt-3 rounded-5 mb-5 d-none d-md-block d-lg-block"
              >
                Sign In
              </Button>

              <div className="d-flex align-items-center gap-5 d-block d-sm-none">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-50 mt-3 rounded-5 mb-5"
                >
                  Sign In
                </Button>{" "}
                <p className="w-50 mb-4" onClick={handleShowModal}>
                  or create account
                </p>
              </div>
            </div>
            <div className="text-center mb-3 d-none">Or sign up with:</div>
            <Button variant="outline-primary" className="mb-2 w-100">
              <BsFacebook /> Sign in with Facebook
            </Button>
            <Button variant="outline-danger" className="w-100" onClick={handleGoogleSignIn}>
              <FcGoogle /> Sign in with Google
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={10} md={8} lg={6} className="mt-5">
          <div className="text-center pb-5  d-none d-md-block">
            Don’t have an account yet?
            <a className="font-weight-bold" href="#" onClick={handleShowModal}>
              Create new for free!
            </a>
          </div>
          <div className="d-none d-md-block">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
          <div className="d-block d-sm-none">
            <p className="text-muted font-weight-bold">Forgot Password?</p>
          </div>
        </Col>
      </Row>

      {/* Modal for Sign Up */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="custom-modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-success fs-6">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
      </Modal>

      {/* Modal for Sign In Success */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        dialogClassName="custom-modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-success fs-6">
            Sign In Successful!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations! You have successfully signed in.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;
