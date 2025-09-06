import { useEffect, useState, useRef } from "react";
import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";

export default function SponsorBanner() {
  const [daysUntil, setDaysUntil] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Calculate countdown
  useEffect(() => {
    const tournamentDate = new Date('2026-03-27');
    const today = new Date();
    const diffTime = tournamentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntil(diffDays > 0 ? diffDays : 0);
  }, []);
  
  // Parallax effect for background
  useEffect(() => {
    if (isReducedMotion) return;
    
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY * 0.015); // Very subtle parallax (1-2°)
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);
  
  // Confetti burst animation
  const triggerConfetti = () => {
    if (isReducedMotion) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const button = buttonRef.current;
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.pointerEvents = 'none';
    
    const particles: any[] = [];
    const colors = ['#FF8A66', '#FFC168', '#EAF6F3', '#EEF7FB', '#F9F5EC'];
    
    // Create particles
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
      });
    }
    
    // Animate particles for 600ms
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed > 600) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        if (p.life > 0) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15; // gravity
          p.life -= 0.02;
          
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  };

  return (
    <div className="w-full mx-auto px-4 py-3">
      <div 
        className="hero max-w-screen-xl mx-auto rounded-2xl shadow-2xl overflow-hidden relative"
        style={{
          background: `linear-gradient(${135 + scrollY}deg, var(--sand-50) 0%, var(--sky-50) 55%, var(--aqua-50) 100%)`,
          transform: isReducedMotion ? 'none' : `rotate(${scrollY * 0.01}deg)`
        }}
      >
        {/* Film grain texture overlay - very subtle */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Subtle rainbow border - 30% opacity */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, #e40476, #fe6b35, #fed800, #56c02b, #0f9cda, #732982)',
            opacity: 0.3,
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude',
            maskComposite: 'exclude'
          }}
        />

        {/* Main Content Container */}
        <div className="relative bg-gradient-to-b from-white/95 to-white/92 backdrop-blur-xl">
          
          {/* Soft spotlight gradient behind H1 - reduced opacity */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-[0.24]"
            style={{
              background: 'radial-gradient(circle, var(--sand-50) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />
          
          {/* Header Section */}
          <header className="relative px-6 pt-8 pb-6 md:px-10 md:pt-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              
              {/* Logo with subtle 3D effect */}
              <div className="relative flex-shrink-0">
                <div 
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden relative"
                  style={{
                    boxShadow: `
                      inset 0 2px 4px rgba(255, 255, 255, 0.5),
                      inset 0 -2px 4px rgba(0, 0, 0, 0.05),
                      0 2px 8px rgba(0, 0, 0, 0.1),
                      0 4px 16px rgba(0, 0, 0, 0.08)
                    `
                  }}
                >
                  <img 
                    src={anuenueClassicLogo}
                    alt="Ānuenue Classic 2026 Logo" 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle highlight */}
                  <div className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25) 0%, transparent 50%)'
                    }}
                  />
                </div>
              </div>
              
              {/* Title with updated typography */}
              <div className="text-center md:text-left">
                <h1 
                  className="text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight uppercase"
                  style={{
                    fontFamily: "'Barlow Semi Condensed', system-ui, sans-serif",
                    letterSpacing: '0.02em',
                    color: 'var(--ink)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.08)'
                  }}
                >
                  ĀNUENUE CLASSIC 2026
                </h1>
                <p 
                  className="text-lg md:text-xl font-medium mt-2"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    color: 'var(--text)'
                  }}
                >
                  Hawai'i's Premier LGBTQ+ Softball Tournament
                </p>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="px-6 pb-8 md:px-10 md:pb-10">
            
            {/* Info Cards with Clean Glassmorphism */}
            <nav className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8" role="navigation" aria-label="Tournament Information">
              
              {/* Date Card */}
              <article 
                className="group relative rounded-xl p-5 transition-all duration-300 hover:transform hover:translateY-[-2px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(249, 245, 236, 0.2))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 138, 102, 0.15)',
                  boxShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.05),
                    0 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8)
                  `
                }}
              >
                <div className="text-center">
                  {/* Calendar SVG Icon */}
                  <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="var(--cta-start)" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", color: 'var(--ink)' }}>
                    March 27-29, 2026
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text)' }}>Thursday - Saturday</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>3 Days of Competition</p>
                </div>
              </article>

              {/* Location Card */}
              <article 
                className="group relative rounded-xl p-5 transition-all duration-300 hover:transform hover:translateY-[-2px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(238, 247, 251, 0.2))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 193, 104, 0.15)',
                  boxShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.05),
                    0 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8)
                  `
                }}
              >
                <div className="text-center">
                  {/* Palm Tree SVG Icon */}
                  <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="var(--cta-end)" strokeWidth="2" aria-hidden="true">
                    <path d="M13 18v-6.5c2.5 0 4.5-2 4.5-4.5-2.5 0-4.5 2-4.5 4.5"/>
                    <path d="M11 18v-6.5c-2.5 0-4.5-2-4.5-4.5 2.5 0 4.5 2 4.5 4.5"/>
                    <path d="M12 2c1.5 1.5 1.5 4 0 5.5-1.5-1.5-1.5-4 0-5.5z"/>
                    <path d="M7 22h10"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", color: 'var(--ink)' }}>
                    Patsy T. Mink Park
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text)' }}>O'ahu, Hawai'i</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Beautiful Island Setting</p>
                </div>
              </article>

              {/* Open Tournament Card */}
              <article 
                className="group relative rounded-xl p-5 transition-all duration-300 hover:transform hover:translateY-[-2px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(234, 246, 243, 0.2))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(46, 196, 182, 0.15)',
                  boxShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.05),
                    0 4px 8px rgba(0, 0, 0, 0.04),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8)
                  `
                }}
              >
                <div className="text-center">
                  {/* Globe SVG Icon */}
                  <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="#2EC4B6" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", color: 'var(--ink)' }}>
                    Open Tournament
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text)' }}>All IPS Players Welcome</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>International Pride Softball</p>
                </div>
              </article>
            </nav>

            {/* Official Badge with Trophy Icon */}
            <div className="flex justify-center mb-8">
              <div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(249, 245, 236, 0.5))',
                  border: '1px solid rgba(255, 138, 102, 0.12)',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Trophy SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="var(--cta-start)" strokeWidth="2" aria-hidden="true">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M6 2h12v10a6 6 0 0 1-12 0V2z"/>
                  <path d="M12 18v4"/>
                  <path d="M8 22h8"/>
                </svg>
                <span className="text-base font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--ink)' }}>
                  Official Aloha State Softball League Tournament
                </span>
              </div>
            </div>

            {/* CTA Section with Countdown */}
            <div className="text-center">
              <div className="relative inline-block">
                {/* Canvas for confetti */}
                <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />
                
                {/* Premium CTA Button - No AI Glow */}
                <button 
                  ref={buttonRef}
                  className="relative group px-10 py-4 rounded-full font-bold text-lg text-white overflow-hidden transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: `linear-gradient(135deg, var(--cta-start) 0%, var(--cta-end) 100%)`,
                    boxShadow: `
                      0 2px 4px rgba(0, 0, 0, 0.12),
                      0 4px 8px rgba(0, 0, 0, 0.08),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    fontFamily: "'Barlow Semi Condensed', sans-serif"
                  }}
                  onMouseEnter={triggerConfetti}
                  onClick={triggerConfetti}
                  aria-label="Registration opening soon for Ānuenue Classic 2026"
                >
                  {/* Subtle animated light sweep */}
                  <span 
                    className={`absolute inset-0 opacity-20 ${!isReducedMotion ? 'animate-[sweep_12s_linear_infinite]' : ''}`}
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%)',
                      transform: 'translateX(-100%)'
                    }}
                  />
                  
                  {/* Button Text */}
                  <span className="relative z-10">
                    Registration Opening Soon!
                  </span>
                </button>
              </div>
              
              {/* Countdown Chip */}
              {daysUntil > 0 && (
                <div className="mt-4">
                  <span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(255, 138, 102, 0.15)',
                      color: 'var(--text)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    Registration opens in <strong style={{ color: 'var(--cta-start)' }}>{daysUntil}</strong> days
                  </span>
                </div>
              )}
              
              {/* Supporting Text */}
              <p className="mt-4 text-sm font-medium" style={{ color: 'var(--muted)', fontFamily: "'Inter', sans-serif" }}>
                Get ready for three days of competitive softball, community, and celebration!
              </p>
            </div>

            {/* Pride & Aloha Footer */}
            <footer className="mt-8 flex justify-center items-center gap-4" aria-label="Event values">
              <div className="flex gap-2">
                {/* Rainbow Heart SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="LGBTQ+ Pride">
                  <defs>
                    <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e40476"/>
                      <stop offset="20%" stopColor="#fe6b35"/>
                      <stop offset="40%" stopColor="#fed800"/>
                      <stop offset="60%" stopColor="#56c02b"/>
                      <stop offset="80%" stopColor="#0f9cda"/>
                      <stop offset="100%" stopColor="#732982"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#rainbow)" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                
                {/* Softball SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="var(--cta-end)" strokeWidth="2" aria-label="Softball">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M8 12c0-2.21 1.79-4 4-4M12 8c2.21 0 4 1.79 4 4M16 12c0 2.21-1.79 4-4 4M12 16c-2.21 0-4-1.79-4-4"/>
                </svg>
              </div>
              
              <span className="text-sm font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                All Are Welcome • E Komo Mai
              </span>
              
              <div className="flex gap-2">
                {/* Peace/Shaka SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#2EC4B6" strokeWidth="2" aria-label="Aloha">
                  <path d="M12 2v20M8 6l4 4 4-4M8 18l4-4 4 4"/>
                </svg>
              </div>
            </footer>
          </main>
        </div>
      </div>
      
      {/* Logo-safe fallback style */}
      <style>{`
        .hero.logo-safe {
          background: #FAF7F0 !important;
        }
      `}</style>
    </div>
  );
}