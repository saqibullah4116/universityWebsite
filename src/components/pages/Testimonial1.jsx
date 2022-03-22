import React from "react";
import testimonialsEntreis from "../testimonialEntries";

function Testimonials1(){
    return(
        <div>
            <section>
		<div class="heading">Our Testimonials</div>
		<div class="wrapper">
            {
                testimonialsEntreis.map((entry)=>{
                    return (
                        <div class="container">
				<div class="profile">
					<div class="imgBox">
						<img src={entry.image} alt="person images"/>
					</div>
					<h2>{entry.name}</h2>
				</div>
				<p><span class="fa fa-quote-left left"></span>{entry.description}<span class="fa fa-quote-right right"></span></p>
				<div class="social">
					<i class="fab fa-twitter"></i>
					<i class="fab fa-youtube"></i>
					<i class="fab fa-instagram"></i>
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