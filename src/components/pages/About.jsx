import React from "react";
import "./about.css";

function About(){
    return(
        <div>
            <div className="section">
		<div className="container" id="about-container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<button type="button" className="btn btn-outline-primary">Explore More</button>
				</div>
				<div className="social">
					<a href="/"><i className="fab fa-facebook-f"></i></a>
					<a href="/"><i className="fab fa-twitter"></i></a>
					<a href="/"><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section">
				<img src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="imagee"/>
			</div>
            <br />
		</div>
	</div>
        </div>
    );
}
export default About;