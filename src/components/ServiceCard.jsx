import React from "react";

function ServiceCard(props){

    return(

        <div className="serivcecard">

            <h4 className="srvhead">{props.head3} <p id="parasmall">{props.parasmall}</p> </h4>
            <p>{props.para}</p>

        </div>

    );

}

export default ServiceCard;