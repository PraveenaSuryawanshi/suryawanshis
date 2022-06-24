import React from "react";
import FeatureProject from "../components/featureProjects";
import aos from "aos";
const Projects = () => {
  aos.init();

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="0"
        data-aos-easing="ease-in-out-sine"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <header className="site-header section-padding-img site-header-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 header-info">
                <h1>
                  <span className="d-block text-primary">Choose your</span>
                  <span className="d-block text-dark">favorite stuffs</span>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <FeatureProject tittle="New Arrivals" />
      </div>
    </>
  );
};

export default Projects;
