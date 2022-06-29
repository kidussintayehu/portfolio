import React from "react";
import './About.css';

const About = () => {
  return (
    <div id="about"  data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>I'm a Full Stack developer and  UI/UX designer.
                 I love to design softwares, develop new features and impliment 
                  using different technologies. My work is mainly focused on 
                 web-development.  I also like solving realife problems using softwares.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
