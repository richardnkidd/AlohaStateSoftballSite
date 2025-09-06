import { createRoot } from "react-dom/client";
import confetti from "canvas-confetti";
import App from "./App";
import "./index.css";

// Track celebration state and player animation
let celebrationFired = false;
let ticking = false;
let playerAnimationFired = false;

// Scroll progress functionality
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollSoftball = document.getElementById('scrollSoftball');
  const softballPlayer = document.getElementById('softballPlayer');
  const hitSound = document.getElementById('hitSound') as HTMLAudioElement;
  const cheerSound = document.getElementById('cheerSound') as HTMLAudioElement;
  
  if (scrollProgress && scrollSoftball) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Show softball player when scrolling starts
    if (scrollTop > 5 && !playerAnimationFired && softballPlayer) {
      playerAnimationFired = true;
      
      // Show the player
      softballPlayer.style.display = 'block';
      setTimeout(() => {
        softballPlayer.style.opacity = '1';
        softballPlayer.style.transform = 'translateX(0)';
      }, 10);
      
      // Animate player swinging
      setTimeout(() => {
        softballPlayer.innerHTML = '<span class="text-3xl animate-pulse">🏏</span>';
        
        // Play hit sound (using a click sound as placeholder)
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          oscillator.frequency.value = 800;
          oscillator.type = 'sine';
          gainNode.gain.value = 0.1;
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.05);
        } catch (e) {
          console.log('Audio not available');
        }
        
        // Animate the softball being hit
        const softball = document.getElementById('scrollSoftball');
        if (softball) {
          softball.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          softball.style.transform = 'translateX(50px) translateY(-20px) rotate(360deg)';
          setTimeout(() => {
            softball.style.transition = 'all 0.2s ease-in';
            softball.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
          }, 300);
        }
      }, 500);
      
      // Play cheer sound
      setTimeout(() => {
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          // Create a simple cheer sound using multiple oscillators
          for (let i = 0; i < 3; i++) {
            setTimeout(() => {
              const oscillator = audioContext.createOscillator();
              const gainNode = audioContext.createGain();
              oscillator.connect(gainNode);
              gainNode.connect(audioContext.destination);
              oscillator.frequency.value = 400 + Math.random() * 400;
              oscillator.type = 'sine';
              gainNode.gain.value = 0.05;
              oscillator.start(audioContext.currentTime);
              oscillator.stop(audioContext.currentTime + 0.2);
            }, i * 100);
          }
        } catch (e) {
          console.log('Audio not available');
        }
      }, 800);
      
      // Hide player after animation
      setTimeout(() => {
        softballPlayer.style.opacity = '0';
        softballPlayer.style.transform = 'translateX(-50px)';
        setTimeout(() => {
          softballPlayer.style.display = 'none';
        }, 500);
      }, 2000);
    } else if (scrollTop < 5) {
      // Reset animation when scrolled back to top
      playerAnimationFired = false;
    }
    
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
