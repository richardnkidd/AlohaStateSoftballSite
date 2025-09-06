import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";

export default function SponsorBanner() {
  return (
    <div className="w-full mx-auto px-4 py-3">
      <div 
        className="max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fbbf24 75%, #60a5fa 100%)"
        }}
      >
        {/* Main Banner Container with Glass Effect */}
        <div className="bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl">
          
          {/* Top Section with Logo and Title */}
          <div className="px-6 pt-6 pb-4 md:px-8 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              
              {/* Tournament Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={anuenueClassicLogo}
                  alt="Ānuenue Classic 2026 Logo" 
                  className="w-36 h-36 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-white object-cover"
                />
              </div>
              
              {/* Title Section */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  ĀNUENUE CLASSIC 2026
                </h2>
                <p className="text-lg md:text-xl font-semibold text-gray-700 mt-1">
                  Hawai'i's Premier LGBTQ+ Softball Tournament
                </p>
              </div>
            </div>
          </div>

          {/* Information Cards Section */}
          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              
              {/* Date Card */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">March 27-29, 2026</h3>
                  <p className="text-sm text-gray-600">Friday - Sunday</p>
                  <p className="text-xs text-gray-500 mt-1">3 Days of Competition</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-pink-500 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏝️</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Patsy T. Mink Park</h3>
                  <p className="text-sm text-gray-600">O'ahu, Hawai'i</p>
                  <p className="text-xs text-gray-500 mt-1">Beautiful Island Setting</p>
                </div>
              </div>

              {/* Open To Card */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌍</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Open Tournament</h3>
                  <p className="text-sm text-gray-600">All IPS Players Welcome</p>
                  <p className="text-xs text-gray-500 mt-1">International Pride Softball</p>
                </div>
              </div>
            </div>

            {/* Official Tournament Badge */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-6 py-2 border border-purple-200">
                <span className="text-2xl">🏆</span>
                <span className="text-sm md:text-base font-semibold text-gray-700">
                  Official Aloha State Softball League Tournament
                </span>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-6 text-center">
              <div className="relative inline-block">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                
                {/* Button */}
                <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <span>🎊</span>
                    <span>Registration Opening Soon!</span>
                    <span>🎊</span>
                  </span>
                </button>
              </div>
              
              {/* Supporting Text */}
              <p className="mt-4 text-sm text-gray-600 font-medium">
                Get ready for three days of competitive softball, community, and celebration!
              </p>
            </div>

            {/* Pride Flags Footer */}
            <div className="mt-6 flex justify-center items-center gap-3">
              <div className="flex gap-1 text-xl">
                <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="LGBTQ+ Pride">🏳️‍🌈</span>
                <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Transgender Pride">🏳️‍⚧️</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                All Are Welcome
              </span>
              <span className="text-gray-400">•</span>
              <div className="flex gap-1 text-xl">
                <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Love">❤️</span>
                <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer" title="Softball">🥎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}