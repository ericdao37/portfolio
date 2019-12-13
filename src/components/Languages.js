import React from "react";
import Rating from "react-rating";

const Languages = () => {
  return (
    <section className="languages" id="languages">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./images/manhattan.mp4" type="video/mp4" />
          Your Browser is not supported
        </video>
      </div>
      <div className="container">
        <div className="feature-box-container">
          <div className="section-heading-white">
            <h1>Programming Languages</h1>
            <h6>What I Have</h6>
          </div>
          <div className="languages__content">
            <div
              className="feature-box"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <i className="feature-box__icon fab fa-java"></i>
              <h3 className="">Java</h3>
              <p className="feature-box__text mb-sm">(2 Years)</p>

              <p className="feature-box__text">
                Android App using Android Sudio
              </p>
              {/* <div className="sl-ratings">
              <Rating
                initialRating={3}
                readonly
                emptySymbol={
                  <img src="/images/ratings/star-grey.png" alt="rating star" />
                }
                fullSymbol={
                  <img
                    src="/images/ratings/star-yellow.png"
                    alt="rating star"
                  />
                }
                className="sl-rating mr-1"
              />
            </div> */}
            </div>
            <div
              className="feature-box"
              data-aos="flip-right"
              data-aos-delay="600"
            >
              <i class="feature-box__icon fab fa-js-square"></i>

              <h3 className="">Javascript</h3>
              <p className="feature-box__text mb-sm">(2 Years)</p>

              <p className="feature-box__text">
                Frameworks: ReactJs, Redux-Saga/Thunk.{" "}
              </p>
            </div>
            <div
              className="feature-box"
              data-aos="flip-right"
              data-aos-delay="900"
            >
              <i class=" feature-box__icon fab fa-php"></i>
              <h3 className="">PHP</h3>
              <p className="feature-box__text mb-sm">(1 Years)</p>
              <p className="feature-box__text">
                I have some working experience with PHP and the Laravel
                framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Languages;
