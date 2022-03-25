import React from "react";
import "./owl-testimonil.css";
function OwlTestimonial() {
    return (
        <>
            <div id="testimonials-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active owl-carousel">
                        <h5>If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough </h5>
                        <img className="testimonials-image" src="https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="dog-profile" />
                        <br />
                        <em>Pebbles, New York</em>
                    </div>
                    <div className="carousel-item owl-carousel">
                        <h5 className="testimonial-text">The best way to predict the future is to invent it.If you want to lift yourself up, lift up someone else..</h5>
                        <img className="testimonials-image" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lady-profile" />
                        <br />
                        <em>Beverly, Illinois</em>
                    </div>
                    <div className="carousel-item owl-carousel">
                        <h5 className="testimonial-text">Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind</h5>
                        <img className="testimonials-image" src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lady-profile" />
                        <br />
                        <em>Saqib, Ullah</em>
                    </div>
                </div>


            </div>
        </>
    );

}
export default OwlTestimonial;