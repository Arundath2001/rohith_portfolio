import React from "react";

function ButtonIcon(props){

    return(

        <div className="buttonicon">

            <a className="paranew" href={props.url}> <img src={props.img} /> {props.text} </a>  

        </div>

    );

}

export default ButtonIcon;