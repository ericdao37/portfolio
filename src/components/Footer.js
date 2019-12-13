import React, { Component } from "react";
import $ from "jquery";

class Footer extends Component {
  componentDidMount() {
    $("#up").on("click", function() {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        2000
      );
    });
    $('.footer__item a[href*="#"]').on("click", function() {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 100
        },
        2000
      );
    });
  }
  render() {
    return (
      <footer className="footer">
        <div className="up" id="up">
          <i className="fas fa-chevron-up"></i>
        </div>
        <div className="footer__logo-box">
          <img
            className="footer__logo"
            alt="Full logo"
            src="./images/logo4.png"
          />
        </div>
        <div className="footer__bottom">
          {/* <div className="footer__info">
            <p className="text_right">
              <i className="fas fa-user-tie"></i> Cuong Thinh Dao
            </p>
            <p className="text_right">
              <i className="fas fa-phone"></i> +1 (604)704-1368
            </p>
            <p className="text_right">
              <i className="fas fa-envelope"></i> eric.dao37@gmail.com
            </p>
          </div> */}
          <div className="footer__navigation">
            <ul className="footer__list">
              {/* <li className="footer__item">
                <a href="/" className="footer__link">
                  Home
                </a>
              </li> */}
              <li className="footer__item">
                <a href="#about" className="footer__link">
                  About Me
                </a>
              </li>
              <li className="footer__item">
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li className="footer__item">
                <a href="#experience" className="footer__link">
                  Experience
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">
            <p>
              Copyright &copy; by{" "}
              <a href="/" className="footer__link">
                Cuong Thinh Dao
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
