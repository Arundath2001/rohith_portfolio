import React from "react";
import Work from "./Work";
import Certification from "./Certification";

function About(){

    return(

        <div id="about" className="about">

            <h3>About Me</h3>
            <p>A computer science engineering graduate with a passion for transforming user experiences through intuitive design solutions. Leveraging technical expertise and creativity to bridge the gap between technology and user needs, now thriving in the role of a UI/UX designer. Dedicated to crafting visually stunning interfaces that prioritize user satisfaction and engagement.</p>
            
            <Work />

            <Certification />

        </div>

    );

}

export default About;