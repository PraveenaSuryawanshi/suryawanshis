import React, { useState } from "react";
import customer1 from "../images/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg";
import customer2 from "../images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import customer3 from "../images/people/beautiful-woman-face-portrait-brown-background.jpeg";
import customer4 from "../images/people/portrait-british-woman.jpeg";

const Testimonial = () => {
  const data = {
    items: [
      {
        id: 1,
        feedback:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet",
        name: "Catherine",
        position: "Dress Fashion",
        img: customer1,
      },
      {
        id: 2,
        feedback:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet",
        name: "Catherine",
        position: "Dress Fashion",
        img: customer2,
      },
      {
        id: 3,
        feedback:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet",
        name: "Catherine",
        position: "Dress Fashion",
        img: customer3,
      },
      {
        id: 4,
        feedback:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet",
        name: "Catherine",
        position: "Dress Fashion",
        img: customer4,
      },
      {
        id: 5,
        feedback:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet",
        name: "Catherine",
        position: "Dress Fashion",
        img: customer1,
      },
    ],
  };

  const [comment, setComment] = useState(1);

  return (
    <>
      <section class="testimonial section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 mx-auto col-11">
              <h2 class="text-center">
                Customer love, <br /> <span>Little</span> Fashion
              </h2>

              <div class="slick-testimonial slick-initialized slick-slider slick-dotted">
                <div class="slick-list draggable">
                  <div class="slick-track">
                    {data.items.map((item) => {
                      return comment === item.id ? (
                        <>
                          <div
                            id={item.id}
                            class="slick-testimonial-caption slick-slide slick-cloned"
                            data-slick-index="-1"
                            aria-hidden="true"
                            tabindex="-1"
                          >
                            <p class="lead">{item.feedback}</p>

                            <div class="slick-testimonial-client d-flex align-items-center mt-4">
                              <img
                                src={item.img}
                                class="img-fluid custom-circle-image me-3"
                                alt=""
                              />

                              <span>
                                {item.name},
                                <strong class="text-muted">
                                  {item.position}
                                </strong>
                              </span>
                            </div>
                          </div>
                        </>
                      ) : null;
                    })}
                  </div>
                </div>
                <ul class="slick-dots" role="tablist">
                  {data.items.map((item) => {
                    return (
                      <>
                        <li
                          class={comment === item.id ? "slick-active" : ""}
                          role="presentation"
                        >
                          <button
                            onClick={() => setComment(item.id)}
                            type="button"
                            role="tab"
                            id={item.id}
                            aria-controls="slick-slide00"
                            aria-label="1 of 4"
                            tabindex="0"
                            aria-selected="true"
                          >
                            {item.id}
                          </button>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
