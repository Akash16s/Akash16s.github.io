import React from "react";
import "./linkstyle.scss";
import Resume from "../../assets/Resume.pdf";
function linkcomponent() {
  return (
    <div className="row">
      <div className="row Links">
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
  );
}

export default linkcomponent;
