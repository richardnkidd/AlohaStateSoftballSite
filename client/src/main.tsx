import { createRoot } from "react-dom/client";
import confetti from "canvas-confetti";
import App from "./App";
import "./index.css";

// Track celebration state
let celebrationFired = false;
let ticking = false;

// Scroll progress functionality
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollSoftball = document.getElementById('scrollSoftball');
  
  if (scrollProgress && scrollSoftball) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Update progress bar width with smooth transition
    scrollProgress.style.transition = 'width 0.1s ease-out';
    scrollProgress.style.width = scrollPercent + '%';
    
    // Position softball at the front of the progress bar with smooth transition
    const progressWidth = (scrollPercent / 100) * window.innerWidth;
    const maxPosition = window.innerWidth - 24; // Account for softball width
    const softballPosition = Math.min(Math.max(progressWidth - 12, 0), maxPosition);
    scrollSoftball.style.transition = 'left 0.1s ease-out, transform 0.1s ease-out';
    scrollSoftball.style.left = softballPosition + 'px';
    
    // Make the softball spin based on scroll progress
    const rotationDegrees = (scrollPercent / 100) * 720; // 2 full rotations during scroll
    scrollSoftball.style.transform = `rotate(${rotationDegrees}deg)`;
    scrollSoftball.style.display = 'inline-block'; // Needed for transform to work
    
    // Trigger celebration when reaching the bottom
    if (scrollPercent >= 99.5 && !celebrationFired) {
      celebrationFired = true;
      
      // Fire multiple confetti bursts for an epic celebration
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        disableForReducedMotion: true
      };

      const fire = (particleRatio: number, opts: any) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          scalar: 1.2,
          spread: 100,
          startVelocity: 55,
        });
      };

      // Pride-themed colors for the Aloha State Softball League
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0000ff', '#8800ff']
      });
      
      fire(0.2, {
        spread: 60,
        colors: ['#ff69b4', '#ffd700', '#87ceeb', '#98fb98', '#dda0dd']
      });
      
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        colors: ['#ff1493', '#00bfff', '#ffa500', '#98fb98', '#ff69b4']
      });
      
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        colors: ['#ff0080', '#ffff00', '#00ffff', '#ff00ff', '#00ff00']
      });
      
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        colors: ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0000ff', '#8800ff']
      });

      // Add some softball emojis in the confetti
      setTimeout(() => {
        confetti({
          ...defaults,
          particleCount: 15,
          scalar: 2,
          shapes: ['circle'],
          colors: ['#f4e4c1', '#ffee99'],
          spread: 180,
          startVelocity: 30,
        });
      }, 250);
    } else if (scrollPercent < 95) {
      // Reset celebration flag when scrolling back up
      celebrationFired = false;
    }
  }
}

// Throttled scroll handler using requestAnimationFrame
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollProgress);
    ticking = true;
  }
}

function scrollHandler() {
  requestTick();
  // Reset ticking after the animation frame
  setTimeout(() => { ticking = false; }, 0);
}

// Add scroll listener
window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', scrollHandler);

// Initialize on load
window.addEventListener('load', updateScrollProgress);

createRoot(document.getElementById("root")!).render(<App />);
