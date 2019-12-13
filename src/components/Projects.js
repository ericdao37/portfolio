import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="projects">
        {" "}
        <div className="section-heading">
          <h1>Personal Projects</h1>
        </div>
        <div className="timeline" data-aos="fade-up" data-aos-delay="300">
          <ul>
            <li className="date">
              <h1>Languru</h1>
              <p data-date="09/2019 - 11/2019">
                This project provides a web and an android application in
                learning English.
              </p>
              <p>Develop the web using MERN stack for the web</p>
              <p>
                Develop the android app that has a lot of fancy features, e.g.,
                Implement Google ML kit for item recognition.
              </p>
            </li>
            <li className="date">
              <h1>FoodByMe</h1>
              <p data-date="09/2019 - 12/2019">
                This is an e-commerce website for food services. It links the
                home cook with customers who desire delicious meals.
              </p>
              <p>This project is built on MERN stack</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Projects;
