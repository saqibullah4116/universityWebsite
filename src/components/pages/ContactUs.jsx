import React from "react";
import "./contact.css";


function Contact() {
    return (
        <>
<div className="container" id="contact-container">
    <br />
    <h2 className="contac-heading">Contact Us</h2>
    <br />
    <h2 style={{textAlign: "center"}}>We'd Love to Help!</h2>
    <p style={{textAlign: "center"}}>We Like to create things with fun, open-minded people.Feel free to say hello!</p>
    <br/><br/>
    <div className="row">

        <div className="col-md-6">
            <form>
                <input type="Text" name="text" required="" placeholder="Your Name" className="form-control"/>
                <br/>
                <input type="Email" name="Email" required="" placeholder="Your Email" className="form-control"/>
                <br/>

                <textarea rows="6" placeholder="Message" required="" className="form-control"></textarea>
                <br/>
                <center>
                <button type="button" className="btn btn-outline-primary">Submit</button>
                </center>
                <br/><br/><br/>

            </form>

        </div>

        <div className="col-md-1"></div>


        <div className="col-md-5">
            <br/>
            <p className="icn"><i className="fa fa-map-marker"></i> &nbsp;&nbsp; 23 Main, Street New York, United States
            </p>
            <p className="icn"> <i className="fa fa-phone"></i> &nbsp;&nbsp; 03089313393 </p>
            <p className="icn"><i className="fa fa-envelope"></i> &nbsp;&nbsp; saqibullah@gmail.com </p>
            <hr className="contact-hr"/>
            <br/>
            <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a href="!#" className="contack-anchor"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="!#" className="contack-anchor"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="!#" className="contack-anchor"><i className="fab fa-google-plus"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="!#" className="contack-anchor"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="!#" className="contack-anchor"><i className="fab fa-youtube"></i></a>
                    </li>
                </ul>
        </div>
    </div>
</div>
                        </>
 );
}
export default Contact;