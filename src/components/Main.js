import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Footer from "./Footer";
import Languages from "./Languages";
import Contact from "./Contact";
class Main extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init({
      easing: "ease",
      duration: 1800,
      once: true
    });
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      // <Switch>
      //   <Route exact path="/" component={LandingPage} />
      //   <Route exact path="/aboutme" component={AboutMe} />
      //   <Route exact path="/contact" component={Contact} />
      //   <Route exact path="/projects" component={Projects} />
      //   <Route exact path="/resume" component={Resume} />
      // </Switch>
      <>
        <LandingPage />
        <AboutMe />
        <Skills />
        <Languages />

        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Main;
