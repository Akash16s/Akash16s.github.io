import React, { Component } from "react";
import "./achievements.scss";
import { Fade } from "react-reveal";
import Achieve from "../../components/achieveblock/achiveblock";
import MSIT from "../../assets/msit.jpeg";
import Technovation from "../../assets/technovation.jpeg";
import Meto from "../../assets/meto.jpeg";

class achievements extends Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        image: MSIT,
        Title: "Technical Project Exhibition",
        Desc: "First Prize at Technical Project Exhibition by IEEE MSIT",
        link: "#",
      },
      {
        image: Technovation,
        Title: "Technocation Fervor X",
        Desc: "Second prize at Technovation in Fervour X by BVPIEEE",
        link: "#",
      },
      //   {
      //     image: Meto,
      //     Title: "Hack IIITD 2019",
      //     Desc: "Article got featured on Analytics Vidhya Medium Blog Page",
      //     link: "https://github.com/Akash16s/appic-peeps",
      //   },
      {
        image: "https://miro.medium.com/max/700/1*sDHp0R3cYVgCNToYNE79Vg.jpeg",
        Title: "Analytics Vidhya",
        Desc: "Article got featured on Analytics Vidhya Medium Publication",
        link:
          "https://medium.com/analytics-vidhya/how-to-implement-otp-based-authentication-on-django-rest-framework-185ae8032f07?source=your_stories_page---------------------------",
      },
      {
        image:
          "https://3.imimg.com/data3/UR/DE/MY-10297329/screen-shot-2014-05-22-at-12-12-27-pm-500x500.png",
        Title: "Data Structures and Algorithms in C++",
        Desc: "CODING BLOCKS",
        link: "#",
      },
      {
        image:
          "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-11-at-2.33.59-PM.png?fit=466%2C114&ssl=1",
        Title: "One Month",
        Desc: "Completed the course: Learn JavaScript",
        link:
          "https://drive.google.com/file/d/1TQ4JfzkLeGNUEs7rhELofmrIEtgqJods/view?usp=sharing",
      },
      {
        image:
          "https://68.media.tumblr.com/92a71d62ace9940f8ddd540400444fc4/tumblr_inline_mppo32jFBC1qz4rgp.png",
        Title: "Blockchain Basics",
        Desc: "Course by University of Buffalo",
        link:
          "https://drive.google.com/file/d/1c3Wru5q8aUT-r7zajBrhTwjX9vapsnT2/view?usp=sharing",
      },
    ];
  }

  render() {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="Achievements" id="Achievements">
          <h1>Achievements and Certifications</h1>
          <div className="block row">
            {this.state.map((value) => (
              <Achieve val={value} />
            ))}
          </div>
        </div>
      </Fade>
    );
  }
}

export default achievements;
