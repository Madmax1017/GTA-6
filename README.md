# 🌴 Vice Project: Immersive Rockstar-Inspired Web Experience

An premium, interactive landing page inspired by the Rockstar Games Grand Theft Auto VI layout. This project leverages React, Tailwind CSS, and the GreenSock Animation Platform (GSAP) to achieve complex "Antigravity" stacking layers, smooth scroll-synchronized video playback, and cinematic clip-path vector mask reveals.

[![Framework: React](https://img.shields.io/badge/Framework-React-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Animation: GSAP](https://img.shields.io/badge/Animation-GSAP-green?style=flat-square&logo=greensock)](https://gsap.com/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

* **Cinematic SVG Masking:** Scroll-controlled full-screen clip-path geometry that scales smoothly using GSAP `ScrollTrigger`.
* **Hardware-Accelerated Video Scrubbing:** Seamlessly links user mouse-wheel velocity directly to high-definition video timelines without micro-stuttering or frame drops.
* **"Antigravity" DOM Layering:** Clean absolute layer-stack sequencing that handles visibility overrides (`autoAlpha`), avoiding viewport clipping or layout collision bugs.
* **Adaptive Typography:** Pixel-perfect integration of iconic layout typefaces including Chalet Comprimé, Pricedown, and Helvetica Neue weights.

---

## 🛠️ Architecture & Tech Stack

* **Frontend Library:** React (Functional components with hooks)
* **Animation Engine:** GSAP & `@gsap/react` (`useGSAP` hook for scoped cleanup)
* **Styling Pipeline:** Tailwind CSS featuring custom theme definitions for responsive fluid-typography scaling (`2xl`, `3xl` layouts)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
```bash
node -v
npm -v
