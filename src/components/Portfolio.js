import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <div className="section-heading mb-lg">
          <h1>Projects</h1>
          <h6>Some of my recent work</h6>
        </div>
        <div className="portfolio-item">
          <div
            className="portfolio-img mr-md"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img src="./images/tapiolla.PNG" alt="portfolio image" />
          </div>
          <div
            className="portfolio-description"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h6>Android App Development</h6>
            <h1>Tapiolla</h1>
            <p>
              The future of business cards is here! With Tapiolla you will now
              be able to design and create your business cards just the way you
              want, be able to make multiple versions, keep all your info up to
              date with all your contacts and... NEVER RUN OUT OF CARDS AGAIN!!!
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tapiolla.com/"
              class="cta"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div
            className="portfolio-description mr-md"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h6>Web and Android App Development</h6>
            <h1>Languru</h1>
            <p>
              This project provides a web and mobile application that introduce
              a new way of learning English by combining practical lessons and
              real-world examples. Besides, users can relax, have fun, and
              challenge their English skills with other people through our
              memory flip card game.
            </p>
            <a
              href="https://github.com/mrhoangmai93/CSIS4270-Special-topic"
              target="_blank"
              rel="noopener noreferrer"
              class="cta"
            >
              View Details
            </a>
          </div>
          <div
            className="portfolio-img "
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img src="./images/languru.png" alt="languru image" />
          </div>
        </div>
        <div className="portfolio-item">
          <div
            className="portfolio-img mr-md"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img src="./images/logoFoodByMe.png" alt="food by me image" />
          </div>
          <div
            className="portfolio-description"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h6>Web Development</h6>
            <h1>FoodByMe</h1>
            <p>
              FoodByMe is a dual perspective application.The idea is to create a
              web application and cross-platform mobile application that harness
              the power of e-commerce. Our main goal is to build a scalable,
              easy-to-use marketplace that connects people who offer home-made
              cuisines with customers who want delicious, healthy and cheap
              meals. E-commerce is a process in which customers buy goods or
              services from sellers over the internet. The project attempts to
              provide advantages of online shopping and home delivery to our
              client’s customers.
            </p>
            <a
              href="https://github.com/mrhoangmai93/CSIS4495---Applied-Research-Project"
              target="_blank"
              class="cta"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
