import React, { Component } from "react";
import "./homepagestyle.scss";
import Links from "../links/linkcomponent";
import WhatIdo from "../whatido/whatido";
import Programmer from "../../assets/programmer.png";
import Projects from "../../components/projects/projectscomponent";
import Experience from "../../components/experience/experience";
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
                I am a Full Stack Developer.
                <br />I love to engineer and build Amazing products.
                <br />
                <br /> <i>Currently I am General Secretary at BVPIEEE</i>
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
        </div>
      </Fade>
    );
  }
}

export default homePageComponent;
