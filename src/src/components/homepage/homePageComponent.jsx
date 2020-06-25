import React, { Component } from "react";
import "./homepagestyle.scss";
import Links from "../links/linkcomponent";
import WhatIdo from "../whatido/whatido";
import Programmer from "../../assets/programmer.png";
import Projects from "../../components/projects/projectscomponent";
import Experience from "../../components/experience/experience";
import Achievements from "../../components/achievements/achievements";
import Blog from "../../components/Blogs/blogcomponent";
import Contact from "../../components/contact/contactme";
import { Fade } from "react-reveal";

class homePageComponent extends Component {
  render() {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div>
          <div className="row">
            <div className="container-About">
              <h1>Hey!! Akash Here,</h1>
              <br />
              <span className="Aboutme1" id="aboutme">
                <strong>
                  I am a Full Stack Developer | Freelancer | Blockchain
                  Enthusiast
                  <br />I love to engineer and build Amazing products
                </strong>
                <br />
                <br />
                Currently I am a pre-final year Student at Bharati Vidyapeeth's
                College of Engineering, New Delhi and General Secretary at
                BVPIEEE <br /> <strong>I am Open For Opportunities</strong>
              </span>
            </div>
            <div className="container-art">
              <img className="graphic" src={Programmer} alt="imagg" />
            </div>
          </div>

          <Links />
          <WhatIdo />
          <Projects />
          <Experience />
          <Achievements />
          <Blog />
          <Contact />
        </div>
      </Fade>
    );
  }
}

export default homePageComponent;
