import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-heading">
            <h1>My Skills</h1>
            <h6>What I can do</h6>
          </div>
          <div className="my-skills">
            <div className="skill" data-aos="fade-in" data-aos-delay="300">
              <div className="icon-container">
                <i class="fas fa-code"></i>{" "}
              </div>
              <h1>Fullstack Web Development</h1>
              <p>I am proficient in using ReactJs and MERN stack.</p>
            </div>
            {/* <div className="skill" data-aos="fade-in" data-aos-delay="600">
              <div className="icon-container">
                <i className="fas fa-layer-group"></i>
              </div>
              <h1>Web Development</h1>
            </div> */}
            <div className="skill" data-aos="fade-in" data-aos-delay="900">
              <div className="icon-container">
                <i class="fas fa-mobile-alt"></i>{" "}
              </div>
              <h1>Android Application Development</h1>
              <p>
                One year of working experience in building Android App using
                Android Studio.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
