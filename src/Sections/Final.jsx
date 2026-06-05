import React from 'react';
import { useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Final = () => {
    const videoRef = useRef(null);
    useGSAP(() =>{
        gsap.set('.final',{marginTop:"-150vh",opacity:"0"});

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".final",
                start: 'top top',
                end: '+=400%',
                scrub: 2,
                pin: true,
            }
        });

        // 1. This handles the fade-in effect first
        tl.to('.final',{duration:2, opacity: 1, ease:"power1.inOut"});

        // 2. Your exact layout logic, now sequenced perfectly
        videoRef.current.onloadedmetadata = () => {
            // Using '>' forces the video scrub to wait for the opacity animation above to finish
            tl.to(videoRef.current, {currentTime:videoRef.current.duration, duration:3, ease:"none"}, '>');
        }
    })
    return (
        <section className="final">
            <div className="final-content size-full">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/assets/videos/output3.mp4"
                ></video>
            </div>
        </section>
    );
};

export default Final;