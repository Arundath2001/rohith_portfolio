import React from "react";
import Process from "./Process";
import research from "../assets/research.png";
import design from "../assets/design.png";
import test from "../assets/test.png";
import deliver from "../assets/deliver.png";

function Designprocess(){

    return(
        <div className="designprocess">
            <div className="designprocess_cont1">
                <h3>My UX Design <br /> Process</h3>
            </div>
            
            <div className="designprocess_cont2">
            <Process src={research} head="Research" para1="User Interviews" para2="Surveys" para3="Personas" para4="Card Sorting" />
            <Process src={design} head="Design " para1="Information Architecture" para2="Wireframes" para3="Prototype" />
            <Process src={test} head="Test" para1="Plan" para2="Conduct" para3="Report" para4="Optimize" />
            <Process src={deliver} head="Deliver" para1="Documentation" para2="QA & Feedback" />
            </div>
        </div>
    );

}

export default Designprocess;