import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Softball progress bar functionality
function updateSoftballProgress() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  
  const rainbowTrail = document.querySelector('.rainbow-trail') as HTMLElement;
  const softballProgress = document.querySelector('.softball-progress') as HTMLElement;
  
  if (rainbowTrail && softballProgress) {
    rainbowTrail.style.width = `${scrollPercent}%`;
    softballProgress.style.width = `${scrollPercent}%`;
  }
}

window.addEventListener('scroll', updateSoftballProgress);
window.addEventListener('resize', updateSoftballProgress);

createRoot(document.getElementById("root")!).render(<App />);
