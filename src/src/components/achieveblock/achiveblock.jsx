import React from "react";
import "./achieve.scss";
import { Fade } from "react-reveal";

function achiveblock(props) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="achieve-block">
        <img className="image" src={props.val.image} alt="imgss" />
        <h3>{props.val.Title}</h3>
        <p>{props.val.Desc}</p>
        <a href={props.val.link} className="btn btn-primary">
          Know More
        </a>
      </div>
    </Fade>
  );
}

export default achiveblock;
