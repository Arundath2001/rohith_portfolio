import React from "react";
import mail from "../assets/mail.png"
import call from "../assets/call.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import insta from "../assets/insta.png"
import ButtonIcon from "./ButtonIcon";

function Contact(){

    return(

        <div className="contact">

            <div className="contact_top">

            <h3>Get in touch</h3>
            <p>"Let's collaborate and craft digital experiences that leave a lasting impression!"</p>

            </div>

            <div className="contact_details">

            <p className="paranew"><img src={mail} /> <a href="mailto:rohithrameshan111@gmail.com">rohithrameshan111@gmail.com</a></p>
            <p className="paranew"><img src={call} /> <a href="tel:+91-8139887980">+91-8139887980</a></p>

            </div>

            <div className="contact_button">

                <ButtonIcon img={img1} url="https://dribbble.com/rohit_h" />
                <ButtonIcon img={img2} url="https://www.behance.net/rohithramesh7" />
                <ButtonIcon img={insta} url="https://www.instagram.com/_.rohit_h._/" />

            </div>

        </div>

    );

}

export default Contact;