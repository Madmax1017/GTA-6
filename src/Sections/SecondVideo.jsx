import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SecondVideo = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.set('.lucia', { marginTop: '-60vh', opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.lucia',
                start: 'top top',
                end: '+=200%', // Use relative percentage here so pinning doesn't snap layouts
                scrub: 2,
                pin: true,
            }
        });

        tl.to('.lucia', { duration: 1, opacity: 1, ease: "power1.inOut" });

        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: "power1.inOut" }, '<');
            };
        }
    });

    return (
        <section className="lucia">
            <div className="h-dvh">
                <video
                    src="/assets/videos/output2.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="size-full object-cover second-vd"
                    style={{ objectPosition: '15% 0%' }}
                    ref={videoRef}
                ></video>
            </div>
        </section>
    );
};

export default SecondVideo;