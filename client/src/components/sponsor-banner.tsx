export default function SponsorBanner() {
  return (
    <div className="w-full mx-auto px-4 py-2">
      <div 
        className="max-w-screen-xl mx-auto rounded-xl shadow-lg overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ff0080 0%, #ff8000 20%, #ffff00 40%, #00ff00 60%, #0080ff 80%, #8000ff 100%)"
        }}
      >
        <div className="backdrop-blur-sm bg-white/10 px-6 py-6 md:py-8">
          
          {/* Tournament Header */}
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
              🌈 Ānuenue Classic 2025 🥎
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-4 drop-shadow">
              Hawai'i's Premier LGBTQ+ Softball Tournament
            </p>
          </div>

          {/* Tournament Details */}
          <div className="bg-white/20 backdrop-blur rounded-lg p-4 md:p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              
              {/* Dates */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">📅</span>
                  <h3 className="text-xl font-bold">Tournament Dates</h3>
                </div>
                <p className="text-lg font-medium">March 27-29, 2025</p>
                <p className="text-sm opacity-90">Thursday - Saturday</p>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">📍</span>
                  <h3 className="text-xl font-bold">Location</h3>
                </div>
                <p className="text-lg font-medium">Patsy T. Mink Park</p>
                <p className="text-sm opacity-90">O'ahu, Hawai'i</p>
              </div>
            </div>

            {/* Tournament Info */}
            <div className="mt-6 text-center text-white">
              <p className="text-base md:text-lg mb-3">
                An official <strong>Aloha State Softball League</strong> tournament
              </p>
              <p className="text-base md:text-lg mb-4">
                Open to all <strong>International Pride Softball</strong> players worldwide!
              </p>
              
              {/* Pride Icons */}
              <div className="flex justify-center gap-2 text-2xl mb-4">
                <span className="animate-pulse" style={{animationDelay: "0s"}}>🏳️‍🌈</span>
                <span className="animate-pulse" style={{animationDelay: "0.2s"}}>🏳️‍⚧️</span>
                <span className="animate-pulse" style={{animationDelay: "0.4s"}}>💖</span>
                <span className="animate-pulse" style={{animationDelay: "0.6s"}}>🧡</span>
                <span className="animate-pulse" style={{animationDelay: "0.8s"}}>💛</span>
                <span className="animate-pulse" style={{animationDelay: "1s"}}>💚</span>
                <span className="animate-pulse" style={{animationDelay: "1.2s"}}>💙</span>
                <span className="animate-pulse" style={{animationDelay: "1.4s"}}>💜</span>
              </div>

              {/* Registration Button */}
              <div className="inline-block bg-white/30 backdrop-blur rounded-full px-6 py-3 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <span className="text-lg md:text-xl font-bold drop-shadow">
                  🎉 Registration Info Coming Soon! 🎉
                </span>
              </div>
            </div>
          </div>

          {/* Fun Tagline */}
          <div className="text-center mt-4 text-white">
            <p className="text-base md:text-lg font-medium italic drop-shadow">
              "Where softball meets aloha spirit and pride!" 
            </p>
            <p className="text-sm opacity-90 mt-1">
              Join us for three days of competition, community, and celebration
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}