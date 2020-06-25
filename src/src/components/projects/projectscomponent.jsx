import React from "react";
import "./projects.scss";
import Wiehack from "../../assets/wiehack.PNG";
import SSDr from "../../assets/ssdr.PNG";
import Meto from "../../assets/meto.jpeg";
import Minedenim from "../../assets/Minedenim.PNG";
import { Fade } from "react-reveal";

function projectscomponent() {
  const data = [
    {
      name: "Minedenim Project",
      description:
        "As Tech Lead of the software-dev-team designed and developed a scalable system for the company. The system is currently live.",
      link: "https://minedenim.co.in/",
      image: Minedenim,
    },
    {
      name: "StudyStack",
      description:
        "Network and create a quick connection with tech newbies, enthusiasts and mentors around you! Get A.I. curated safe content based on your proficiency level.",
      link: "https://devfolio.co/submissions/studystack",
      image:
        "https://storage.googleapis.com/devfolio/hackathons/8b56e69b9abf4e1bb60c27a1372c580b/projects/4295ab8dad734d51b71996f28d849992/pic2pf73zjxy.png",
    },
    {
      name: "Meto (IIITD Hack)",
      description:
        "Developed a fully-fledged System, having target of capturing selfie and predicting the user’s BMI.",
      link: "https://devfolio.co/submissions/meto",
      image: Meto,
    },
    {
      name: "Face-Recognition and Attendance: BHEL",
      description:
        "Developed a deployable system in which one can pass multiple arguments and perform facial Recognition and Attendance.",
      link: "https://github.com/Akash16s/Face-Recognition-Attendance",
      image: "https://image.flaticon.com/icons/svg/3064/3064563.svg",
    },
    {
      name: "WIEHack 2.0 (Online) Portal",
      description:
        "Developed a Hackathon Organisation portal. WIEHack 2.0 was organised on the platform. The platform served over 200+ participants.",
      link: "https://github.com/BVPIEEE/hackathon_portal",
      image: Wiehack,
    },
    {
      name: "SSDr- Surveillance Survey and Damage Report Rover",
      description:
        " A versatile robot having the capability of high manoeuvrability, panoramic view, depth mapping, and human detection",
      link: "https://github.com/Akash16s/SSDr",
      image: SSDr,
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <Fade top duration={1000} distance="20px">
        {data.map((dataApp) => (
          <div className="project">
            <div className="row">
              <div className="col-desc col">
                <h3>{dataApp.name}</h3>
                <span>{dataApp.description}</span>
                <br />
                <a id="link" className="btn btn-primary " href={dataApp.link}>
                  Link
                </a>
              </div>
              <div className="col-image col">
                <img className="projectImage" src={dataApp.image} alt="imss" />
              </div>
            </div>
          </div>
        ))}
      </Fade>

      <div className="row">
        <div className="col-12 more-proj">
          <a href="https://github.com/Akash16s" className="btn btn-primary">
            <b>More Projects</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default projectscomponent;
