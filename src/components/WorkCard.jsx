import React, { useState, useEffect, useRef } from "react";
import ButtonNormal from "./ButtonNormal";

function WorkCard(props) {
  const [isInView, setIsInView] = useState(false);
  const workCardRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            videoRef.current.play();
          } else {
            setIsInView(false);
            videoRef.current.pause();
          }
        });
      },
      { threshold: .5 }
    );

    if (workCardRef.current) {
      observer.observe(workCardRef.current);
    }

    return () => {
      if (workCardRef.current) {
        observer.unobserve(workCardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={workCardRef}
      className="workcard"
      id="workcard"
    >
      <div className="workcard_left">
        <img src={props.url} alt="nextrio" style={{ display: isInView && "none"  }} />
        {isInView &&(
            <video ref={videoRef} autoPlay loop muted>
            <source src={props.video} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="workcard_right">
        <div className="workcard_right_top">
          <h4>{props.head3}</h4>
          <p id="parasmall">{props.paratop}</p>
        </div>
        <div className="workcard_right_down">
          <div><p>{props.paradown}</p></div>
          <div>
            <ButtonNormal
              link={props.link}
              text={props.text}
              hoverEffect={props.hoverEffect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
