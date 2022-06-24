import React from "react";
import team1 from "../images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import team2 from "../images/people/portrait-british-woman.jpeg";
import team3 from "../images/people/beautiful-woman-face-portrait-brown-background.jpeg";

const Teams = () => {
  const data = {
    items: [
      {
        id: 1,
        tittle: "Don",
        desc: "Product, VP",
        img: team1,
      },
      {
        id: 2,
        tittle: "Kelly",
        desc: "Marketing",
        img: team2,
      },
      {
        id: 3,
        tittle: "Marie",
        desc: "Marketing",
        img: team3,
      },
    ],
  };
  return (
    <>
      <section class="team section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="mb-5">
                Meet our <span>team</span>
              </h2>
            </div>

            {data.items.map((item) => {
              return (
                <>
                  <div class="col-lg-4 mb-4 col-12">
                    <div class="team-thumb d-flex align-items-center">
                      <img
                        src={item.img}
                        class="img-fluid custom-circle-image team-image me-4"
                        alt=""
                      />

                      <div class="team-info">
                        <h5 class="mb-0">{item.tittle}</h5>
                        <strong class="text-muted">{item.desc}</strong>

                        <button
                          type="button"
                          class="btn custom-modal-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#don"
                        >
                          <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
