import React from "react";
import ContactNew from "./ContactNew";

function Navbar(){

    return(

        <div className="navbar">

            <div className="navbar_top">

            <h3><a className="link" href="#top">Home</a></h3>
            <h3><a className="link" href="#work">Work</a></h3>
            <h3><a className="link" href="#services">Services</a></h3>
            <h3><a className="link" href="#about">About</a></h3>

            </div>

            <div className="navbar_line"></div>

            <div className="navbar_down">
                
                <ContactNew />

            </div>

        </div>

    );

}

export default Navbar;