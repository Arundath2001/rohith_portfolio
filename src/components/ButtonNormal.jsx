import React, { useState } from "react";

function ButtonNormal(props){

    function openLink(){

        window.open( props.link , '_blank');

    }
    
    const [isActive, setIsActive] = useState(false);

    function handleTouchStart () {
      setIsActive(true);
    }
  
    function handleTouchEnd () {
      setIsActive(false);
    }

    function handleMouseEnter(){
        setIsActive(true);
    }

    function handleMouseLeave(){
        setIsActive(false);
    }

    return(

        <button className="buttonnormal"  id={ isActive ? props.hoverEffect : '' } onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onClick={openLink} >{ props.text }</button>

    );

}

export default ButtonNormal;