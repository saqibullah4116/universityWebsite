import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
            <nav className="nav navbar-light bg-light ul_top_hypers  py-0">
              
              <ul className="nav" style={{padding:"5px"}}>
                <li >
                  <Link to="/" className="mx-3 a_top_hypers text-dark text-decoration-none">
                    <i className="fas fa-phone "></i> +92 3089313393
                  </Link>
                </li>
                <li >
                  <Link to="/" className="mx-3 a_top_hypers text-dark text-decoration-none">
                    <i className="fas fa-envelope"></i> saqibullah@gmail.com
                  </Link>
                </li>
                <li >
                  <Link to="/" className="mx-3 a_top_hypers text-dark text-decoration-none">
                  <i className="fab fa-twitter"></i> Twitter
                  </Link>
                </li>
                <li >
                  <Link to="/" className="mx-3 a_top_hypers text-dark text-decoration-none">
                  <i className="fab fa-facebook"></i> Facebook
                  </Link>
                </li>
                <li className="mx-auto " >
                  <Link to="/FAQ">  
                <button className="btn btn-outline-secondary" type="button" style={{ height: "30px", width: "100px",marginLeft:"100px"}}>FAQ</button>
                </Link>
              </li>
              </ul>
             
              {/* <button class="btn btn-primary pull-right btn-sm RbtnMargin" type="button" style={{ height: "25px", width: "60px" }}>Save</button> */}
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
              <li className="nav-item">     {/*dropdown */}
                <Link className="nav-link active " to="/services">
                  Services
                </Link>
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                </ul> */}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/testimonial"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Our Students
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
