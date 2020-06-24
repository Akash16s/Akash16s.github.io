import React, { Component } from "react";
import "./homepagestyle.scss";
import Links from "../links/linkcomponent";
import Programmer from "../../assets/programmer.png";
class homePageComponent extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container-About">
            <h1>Hey!! Akash Here,</h1>
            <br />
            <span className="Aboutme1">
              I am a Full Stack Developer.
              <br />I love to engineer and build Amazing products.
              <br />
              <br /> <i>Currently I am General Secretary at BVPIEEE</i>
            </span>
          </div>
          <div className="container-art">
            <img className="graphic" src={Programmer} />
          </div>
        </div>

        <Links />
      </div>
    );
  }
}

export default homePageComponent;
