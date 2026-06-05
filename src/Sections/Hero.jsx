import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComingSoon from "../Sections/ComingSoon";
import { useMaskSettings } from "../constants/index.js";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

    useGSAP(() => {
        gsap.set('.mask-wrapper', {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,
            autoAlpha: 1,
            pointerEvents: "auto"
        });
        gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });
        gsap.set('.entrance-message', { marginTop: '0vh', autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: '+=250%',
                scrub: 2,
                pin: true,
                pinSpacing: true, // Explicitly set for stability
            }
        });

        tl
            .to('.fade-out', { opacity: 0, ease: "power1.inOut" })
            .to('.scale-out', { scale: 1, ease: "power1.inOut" })
            .to('.mask-wrapper', { maskSize, ease: "power1.inOut" }, '<')

            // STACKING FIX: autoAlpha handles both opacity and visibility (pointer-events)
            .to('.mask-wrapper', {
                autoAlpha: 0,
                pointerEvents: "none",
                duration: 1
            })

            .to('.overlay-logo', { opacity: 1 }, '<')
            .to('.overlay-logo', { opacity: 0 })

            // THE REVEAL: Animate the CSS variable for the radial mask
            .to('.entrance-message', {
                autoAlpha: 1,
                "--entrance-mask-radius": "100%", // Animate the circle opening
                duration: 2,
                ease: "power2.inOut"
            });
    });

    return (
        <section className="hero-section relative w-screen h-screen overflow-hidden bg-black">
            <div className="size-full mask-wrapper">
                <img src="/assets/images/hero-bg.webp" className="scale-out" alt="" />
                <img src="/assets/images/hero-text.webp" className="fade-out title-logo" alt="" />
                <img src="/assets/images/watch-trailer.png" className="trailer-logo fade-out" alt="" />

                <div className="play-img fade-out">
                    <img src="/assets/images/play.png" className="w-7 ml-1" alt="" />
                </div>
            </div>

            <img src="/assets/images/big-hero-text.svg" className="size-full object-cover mask-logo" alt="" />

            <div className="fake-logo-wrapper">
                <img src="/assets/images/big-hero-text.svg" className="overlay-logo" alt="" />
            </div>

            {/* This is now safe to display once display: "none" drops the mask layer */}
            <ComingSoon />
        </section>
    );
};

export default Hero;