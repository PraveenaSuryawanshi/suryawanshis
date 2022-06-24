import React from "react";
import contactImg from "../images/header/positive-european-woman-has-break-after-work.jpg";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
const Contact = () => {
  AOS.init();
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const changeData = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      emailjs
        .sendForm(
          "service_ih9k71g",
          "template_4ekj18i",
          form.current,
          "IO66mzq1cNxXFCbQ8"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setValues({ name: "", email: "", subject: "", message: "" });
    }
  }, [errors]);

  const SubmitData = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setSubmit(true);
    console.log(values);
  };

  const validate = (value) => {
    const error = {};
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!value.name) {
      error.name = "Please enter name";
    }
    if (!value.email) {
      error.email = " please enter email";
    } else if (!regx.test(value.email)) {
      error.email = " Please enter validate email";
    }
    if (!value.subject) {
      error.subject = "please enter subject";
    }
    if (!value.message) {
      error.message = "Please enter Message";
    }
    return error;
  };

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
              <div className="col-lg-10 col-12 header-info">
                <h1>
                  <span className="d-block text-primary">Say hello to us</span>
                  <span className="d-block text-dark">love to hear you</span>
                </h1>
              </div>
            </div>
          </div>

          <img src={contactImg} className="header-image img-fluid" alt="" />
        </header>
        <section className="marginbt contact section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="mb-4">
                  Let's <span>begin</span>
                </h2>

                <form
                  ref={form}
                  className="contact-form me-lg-5 pe-lg-3"
                  role="form"
                  method="POST"
                  onSubmit={SubmitData}
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      value={values.name}
                      name="name"
                      id="name"
                      onChange={changeData}
                      className="form-control"
                      placeholder="Full name"
                    />
                    <label htmlFor="name">Full name</label>
                    <p className="mt-10">{errors.name}</p>
                  </div>

                  <div className="form-floating my-4">
                    <input
                      type="email"
                      value={values.email}
                      name="email"
                      id="email"
                      onChange={changeData}
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <label htmlFor="email">Email address</label>
                    <p className="mt-10">{errors.email}</p>
                  </div>

                  <div className="form-floating my-4">
                    <input
                      type="subject"
                      value={values.subject}
                      name="subject"
                      onChange={changeData}
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                    <p className="mt-10">{errors.subject}</p>
                  </div>

                  <div className="form-floating mb-4">
                    <textarea
                      id="message"
                      value={values.message}
                      name="message"
                      onChange={changeData}
                      className="form-control"
                      placeholder="Leave a comment here"
                    ></textarea>
                    <label htmlFor="message">Tell us about the project</label>
                    <p className="mt-10">{errors.message}</p>
                  </div>

                  <div className="col-lg-5 col-6">
                    <button type="submit" className="form-control">
                      Send
                    </button>
                  </div>
                  {Object.keys(errors).length === 0 && submit ? (
                    <p className="mt-10">
                      Thank You , We will get back to you soon
                    </p>
                  ) : null}
                </form>
              </div>

              <div className="col-lg-6 col-12 mt-5 ms-auto">
                <div className="row">
                  <div className="col-6 border-end contact-info">
                    <h6 className="mb-3">New Business</h6>

                    <a href="mailto:hello@company.com" className="custom-link">
                      hello@company.com
                      <i className="bi-arrow-right ms-2"></i>
                    </a>
                  </div>

                  <div className="col-6 contact-info">
                    <h6 className="mb-3">Main Studio</h6>

                    <a href="mailto:studio@company.com" className="custom-link">
                      studio@company.com
                      <i className="bi-arrow-right ms-2"></i>
                    </a>
                  </div>

                  <div className="col-6 border-top border-end contact-info">
                    <h6 className="mb-3">Our Office</h6>

                    <p className="text-muted">
                      Akershusstranda 20, 0150 Oslo, Norway
                    </p>
                  </div>

                  <div className="col-6 border-top contact-info">
                    <h6 className="mb-3">Our Socials</h6>

                    <ul className="social-icon">
                      <li>
                        <a href="#" className="social-icon-link">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="social-icon-link">
                          <i
                            className="fa fa-facebook-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="social-icon-link">
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="social-icon-link">
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
