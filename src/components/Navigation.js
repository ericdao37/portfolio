import React, { Component } from "react";
import $ from "jquery";

class Navigation extends Component {
  componentDidMount() {
    $(".navigation__item").on("click", function() {
      $("#navi-toggle").attr("checked", false);
      $("input[name=navi-toggle]").prop("checked", false);
    });
  }
  render() {
    return (
      <div class="navigation">
        <input
          type="checkbox"
          class="navigation__checkbox"
          name="navi-toggle"
          id="navi-toggle"
        ></input>

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#landing" className="navigation__link">
                Home
              </a>
            </li>
            <li class="navigation__item">
              <a href="#about" className="navigation__link">
                About Me
              </a>
            </li>
            <li class="navigation__item">
              <a href="#skills" className="navigation__link">
                Skills
              </a>
            </li>
            <li class="navigation__item">
              <a href="#languages" className="navigation__link">
                Programming Languages
              </a>
            </li>
            <li class="navigation__item">
              <a href="#projects" className="navigation__link">
                Projects
              </a>
            </li>
            <li class="navigation__item">
              <a href="#experience" className="navigation__link">
                Experience
              </a>
            </li>
            <li class="navigation__item">
              <a href="#contact" className="navigation__link">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navigation;
