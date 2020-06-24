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
            <a href="#aboutme" className="text-light">
              <p>About Me</p>
            </a>
            <a href="#projects" className="text-light">
              <p>Projects</p>
            </a>
            <a href="#contact-me" className="text-light">
              <p>Contact Me</p>
            </a>
            <a
              href="https://medium.com/@akash16s"
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
