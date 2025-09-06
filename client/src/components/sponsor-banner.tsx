import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";
import tropicalBg from "../assets/tropical-palm-bg-2.png";
import { useState } from "react";

export default function SponsorBanner() {
  const [showReminder, setShowReminder] = useState(false);

  const handleReminderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would open a modal with email signup
    alert("Email reminder signup coming soon! Follow us on social media for updates.");
  };

  return (
    <div className="w-full mx-auto px-4 py-3">
      <div 
        className="hero max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${tropicalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "480px"
        }}
      >
        {/* Radial scrim for better text contrast */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 50% at 50% 45%, rgba(255,255,255,.65) 0%, rgba(255,255,255,.0) 60%),
                        linear-gradient(to bottom, rgba(255,255,255,.15), rgba(255,255,255,0))`,
            pointerEvents: "none"
          }}
        />
        
        {/* Main Content Container */}
        <div className="relative z-10 px-6 py-8 md:px-8 md:py-10">
          
          {/* Compact Header with Badge and Title */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 mb-3">
              {/* Smaller badge as seal */}
              <img 
                src={anuenueClassicLogo}
                alt="Ānuenue Classic 2026 Logo" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg border-3 border-white object-cover"
                loading="eager"
              />
              
              {/* Main title with year as subhead */}
              <div>
                <h1 className="font-black leading-none" style={{
                  fontSize: "clamp(42px, 6vw, 88px)",
                  letterSpacing: ".01em",
                  textWrap: "balance" as any
                }}>
                  <span style={{
                    background: "linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #f97316 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    ĀNUENUE CLASSIC
                  </span>
                  <span className="block mt-1" style={{
                    fontSize: "clamp(28px, 4vw, 56px)",
                    fontWeight: 900,
                    background: "linear-gradient(90deg, #f97316 0%, #eab308 50%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    2026
                  </span>
                </h1>
              </div>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Hawai'i's Premier LGBTQ+ Softball Tournament
            </p>
          </div>

          {/* Info Pills Bar */}
          <ul className="info-pills flex flex-wrap justify-center gap-2 mb-5 list-none p-0">
            <li className="bg-white/75 backdrop-blur-md rounded-full px-4 py-2.5 font-semibold shadow-md flex items-center gap-2">
              <span>🗓️</span>
              <span className="text-sm md:text-base">Mar 27–29, 2026</span>
              <a href="#add-to-cal" className="font-bold text-purple-600 underline text-sm" onClick={(e) => {
                e.preventDefault();
                alert("Add to calendar feature coming soon!");
              }}>Add</a>
            </li>
            <li className="bg-white/75 backdrop-blur-md rounded-full px-4 py-2.5 font-semibold shadow-md flex items-center gap-2">
              <span>📍</span>
              <span className="text-sm md:text-base">Patsy T. Mink Park</span>
              <a href="https://maps.google.com/?q=Patsy+T+Mink+Park+Oahu" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 underline text-sm">Map</a>
            </li>
            <li className="bg-white/75 backdrop-blur-md rounded-full px-4 py-2.5 font-semibold shadow-md flex items-center gap-2">
              <span>🌍</span>
              <span className="text-sm md:text-base">Open Tournament</span>
              <a href="http://ipridesoftball.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-600 underline text-sm">IPS Rules</a>
            </li>
          </ul>

          {/* Official Tournament Text */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 text-purple-700">
              <span className="text-lg">🏆</span>
              <span className="text-sm md:text-base font-semibold">
                Official Aloha State Softball League Tournament
              </span>
              <span className="text-lg">🏆</span>
            </div>
          </div>

          {/* Primary CTA with Secondary Link */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <button 
              className="cta inline-flex items-center gap-2 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-purple-500"
              style={{
                background: "linear-gradient(90deg, #ec4899 0%, #f97316 50%, #eab308 100%)",
                willChange: "transform"
              }}
            >
              <span>✨</span>
              <span>Registration Opens Soon</span>
              <span>✨</span>
            </button>
            
            <a 
              href="#remind-me" 
              className="cta-ghost text-purple-700 font-bold underline hover:text-purple-900 transition-colors duration-200"
              onClick={handleReminderClick}
            >
              Get Email Reminder
            </a>
            
            {/* Optional countdown chip (will show when date is set) */}
            <span id="countdown" aria-live="polite" className="text-sm text-gray-600 font-medium"></span>
          </div>

          {/* Bottom Text */}
          <div className="text-center mb-3">
            <p className="text-gray-700 text-sm md:text-base">
              Get ready for three days of competitive softball, community, and celebration!
            </p>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-center items-center gap-3 text-sm">
            <span className="text-lg hover:scale-110 transition-transform cursor-pointer">🏳️‍🌈</span>
            <span className="text-lg hover:scale-110 transition-transform cursor-pointer">📧</span>
            <span className="text-gray-600">•</span>
            <span className="font-semibold text-gray-700">All Are Welcome</span>
            <span className="text-gray-600">•</span>
            <span className="text-lg hover:scale-110 transition-transform cursor-pointer">❤️</span>
            <span className="text-lg hover:scale-110 transition-transform cursor-pointer">🥎</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          position: relative;
          transition: transform 0.6s ease;
        }
        
        .hero:hover {
          transform: translate3d(0, -2px, 0) scale(1.005);
        }
        
        .info-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .info-pills li {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }
        
        .info-pills li:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
        }
        
        .cta {
          position: relative;
          overflow: hidden;
        }
        
        .cta::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          transition: transform 0.4s ease;
        }
        
        .cta:hover::before {
          transform: translate(-50%, -50%) scale(2);
        }
        
        .cta:focus-visible {
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.9), 0 0 0 12px currentColor;
          transition: box-shadow 0.2s;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero,
          .info-pills li,
          .cta {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}