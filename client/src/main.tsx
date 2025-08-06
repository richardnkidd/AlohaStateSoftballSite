import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Scroll progress functionality
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollSoftball = document.getElementById('scrollSoftball');
  
  if (scrollProgress && scrollSoftball) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Update progress bar width
    scrollProgress.style.width = scrollPercent + '%';
    
    // Position softball at the front of the progress bar
    const progressWidth = (scrollPercent / 100) * window.innerWidth;
    const maxPosition = window.innerWidth - 24; // Account for softball width
    const softballPosition = Math.min(Math.max(progressWidth - 12, 0), maxPosition);
    scrollSoftball.style.left = softballPosition + 'px';
  }
}

// Add scroll listener
window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);

// Initialize on load
window.addEventListener('load', updateScrollProgress);

createRoot(document.getElementById("root")!).render(<App />);
