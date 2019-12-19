import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing" id="landing">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="./videos/campervan.mp4" type="video/mp4" />
              {/* <source src="./videos/abcd.webm" type="video/webm" /> */}
              Your Browser is not supported
            </video>
          </div>
          <div class="landing__logo-box">
            <img
              src="./images/slogo.png"
              alt="logo"
              className="landing__logo"
            />
          </div>
          <div class="landing__text-box">
            <h1
              className="heading-1 mb-sm"
              data-aos="center-top"
              data-aos-delay="300"
            >
              Cuong Thinh Dao
            </h1>
            <h3
              className="heading-3 mb-sm"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              Web and Android Developer
            </h3>
            <div className="social-media">
              <p>
                <a
                  className="text-white p-1"
                  href="https://ctdao.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe" />
                </a>
                <a
                  className="text-white p-1"
                  href="https://www.linkedin.com/in/cuong-thinh-dao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>

                <a
                  className="text-white p-1"
                  href="https://github.com/ericdao37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default LandingPage;
