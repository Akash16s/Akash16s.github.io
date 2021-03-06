import React from "react";
import "./linkstyle.scss";
import Resume from "../../assets/Resume.pdf";
import { Fade } from "react-reveal";

function linkcomponent() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="row">
        <div className="Links">
          <a href="https://github.com/Akash16s">
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111432.svg"
              className="icon"
              alt="github"
            />
          </a>
          <a href="https://medium.com/@akash16s">
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111543.svg"
              className="icon"
              alt="medium"
            />
          </a>
          <a href="https://twitter.com/AkashSr16s">
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111738.svg"
              className="icon"
              alt="twitter"
            />
          </a>
          <a href="https://www.linkedin.com/in/akash16s/">
            <img
              src="https://image.flaticon.com/icons/svg/1384/1384046.svg"
              className="icon"
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:akashs1698@gmail.com">
            <img
              src="https://image.flaticon.com/icons/svg/561/561188.svg"
              className="icon"
              alt="email"
            />
          </a>
        </div>

        <div className="resume">
          <a href={Resume}>
            <img
              src="https://image.flaticon.com/icons/svg/3050/3050343.svg"
              className="icon"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default linkcomponent;
