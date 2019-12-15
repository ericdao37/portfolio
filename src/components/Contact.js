import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="container ">
          <div className="section-heading">
            <h1>Contact Me</h1>
            <h6>Let's Work together</h6>
          </div>

          <div className="contact__content">
            <div data-aos="fade-in" data-aos-delay="300">
              <p className="contact__item center-content">
                <i class="contact__icon fas fa-user-tie"></i>
                <span>Cuong Thinh Dao</span>
              </p>
              <p className="contact__item">
                <i class="contact__icon fas fa-phone"></i>
                <span>+1 (604) 704-1368</span>
              </p>
              <p className="contact__item">
                <i class="contact__icon fas fa-envelope"></i>
                <span>eric.dao37@gmail.com</span>
              </p>
            </div>
            <div data-aos="fade-in" data-aos-delay="600">
              <p className="contact__item">
                <i class="contact__icon fab fa-linkedin"></i>
                <span>https://www.linkedin.com/in/cuong-thinh-dao/</span>
              </p>
              <p className="contact__item">
                <i class="contact__icon fab fa-github-square"></i>
                <span>https://github.com/ericdao37</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
