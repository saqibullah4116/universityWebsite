import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
            <nav className="nav navbar-light bg-light ul_top_hypers  py-0">
              
              <ul className="nav">
                <li >
                  <a href="!#" className="mx-3 a_top_hypers text-dark text-decoration-none">
                    <i className="fas fa-phone "></i> +92 3089313393
                  </a>
                </li>
                <li >
                  <a href="!#" className="mx-3 a_top_hypers text-dark text-decoration-none">
                    <i className="fas fa-envelope"></i> saqibullah@gmail.com
                  </a>
                </li>
                <li >
                  <a href="!#" className="mx-3 a_top_hypers text-dark text-decoration-none">
                  <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li >
                  <a href="!#" className="mx-3 a_top_hypers text-dark text-decoration-none">
                  <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
              </ul>
            </nav>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <img
            src="https://www.designevo.com/res/templates/thumb_small/green-leaf-and-opened-book.webp"
            alt="logo"
            height="80px"
            style={{ marginRight: "10px", width: "100px" }}
          />
          <Link className="navbar-brand" to="/">
            <h2>University</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="/services"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/linking universties">
                      Linking Universities
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/opportunites">
                      opportunities
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/other">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/testimonial"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
