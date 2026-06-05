import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // 1. Import ScrollTrigger
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// 2. Register the plugin
gsap.registerPlugin(ScrollTrigger);

const FirstVideo = () => {
    const videoRef = useRef(null);

    useGSAP(() => {
        gsap.set('.first-vd-wrapper', { marginTop: '-150vh', opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.first-vd-wrapper', // 3. Added the missing dot '.'
                start: 'top top',
                end: "+=200% top",
                scrub: true,
                pin: true,
            }
        });

        // 4. Example: Fade the wrapper back in as you scroll

        tl.to('.hero-section',{delay:0.5, opacity: 0,ease:"power1.inOut"})
        tl.to('.first-vd-wrapper',{duration:2, opacity: 1,ease:"power1.inOut"});

        videoRef.current.onloadedmetadata =() =>{
            tl.to(videoRef.current, {currentTime:videoRef.current.duration, duration: 3, ease:"power1.inOut"},'<');
        }
    }, {  });

    return (
        <section className="first-vd-wrapper">
            <div className="h-dvh"> {/* 5. Fixed typo from h-dv to h-dvh */}
                <video
                    src="/assets/videos/output1.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="first-vd"
                    ref={videoRef}
                ></video>
            </div>
        </section>
    );
};

export default FirstVideo;