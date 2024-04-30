import React from "react";
import ButtonNormal from "./ButtonNormal";

function WorkCard(props){

    return(

        <div id="workcard">
            <div className="workcard_left">
                <img src={props.url} alt="nextrio" />
            </div>
            <div className="workcard_right">
                <div className="workcard_right_top">

                    <h4>{props.head3}</h4>
                    <p id="parasmall">{props.paratop}</p>

                </div>

                <div className="workcard_right_down">

                    <div><p>{props.paradown}</p></div>
                    
                    <div><ButtonNormal /></div>

                </div>
            </div>
        </div>

    );

}

export default WorkCard;