import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceData(){

    return(

        <div id="services" className="servicedata">

            <h3>Services</h3>

            <ServiceCard head3="UI/UX Design" para="Creating intuitive and visually appealing user interfaces for web and mobile applications." />
            <ServiceCard head3="Responsive Web Design" para="Designing websites that look and function perfectly across all device sizes, from mobiles to desktops." />
            <ServiceCard head3="User Testing & Feedback" para="Conducting user tests to gather actionable insights and iterating designs based on feedback." />
            <ServiceCard head3="Logo Making" para="Crafting captivating logos that embody your brand's essence with creativity and precision." />
            <ServiceCard head3="UI/UX  Writing" para="Crafting compelling UI/UX designs to enhance user experiences and elevate digital interactions." />

        </div>

    );

}

export default ServiceData;