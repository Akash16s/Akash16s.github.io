import React from "react";
import "./headerstyle.scss";
import Logo from "../../logo.svg";
import { Link } from "react-router-dom";
function headerComponent() {
  return (
    <div className="Container NavContainer">
      <div className="row">
        <div className="Logo">
          <a href="/">
            <img className="graphic" src={Logo}></img>
          </a>
        </div>
        {/* <div className="Nav-button">
          <div className="Nav-Button-Inside">
            <Link className="style" to="/">
              Home
            </Link>
          </div>
        </div> */}
        <div className="Nav-button">
          <div className="Nav-Button-Inside">
            <a
              className="style"
              href="https://medium.com/@akash16s"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="Nav-button">
          <div className="Nav-Button-Inside">
            <Link className="style" to="/">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default headerComponent;
