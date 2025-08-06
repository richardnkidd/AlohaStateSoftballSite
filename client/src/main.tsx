import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Softball progress bar functionality with smooth scrolling
let isUpdating = false;

function updateSoftballProgress() {
  if (isUpdating) return;
  
  isUpdating = true;
  requestAnimationFrame(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.max(0, Math.min(100, (scrollTop / scrollHeight) * 100));
    
    const rainbowTrail = document.querySelector('.rainbow-trail') as HTMLElement;
    const softballProgress = document.querySelector('.softball-progress') as HTMLElement;
    
    if (rainbowTrail && softballProgress) {
      rainbowTrail.style.width = `${scrollPercent}%`;
      softballProgress.style.width = `${scrollPercent}%`;
    }
    
    isUpdating = false;
  });
}

// Use passive listeners for better performance
window.addEventListener('scroll', updateSoftballProgress, { passive: true });
window.addEventListener('resize', updateSoftballProgress, { passive: true });

createRoot(document.getElementById("root")!).render(<App />);
