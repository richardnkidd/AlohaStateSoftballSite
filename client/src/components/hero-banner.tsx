import { useEffect } from "react";
import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";

export default function HeroBanner() {
  useEffect(() => {
    // Countdown calculation
    const openDate = new Date('2025-11-01T10:00:00-10:00'); // Edit as needed
    const dLeftEl = document.getElementById('dLeft');
    if (dLeftEl) {
      const days = Math.max(0, Math.ceil((openDate.getTime() - Date.now()) / (1000*60*60*24)));
      dLeftEl.textContent = String(days);
    }
    
    // Confetti on CTA click
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
    <header className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl px-6 md:px-10 pt-10 md:pt-14 pb-12 md:pb-16 hero">
      {/* film grain */}
      <span aria-hidden className="pointer-events-none absolute inset-0 hero-noise"></span>

      {/* decorative wave bottom */}
      <svg className="absolute bottom-[-1px] left-0 w-full" height="64" viewBox="0 0 1440 64" fill="none" aria-hidden>
        <path d="M0,32 C200,74 400,-10 720,20 C1040,50 1240,12 1440,28 L1440,64 L0,64 Z" fill="rgba(255,255,255,.85)"/>
      </svg>

      {/* top row: logo + title */}
      <div className="relative grid grid-cols-[auto,1fr] gap-6 md:gap-8 items-center">
        <div className="logo-wrap">
          <img src={anuenueClassicLogo} alt="Ānuenue Classic 2026 logo"
               className="h-24 w-24 md:h-32 md:w-32 rounded-full shadow-[0_8px_30px_rgba(0,0,0,.12)] ring-4 ring-white/70 object-cover"/>
        </div>

        <div className="h1-wrap">
          <h1 className="font-['Barlow_Semi_Condensed'] tracking-wider text-3xl sm:text-4xl md:text-6xl font-extrabold text-[var(--navy)]">
            ĀNUENUE CLASSIC 2026
          </h1>
          <p className="mt-2 text-[17px] md:text-lg text-[var(--ink)]/80">
            Hawai'i's Premier LGBTQ+ Softball Tournament
          </p>
          {/* subtle spotlight behind H1 */}
          <span aria-hidden className="spotlight"></span>
        </div>
      </div>

      {/* info chips */}
      <ul className="mt-8 md:mt-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {[
          {icon:'calendar', title:'March 27–29, 2026', meta:'Thursday – Saturday • 3 Days of Competition'},
          {icon:'palm', title:'Patsy T. Mink Park', meta:'Oʻahu, Hawaiʻi • Beautiful Island Setting'},
          {icon:'globe', title:'Open Tournament', meta:'All IPS Players Welcome • International Pride Softball'},
        ].map((c,i)=>(
          <li key={i} className="card">
            <div className="card-icon" data-icon={c.icon} aria-hidden/>
            <h3 className="card-title">{c.title}</h3>
            <p className="card-meta">{c.meta}</p>
          </li>
        ))}
      </ul>

      {/* trust pill */}
      <div className="mt-6 flex justify-center">
        <div className="trust">
          <span className="i-trophy" aria-hidden/>
          Official Aloha State Softball League Tournament
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button id="hero-cta" className="cta" type="button">
          Registration Opening Soon!
          <span aria-hidden className="shine"/>
        </button>
        <div className="countdown" role="status" aria-live="polite">
          Registration opens in <span id="dLeft">202</span> days
        </div>
      </div>

      {/* inclusivity line */}
      <p className="mt-6 text-center text-sm text-[var(--ink)]/75 flex items-center justify-center gap-2">
        <span className="i-heart" aria-hidden/> All Are Welcome • E Komo Mai <span className="i-drop" aria-hidden/>
      </p>
    </header>
  );
}