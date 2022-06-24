import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isopen, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg headroom headroom--not-bottom headroom--pinned headroom--top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!isopen)}
          >
            <div className={isopen?"humburger":""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <span className={isopen ? "hamburger" :"navbar-toggler-icon"}></span> */}
          </button>

         <Link to="/">
         <strong>
              <span>Little</span> Fashion
            </strong>
         </Link>

          <div className="d-lg-none">
            <a href="" className="bi-person custom-icon me-3"></a>

            <a href="/suryawanshis/project" className="bi-bag custom-icon"></a>
          </div>

          <div
            className={
              isopen
                ? "navbar-collapse collapse-show"
                : "collapse navbar-collapse"
            }
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/project">
                  Projects
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQs
                </NavLink>
              </li> */}

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="d-none d-lg-block">
              <a href="" className="bi-person custom-icon me-3"></a>

              <a href="/suryawanshis/project" className="bi-bag custom-icon"></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
