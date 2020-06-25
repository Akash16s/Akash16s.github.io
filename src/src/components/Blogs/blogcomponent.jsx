import React from "react";
import "./blog.scss";
import Blog from "../../assets/blog.gif";
import { Fade } from "react-reveal";

function blogcomponent() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="blog">
        <h1>Blogs</h1>
        <div className="row">
          <img src={Blog} className="image" alt="blog" />
          <div>
            <p className="det">
              <strong>Medium Username : </strong>
              <a href="https://medium.com/@akash16s">@Akash16s</a>
              <br />
              <strong>Medium Publication : </strong>
              <a href="https://medium.com/camping-with-python">
                @camping-with-python
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default blogcomponent;
