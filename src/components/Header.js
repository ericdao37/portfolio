import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Footer from "./Footer";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="./images/slogo.png" alt="logo" className="landing__logo" />
        <span>Cuong Thinh Dao</span>
      </div>
    );
  }
}
export default Header;
