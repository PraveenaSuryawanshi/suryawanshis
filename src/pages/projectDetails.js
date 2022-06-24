import React from "react";
import Detail from "../components/projectdetail";
import aos from "aos";

const ProjectDetails = () => {
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
        <header className="site-header section-padding d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12">
                <h1>
                  <span className="d-block text-primary">We provide you</span>
                  <span className="d-block text-dark">Fashionable Stuffs</span>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <Detail />
      </div>
    </>
  );
};
export default ProjectDetails;
