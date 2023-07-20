import React from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import { MdOutlineGroupAdd } from "react-icons/md";
import "./GroupPost.css";
import { AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
const GroupPosts = () => {
  const handleOptionSelect = (eventKey) => {
    // Handle the selected option here (Edit or Report)
    switch (eventKey) {
      case "edit":
        console.log("Edit option selected");
        // Add your code for handling the "Edit" option here
        break;
      case "report":
        console.log("Report option selected");
        // Add your code for handling the "Report" option here
        break;
      default:
        console.log("Unknown option selected");
      // Add default handling or display an error message
    }
  };
  return (
    <div className="post-container">
      {/* options bar starts here */}
      <div className="d-flex justify-content-between align-items-center  ">
        <div className="">
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-3 ml-2 font-weight-bold">
              All Posts(32)
            </li>
            <li className="list-inline-item me-3 phone-display ">Article</li>
            <li className="list-inline-item me-3 phone-display">Event</li>
            <li className="list-inline-item me-3 phone-display">Education</li>
            <li className="list-inline-item me-3 phone-display">Job</li>
          </ul>
        </div>
        <div className="large-display">
          <Button variant="" className="me-2 bg-danger-subtle">
            filter:All <BsChevronDown />
          </Button>
        </div>
        <div className="phone-display">
          <Button variant="outline-primary" className="me-2 ">
            Write a Post <BsChevronDown />
          </Button>

          <Button variant="primary" className="">
            <div className="d-flex align-items-center">
              <MdOutlineGroupAdd className="me-2 d-flex flex-row-reverse" />
              Join Group
            </div>
          </Button>
        </div>
      </div>
      {/* options bar ends here */}
      <hr className=" mt-2" />
      {/* Content Section */}
      <div className="d-flex flex-row">
        {/* Part one (65% width) */}
        <div style={{ flex: "65%", marginRight: "0px" }} className="">
          <Card className="content-full-area mt-3">
            <Card.Img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
              alt="Article Thumbnail"
              className="post-image"
            />
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <span role="img" aria-label="Article">
                  ✍️
                </span>{" "}
                Article
              </Card.Subtitle>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </Card.Title>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="custom-dropdown-toggle"
                  >
                    <BsThreeDots />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      eventKey="edit"
                      onSelect={handleOptionSelect}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="report"
                      onSelect={handleOptionSelect}
                    >
                      Report
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Card.Text>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-column align-items -start">
                    {" "}
                    <h4 className="mb-0 ms-2">Sarthak Kamra</h4>
                    <p className="large-display">
                      <AiOutlineEye className=" ml-2 " />
                      1.4k views
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center ">
                  <p className="phone-display">
                    <AiOutlineEye />
                    1.4k views
                  </p>
                  <p className=" bg-body-secondary p-2 rounded-3 large-display">
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4" />
                    <span>Share</span>
                  </p>
                  <p>
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4 phone-display" />
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="content-full-area mt-3">
            <Card.Img
              src="https://life.futuregenerali.in/media/irdoi4ml/tax-benefit-on-loans.webp"
              alt="Article Thumbnail"
              className="post-image"
            />
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <span role="img" aria-label="Article">
                  🔬️
                </span>{" "}
                Education
              </Card.Subtitle>
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <Card.Title>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </Card.Title>
                <p className="fs-2 mr-4 ml-3">
                  <BsThreeDots />
                </p>
              </div>
              <Card.Text>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-column align-items -start">
                    {" "}
                    <h4 className="mb-0 ms-2">Sarah West</h4>
                    <p className="large-display">
                      <AiOutlineEye className=" ml-2 " />
                      4.8k views
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center ">
                  <p className="phone-display">
                    <AiOutlineEye />
                    4.8k views
                  </p>
                  <p className=" bg-body-secondary p-2 rounded-3 large-display">
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4" />
                    <span>Share</span>
                  </p>
                  <p>
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4 phone-display" />
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="content-full-area mt-3 ">
            <Card.Img
              src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
              alt="Article Thumbnail"
              className="post-image object-fit-cover"
            />
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <span role="img" aria-label="Article">
                  🗓️
                </span>{" "}
                Meetup
              </Card.Subtitle>
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <Card.Title>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </Card.Title>
                <p className="fs-2 mr-4 ml-3">
                  <BsThreeDots />
                </p>
              </div>
              <Card.Text>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-column align-items -start">
                    {" "}
                    <h4 className="mb-0 ms-2">Ronal Jones</h4>
                    <p className="large-display">
                      <AiOutlineEye className=" ml-2 " />
                      800
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center ">
                  <p className="phone-display">
                    <AiOutlineEye />
                    800
                  </p>
                  <p className=" bg-body-secondary p-2 rounded-3 large-display">
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4" />
                    <span>Share</span>
                  </p>
                  <p>
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4 phone-display" />
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="content-full-area mt-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <span role="img" aria-label="Article">
                  💼️
                </span>{" "}
                Job
              </Card.Subtitle>
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <Card.Title>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </Card.Title>
                <p className="fs-2 mr-4 ml-3">
                  <BsThreeDots />
                </p>
              </div>
              <Card.Text>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-column align-items -start">
                    {" "}
                    <h4 className="mb-0 ms-2">Joseph Gray</h4>
                    <p className="large-display">
                      <AiOutlineEye className=" ml-2 " />
                      1.8k views
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center ">
                  <p className="phone-display">
                    <AiOutlineEye />
                    1.8k views
                  </p>
                  <p className=" bg-body-secondary p-2 rounded-3 large-display">
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4" />
                    <span>Share</span>
                  </p>
                  <p>
                    <AiOutlineShareAlt className=" bg-body-secondary fs-4 phone-display" />
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Part two (35% width) */}
        <div style={{ flex: "35%" }} className="location">
          <div className="d-flex justify-content-between align-items-center mb-3 shadow-sm pr-3 pl-3 m-4">
            <p>
              <span role="img" aria-label="Location" className="">
                <VscLocation className="location-icon " />
              </span>{" "}
              Nodia,India
            </p>
            <p>
              <span role="img" aria-label="Edit">
                <MdEdit className="edit-icon" />
              </span>{" "}
            </p>
          </div>
          <div className="">
            <p className="info-text text-center">
              <CgDanger />
              Your location will help us serve better <br /> and extend a
              personalized experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPosts;
