import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from "./Sections/Navbar.jsx";
import './index.css'
import Hero from "./Sections/Hero.jsx";
import FirstVideo from "./Sections/FirstVideo.jsx";
import Jason from "./Sections/Jason.jsx";
import SecondVideo from "./Sections/SecondVideo.jsx";
import Lucia from "./Sections/Lucia.jsx";
import PostCard from "./Sections/PostCard.jsx";
import Final from "./Sections/Final.jsx";
import Outro from "./Sections/Outro.jsx";
import ComingSoon from "./Sections/ComingSoon.jsx";


gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FirstVideo />
            <Jason />
            <SecondVideo />
            <Lucia />
            <PostCard />
            <Final />
            <Outro />
        </div>
    );
};

export default App;
