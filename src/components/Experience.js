import React from "react";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-heading">
          <h1>Work Experience</h1>
          <h6>My current job</h6>
        </div>
        <div
          className="timeline mb-hg"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <ul>
            <li className="date">
              <h1>Grandeur App Inc</h1>
              <p data-date="2019 - Present">
                •	Analyzing the strengths and weaknesses of some cloud services for stakeholders and consulting them on which one is more suitable and efficient for our project.
              </p>
              
              <p>•	Managing milestones from initial steps through final delivery</p>

              <p>
              •	Troubleshooting and providing solutions for any error requests from stakeholders
              </p>
              <p>
              •	Based on blue-print, creating a variety of App features
              </p>
              <p>
              •	Researching and designing UX/UI for the App
              </p>
              <p>
              •	Having strong communication skills such as incorporating and explaining the design pattern of database and project structure to IOS team.
              </p>
              <p>•	Researching new technologies, software packages and hardware products for use in projects including RxJava, Retrofit</p>
            </li>
          </ul>
        </div>
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
              <p>•	Develop the web using MERN stack for the web</p>
              <p>
              •	Develop the android app that has a lot of fancy features, e.g.,
                Implement Google ML kit for item recognition.
              </p>
            </li>
            <li className="date">
              <h1>FoodByMe</h1>
              <p data-date="09/2019 - Present">
              This is an e-commerce website for food services. It links the
                home cook with customers who desire delicious meals.
              </p>
              <p>•	This project is built on MERN stack</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Experience;
