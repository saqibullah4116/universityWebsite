import React from "react";

function Carousel1() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide" 
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/free-photo/intellectual-banknote-student-sand-computer-graphic_1134-1185.jpg?size=626&ext=jpg&ga=GA1.2.297441813.1647885689"
            className="d-block w-60"
            alt="..."
          />
          <div className="carousel-caption">
        <h5>Study in Uk</h5>
        <p>Some representative placeholder content for the second slide,Some representative placeholder content for the second slide.</p>
        <button type="button" className="btn btn-outline-warning">Explore More</button>
      </div>

        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/book-library-room_36325-102.jpg?size=626&ext=jpg&ga=GA1.2.297441813.1647885689"
            className="d-block w-60"
            alt="..."
          />
          <div className="carousel-caption ">
        <h5>Study in Germany</h5>
        <p>Some representative placeholder content for the second slide, Some representative placeholder content for the second slide.</p>
        <button type="button" className="btn btn-outline-warning">Explore More</button>
      </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?size=626&ext=jpg&ga=GA1.2.297441813.1647885689"
            className="d-block w-60"
            alt="..."
          />
          <div className="carousel-caption ">
        <h5>Study in France</h5>
        <p>Some representative placeholder content for the second slide,Some representative placeholder content for the second slide.</p>
        <button type="button" className="btn btn-outline-warning">Explore More</button>
      </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel1;
