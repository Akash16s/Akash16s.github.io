import React, { Component } from "react";
import "./experience.scss";
import { Fade } from "react-reveal";

class experience extends Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        title: "Full-Stack Developer Intern",
        Company: "Unbiased.cc",
        date: "July 2020 – Present",
        location: "Remote(Sewden)",
        details: [
          "ReactWeb-App Development",
          "NodeJS Server Development",
          "Firebase Deployment, Firestore, Firebase Functions",
          "Serverless Implementation",
        ],
      },
      {
        title: "System Admin Intern",
        Company: "Roboiotics LLP",
        date: "May 2020 – June 2020",
        location: "New Delhi, India",
        details: [
          "Website Development",
          "Deployment and Management",
          "DNS Management",
          "Writing and publishing new Blog",
        ],
      },
      {
        title: "Project Intern",
        Company: "Bharat Heavy Electricals Limited",
        date: "June 2019 – August 2019",
        location: "Noida, India",
        details: [
          "Developed an Advanced CCTV based Attendance System",
          "Face Recognition API integration",
          "Video Frame skipping algorithm development",
          "Deployment on the server",
          "User Interface creation using HTML, CSS and Bootstrap",
          "User Authentication and Authorization",
        ],
      },
      {
        title: "Joint Secretary (Leadership Experience)",
        Company: "BVPIEEE",
        date: "July 2019 – July 2020",
        location: "New Delhi, India",
        details: [
          "Society and Event Management",
          "WIEHack 2.0 (2020) Online (Technology Head)",
          "WIEHack (2018) (Head Coordinator)",
          "Organised Competitive Coding Workshops",
          "Founder of 10x Developer Program 2019",
        ],
      },
    ];
  }

  render() {
    return (
      <div>
        <div className="Experience" id="Experience">
          <h1>Experience</h1>
          <main>
            <Fade bottom duration={1000} distance="20px">
              {this.state.map((job) => (
                <p>
                  <h4>{job.title}</h4>
                  <h5>
                    <strong>{job.Company}</strong>
                  </h5>
                  <div className="row">
                    <span className="col" role="img">
                      📆{job.date}
                    </span>
                    <span className="col" role="img">
                      📍{job.location}
                    </span>
                  </div>
                  {job.details.map((det) => (
                    <span>
                      {det}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </Fade>
          </main>
        </div>
      </div>
    );
  }
}

export default experience;
