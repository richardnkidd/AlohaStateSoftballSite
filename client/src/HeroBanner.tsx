import React, { useEffect } from "react";
import "./hero.css";
import anuenueClassicLogo from "./assets/anuenue-classic-logo.jpeg";

const REGISTRATION_OPEN = "2025-11-01T10:00:00-10:00"; // <-- change if needed

function daysUntil(dateISO: string) {
  const ms = new Date(dateISO).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export default function HeroBanner() {
  const dLeft = daysUntil(REGISTRATION_OPEN);
  
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctaButton = document.getElementById('hero-cta');
    
    const handleClick = async () => {
      if (reduce) return;
      
      // Dynamically import canvas-confetti
      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default;
      
      confetti({ 
        particleCount: 80, 
        spread: 70, 
        origin: { y: .8 }, 
        disableForReducedMotion: true, 
        colors: ['#FF7A59','#FFC65A','#2EC4B6','#6EC6FF','#D09CFF'] 
      });
    };
    
    ctaButton?.addEventListener('click', handleClick);
    
    return () => {
      ctaButton?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header id="anuenue-hero" className="hero">
      {/* film grain overlay */}
      <span aria-hidden className="hero-noise" />

      {/* top row: logo + title */}
      <div className="hero-top">
        <img
          className="hero-logo"
          src={anuenueClassicLogo}
          alt="Ānuenue Classic 2026 logo"
        />
        <div className="hero-title-wrap">
          <h1 className="hero-title">ĀNUENUE CLASSIC 2026</h1>
          <p className="hero-sub">Hawai'i's Premier LGBTQ+ Softball Tournament</p>
          <span className="hero-spotlight" aria-hidden />
        </div>
      </div>

      {/* info cards */}
      <ul className="hero-cards">
        <li className="card">
          <span className="card-icon icon-sun" aria-hidden />
          <h3 className="card-title">March 27–29, 2026</h3>
          <p className="card-meta">Friday – Sunday • 3 Days of Competition</p>
        </li>

        <li className="card">
          <span className="card-icon icon-reef" aria-hidden />
          <h3 className="card-title">Patsy T. Mink Park</h3>
          <p className="card-meta">Oʻahu, Hawaiʻi • Beautiful Island Setting</p>
        </li>

        <li className="card">
          <span className="card-icon icon-sky" aria-hidden />
          <h3 className="card-title">Open Tournament</h3>
          <p className="card-meta">All IPS Players Welcome • International Pride Softball</p>
        </li>
      </ul>

      {/* trust pill */}
      <div className="trust">
        <span className="i i-trophy" aria-hidden />
        Official Aloha State Softball League Tournament
      </div>

      {/* CTA row */}
      <div className="cta-row">
        <button id="hero-cta" type="button" className="cta">
          Registration Opening Soon!
          <span className="cta-shine" aria-hidden />
        </button>
        <div className="countdown" role="status" aria-live="polite">
          Registration opens in <strong>{dLeft}</strong> days
        </div>
      </div>

      {/* footer line */}
      <p className="hero-foot">
        <span className="i i-heart" aria-hidden /> All Are Welcome • E Komo Mai{" "}
        <span className="i i-drop" aria-hidden />
      </p>

      {/* decorative wave */}
      <svg className="hero-wave" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0,32 C240,74 420,-10 720,20 C1020,50 1200,12 1440,28 L1440,64 L0,64 Z"
          fill="rgba(255,255,255,0.88)"
        />
      </svg>
    </header>
  );
}