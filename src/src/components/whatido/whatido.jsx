import React from "react";
import "./whatido.scss";
import Programmer from "../../assets/programmer.jpg";
function whatido() {
  const state = [
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png",
    "https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    "https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png",
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
    "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png",
    "https://ktconnections.com/images/easyblog_articles/658/microsoft-azure-500x500.png",
  ];

  const skillEloab = [
    "Develop and deploy scalable django server on any cloud platform",
    "Can build Highly interactive web apps",
    "Build RESTFul API service",
    "Can implement Computer Vision Functionality",
  ];
  return (
    <div className="WhatIdo">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-image">
          <img src={Programmer} className="image"></img>
        </div>
        <div className="col-md-6 col-sm-12 col-text">
          <h1>What I love to do?</h1>
          <br />
          <span>I love to learn about new technologies and implement it.</span>
          <div className="row">
            {state.map((value) => (
              <img className="skills" src={value} alt="skill"></img>
            ))}
          </div>
        </div>
        <div className="skills-eloborated">
          {skillEloab.map((value) => (
            <span>
              <span role="img" aria-describedby>
                ✨
              </span>
              {value}
              <br />
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default whatido;