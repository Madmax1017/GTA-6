import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PostCard = () => {
    const videoRef = useRef(null);

    useGSAP(() => {
        if (!videoRef.current) return;

        const video = videoRef.current;
        video.pause(); // Video must be paused for direct manipulation

        const scrollVideo = ScrollTrigger.create({
            trigger: '.post-card',
            start: "top top",
            end: "+=300%",
            scrub: 1.5, // Smooth catching lag
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                if (video.duration) {
                    video.currentTime = video.duration * self.progress;
                }
            }
        });

        const handleMetadata = () => {
            scrollVideo.refresh();
        };

        if (video.readyState >= 1) {
            handleMetadata();
        } else {
            video.addEventListener('loadedmetadata', handleMetadata);
        }

        return () => {
            video.removeEventListener('loadedmetadata', handleMetadata);
            scrollVideo.kill();
        };
    }, { scope: '.post-card' });

    return (
        <section className="post-card">
            <div className="animated-gradient-bg">
                <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700 ease-in-out">
                    <video
                        src="/assets/videos/postcard-vd.mp4"
                        muted
                        playsInline
                        preload="auto"

                        ref={videoRef}
                        className="w-full h-full object-cover" // Ensures it fills the postcard area
                    />
                    <img src="/assets/images/overlay.webp" alt="Postcard Frame" />

                    <button className="font-bold uppercase tracking-wider hover:bg-neutral-200 transition">
                        Explore Destinations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PostCard;