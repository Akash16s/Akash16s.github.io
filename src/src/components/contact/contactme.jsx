import React from "react";
import "./contact.scss";
import { Fade } from "react-reveal";
import Links from "../links/linkcomponent";
import Profile from "../../assets/akash.jpeg";

function contactme() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="contact" id="contact-me">
        <div className="row">
          <div>
            <h1>Reach out to me!!</h1>
            <p>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
            </p>
          </div>
          <img className="profile" src={Profile} alt="profile" />
        </div>
        <Links />
      </div>
      <div className="last">
        Made with <span role="img">❤</span> by Akash Srivastava
      </div>
    </Fade>
  );
}

export default contactme;
