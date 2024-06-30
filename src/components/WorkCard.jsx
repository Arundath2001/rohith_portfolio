import React, { useState } from "react";
import ButtonNormal from "./ButtonNormal";

function WorkCard(props) {
    const [isActive, setIsActive] = useState(false);

    function handleTouchStart() {
        setIsActive(true);
    }

    function handleTouchEnd() {
        setIsActive(false);
    }

    function handleMouseEnter() {
        setIsActive(true);
    }

    function handleMouseLeave() {
        setIsActive(false);
    }

    const showVideo = (isActive || window.innerWidth <= 600) && props.video;

    return (
        <div 
            className={isActive ? "workcard_main" : ""} 
            id="workcard" 
            onMouseLeave={handleMouseLeave} 
            onMouseEnter={handleMouseEnter} 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd}
        >
            <div className="workcard_left">
                {showVideo ? (
                    <video autoPlay loop muted>
                        <source src={props.video} type="video/mp4" />
                    </video>
                ) : (
                    <img src={props.url} alt="nextrio" />
                )}
            </div>
            <div className="workcard_right">
                <div className="workcard_right_top">
                    <h4>{props.head3}</h4>
                    <p id="parasmall">{props.paratop}</p>
                </div>
                <div className="workcard_right_down">
                    <div><p>{props.paradown}</p></div>
                    <div><ButtonNormal link={props.link} text={props.text} hoverEffect={props.hoverEffect} /></div>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;
