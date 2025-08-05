import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Aloha State Softball League - Main Content";
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="https://static.wixstatic.com/media/df1e99_b6ce734df1b94b96829b5aa7db6ae7f5~mv2.png/v1/fill/w_852,h_852,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20Copy%20of%20ASSL%202024%20Template%20(Instagram%20Post)%20(Label%20(Circle))%20(4).png" 
              alt="Aloha State Softball League Logo" 
              className="mx-auto h-64 md:h-96 w-auto mb-6 hover-lift"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-4xl md:text-6xl mr-2">🏳️‍🌈</span> 
              <span className="pride-text">Aloha State Softball League</span> 
              <span className="text-4xl md:text-6xl ml-2">🥎</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Join O'ahu's LGBTQ+ softball league for <strong>Season 4</strong>, Summer 2025! 
              Whether you're picking up a glove for the first time or you're a seasoned pro, our inclusive community is ready to welcome you.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdISkV6h99FBj_FntGRyXtU3jdFYGPLjODAAykLbWLe-8RhvQ/viewform?usp=header" 
               target="_blank" rel="noopener noreferrer"
               className="pride-gradient text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300">
              🏃‍♀️ Join as Free Agent
            </a>
            <a href="https://linktr.ee/alohastatesoftball" 
               target="_blank" rel="noopener noreferrer"
               className="bg-red-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-red-600 transition-all duration-300 hover-lift">
              🌺 Explore Our Links
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="pride-text">Inclusive Since 2022</span> 🌈
            </h2>
            <div className="w-24 h-1 pride-gradient mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <img src="https://static.wixstatic.com/media/df1e99_011ab5c76f8b4953aab67f6137aa9f9c~mv2.png" alt="International Pride Softball Logo" className="h-24 w-auto object-contain flex-shrink-0" />
                <span>As proud members of <a href="http://ipridesoftball.org/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 font-semibold underline">International Pride Softball</a>, we bring together players of all skill levels to enjoy exciting, competitive games in a supportive and fun environment.</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our community celebrates diversity, fosters friendship, and creates lasting memories on and off the field. 
                From beginners to all-stars, everyone has a place in our 'ohana!
              </p>
              <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-start">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">🏳️‍🌈 LGBTQ+ Friendly</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">🌺 All Skill Levels</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🤝 Inclusive Community</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">⚾ Competitive Fun</span>
              </div>
            </div>
            <div className="relative">
              <img src="https://static.wixstatic.com/media/df1e99_eddacc95808f44b78a9575024b4b58ec~mv2.jpg/v1/fill/w_1234,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SOFTBALL072323-KWEP-218.jpg" 
                   alt="ASSL Players in Action" 
                   className="rounded-xl shadow-lg hover-lift fade-in w-full" />
              <div className="absolute top-4 right-4 text-2xl sparkle">✨</div>
              <div className="absolute bottom-4 left-4 text-2xl sparkle" style={{animationDelay: '1s'}}>⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Divider */}
      <div className="w-full py-4">
        <img src="https://static.wixstatic.com/media/df1e99_5197682b37e34d269664ff746162b543~mv2.png" 
             alt="Section Divider" 
             className="w-full h-auto" />
      </div>

      {/* Site Links Section */}
      <section className="w-full py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="pride-text">Stay Connected</span> 🔗
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to follow our league and capture the memories!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Season 4 Standings */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 text-6xl opacity-10">⚾</div>
              <div className="relative z-10">
                <img src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" alt="ASSL Team Sideline Logo" className="h-72 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Season 4 Standings, Scores, and Schedule!</h3>
                <p className="text-gray-600 mb-6">Follow all the action, check standings, and never miss a game!</p>
                <a href="https://teamsideline.com/sites/aikaneohana/schedules" 
                   target="_blank" rel="noopener noreferrer"
                   className="pride-gradient text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300 inline-block">
                  View Standings & Schedule
                </a>
              </div>
            </div>
            
            {/* Eric Z Martin Photos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 text-6xl opacity-10">📸</div>
              <div className="relative z-10">
                <img src="https://static.wixstatic.com/media/df1e99_5890ac34dd0c48e9bf7d1b059fe1d5c9~mv2.png" alt="Eric Z Martin Photography Logo" className="h-72 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Gameday Photos by Eric Z Martin</h3>
                <p className="text-gray-600 mb-6">Professional photography capturing all our best moments on and off the field!</p>
                <a href="https://ericzmartin.com/" 
                   target="_blank" rel="noopener noreferrer"
                   className="bg-indigo-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-indigo-600 hover-lift transition-all duration-300 inline-block">
                  View Photos
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-4 text-3xl mb-4">
              <span className="sparkle">📱</span>
              <span className="sparkle" style={{animationDelay: '0.5s'}}>💻</span>
              <span className="sparkle" style={{animationDelay: '1s'}}>📊</span>
              <span className="sparkle" style={{animationDelay: '1.5s'}}>📸</span>
            </div>
            <p className="text-gray-600">
              Don't forget to check out our 
              <a href="https://linktr.ee/alohastatesoftball" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 font-semibold underline">
                Linktree
              </a> 
              for even more links and resources!
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="pride-text">Our Amazing Community</span> 📸
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at the joy, competition, and camaraderie that defines our league!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="hover-lift">
              <img src="https://static.wixstatic.com/media/df1e99_02b6891c73f241cda2d8848e11427950~mv2.jpg/v1/fill/w_1261,h_985,fp_0.50_0.61,q_85,enc_avif,quality_auto/AlohaStateSoftballNov24PLayoffs%C2%A9ezm-1983.jpg" 
                   alt="ASSL Playoffs Action" 
                   className="rounded-xl shadow-lg w-full h-80 object-cover fade-in" />
            </div>
            <div className="hover-lift">
              <img src="https://static.wixstatic.com/media/df1e99_82edc6bdc7cc4e90b6d8a1d66d712a9d~mv2.jpg/v1/fill/w_1462,h_1142,fp_0.51_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AlohaStateSoftball2023Week7-7948.jpg" 
                   alt="Team Spirit" 
                   className="rounded-xl shadow-lg w-full h-80 object-cover fade-in" />
            </div>
            <div className="hover-lift">
              <img src="https://static.wixstatic.com/media/df1e99_22fa80c2998b422a9eb3663a8b7bd292~mv2.jpg/v1/fill/w_1302,h_820,fp_0.52_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ARCHI2024-980.jpg" 
                   alt="Championship Celebration" 
                   className="rounded-xl shadow-lg w-full h-80 object-cover fade-in" />
            </div>
            <div className="hover-lift">
              <img src="https://static.wixstatic.com/media/df1e99_1d2a6e354b1e420383130b4198177786~mv2.jpg" 
                   alt="Team Photo" 
                   className="rounded-xl shadow-lg w-full h-80 object-cover fade-in" />
            </div>
          </div>
        </div>
      </section>

      {/* Season 4 Events Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="pride-text">Season 4 Events</span> 📅
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendars for an exciting season of softball and community events!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl p-8 text-center">
            <img src="https://static.wixstatic.com/media/df1e99_a499a46ae03548b7ba2db534af034a8d~mv2.png/v1/fill/w_1363,h_924,al_c,q_90,enc_avif,quality_auto/Pop%20Up%20Market%20Festival%20Schedule%20Flyer-1.png" 
                 alt="Season 4 Events Calendar" 
                 className="mx-auto rounded-xl shadow-lg max-w-full h-auto hover-lift fade-in" />
          </div>
        </div>
      </section>

      {/* Banner Divider */}
      <div className="w-full py-4">
        <img src="https://static.wixstatic.com/media/df1e99_5197682b37e34d269664ff746162b543~mv2.png" 
             alt="Section Divider" 
             className="w-full h-auto" />
      </div>

      {/* Sponsors Section */}
      <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="pride-text">Our Amazing Sponsors</span> 🙏
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A huge mahalo to these incredible sponsors for making our league possible!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Bank of Hawaiʻi */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_b39ff2b25c5b492591872cf7fb1b34ee~mv2.png"
                   alt="Bank of Hawaiʻi – Financial Services"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bank of Hawaiʻi</h3>
              <p className="text-gray-600 mb-4 flex-grow">Hawaiʻi's largest independent financial institution, offering comprehensive banking and wealth management services.</p>
              <a href="https://www.boh.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🏦
              </a>
            </div>

            {/* Tapas Waikiki */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_15421420fa1848a8a1ba6509e9bb80ef~mv2.png"
                   alt="Tapas Waikiki – LGBTQ+ Bar and Restaurant"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tapas Waikiki</h3>
              <p className="text-gray-600 mb-4 flex-grow">A lively Waikiki spot with creative cocktails, perfect for post-game celebrations and league gatherings with friends.</p>
              <a href="https://www.hawaiigaybar.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🍷
              </a>
            </div>

            {/* Bacchus Waikiki */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_c44094fb039e4250ab4c770d4063fc77~mv2.png"
                   alt="Bacchus Waikiki – LGBTQ+ Bar"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bacchus Waikiki</h3>
              <p className="text-gray-600 mb-4 flex-grow">A beloved LGBTQ+ bar in Waikiki known for its welcoming vibe, great music, and fun daily drink specials for everyone.</p>
              <div className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-6 py-2 rounded-full">
                Sponsor Partner 🍻
              </div>
            </div>

            {/* Hula's Bar & Lei Stand */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_df8e26ec547d49d48546138fe541f8ef~mv2.png"
                   alt="Hula's Bar & Lei Stand – Iconic LGBTQ+ Bar"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hula's Bar & Lei Stand</h3>
              <p className="text-gray-600 mb-4 flex-grow">An iconic open-air gay bar and Waikiki landmark, offering great drinks, music, and amazing views for over 49 years.</p>
              <a href="https://hulas.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🌺
              </a>
            </div>

            {/* The O Team */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_b7555d6dc77c439f9cb4e7718bcd7148~mv2.png"
                   alt="The O Team – Real Estate Experts"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">The O Team</h3>
              <p className="text-gray-600 mb-4 flex-grow">A dedicated real estate team at Compass, helping clients navigate the O'ahu market with expertise and aloha spirit.</p>
              <a href="https://oteamhawaii.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🌐
              </a>
            </div>

            {/* Kaimana Beach Hotel */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_5f8cc36fa139496b9d35798aa4279ab9~mv2.png"
                   alt="Kaimana Beach Hotel – Beachfront Accommodation"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kaimana Beach Hotel</h3>
              <p className="text-gray-600 mb-4 flex-grow">A stylish boutique hotel offering serene beachfront lodging and stunning ocean views away from the Waikiki crowds.</p>
              <a href="https://www.kaimana.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🏨
              </a>
            </div>

            {/* Scarlet Honolulu */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_d0a44f9755154669a51d7b884a01b91d~mv2.png"
                   alt="Scarlet Honolulu – Nightlife and Entertainment"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scarlet Honolulu</h3>
              <p className="text-gray-600 mb-4 flex-grow">Honolulu's premier LGBTQ+ nightclub, showcasing spectacular drag performances and high-energy dance floors.</p>
              <a href="https://www.scarlethonolulu.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 💄
              </a>
            </div>

            {/* Kelli with an Eye Photography */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_168ba11d5a514d338ece56115d5fe243~mv2.png"
                   alt="Kelli with an Eye Photography – Professional Photography Services"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kelli with an Eye Photography</h3>
              <p className="text-gray-600 mb-4 flex-grow">An artistic photographer based on O'ahu, skillfully capturing beautiful moments from weddings to family portraits.</p>
              <a href="https://www.kelliwithaneyephotography.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 📷
              </a>
            </div>

            {/* Eric Z Martin Photography */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_5890ac34dd0c48e9bf7d1b059fe1d5c9~mv2.png"
                   alt="Eric Z Martin Photography – Sports and Event Photography"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eric Z Martin Photography</h3>
              <p className="text-gray-600 mb-4 flex-grow">A premier Honolulu photographer specializing in capturing dynamic sports action and memorable event moments.</p>
              <a href="https://ericzmartin.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 📸
              </a>
            </div>

            {/* Future of Cool */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_85f53ed5f46246deb395e8e0f96e22f2~mv2.png"
                   alt="Future of Cool – Retail and Lifestyle Brand"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Future of Cool</h3>
              <p className="text-gray-600 mb-4 flex-grow">An innovative lifestyle brand and creative agency from Honolulu, shaping what's next in local style and culture.</p>
              <a href="https://www.futureofcool.co/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 😎
              </a>
            </div>

            {/* Whipped & Whisked */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_eef8042349bb45a5924462578d99c658~mv2.png"
                   alt="Whipped & Whisked – Bakery and Confections"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Whipped & Whisked</h3>
              <p className="text-gray-600 mb-4 flex-grow">A local bakery crafting delicious, handcrafted confections and custom cakes that are perfect for any special occasion.</p>
              <a href="https://www.instagram.com/whippednwhiskedhawaii/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🌐
              </a>
            </div>

            {/* Wang Chung's */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_6fc56a91f0554b928bcf944fdf4d08b5~mv2.png"
                   alt="Wang Chung's – Restaurant and Bar"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Wang Chung's</h3>
              <p className="text-gray-600 mb-4 flex-grow">A fun-loving karaoke bar in Waikiki with creative cocktails and a welcoming atmosphere for everyone to enjoy.</p>
              <a href="https://www.wangchungs.com/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website 🍜
              </a>
            </div>

            {/* Team Mimosa */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_56ea612f4d554ad2b98f6b7687725051~mv2.png"
                   alt="Team Mimosa – ASSL Team Sponsor"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team Mimosa</h3>
              <p className="text-gray-600 mb-4 flex-grow">A dedicated team sponsor and an integral part of our league, uplifting players and fostering true camaraderie.</p>
              <div className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-6 py-2 rounded-full">
                Sponsor Partner 🥂
              </div>
            </div>

            {/* Hawaiʻi Lemon Law */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_949a605d460e4f0e96855ac5f51d59ed~mv2.png"
                   alt="Hawaiʻi Lemon Law – Legal Services"
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hawaiʻi Lemon Law</h3>
              <p className="text-gray-600 mb-4 flex-grow">Trusted legal advisors dedicated to protecting consumer rights for owners of defective vehicles across the islands.</p>
              <a href="https://www.mylemon.com/hawaii-lemon-law/"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
                Visit Website ⚖️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Friends of the League Section */}
      <section className="w-full py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="pride-text">Friends of the League</span> 🤝
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Special thanks to our community partners who support our league and players!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Timmy T's */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_4c82c574e05d4b47a11be7f74d8f280b~mv2.png" 
                   alt="Timmy T's Gourmet Grinders" 
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Timmy T's Gourmet Grinders</h3>
              <p className="text-gray-600 mb-4 flex-grow">A local favorite serving up delicious, hearty gourmet grinders with the freshest ingredients for a satisfying meal.</p>
              <a href="https://www.timmytsgourmetgrinders.com/" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-teal-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-teal-600 transition-all duration-300">
                Visit Website 🥪
              </a>
            </div>
            
            {/* Chronic Tacos */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center flex flex-col items-center">
              <img src="https://static.wixstatic.com/media/df1e99_1c2bab03b11a4594b14d2b206f90b728~mv2.png" 
                   alt="Chronic Tacos" 
                   className="sponsor-logo mx-auto mb-4 fade-in" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chronic Tacos</h3>
              <p className="text-gray-600 mb-4 flex-grow">Home of the #TacoLife, serving authentic Mexican food made with fresh ingredients and third-generation recipes.</p>
              <a href="https://www.chronictacos.com/" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
                Visit Website 🌮
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Interested in becoming a Friend of the League? 
              <a href="mailto:mikey@alohastatesoftball.com" className="text-pink-600 hover:text-pink-800 font-semibold underline">
                Contact us!
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Banner Divider */}
      <div className="w-full py-4">
        <img src="https://static.wixstatic.com/media/df1e99_5197682b37e34d269664ff746162b543~mv2.png" 
             alt="Section Divider" 
             className="w-full h-auto" />
      </div>

      {/* Final CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our 'Ohana? 🌺
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're looking to play, volunteer, or support our community, there's a place for you in the Aloha State Softball League!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdISkV6h99FBj_FntGRyXtU3jdFYGPLjODAAykLbWLe-8RhvQ/viewform?usp=header" 
               target="_blank" rel="noopener noreferrer"
               className="bg-purple-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-purple-600 transition-all duration-300 hover-lift">
              🏃‍♀️ Sign Up as Free Agent
            </a>
            <a href="https://linktr.ee/alohastatesoftball" 
               target="_blank" rel="noopener noreferrer"
               className="bg-pink-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-pink-600 transition-all duration-300 hover-lift">
              🔗 All Our Links
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-4 text-2xl">
            <span className="sparkle">🏳️‍🌈</span>
            <span className="sparkle" style={{animationDelay: '0.5s'}}>🥎</span>
            <span className="sparkle" style={{animationDelay: '1s'}}>🌺</span>
            <span className="sparkle" style={{animationDelay: '1.5s'}}>⭐</span>
          </div>
        </div>
      </section>
    </div>
  );
}