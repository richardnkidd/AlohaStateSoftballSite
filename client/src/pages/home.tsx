import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Aloha State Softball League - Inclusive Community Since 2022";
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <img 
              src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Tropical Hawaiian beach perfect for outdoor softball" 
              className="mx-auto mb-8 rounded-2xl shadow-2xl max-w-4xl w-full h-auto object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-header text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            🌺 Aloha State Softball League
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Hawaii's premier LGBTQ+ inclusive softball community. Where every player is celebrated, every game is fun, and aloha spirit lives in every swing! 🏳️‍🌈
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://teamsideline.com/sites/oahu/Aloha-State-Softball" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🥎 Team Sideline Portal
            </a>
            <a 
              href="https://linktr.ee/alohastatesoftball" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🔗 All Our Links
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-header text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three core values that define our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold font-header text-gray-900 mb-4">Fairness</h3>
              <p className="text-gray-600">Every player gets equal opportunity to play, improve, and contribute to their team's success.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold font-header text-gray-900 mb-4">Safety</h3>
              <p className="text-gray-600">Physical and emotional safety for all players, creating a supportive environment where everyone can thrive.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold font-header text-gray-900 mb-4">Fun</h3>
              <p className="text-gray-600">At the end of the day, we're here to have a blast playing the sport we love with amazing people.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-header text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600">Jump to what you need most</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/board" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3 text-center">👥</div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Board Members</h3>
              <p className="text-gray-600 text-center text-sm">Meet our 2025 leadership team</p>
            </a>
            
            <a href="/ratings" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3 text-center">📊</div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Player Ratings</h3>
              <p className="text-gray-600 text-center text-sm">Understand our rating system</p>
            </a>
            
            <a href="/scorekeeping" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3 text-center">📝</div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Scorekeeping</h3>
              <p className="text-gray-600 text-center text-sm">Learn to keep score like a pro</p>
            </a>
            
            <a href="https://www.ericzmartinphotography.com/Aloha-State-Softball-League" target="_blank" rel="noopener noreferrer" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3 text-center">📸</div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Game Photos</h3>
              <p className="text-gray-600 text-center text-sm">View Eric Z Martin's amazing shots</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
