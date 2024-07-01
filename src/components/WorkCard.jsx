import React, { useState, useEffect, useRef } from "react";
import ButtonNormal from "./ButtonNormal";

function WorkCard(props) {
    const [isActive, setIsActive] = useState(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    function handleTouchStart() {
        setIsActive(true);
    }

    function handleTouchEnd() {
        setIsActive(false);
    }

    function handleMouseEnter() {
        if (window.innerWidth > 600) {
            setIsActive(true);
            setIsVideoVisible(true);
        }
    }

    function handleMouseLeave() {
        if (window.innerWidth > 600) {
            setIsActive(false);
            setIsVideoVisible(false);
        }
    }

    useEffect(() => {
        if (window.innerWidth <= 600) {
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setIsVideoVisible(true);
                        } else {
                            setIsVideoVisible(false);
                        }
                    });
                },
                {
                    rootMargin: '0px 0px -20% 0px',
                    threshold: 0.35 
                }
            );

            if (containerRef.current) {
                observer.observe(containerRef.current);
            }

            return () => {
                if (containerRef.current) {
                    observer.unobserve(containerRef.current);
                }
            };
        }
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isVideoVisible) {
                videoRef.current.play().catch(error => {
                    console.log('Error playing video:', error);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVideoVisible]);

    return (
        <div
            className={isActive ? "workcard_main" : ""}
            id="workcard"
            ref={containerRef}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="workcard_left">
                {isVideoVisible ? (
                    <img src={props.webpImage || props.url} alt="thumbnail" />
                ) : (
                    <img src={props.url} alt="thumbnail" />
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
