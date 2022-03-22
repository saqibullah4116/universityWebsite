import React from "react";

function carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Study in UK</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident quo in ut eius suscipit rem vitae placeat possimus earum?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Study in Australia</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque harum ut voluptatibus inventore commodi sunt temporibus quasi natus, culpa dolorem cupiditate fugit quam eligendi ex, ratione suscipit perspiciatis eos laborum?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Study in Turkey</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit illum laudantium veritatis commodi sint!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default carousel;
