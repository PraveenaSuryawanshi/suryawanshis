import React, { useState, useEffect } from "react";

import banner1 from "../images/slideshow/medium-shot-business-women-high-five.jpeg";
import banner2 from "../images/slideshow/team-meeting-renewable-energy-project.jpeg";
import banner3 from "../images/slideshow/two-business-partners-working-together-office-computer.jpeg";
import img1 from "../images/pim-chu-z6NZ76_UTDI-unsplash.jpeg";
import img2 from "../images/cody-lannom-G95AReIh_Ko-unsplash.jpeg";
import FeatureProject from "../components/featureProjects";
import AOS from "aos";
const Home = () => {
  AOS.init();
  // useEffect(()=>{
  //     AOS.init({duration:2000})
  // },[]);
  const [isactive, setActive] = useState(1);

  const [isstart, setStart] = useState(1);
  const data = {
    items: [
      {
        id: 1,
        tittle: "Cool Team",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link: "Learn more about us",
        image: banner1,
      },
      {
        id: 2,
        tittle: "New Design",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link: "Explore products",
        image: banner2,
      },
      {
        id: 3,
        tittle: "Talk to us",
        desc: "sri is one of the best HTML CSS template websites for everyone.",
        link: "Work with us",
        image: banner3,
      },
    ],
    getstarted: [
      {
        id: 1,
        btnname: "Introduction",
        tittle: "Good Design Ideas for your website",
        desc: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum g industry.",
        ],
        links: "LEARN MORE ABOUT US",
        img: img1,
      },
      {
        id: 2,
        btnname: "How we work?",
        tittle: "Good Design Ideas for your website",
        desc: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        ],
        links: "LEARN MORE ABOUT US",
        img: img2,
      },
      {
        id: 3,
        btnname: "Capabilites",
        tittle: "Good Design Ideas for your website",
        desc: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        ],
        links: "LEARN MORE ABOUT US",
        img: banner3,
      },
    ],
  };

  return (
    <>
      <section className="slick-slideshow slick-initialized slick-slider slick-dotted">
        <div className="slick-list draggable">
          <div className="slick-track">
            {data.items.map((item, i) => {
              return isactive === item.id ? (
                <>
                  <div
                    key={i}
                    className="slick-custom slick-slide"
                    data-slick-index="0"
                    tabIndex="-1"
                    role="tabpanel"
                    id={item.id}
                    aria-describedby="slick-slide-control00"
                  >
                    <img src={item.image} className="img-fluid" alt="" />

                    <div className="slick-bottom">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-10 fade-in-image">
                            <h1 className="slick-title">{item.tittle}</h1>

                            <p className="lead text-white mt-lg-3 mb-lg-5">
                              {item.desc}
                            </p>

                            <a
                              href="#"
                              className="btn custom-btn"
                              tabIndex="-1"
                            >
                              {item.link}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null;
            })}
          </div>
        </div>

        <ul className="slick-dots" role="tablist">
          {data.items.map((item) => {
            return (
              <>
                <li
                  role="presentation"
                  onClick={() => setActive(item.id)}
                  className={isactive == item.id ? "slick-active" : ""}
                >
                  <button
                    className="example"
                    type="button"
                    role="tab"
                    id="slick-slide-control00"
                    aria-controls="slick-slide00"
                    aria-label="1 of 3"
                    tabIndex="-1"
                  >
                    {item.id}
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div
            className="row"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-12 text-center">
              <h2 className="mb-5">
                Get started with <span>Little</span> Fashion
              </h2>
            </div>

            <div
              className="col-lg-2 col-12 mt-auto mb-auto"
              data-aos="slide-up"
            >
              <ul
                className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center"
                id="pills-tab"
                role="tablist"
              >
                {data.getstarted.map((item) => {
                  return (
                    <>
                      <li className="nav-item" role="presentation">
                        <button
                          className={
                            isstart === item.id ? "nav-link active" : "nav-link"
                          }
                          onClick={() => setStart(item.id)}
                          id={item.id}
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          {item.btnname}
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            <div className="col-lg-10 col-12" data-aos="slide-up">
              <div className="tab-content mt-2" id="pills-tabContent">
                {data.getstarted.map((item) => {
                  return isstart === item.id ? (
                    <>
                      <div
                        className="tab-pane fade active show"
                        data-aos="fade-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        id={item.id}
                        role="tabpanel"
                      >
                        <div className="row" id={item.id}>
                          <div className="col-lg-7 col-12">
                            <img src={item.img} className="img-fluid" alt="" />
                          </div>

                          <div className="col-lg-5 col-12">
                            <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                              <h4 className="mb-3">{item.tittle}</h4>

                              {item.desc.map((items) => {
                                return <p>{items}</p>;
                              })}

                              <div className="mt-2 mt-lg-auto">
                                <a
                                  href="#"
                                  className="custom-link mb-2"
                                >
                                  {item.links}
                                  <i className="bi-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="front-product" data-aos="slide-right"
            data-aos-delay="20"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <img src={banner2} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 col-12">
              <div className="px-5 py-5 py-lg-0">
                <h2 className="mb-4">
                  <span>Retail</span> shop owners
                </h2>

                <p className="lead mb-4">
                  Credits go to Unsplash and FreePik websites for images used in
                  this Little Fashion by Tooplate.
                </p>

                <a href="" className="custom-link">
                  Explore Products
                  <i className="bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeatureProject tittle="Featured Products" />
      {/* <div className="col-12 text-center marginbt">
        <a href="products.html" className="view-all">
          View All Products
        </a>
      </div> */}
    </>
  );
};

export default Home;
