import React from "react";
import logo from "../../assets/logo.png";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Marquee from "react-fast-marquee";

function Header() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const dayOfWeek = days[today.getDay()];
  const month = months[today.getMonth()];
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();

  const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  console.log(formattedDate);
  // output: "Tuesday, April 25, 2023" (will vary depending on the current date)

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <h6>
          <strong>{dayOfWeek}</strong>
          {` ${month} ${dayOfMonth}, ${year}`}
        </h6>
      </div>

      <div className="d-flex align-items-center my-3">
        <Button variant="danger">Latest</Button>
        <Marquee gradient={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <>
        {["xl"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">News Portal</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    News Portal
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <NavDropdown
                      title="Career"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action6">Login</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </Container>
  );
}

export default Header;
