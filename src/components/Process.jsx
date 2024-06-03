import React from "react";

function Process(props){

    return(
        <div className="process">
            <div className="process_cont1">
            <img src={props.src} alt={props.alt} ></img>
            </div>

            <div className="process_cont2">
            <h6> {props.head} </h6>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
            <p>{props.para3}</p>
            <p>{props.para4}</p>
            </div>            
        </div>
    );

}

export default Process;