import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

function Top(){

    return(

        <div id="top">

            <div className="image-stack">
                <div className="image-container">
                <img src={image1} alt="First Image" className="first-image" />
                <img src={image2} alt="Second Image" className="second-image" />
                <img src={image3} alt="Third Image" className="third-image" />
            </div>
         </div>

            <h2>Hey, <br />
            I’m Rohith Rameshan</h2>

            <p className="alignpara">As an Associate UI/UX Designer, I bring a blend of creativity and technical expertise to the table. With a foundation built on understanding user needs and crafting seamless experiences, I thrive in collaborating with teams to bring digital visions to life. From wireframes to pixel-perfect designs, I am dedicated to refining user interfaces that delight and inspire.</p>

        </div>

    );

}

export default Top;