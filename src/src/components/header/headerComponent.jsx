import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./headerstyle.scss";
import Logo from "../../logo.svg";
import { Link } from "react-router-dom";
function headerComponent() {
  return (
    <div className="Container NavContainer">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand className="logoHeader" href="home">
          <Link to="/">
            <img src={Logo} id="imageLogo" alt="logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", outline: 0 }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mt-3 mt-lg-0">
            <Nav.Link /* href="home" */ className="text-light">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link /* href="home" */ className="text-light">
              <Link to="#About-Me">About Me</Link>
            </Nav.Link>
            <Nav.Link /* href="home" */ className="text-light">
              <Link to="#projects">Projects</Link>
            </Nav.Link>
            <Nav.Link /* href="home" */ className="text-light">
              <Link to="#Contact-Me">Contact Me</Link>
            </Nav.Link>
            <a
              href="https://github.com/Akash16s"
              className="text-light"
              id="become"
            >
              <p>Blog</p>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default headerComponent;
