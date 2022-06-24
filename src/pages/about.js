import React from "react";
import Teams from "../components/team";
import Testimonial from "../components/testimonial";
import aboutImg from "../images/header/businesspeople-meeting-office-working.jpg"
import AOS from "aos";

const About = () => {
    AOS.init();
    
    return (
        <>
        <div data-aos="fade-up"
            data-aos-duration="0"
            data-aos-easing="ease-in-out-sine"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
        <header 
             className="site-header section-padding-img site-header-image">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 header-info">
                            <h1>
                                <span className="d-block text-primary">Company</span>
                                <span className="d-block text-dark">Fashion</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <img src={aboutImg} className="header-image img-fluid" alt="about"/>
            </header>
            <Teams/>
            <Testimonial/>
            </div>
        </>
    )
}

export default About;