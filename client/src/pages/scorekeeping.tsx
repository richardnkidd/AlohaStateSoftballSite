import { useEffect, useState } from "react";

export default function Scorekeeping() {
  const [selectedPlay, setSelectedPlay] = useState<string>('');
  const [hasRun, setHasRun] = useState(false);
  const [isQuickNavOpen, setIsQuickNavOpen] = useState(false);

  useEffect(() => {
    document.title = "🥎 Aloha State Softball - Beginner's Guide to Scorekeeping";
  }, []);

  const updateScorebox = (play: string) => {
    setSelectedPlay(play);
    
    // Add pulse animation to the diamond
    const diamond = document.getElementById('demoDiamond');
    if (diamond) {
      diamond.classList.add('pulse-animation');
      setTimeout(() => {
        diamond.classList.remove('pulse-animation');
      }, 500);
    }
  };

  const toggleRun = () => {
    setHasRun(!hasRun);
  };

  const resetScorebox = () => {
    setSelectedPlay('');
    setHasRun(false);
  };

  const toggleQuickNav = () => {
    setIsQuickNavOpen(!isQuickNavOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsQuickNavOpen(false);
  };

  return (
    <div className="bg-slate-100 min-h-screen" style={{fontFamily: "'Inter', sans-serif"}}>
      
      {/* Main Container */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">

        {/* Header Section */}
        <header className="text-white rounded-2xl shadow-2xl p-6 sm:p-10 mb-8 text-center overflow-hidden" style={{
          background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)'
        }}>
          <img 
            src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" 
            alt="iPride League Logo" 
            className="mx-auto h-24 sm:h-32 w-auto mb-6 rounded-xl p-2"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/300x120/ffffff/ef4444?text=Logo+Not+Found';
            }}
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            🥎 Aloha State Softball
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold opacity-90">Beginner's Guide to Scorekeeping</h2>
          <p className="mt-4 text-lg font-medium opacity-80">iPride Style - Keep the Game, Keep the Pride! 🏳️‍🌈</p>
        </header>

        {/* Section: What You Need */}
        <section id="section-supplies" className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </svg>
            What Do You Need?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl text-center transition-transform hover:scale-105">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-lg text-slate-700">Scorebook</h3>
              <p className="text-slate-500">Official or any lined notebook.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center transition-transform hover:scale-105">
              <div className="text-4xl mb-3">✏️</div>
              <h3 className="font-bold text-lg text-slate-700">Pencil</h3>
              <p className="text-slate-500">Erasable! Mistakes happen.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center transition-transform hover:scale-105">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-lg text-slate-700">Team Lineups</h3>
              <p className="text-slate-500">Get from the team captains.</p>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg">
            <strong>Pro Tip:</strong> Write down team names, date, and mark <strong>Home</strong> vs <strong>Visitor</strong>. Home team always bats second!
          </div>
        </section>

        {/* Section: Field Numbers */}
        <section id="section-field" className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The Field = Numbers
          </h2>
          <p className="text-slate-600 mb-6">Each position on the field has a number. You'll use these to record plays.</p>
          <div className="rounded-2xl p-6 sm:p-8" style={{background: 'linear-gradient(to bottom, #16a34a, #15803d)'}}>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {/* Outfield */}
              <div className="bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">7</div>
                <div className="text-sm font-semibold text-slate-600">Left Field</div>
              </div>
              <div className="bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">8</div>
                <div className="text-sm font-semibold text-slate-600">Center Field</div>
              </div>
              <div className="bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">9</div>
                <div className="text-sm font-semibold text-slate-600">Right Field</div>
              </div>
              {/* Infield */}
              <div className="bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">5</div>
                <div className="text-sm font-semibold text-slate-600">3rd Base</div>
              </div>
              <div className="bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">6</div>
                <div className="text-sm font-semibold text-slate-600">Shortstop</div>
              </div>
              <div className="bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">4</div>
                <div className="text-sm font-semibold text-slate-600">2nd Base</div>
              </div>
              {/* Battery & 1st */}
              <div className="col-start-2 bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">1</div>
                <div className="text-sm font-semibold text-slate-600">Pitcher</div>
              </div>
              <div className="col-start-3 bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">3</div>
                <div className="text-sm font-semibold text-slate-600">1st Base</div>
              </div>
              <div className="col-start-2 bg-white/90 rounded-full p-4 text-center shadow-md transition-transform hover:scale-110 cursor-pointer">
                <div className="font-black text-2xl text-green-700">2</div>
                <div className="text-sm font-semibold text-slate-600">Catcher</div>
              </div>
            </div>
            <p className="text-center text-white/80 mt-6 italic">(10 = Rover/Short Fielder, if used in your league)</p>
          </div>
        </section>
        
        {/* Section: Scoring Plays (Interactive) */}
        <section id="section-scoring" className="text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8" style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Try It: Interactive Scorebox
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Demo Scorebox */}
            <div id="demoScorebox" className="bg-white border-4 border-slate-800 w-40 h-40 rounded-lg flex flex-col items-center justify-center relative shadow-2xl">
              <div 
                id="demoDiamond" 
                className={`w-20 h-20 bg-slate-200 border-2 border-slate-400 transform rotate-45 transition-all duration-300 ${
                  hasRun ? 'bg-green-300' : ''
                }`}
              ></div>
              <div id="demoNotation" className="absolute bottom-2 text-slate-800 font-bold text-lg">
                {selectedPlay || 'Click a play!'}
              </div>
            </div>
            {/* Controls */}
            <div className="w-full lg:w-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-center">Hits</h4>
                  <button onClick={() => updateScorebox('1B')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">1B</button>
                  <button onClick={() => updateScorebox('2B')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">2B</button>
                  <button onClick={() => updateScorebox('3B')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">3B</button>
                  <button onClick={() => updateScorebox('HR')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">HR</button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-center">Outs</h4>
                  <button onClick={() => updateScorebox('K')} className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">K</button>
                  <button onClick={() => updateScorebox('F8')} className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">F8</button>
                  <button onClick={() => updateScorebox('6-3')} className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">6-3</button>
                  <button onClick={() => updateScorebox('E5')} className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-lg transition">E5</button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-center">Other</h4>
                  <button onClick={() => updateScorebox('BB')} className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition">BB</button>
                  <button onClick={() => updateScorebox('FC')} className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition">FC</button>
                  <button onClick={toggleRun} className="w-full bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-lg transition">
                    {hasRun ? 'Remove Run' : 'Score Run'}
                  </button>
                  <button onClick={resetScorebox} className="w-full bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-lg transition">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Outs & Innings */}
        <section id="section-outs" className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
            </svg>
            Outs & Innings
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg space-y-2">
            <p>⚾ Every team gets <strong>3 outs per inning</strong>.</p>
            <p>🔢 After each out, write a small <strong>1</strong>, <strong>2</strong>, or <strong>3</strong> in the corner of the batter's scorebox.</p>
            <p>📏 Once you hit 3 outs, draw a heavy line under the last batter to end the inning.</p>
          </div>
        </section>

        {/* Section: Special Rules */}
        <section id="section-rules" className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Slow-Pitch Special Rules
          </h2>
          <div className="bg-orange-50 border-l-4 border-orange-400 text-orange-800 p-4 rounded-r-lg space-y-2">
            <p><strong>🎯 1-and-1 Count to Start:</strong> Batters begin with one ball and one strike.</p>
            <p><strong>⚠️ One Foul After 2 Strikes:</strong> The second foul ball with two strikes is a strikeout!</p>
            <p><strong>🚫 No Stealing or Leading Off:</strong> Runners must stay on base until the ball is hit.</p>
          </div>
        </section>

        {/* Section: iPride Notes */}
        <section id="section-ipride" className="text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8" style={{
          background: 'linear-gradient(45deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6)'
        }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            🏳️‍🌈 iPride League Special Notes
          </h2>
          <p className="opacity-90">If you're playing in an iPride-affiliated league like <strong>Aloha State Softball</strong>, details matter for stats!</p>
          <div className="my-4 bg-white/20 p-4 rounded-lg">
            <p><strong>📝 Be detailed with errors.</strong> Note how the error happened:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><code className="bg-slate-800 px-2 py-1 rounded">E6 (T)</code> = Error on shortstop (Throwing)</li>
              <li><code className="bg-slate-800 px-2 py-1 rounded">E4 (F)</code> = Error on 2nd baseman (Fielding)</li>
            </ul>
          </div>
          <div className="mt-6 bg-white/20 border-l-4 border-white text-white p-4 rounded-r-lg">
            <strong>Extra Credit:</strong> Learn to mark <strong>RBIs</strong> (Run Batted In) and <strong>DPs</strong> (Double Plays). But don't stress — getting the basics right is a huge help!
          </div>
        </section>
        
        {/* Section: Cheat Sheet */}
        <section id="section-cheat" className="text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8" style={{
          background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
        }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">✅ TL;DR Cheat Sheet</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>1B/2B/3B/HR</strong><br/>Hit (Single, etc.)</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>BB</strong><br/>Walk</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>K / ꓘ</strong><br/>Strikeout</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>F7</strong><br/>Fly Out to Left</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>6-3</strong><br/>Groundout (SS to 1B)</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>E5</strong><br/>Error by 3rd Base</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>FC</strong><br/>Fielder's Choice</div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"><strong>DP</strong><br/>Double Play</div>
          </div>
        </section>

        {/* Final Motivation */}
        <section className="text-center">
           <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">🏆 You Got This!</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                If you keep the book for your team just once, you'll learn fast. Try it during a friendly game — and don't stress about perfection.
                <strong className="block mt-2 text-indigo-600 text-lg">You're already the MVP for volunteering! 💪</strong>
              </p>
          </div>
        </section>
      </div>

      {/* Quick Nav Floating Action Button */}
      <button 
        onClick={toggleQuickNav}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Quick Nav Full-Screen Menu */}
      {isQuickNavOpen && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 flex items-center justify-center">
          <button 
            onClick={toggleQuickNav}
            className="absolute top-6 right-6 text-white/70 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="text-center space-y-6">
            <button onClick={() => scrollToSection('section-supplies')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">📝 What You Need</button>
            <button onClick={() => scrollToSection('section-field')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">🏟️ Field Numbers</button>
            <button onClick={() => scrollToSection('section-scoring')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">📊 Scoring Plays</button>
            <button onClick={() => scrollToSection('section-outs')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">🔢 Outs & Innings</button>
            <button onClick={() => scrollToSection('section-rules')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">🥎 Special Rules</button>
            <button onClick={() => scrollToSection('section-ipride')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">🏳️‍🌈 iPride Notes</button>
            <button onClick={() => scrollToSection('section-cheat')} className="block text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-transform">✅ Cheat Sheet</button>
          </nav>
        </div>
      )}

      {/* Pulse animation for interactive demo */}
      <style jsx>{`
        .pulse-animation {
          animation: pulse 0.5s ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% { transform: rotate(45deg) scale(1); }
          50% { transform: rotate(45deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
}