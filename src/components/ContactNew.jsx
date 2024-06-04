import React from "react";
import mail from "../assets/mail.png"
import call from "../assets/call.png"
import download from "../assets/download.png"
import Buttonrow from "./Buttonrow";
import resumepdf from '../assets/Resume.pdf';


function ContactNew(props){

    return(

        <div className="contactnew">

            <div className="contact_top">

            <h4>Get in touch</h4>

            <div className="contact_button">

                <Buttonrow />

            </div>

            </div>

            <div className="contact_details">

            <div className="contact_data">

            <p className="contact_para"><img src={mail} /> <a href="mailto:rohithrameshan111@gmail.com">rohithrameshan111@gmail.com</a></p>
            <p className="contact_para"><img src={call} /> <a href="tel:+91-8139887980">+91-8139887980</a></p>

            </div>

            <a href={resumepdf} download="Rohith-Resume" >
            <div  className="buttonicon button_shadow">
                <a><img src={download} /> Resume  </a>
            </div>
            </a>
            </div>
            
            

        </div>

    );

}

export default ContactNew;