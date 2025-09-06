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
  
  // Enhanced confetti burst animation
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
    
    const colors = ['#FF8A66', '#FFC168', '#6EC6FF', '#8EE3C1', '#D09CFF'];
    const particles: any[] = [];
    
    // Create 36 particles
    for (let i = 0; i < 36; i++) {
      particles.push({
        x: rect.width / 2,
        y: rect.height / 2,
        r: 2 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 1.6) * 3,
        c: colors[Math.floor(Math.random() * colors.length)],
        a: 1
      });
    }
    
    // Animate for ~600ms
    let t = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.a *= 0.96;
        
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      
      t++;
      if (t < 60 && particles.some(p => p.a > 0.05)) {
        requestAnimationFrame(animate);
      } else {
        canvas.style.display = 'none';
      }
    };
    
    canvas.style.display = 'block';
    animate();
  };

  return (
    <div className="w-full mx-auto px-4 py-3">
      <div 
        className="hero max-w-screen-xl mx-auto rounded-[24px] overflow-hidden relative"
        style={{
          background: `linear-gradient(${135 + scrollY}deg, var(--sand-50) 0%, var(--sky-50) 55%, var(--aqua-50) 100%)`,
          transform: isReducedMotion ? 'none' : `rotate(${scrollY * 0.01}deg)`,
          border: '1px solid transparent',
          borderImage: 'linear-gradient(90deg, #ff6ec7 0%, #ffca7a 20%, #ffe66d 40%, #8ee3c1 60%, #6ec6ff 80%, #d09cff 100%) 1'
        }}
      >
        {/* Film grain texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%25" height="100%25" filter="url(%23n)" opacity="0.035"/></svg>')`,
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Main Content Container */}
        <div className="relative bg-gradient-to-b from-white/95 to-white/92 backdrop-blur-xl">
          
          {/* Header Section */}
          <header className="relative px-6 pt-8 pb-6 md:px-10 md:pt-10">
            {/* Headline spotlight */}
            <div className="h1-wrap relative">
              <div 
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{
                  width: 'min(70vw, 900px)',
                  height: 'min(70vw, 900px)',
                  transform: 'translate(-50%, -55%)',
                  background: 'radial-gradient(closest-side, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0) 70%)'
                }}
              />
              
              <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                
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
            </div>
          </header>

          {/* Main Content Area */}
          <main className="px-6 pb-8 md:px-10 md:pb-10">
            
            {/* Info Cards with Clean Glassmorphism */}
            <nav className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8" role="navigation" aria-label="Tournament Information">
              
              {/* Date Card */}
              <article 
                className="card group relative rounded-xl p-5 transition-all duration-300 hover:transform hover:translateY-[-2px]"
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
                  <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Calendar" role="img">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", color: 'var(--ink)' }}>
                    March 27-29, 2026
                  </h3>
                  <p className="meta text-sm" style={{ color: '#4b5563', opacity: 1 }}>Thursday - Saturday</p>
                  <p className="fine-print text-xs mt-1" style={{ color: '#4b5563', opacity: 1 }}>3 Days of Competition</p>
                </div>
              </article>

              {/* Location Card */}
              <article 
                className="card group relative rounded-xl p-5 transition-all duration-300 hover:transform hover:translateY-[-2px]"
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
                  <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Palm tree" role="img">
                    <path d="M13 18v-6.5c2.5 0 4.5-2 4.5-4.5-2.5 0-4.5 2-4.5 4.5"/>
                    <path d="M11 18v-6.5c-2.5 0-4.5-2-4.5-4.5 2.5 0 4.5 2 4.5 4.5"/>
                    <path d="M12 2c1.5 1.5 1.5 4 0 5.5-1.5-1.5-1.5-4 0-5.5z"/>
                    <path d="M7 22h10"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", color: 'var(--ink)' }}>
                    Patsy T. Mink Park
                  </h3>
                  <p className="meta text-sm" style={{ color: '#4b5563', opacity: 1 }}>O'ahu, Hawai'i</p>
                  <p className="fine-print text-xs mt-1" style={{ color: '#4b5563', opacity: 1 }}>Beautiful Island Setting</p>
                </div>
              </article>

              {/* Open Tournament Card */}
              <article 
                className="card group relative rounded-xl p-5 transition-all duration-300 hover:transform hover:translateY-[-2px]"
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
                  <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Globe" role="img">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", color: 'var(--ink)' }}>
                    Open Tournament
                  </h3>
                  <p className="meta text-sm" style={{ color: '#4b5563', opacity: 1 }}>All IPS Players Welcome</p>
                  <p className="fine-print text-xs mt-1" style={{ color: '#4b5563', opacity: 1 }}>International Pride Softball</p>
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
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Trophy" role="img">
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
                
                {/* Premium CTA Button */}
                <button 
                  id="cta"
                  ref={buttonRef}
                  className="relative group px-10 py-4 rounded-full font-bold text-lg text-white overflow-hidden transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-3"
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
                      color: '#4b5563',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    Registration opens in <strong style={{ color: 'var(--cta-start)' }}>{daysUntil}</strong> days
                  </span>
                </div>
              )}
              
              {/* Supporting Text */}
              <p className="fine-print mt-4 text-sm font-medium" style={{ color: '#4b5563', opacity: 1, fontFamily: "'Inter', sans-serif" }}>
                Get ready for three days of competitive softball, community, and celebration!
              </p>
            </div>

            {/* Pride & Aloha Footer */}
            <footer className="mt-8 flex justify-center items-center gap-4" aria-label="Event values">
              <div className="footer-icons flex gap-2 items-center">
                {/* Rainbow Heart SVG */}
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" aria-label="LGBTQ+ Pride" role="img">
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
                
                {/* Sparkle SVG */}
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-label="Sparkle" role="img" style={{ color: '#FFC168' }}>
                  <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
                </svg>
                
                {/* Softball SVG */}
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Softball" role="img" style={{ color: 'var(--cta-end)' }}>
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M8 12c0-2.21 1.79-4 4-4M12 8c2.21 0 4 1.79 4 4M16 12c0 2.21-1.79 4-4 4M12 16c-2.21 0-4-1.79-4-4"/>
                </svg>
              </div>
              
              <span className="text-sm font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                All Are Welcome • E Komo Mai
              </span>
              
              <div className="footer-icons flex gap-2 items-center">
                {/* Rainbow Drop SVG */}
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" aria-label="Rainbow drop" role="img">
                  <defs>
                    <linearGradient id="rainbow-drop" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff6ec7"/>
                      <stop offset="33%" stopColor="#ffe66d"/>
                      <stop offset="66%" stopColor="#6ec6ff"/>
                      <stop offset="100%" stopColor="#d09cff"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#rainbow-drop)" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
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
        a:focus, button:focus {
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}