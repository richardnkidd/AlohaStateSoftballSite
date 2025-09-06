import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";
import tropicalBg from "../assets/tropical-palm-bg-2.png";

export default function SponsorBanner() {
  return (
    <div className="w-full mx-auto px-4 py-3">
      <div 
        className="max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${tropicalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "420px"
        }}
      >
        
        {/* Main Content Container */}
        <div className="relative z-10 px-6 py-6 md:px-8 md:py-8">
          
          {/* Logo and Title Section */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <img 
                src={anuenueClassicLogo}
                alt="Ānuenue Classic 2026 Logo" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-white object-cover"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
              <span style={{
                background: "linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                ĀNUENUE CLASSIC 2026
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Hawai'i's Premier LGBTQ+ Softball Tournament
            </p>
          </div>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-5">
            
            {/* Date Card */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">March 27-29, 2026</h3>
              <p className="text-sm text-gray-600">Friday - Sunday</p>
              <div className="flex justify-center gap-1 mt-2">
                <span className="text-xs">🎊</span>
                <span className="text-xs text-gray-500">3 Days of Competition</span>
                <span className="text-xs">🎊</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">🌴</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">Patsy T. Mink Park</h3>
              <p className="text-sm text-gray-600">O'ahu, Hawai'i</p>
              <p className="text-xs text-gray-500 mt-2">Beautiful Island Setting</p>
            </div>

            {/* Open Tournament Card */}
            <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold text-gray-800 text-base mb-1">Open Tournament</h3>
              <p className="text-sm text-gray-600">All IPS Players Welcome</p>
              <p className="text-xs text-gray-500 mt-2">International Pride Softball</p>
            </div>
          </div>

          {/* Official Tournament Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 text-purple-700">
              <span className="text-lg">🏆</span>
              <span className="text-sm md:text-base font-semibold">
                Official Aloha State Softball League Tournament
              </span>
              <span className="text-lg">🏆</span>
            </div>
          </div>

          {/* Registration Button */}
          <div className="flex justify-center mb-4">
            <button className="inline-flex items-center gap-2 text-white font-bold text-base md:text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{
              background: "linear-gradient(90deg, #ec4899 0%, #f97316 50%, #eab308 100%)"
            }}>
              <span>✨</span>
              <span>Registration Opening Soon!</span>
              <span>✨</span>
            </button>
          </div>

          {/* Bottom Text */}
          <div className="text-center mb-3">
            <p className="text-gray-700 text-sm md:text-base">
              Get ready for three days of competitive softball, community, and celebration!
            </p>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-center items-center gap-3 text-sm">
            <span className="text-lg">🏳️‍🌈</span>
            <span className="text-lg">📧</span>
            <span className="text-gray-600">•</span>
            <span className="font-semibold text-gray-700">All Are Welcome</span>
            <span className="text-gray-600">•</span>
            <span className="text-lg">❤️</span>
            <span className="text-lg">🥎</span>
          </div>
        </div>
      </div>
    </div>
  );
}