import React from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Lucia = () => {

    useGSAP(() => {
        // Safe pull-up margin that won't swallow the previous section header
        gsap.set('.lucia-life', { marginTop: '-80vh' });

        // Timeline to fade out the previous video section as you scroll down
        gsap.timeline({
            scrollTrigger: {
                trigger: '.lucia-life',
                start: 'top 90%',
                end: '10% center',
                scrub: 2,
            }
        }).to('.lucia', { opacity: 0, duration: 2, ease: "power1.inOut" });

        // Parallax smooth scrolling effect for your images stack column
        gsap.to('.lucia-life .img-box', {
            scrollTrigger: {
                trigger: '.lucia-life',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2,
            },
            y: -200,
            duration: 1,
            ease: "power1.inOut"
        });
    });

    return (
        <section className="lucia-life">
            {/* Left Column: Image Stack Box */}
            <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96 ">
                <div className="lucia-1">
                    <img src="/assets/images/lucia-1.webp" alt="Lucia Prison" />
                </div>
                <div className="lucia-3">
                    <img src="/assets/images/lucia-3.webp" alt="Lucia Action" />
                </div>
            </div>

            {/* Right Column: Bio Content & Pool Image Box */}
            <div className="lg:w-1/2 lucia-life-content">
                <div className="max-w-xl lg:ps-32 ps-10">
                    <h1>Lucia Caminos</h1>
                    <h2>Lucia’s father taught her to fight as soon as she could walk.</h2>
                    <p>Life has been coming at her swinging ever since. Fighting for her
                        family landed her in the Leonida Penitentiary.
                        Sheer luck got her out. Lucia’s learned her lesson — only smart moves from here.</p>

                    <div className="lucia-2">
                        <img src="/assets/images/lucia-2.webp" alt="Lucia Pool" />
                    </div>
                </div>

                <p className="max-w-xl lg:ps-32 ps-10 mt-5">
                    More than anything, Lucia wants the good life her mom has dreamed of
                    since their days in Liberty City — but instead of half-baked fantasies,
                    Lucia is prepared to take matters into her own hands.
                </p>
            </div>
        </section>
    );
};

export default Lucia;