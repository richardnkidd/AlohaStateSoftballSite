import anuenueClassicLogo from "../assets/anuenue-classic-logo.jpeg";

export default function SponsorBanner() {
  return (
    <div className="w-full mx-auto px-4 py-3">
      <div 
        className="max-w-screen-xl mx-auto rounded-2xl shadow-xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ff0080 0%, #ff8000 20%, #ffff00 40%, #00ff00 60%, #0080ff 80%, #8000ff 100%)"
        }}
      >
        {/* Main Container with White Background */}
        <div className="bg-white/95 backdrop-blur-sm m-1">
          <div className="px-6 py-8 md:px-8 md:py-10">
            
            {/* Header Section with Logo and Title */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              {/* Logo */}
              <img 
                src={anuenueClassicLogo}
                alt="Ānuenue Classic 2026 Logo" 
                className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg border-4 border-gray-200 object-cover"
              />
              
              {/* Title and Subtitle */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                  ĀNUENUE CLASSIC 2026
                </h1>
                <p className="text-gray-700 text-lg">
                  Hawai'i's Premier LGBTQ+ Softball Tournament
                </p>
              </div>
            </div>

            {/* Three Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              
              {/* Date Card */}
              <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">March 27-29, 2026</h3>
                <p className="text-gray-600 text-sm">Thursday - Saturday</p>
                <p className="text-gray-500 text-xs mt-2">3 Days of Competition</p>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
                <div className="text-3xl mb-3">🌴</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Patsy T. Mink Park</h3>
                <p className="text-gray-600 text-sm">O'ahu, Hawai'i</p>
                <p className="text-gray-500 text-xs mt-2">Beautiful Island Setting</p>
              </div>

              {/* Open Tournament Card */}
              <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Open Tournament</h3>
                <p className="text-gray-600 text-sm">All IPS Players Welcome</p>
                <p className="text-gray-500 text-xs mt-2">International Pride Softball</p>
              </div>
            </div>

            {/* Official Tournament Badge */}
            <div className="flex justify-center items-center gap-2 mb-8">
              <span className="text-2xl">🏆</span>
              <span className="text-gray-800 font-semibold text-base md:text-lg">
                Official Aloha State Softball League Tournament
              </span>
            </div>

            {/* Registration Button */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <button 
                className="px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #ff6b6b, #ff8e53)"
                }}
              >
                Registration Opening Soon!
              </button>
              <p className="text-gray-600 text-sm">
                Registration opens in <span className="font-semibold text-orange-600">202</span> days
              </p>
            </div>

            {/* Celebration Text */}
            <div className="text-center mb-6">
              <p className="text-gray-700 text-base">
                Get ready for three days of competitive softball, community, and celebration!
              </p>
            </div>

            {/* Bottom Icons and Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <span className="text-lg">🤝</span>
              <span className="text-gray-400">+</span>
              <span className="text-lg">🏳️‍🌈</span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                All Are Welcome
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-700 font-medium">E Komo Mai</span>
              <span className="text-gray-400">•</span>
              <span className="text-lg">🥎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}