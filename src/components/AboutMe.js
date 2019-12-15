import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div className="profile">
            {/* <img
              className="profile-img"
              data-aos="fade-right"
              data-aos-delay="300"
              src="./images/avatar.png"
              alt="profile image"
            /> */}
            <figure
              class="profile__shape"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img
                src="./images/ava.PNG"
                alt="Cuong Thinh Dao"
                class="profile__img"
              />
              <figcaption class="profile__caption">Cuong Thinh Dao</figcaption>
            </figure>
          </div>
          <div
            className="about-details"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="about-heading">
              <h1>About</h1>
              <h6 className="heading-3">Myself</h6>
            </div>
            <p>
              I am a full stack developer with two years of experience in MERN
              stack and one year in developing Android App. I have a good
              knowledge of Object-Oriented Analysis and Design, Database Design,
              and Design Patterns. Self-improvement and continual study always
              are my top priorities.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
