import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/board", label: "Board" },
    { href: "/ratings", label: "Ratings Guide" },
    { href: "/scorekeeping", label: "Scorekeeping" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="main-nav sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="logo-container">
              <img 
                src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" 
                alt="Aloha State Softball League Logo" 
                className="h-10 w-auto rounded-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold font-header text-gray-900">Aloha State Softball</h1>
              <p className="text-xs text-gray-600">🏳️‍🌈 Inclusive Since 2022</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium transition-colors nav-link ${
                  isActive(href)
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {label}
              </Link>
            ))}
            
            {/* Pride Toggle */}
            <div className="pride-toggle-switch-container flex items-center space-x-2">
              <span className="text-sm font-medium">Pride Mode</span>
              <label className="pride-toggle-switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    document.body.classList.toggle('pride-mode');
                  }}
                />
                <div className="pride-switch-track">
                  <div className="pride-switch-thumb"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium nav-link ${
                  isActive(href)
                    ? "text-teal-600 bg-gray-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="pride-toggle-switch-container flex items-center space-x-2">
                <span className="text-sm font-medium">Pride Mode</span>
                <label className="pride-toggle-switch">
                  <input
                    type="checkbox"
                    onChange={() => {
                      document.body.classList.toggle('pride-mode');
                    }}
                  />
                  <div className="pride-switch-track">
                    <div className="pride-switch-thumb"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}