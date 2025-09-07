import { Link, useLocation } from "wouter";
import { usePrideMode } from "../hooks/use-pride-mode";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const { isPrideMode, togglePrideMode } = usePrideMode();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileHamburger, setShowMobileHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Show hamburger menu as soon as user starts scrolling on mobile
      const hasScrolled = window.scrollY > 0;
      setShowMobileHamburger(hasScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (menu === 'resources-menu') {
      setIsResourcesOpen(!isResourcesOpen);
    } else if (menu === 'mobile-more-menu') {
      setIsMobileMoreOpen(!isMobileMoreOpen);
    }
  };

  return (
    <nav id="main-nav" className="bg-[#fef9ed] shadow-sm sticky top-0 z-40 transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0 py-4">
          
          {/* Left Side: Logo & Mobile Quick Links */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-between items-center">
            <Link href="/" aria-label="Homepage" className="logo-container block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 focus-visible:ring-offset-white hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 hover:ring-offset-white transition duration-150 ease-in-out">
              <img 
                className="h-16 md:h-20 w-auto rounded-md shadow-sm" 
                src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" 
                alt="Aloha State Softball League Logo" 
                loading="lazy"
              />
              <span className="logo-landed-effect dust-1">✨</span>
              <span className="logo-landed-effect dust-2">💫</span>
              <span className="logo-landed-effect dust-3">⭐</span>
            </Link>
            
            {/* Mobile Quick Links / Hamburger Menu */}
            <div className="flex items-center lg:hidden">
              {showMobileHamburger ? (
                <div className="relative">
                  <button 
                    type="button" 
                    onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                    className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMoreOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>
                  
                  {/* Mobile Menu Backdrop */}
                  <div 
                    className={`fixed inset-0 transition-all ${isMobileMoreOpen ? 'opacity-100 duration-700' : 'opacity-0 pointer-events-none duration-500'}`}
                    onClick={() => setIsMobileMoreOpen(false)}
                    style={{
                      backgroundColor: isPrideMode ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
                      zIndex: 9998,
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  
                  {/* Full-Screen Mobile Menu */}
                  <div 
                    className={`fixed inset-y-0 right-0 w-full max-w-sm shadow-2xl transform ${isMobileMoreOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{
                      backgroundColor: '#ffffff',
                      zIndex: 9999,
                      transition: 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <div className="flex flex-col h-full pt-16 px-6">
                      {/* Close Button */}
                      <button 
                        onClick={() => setIsMobileMoreOpen(false)}
                        className="absolute top-4 right-4 p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      {/* Navigation Links */}
                      <div className="space-y-4 mb-8">
                        <Link href="/" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2" onClick={() => setIsMobileMoreOpen(false)}>
                          Home
                        </Link>
                        <a href="https://teamsideline.com/sites/aikaneohana/schedules" target="_blank" rel="noopener noreferrer" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2 animated-nav-link" onClick={() => setIsMobileMoreOpen(false)}>
                          Scores & Standings
                        </a>
                        <Link href="/board" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2" onClick={() => setIsMobileMoreOpen(false)}>
                          Board of Directors
                        </Link>
                        <Link href="/ratings" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2" onClick={() => setIsMobileMoreOpen(false)}>
                          Player Ratings 101
                        </Link>
                        <Link href="/scorekeeping" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2" onClick={() => setIsMobileMoreOpen(false)}>
                          Scorekeeping 101
                        </Link>
                        <a href="https://docs.google.com/document/d/1WVXGL7WZdNofOlHXv-ZwTB6xWIgGlyIvQmrkd3qVT44/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2" onClick={() => setIsMobileMoreOpen(false)}>
                          2025 League Bylaws
                        </a>
                        <a href="https://docs.google.com/document/d/1_xuo1yCFGg8UXqA6PR-imTX50Zg0jvBTya6zu_9bNUc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-xl font-medium text-gray-800 hover:text-teal-600 py-2" onClick={() => setIsMobileMoreOpen(false)}>
                          2025 Gameplay Rules
                        </a>
                      </div>
                      
                      {/* Season 4 Photos Button */}
                      <div className="mb-8">
                        <a href="https://ericzmartin.com/" 
                           target="_blank" rel="noopener noreferrer"
                           className="block w-full text-center free-agents-btn px-6 py-3 text-lg font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                           onClick={() => setIsMobileMoreOpen(false)}>
                          📸 Season 4 Photos
                        </a>
                      </div>
                      
                      {/* Social Icons */}
                      <div className="flex justify-center gap-6 mt-auto mb-8">
                        <a href="https://www.instagram.com/alohastatesoftballleague" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="social-icon relative group overflow-hidden block bg-pink-100 p-2 rounded-full hover:opacity-80 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-8 w-8 fill-pink-600" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247-2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163m0-1.625c-3.259 0-3.67.014-4.947.072-1.296.059-2.21.25-3.01.556a6.59 6.59 0 0 0-2.32 1.514 6.59 6.59 0 0 0-1.514 2.32c-.306.8-.497 1.714-.556 3.01C.014 8.33 0 8.741 0 12s.014 3.67.072 4.947c.059 1.296.25 2.21.556 3.01a6.59 6.59 0 0 0 1.514 2.32 6.59 6.59 0 0 0 2.32 1.514c.8.306 1.714.497 3.01.556 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.296-.059 2.21-.25 3.01-.556a6.59 6.59 0 0 0 2.32-1.514 6.59 6.59 0 0 0 1.514-2.32c.306-.8.497-1.714.556-3.01.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.296-.25-2.21-.556-3.01a6.59 6.59 0 0 0-1.514-2.32 6.59 6.59 0 0 0-2.32-1.514c-.8-.306-1.714-.497-3.01-.556C15.67.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.7a4.537 4.537 0 1 1 0-9.075 4.537 4.537 0 0 1 0 9.075zM18.402 6.4a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61562725435340" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="social-icon relative group overflow-hidden block bg-blue-100 p-2 rounded-full hover:opacity-80 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-8 w-8 fill-blue-700" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8v-2.89h2.44V9.41c0-2.42 1.44-3.76 3.64-3.76 1.06 0 2.16.19 2.16.19v2.38h-1.22c-1.2 0-1.57.75-1.57 1.52v1.83h2.67l-.43 2.89h-2.24V21.9C18.34 21.13 22 17 22 12z"/>
                          </svg>
                        </a>
                        <a href="mailto:mikey@alohastatesoftball.com" aria-label="Email Us" className="social-icon relative group overflow-hidden block bg-gray-200 p-2 rounded-full hover:opacity-80 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-8 w-8 fill-gray-800" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99-8 5-8-5V6l8 5 8-5v2.99z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/" className="nav-link text-gray-700 hover:text-teal-800 text-sm font-medium">
                    Home
                  </Link>
                  <span className="text-gray-300">|</span>
                  <a href="https://teamsideline.com/sites/aikaneohana/schedules" target="_blank" rel="noopener noreferrer" className="nav-link text-gray-700 hover:text-teal-800 text-sm font-medium animated-nav-link">Scores</a>
                  <span className="text-gray-300">|</span>
                  <div className="relative inline-block">
                    <button 
                      type="button" 
                      onClick={() => toggleDropdown('mobile-more-menu')} 
                      className="nav-link inline-flex items-center text-gray-700 hover:text-teal-800 text-sm font-medium"
                    >
                      More
                      <svg className="ml-1 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className={`dropdown-menu absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isMobileMoreOpen ? '' : 'hidden'}`} role="menu" aria-orientation="vertical">
                      <div className="py-1" role="none">
                        <a href="https://docs.google.com/document/d/1WVXGL7WZdNofOlHXv-ZwTB6xWIgGlyIvQmrkd3qVT44/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">2025 League Bylaws</a>
                        <a href="https://docs.google.com/document/d/1_xuo1yCFGg8UXqA6PR-imTX50Zg0jvBTya6zu_9bNUc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">2025 Gameplay Rules</a>
                        <Link href="/board" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                          Board of Directors
                        </Link>
                        <Link href="/ratings" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                          Player Ratings 101
                        </Link>
                        <Link href="/scorekeeping" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                          Scorekeeping 101
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Side: Links, Buttons, Social Icons */}
          <div className="w-full lg:w-auto">
            <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-y-4 lg:gap-y-0 w-full">
              <div className="flex items-center ml-10 space-x-4">
                <div className="pride-toggle-switch-container flex items-center gap-x-3">
                  <span className="font-semibold pride-text-animated wave-text">Pride Mode</span>
                  <label className="pride-toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={isPrideMode}
                      onChange={togglePrideMode}
                    />
                    <span className="pride-switch-track">
                      <span className="pride-switch-thumb"></span>
                    </span>
                  </label>
                </div>
                <Link href="/" className="nav-link relative group overflow-hidden text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative z-10">Home</span>
                </Link>
                <a href="https://teamsideline.com/sites/aikaneohana/schedules" target="_blank" rel="noopener noreferrer" className="nav-link relative group overflow-hidden text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium animated-nav-link">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative z-10">Scores & Standings</span>
                </a>
                <Link href="/board" className="nav-link relative group overflow-hidden text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hidden xl:block">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative z-10">Board of Directors</span>
                </Link>
                <div className="relative">
                  <button 
                    type="button" 
                    onClick={() => toggleDropdown('resources-menu')} 
                    className="nav-link relative group overflow-hidden inline-flex items-center justify-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" 
                    aria-expanded="false" 
                    aria-haspopup="true"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center">
                      More
                      <svg className="ml-1 -mr-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                  <div className={`dropdown-menu absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isResourcesOpen ? '' : 'hidden'}`} role="menu" aria-orientation="vertical">
                    <div className="py-1" role="none">
                      <a href="https://docs.google.com/document/d/1WVXGL7WZdNofOlHXv-ZwTB6xWIgGlyIvQmrkd3qVT44/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">2025 League Bylaws</a>
                      <a href="https://docs.google.com/document/d/1_xuo1yCFGg8UXqA6PR-imTX50Zg0jvBTya6zu_9bNUc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">2025 Gameplay Rules</a>
                      <Link href="/ratings" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                        Player Ratings 101
                      </Link>
                      <Link href="/scorekeeping" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                        Scorekeeping 101
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop Season 4 Photos Button */}
              <a href="https://ericzmartin.com/" 
                 target="_blank" rel="noopener noreferrer"
                 className="free-agents-btn relative inline-flex items-center px-4 py-2 ml-4 text-sm font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                <span className="relative z-10">📸 Season 4 Photos</span>
              </a>
              
              <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
                <div className="flex items-center gap-4 ml-4">
                  <a href="https://www.instagram.com/alohastatesoftballleague" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="social-icon relative group overflow-hidden block bg-pink-100 p-1.5 rounded-full hover:opacity-80 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-6 w-6 fill-pink-600 group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247 2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163m0-1.625c-3.259 0-3.67.014-4.947.072-1.296.059-2.21.25-3.01.556a6.59 6.59 0 0 0-2.32 1.514 6.59 6.59 0 0 0-1.514 2.32c-.306.8-.497 1.714-.556 3.01C.014 8.33 0 8.741 0 12s.014 3.67.072 4.947c.059 1.296.25 2.21.556 3.01a6.59 6.59 0 0 0 1.514 2.32 6.59 6.59 0 0 0 2.32 1.514c.8.306 1.714.497 3.01.556 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.296-.059 2.21-.25 3.01-.556a6.59 6.59 0 0 0 2.32-1.514 6.59 6.59 0 0 0 1.514-2.32c.306-.8.497-1.714-.556-3.01.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.296-.25-2.21-.556-3.01a6.59 6.59 0 0 0-1.514-2.32 6.59 6.59 0 0 0-2.32-1.514c-.8-.306-1.714-.497-3.01-.556C15.67.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.7a4.537 4.537 0 1 1 0-9.075 4.537 4.537 0 0 1 0 9.075zM18.402 6.4a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61562725435340" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="social-icon relative group overflow-hidden block bg-blue-100 p-1.5 rounded-full hover:opacity-80 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-6 w-6 fill-blue-700 group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8v-2.89h2.44V9.41c0-2.42 1.44-3.76 3.64-3.76 1.06 0 2.16.19 2.16.19v2.38h-1.22c-1.2 0-1.57.75-1.57 1.52v1.83h2.67l-.43 2.89h-2.24V21.9C18.34 21.13 22 17 22 12z"/>
                    </svg>
                  </a>
                  <a href="mailto:mikey@alohastatesoftball.com" aria-label="Email Us" className="social-icon relative group overflow-hidden block bg-gray-200 p-1.5 rounded-full hover:opacity-80 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-6 w-6 fill-gray-800 group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99-8 5-8-5V6l8 5 8-5v2.99z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mobile Action Buttons - Hidden when hamburger is shown */}
            <div className={`lg:hidden flex-col w-full gap-y-3 mt-2 ${showMobileHamburger ? 'hidden' : 'flex'}`}>
              {/* Mobile Pride Toggle */}
              <div className="flex items-center justify-center gap-x-3">
                <span className="font-semibold pride-text-animated wave-text">Pride Mode</span>
                <label className="pride-toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={isPrideMode}
                    onChange={togglePrideMode}
                  />
                  <span className="pride-switch-track">
                    <span className="pride-switch-thumb"></span>
                  </span>
                </label>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.instagram.com/alohastatesoftballleague" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="social-icon relative group overflow-hidden block bg-pink-100 p-1.5 rounded-full hover:opacity-80 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-6 w-6 fill-pink-600" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247 2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163m0-1.625c-3.259 0-3.67.014-4.947.072-1.296.059-2.21.25-3.01.556a6.59 6.59 0 0 0-2.32 1.514 6.59 6.59 0 0 0-1.514 2.32c-.306.8-.497 1.714-.556 3.01C.014 8.33 0 8.741 0 12s.014 3.67.072 4.947c.059 1.296.25 2.21.556 3.01a6.59 6.59 0 0 0 1.514 2.32 6.59 6.59 0 0 0 2.32 1.514c.8.306 1.714.497 3.01.556 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.296-.059 2.21-.25 3.01-.556a6.59 6.59 0 0 0 2.32-1.514 6.59 6.59 0 0 0 1.514-2.32c.306-.8.497-1.714-.556-3.01.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.296-.25-2.21-.556-3.01a6.59 6.59 0 0 0-1.514-2.32 6.59 6.59 0 0 0-2.32-1.514c-.8-.306-1.714-.497-3.01-.556C15.67.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.7a4.537 4.537 0 1 1 0-9.075 4.537 4.537 0 0 1 0 9.075zM18.402 6.4a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562725435340" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="social-icon relative group overflow-hidden block bg-blue-100 p-1.5 rounded-full hover:opacity-80 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-6 w-6 fill-blue-700" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8v-2.89h2.44V9.41c0-2.42 1.44-3.76 3.64-3.76 1.06 0 2.16.19 2.16.19v2.38h-1.22c-1.2 0-1.57.75-1.57 1.52v1.83h2.67l-.43 2.89h-2.24V21.9C18.34 21.13 22 17 22 12z"/>
                  </svg>
                </a>
                <a href="mailto:mikey@alohastatesoftball.com" aria-label="Email Us" className="social-icon relative group overflow-hidden block bg-gray-200 p-1.5 rounded-full hover:opacity-80 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-6 w-6 fill-gray-800" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99-8 5-8-5V6l8 5 8-5v2.99z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}