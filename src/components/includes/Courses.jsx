import React from "react";
import universities from "../../entries";
function Courses() {
  return (
    <div className="courses-main">
      <div className="courses-container">
        <div className="heading">
          <h1>Study Abroad</h1>
          <p>Most popular Study Destinations</p>
          <hr />
        </div>
      </div>

      <div className="container courses-card" id="courses-cards">
        <div className="row  text-center">

        {universities.map((entry)=>{
                return (
                    <div key={entry.id} className="col my-3">  
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={entry.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
            })}
           
        </div>
      </div>
    </div>
  );
}
export default Courses;
