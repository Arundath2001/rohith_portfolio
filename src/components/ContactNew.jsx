import React from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import insta from "../assets/insta.png"
import ButtonIcon from "./ButtonIcon";
import mail from "../assets/mail.png"
import call from "../assets/call.png"
import download from "../assets/download.png"

function ContactNew(props){

    function downloadpdf(){

        var pdfPath = '../assets/RohithrameshanResume.pdf';
            
        var a = document.createElement('a');
        
        a.href = pdfPath;
        
        a.download = 'RohithrameshanResume.pdf';
        
        document.body.appendChild(a);
        
        a.click();
        
        document.body.removeChild(a);

    }


    return(

        <div className="contactnew">

            <div className="contact_top">

            <h4>Get in touch</h4>

            <div className="contact_button">

                <ButtonIcon img={img1} url="https://dribbble.com/rohit_h" />
                <ButtonIcon img={img2} url="https://www.behance.net/rohithramesh7" />
                <ButtonIcon img={insta} url="https://www.instagram.com/_.rohit_h._/" />

            </div>

            </div>

            <div className="contact_details">

            <div className="contact_data">

            <p className="contact_para"><img src={mail} /> <a href="mailto:rohithrameshan111@gmail.com">rohithrameshan111@gmail.com</a></p>
            <p className="contact_para"><img src={call} /> <a href="tel:+91-8139887980">+91-8139887980</a></p>

            </div>

            <div onClick={downloadpdf} className="buttonicon">
                <a><img src={download} /> Resume</a>  
            </div>

            </div>

            

        </div>

    );

}

export default ContactNew;