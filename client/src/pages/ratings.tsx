import { useEffect } from "react";

export default function Ratings() {
  useEffect(() => {
    document.title = "Aloha State Softball League Guide";
  }, []);

  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url("https://static.wixstatic.com/media/df1e99_381ca0e7b1b84e88973b4ba2977f8fdb~mv2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 flex items-center cursor-pointer z-10">
        <span className="mr-2 text-sm text-gray-600">🌙 Dark Mode</span>
        <label className="relative inline-block w-10 h-5">
          <input 
            type="checkbox" 
            className="opacity-0 w-0 h-0"
            onChange={(e) => {
              document.documentElement.classList.toggle('dark-mode', e.target.checked);
            }}
          />
          <div className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-400">
            <div className="absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-all duration-400 transform"></div>
          </div>
        </label>
      </div>

      <div className="content-wrapper max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg relative">
        <img src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" alt="Aloha State Softball League Logo" className="skill-section-image" />

        <h1 className="text-4xl font-bold text-center mb-8">⚾ ALOHA STATE SOFTBALL LEAGUE ⚾<br />PLAYER GUIDE</h1>

        <div className="text-center mb-8">
          <p className="text-lg"><strong>Fairness • Safety • Fun</strong></p>
          <ul className="list-none text-center space-y-1">
            <li>🔹 <strong>Fairness:</strong> Every player gets equal opportunity to play, improve, and contribute to their team's success.</li>
            <li>🔹 <strong>Safety:</strong> Physical and emotional safety for all players, creating a supportive environment where everyone can thrive.</li>
            <li>🔹 <strong>Fun:</strong> At the end of the day, we're here to have a blast playing the sport we love with amazing people.</li>
          </ul>
        </div>

        <img src="https://static.wixstatic.com/media/df1e99_31e4d4b8a8234af5b8030d0d2a1daea6~mv2.png" alt="Hitting Section" className="skill-section-image" />

        <div className="section-content border-l-4 border-red-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">🏏 HITTING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Power</h3>
          <p>Your ability to drive the ball deep into the field for extra bases or home runs.</p>
          <p><strong>Rating 1-3:</strong> Primarily contact hitter, occasional doubles</p>
          <p><strong>Rating 4-6:</strong> Mix of singles and doubles, some triples</p>
          <p><strong>Rating 7-10:</strong> Consistent extra-base power, regular home runs</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Contact</h3>
          <p>Consistency in making solid contact with the ball and putting it in play.</p>
          <p><strong>Rating 1-3:</strong> Learning swing mechanics, frequent misses</p>
          <p><strong>Rating 4-6:</strong> Solid contact most at-bats</p>
          <p><strong>Rating 7-10:</strong> Rarely misses, excellent eye and timing</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Placement</h3>
          <p>Strategic hitting - ability to place the ball where you want it to go.</p>
          <p><strong>Rating 1-3:</strong> Just trying to make contact</p>
          <p><strong>Rating 4-6:</strong> Can aim for gaps occasionally</p>
          <p><strong>Rating 7-10:</strong> Consistently places balls strategically</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Situational Hitting</h3>
          <p>Adapting your approach based on game situations (runners on base, count, inning).</p>
          <p><strong>Rating 1-3:</strong> Same approach every at-bat</p>
          <p><strong>Rating 4-6:</strong> Beginning to adjust for situations</p>
          <p><strong>Rating 7-10:</strong> Masters situational hitting</p>
        </div>

        <img src="https://static.wixstatic.com/media/df1e99_0a7c8b9987184e7aac6bcf8c0b5976e1~mv2.png" alt="Running Section" className="skill-section-image" />

        <div className="section-content border-l-4 border-yellow-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">🏃 RUNNING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Speed</h3>
          <p>Raw foot speed from home to first and base to base.</p>
          <p><strong>Rating 1-3:</strong> Takes time getting to bases</p>
          <p><strong>Rating 4-6:</strong> Average speed, beats out close plays sometimes</p>
          <p><strong>Rating 7-10:</strong> Fast, beats out most infield hits</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Base Running IQ</h3>
          <p>Smart decisions on the base paths, reading the ball and defense.</p>
          <p><strong>Rating 1-3:</strong> Learning base running rules</p>
          <p><strong>Rating 4-6:</strong> Makes good decisions most of the time</p>
          <p><strong>Rating 7-10:</strong> Advanced base running, takes extra bases</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Sliding</h3>
          <p>Safe and effective sliding technique.</p>
          <p><strong>Rating 1-3:</strong> Learning to slide safely</p>
          <p><strong>Rating 4-6:</strong> Competent slider when needed</p>
          <p><strong>Rating 7-10:</strong> Excellent sliding technique and timing</p>
        </div>

        <img src="https://static.wixstatic.com/media/df1e99_03a90b66b7a0491c924e88bbb98d5bd1~mv2.png" alt="Fielding Section" className="skill-section-image" />

        <div className="section-content border-l-4 border-green-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">🥎 FIELDING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Catching Routine Plays</h3>
          <p>Consistent glove work on balls hit directly to you.</p>
          <p><strong>Rating 1-3:</strong> Still developing glove skills</p>
          <p><strong>Rating 4-6:</strong> Catches most routine plays cleanly</p>
          <p><strong>Rating 7-10:</strong> Very reliable on all routine chances</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Range</h3>
          <p>Ability to cover ground and get to balls hit away from you.</p>
          <p><strong>Rating 1-3:</strong> Limited range, covers basic area</p>
          <p><strong>Rating 4-6:</strong> Good range for position</p>
          <p><strong>Rating 7-10:</strong> Exceptional range, makes difficult plays look easy</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Hands (Glove Work)</h3>
          <p>Soft hands for difficult catches and quick transfers.</p>
          <p><strong>Rating 1-3:</strong> Learning proper glove technique</p>
          <p><strong>Rating 4-6:</strong> Good hands, handles most balls well</p>
          <p><strong>Rating 7-10:</strong> Exceptional glove work and ball handling</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Positioning & Communication</h3>
          <p>Smart positioning and vocal leadership in the field.</p>
          <p><strong>Rating 1-3:</strong> Learning where to play</p>
          <p><strong>Rating 4-6:</strong> Generally well-positioned, some communication</p>
          <p><strong>Rating 7-10:</strong> Field general, excellent positioning and leadership</p>
        </div>

        <img src="https://static.wixstatic.com/media/df1e99_b2ee5b4cf6d54654baa6ddeed3e8c40c~mv2.png" alt="Throwing Section" className="skill-section-image" />

        <div className="section-content border-l-4 border-blue-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">⚾ THROWING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
          <p>Consistently throwing to your intended target.</p>
          <p><strong>Rating 1-3:</strong> Developing throwing accuracy</p>
          <p><strong>Rating 4-6:</strong> Generally accurate throws</p>
          <p><strong>Rating 7-10:</strong> Pinpoint accuracy on all throws</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Arm Strength</h3>
          <p>Velocity and carry on your throws.</p>
          <p><strong>Rating 1-3:</strong> Adequate arm for shorter throws</p>
          <p><strong>Rating 4-6:</strong> Good arm strength for most positions</p>
          <p><strong>Rating 7-10:</strong> Strong arm, can make long throws with authority</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Quick Release</h3>
          <p>Getting the ball out of your glove and to the target quickly.</p>
          <p><strong>Rating 1-3:</strong> Takes time to set and throw</p>
          <p><strong>Rating 4-6:</strong> Good release time on most plays</p>
          <p><strong>Rating 7-10:</strong> Lightning quick release, gets ball away fast</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Mechanics & Footwork</h3>
          <p>Proper throwing form and footwork.</p>
          <p><strong>Rating 1-3:</strong> Learning proper throwing mechanics</p>
          <p><strong>Rating 4-6:</strong> Good mechanics most of the time</p>
          <p><strong>Rating 7-10:</strong> Textbook mechanics and footwork</p>
        </div>

        <hr className="my-8" />

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">📌 IMPORTANT REMINDERS</h2>
          
          <div className="space-y-4">
            <p><span className="text-green-600 mr-2">✅</span><strong>Ratings can change:</strong> As you improve, your ratings will be updated to reflect your growth!</p>
            <p><span className="text-green-600 mr-2">✅</span><strong>It's about balance:</strong> We use ratings to create competitive, fun games for everyone.</p>
            <p><span className="text-green-600 mr-2">✅</span><strong>Improvement is celebrated:</strong> We love seeing players develop their skills and confidence!</p>
            <p><span className="text-red-600 mr-2">❌</span><strong>Ratings don't define you:</strong> You're valued for being part of our ohana, regardless of skill level.</p>
          </div>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4">🚫 RESTRICTIONS & GUIDELINES</h2>
          <p>These guidelines help maintain fairness and safety:</p>
          <ul className="space-y-2 mt-4">
            <li><span className="text-red-600 mr-2">❌</span>No metal cleats in any division</li>
            <li><span className="text-red-600 mr-2">❌</span>No sliding head-first into any base (except returning to a base)</li>
            <li><span className="text-red-600 mr-2">❌</span>No intentional contact with fielders</li>
            <li><span className="text-green-600 mr-2">✅</span>Encourage teammates and opponents alike</li>
            <li><span className="text-green-600 mr-2">✅</span>Respect umpire decisions, even when you disagree</li>
            <li><span className="text-green-600 mr-2">✅</span>Help maintain a positive, inclusive environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}