import { useEffect, useState } from "react";

export default function Ratings() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Aloha State Softball League Guide";
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    document.documentElement.classList.toggle('dark-mode', checked);
  };

  return (
    <div className="min-h-screen" style={{
      fontFamily: "'Barlow', sans-serif",
      backgroundImage: 'url("https://static.wixstatic.com/media/df1e99_381ca0e7b1b84e88973b4ba2977f8fdb~mv2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark Mode Toggle */}
      <div className="dark-mode-toggle absolute top-4 right-4 flex items-center cursor-pointer z-10">
        <span className="mr-2 text-sm text-gray-600">🌙 Dark Mode</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={isDarkMode}
            onChange={(e) => toggleDarkMode(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="content-wrapper max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg relative">
        <img 
          src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" 
          alt="Aloha State Softball League Logo" 
          className="skill-section-image block w-auto max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" 
        />

        <h1 className="text-4xl font-bold text-center mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>
          ⚾ ALOHA STATE SOFTBALL LEAGUE ⚾<br />PLAYER GUIDE
        </h1>

        <div className="text-center mb-8">
          <p className="text-lg"><strong>Fairness • Safety • Fun</strong></p>
          <ul className="list-none text-center space-y-1 mt-4">
            <li>🔹 <strong>Fairness:</strong> Every player gets equal opportunity to play, improve, and contribute to their team's success.</li>
            <li>🔹 <strong>Safety:</strong> Physical and emotional safety for all players, creating a supportive environment where everyone can thrive.</li>
            <li>🔹 <strong>Fun:</strong> At the end of the day, we're here to have a blast playing the sport we love with amazing people.</li>
          </ul>
        </div>

        <img 
          src="https://static.wixstatic.com/media/df1e99_31e4d4b8a8234af5b8030d0d2a1daea6~mv2.png" 
          alt="Hitting Section" 
          className="skill-section-image block w-auto max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" 
        />

        <div className="section-content border-l-4 border-red-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>🏏 HITTING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Power</h3>
          <p className="mb-2">Your ability to drive the ball deep into the field for extra bases or home runs.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Primarily contact hitter, occasional doubles</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Mix of singles and doubles, some triples</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Consistent extra-base power, regular home runs</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Contact</h3>
          <p className="mb-2">Consistency in making solid contact with the ball and putting it in play.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Learning swing mechanics, frequent misses</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Solid contact most at-bats</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Rarely misses, excellent eye and timing</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Placement</h3>
          <p className="mb-2">Strategic hitting - ability to place the ball where you want it to go.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Just trying to make contact</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Can aim for gaps occasionally</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Consistently places balls strategically</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Situational Hitting</h3>
          <p className="mb-2">Adapting your approach based on game situations (runners on base, count, inning).</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Same approach every at-bat</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Beginning to adjust for situations</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Masters situational hitting</p>
        </div>

        <img 
          src="https://static.wixstatic.com/media/df1e99_7b5c9e2f4f154b6e9c8d8b2a1e7f3c5d~mv2.png" 
          alt="Running Section" 
          className="skill-section-image block w-auto max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" 
        />

        <div className="section-content border-l-4 border-yellow-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>🏃 RUNNING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Speed</h3>
          <p className="mb-2">Raw speed from base to base.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Takes time getting to first base</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Average speed, can leg out close plays</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Fast runner, beats out infield hits regularly</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Base Running IQ</h3>
          <p className="mb-2">Understanding when to advance, when to hold, and reading the field.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Needs coaching on base running basics</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Good instincts, occasional mistakes</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Excellent base running awareness</p>
        </div>

        <img 
          src="https://static.wixstatic.com/media/df1e99_9a6b8c3e5f4d2a1b9c8d7e6f5a4b3c2d~mv2.png" 
          alt="Fielding Section" 
          className="skill-section-image block w-auto max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" 
        />

        <div className="section-content border-l-4 border-green-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>🥎 FIELDING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Glove Work</h3>
          <p className="mb-2">Ability to catch and secure the ball consistently.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Working on catching fundamentals</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Reliable on routine plays</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Makes difficult catches look easy</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Range</h3>
          <p className="mb-2">Area of field you can cover effectively.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Limited mobility, covers immediate area</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Good coverage in assigned position</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Exceptional range, gets to tough balls</p>
        </div>

        <img 
          src="https://static.wixstatic.com/media/df1e99_4c5d6e7f8a9b1c2d3e4f5a6b7c8d9e1f~mv2.png" 
          alt="Throwing Section" 
          className="skill-section-image block w-auto max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" 
        />

        <div className="section-content border-l-4 border-blue-400 pl-4 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>💪 THROWING</h2>
          
          <h3 className="text-xl font-semibold mb-2">Arm Strength</h3>
          <p className="mb-2">Power and distance of your throws.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Short, accurate throws</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Good arm strength for most plays</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Strong arm, can make long throws</p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Accuracy</h3>
          <p className="mb-2">Consistently throwing to the right spot.</p>
          <p className="mb-1"><strong>Rating 1-3:</strong> Working on throwing mechanics</p>
          <p className="mb-1"><strong>Rating 4-6:</strong> Usually hits the target</p>
          <p className="mb-4"><strong>Rating 7-10:</strong> Pinpoint accuracy on all throws</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg mb-8">
          <h3 className="font-bold mb-2">🌈 Remember: This is about FUN and GROWTH!</h3>
          <p>Your ratings will change as you play more and improve. We're all here to support each other and have a great time playing softball together. Every player brings something valuable to their team!</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">
            Ready to play ball? Let's make this season amazing! 🥎⚾🌺
          </p>
        </div>
      </div>

      {/* Dark mode styles */}
      <style jsx>{`
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
        }
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 20px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #007bff;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }
        
        :global(.dark-mode) {
          filter: invert(1) hue-rotate(180deg);
        }
        :global(.dark-mode img) {
          filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </div>
  );
}