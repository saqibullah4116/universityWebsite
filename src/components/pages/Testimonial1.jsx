import React from "react";
import testimonialsEntreis from "../testimonialEntries";

function Testimonials1(){
    return(
        <div>
            <section>
		<div className="heading">Our Students</div>
		<div className="wrapper">
            {
                testimonialsEntreis.map((entry)=>{
                    return (
                        <div key={entry.id} className="container">
				<div className="profile">
					<div className="imgBox">
						<img src={entry.image} alt="person images"/>
					</div>
					<h2>{entry.name}</h2>
				</div>
				<p><span className="fa fa-quote-left left"></span>{entry.description}<span className="fa fa-quote-right right"></span></p>
				<div className="social">
					<i className="fab fa-twitter testimonial-icon"></i>
					<i className="fab fa-youtube testimonial-icon"></i>
					<i className="fab fa-instagram testimonial-icon"></i>
				</div>
			</div>
                    );
                })
			}
		</div>
	</section>
        </div>
    );
}
export default Testimonials1;