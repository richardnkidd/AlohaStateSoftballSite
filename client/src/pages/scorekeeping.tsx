import { useEffect, useState } from "react";

export default function Scorekeeping() {
  const [currentBatter, setCurrentBatter] = useState(1);
  const [inning, setInning] = useState(1);
  const [outs, setOuts] = useState(0);
  const [selectedBat, setSelectedBat] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Scorekeeping Tutorial - Aloha State Softball League";
  }, []);

  const handleNextBatter = () => {
    setCurrentBatter(prev => prev === 10 ? 1 : prev + 1);
  };

  const handleOut = () => {
    if (outs < 3) {
      setOuts(prev => prev + 1);
      if (outs === 2) {
        setInning(prev => prev + 1);
        setOuts(0);
      }
    }
  };

  const resetDemo = () => {
    setCurrentBatter(1);
    setInning(1);
    setOuts(0);
    setSelectedBat(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <img 
            src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" 
            alt="Aloha State Softball League Logo" 
            className="mx-auto mb-6 h-24 w-auto"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">📊 Scorekeeping Tutorial</h1>
          <p className="text-xl text-gray-700">Learn the basics of softball scorekeeping with our interactive guide!</p>
        </header>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">🎮 Interactive Scorekeeping Demo</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Scorebook Grid */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">📋 Sample Scorebook</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-2 border-gray-400">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-400 p-2 text-sm">#</th>
                      <th className="border border-gray-400 p-2 text-sm">Player</th>
                      <th className="border border-gray-400 p-2 text-sm">1</th>
                      <th className="border border-gray-400 p-2 text-sm">2</th>
                      <th className="border border-gray-400 p-2 text-sm">3</th>
                      <th className="border border-gray-400 p-2 text-sm">4</th>
                      <th className="border border-gray-400 p-2 text-sm">5</th>
                      <th className="border border-gray-400 p-2 text-sm">R</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5,6,7,8,9,10].map((playerNum) => (
                      <tr key={playerNum} className={playerNum === currentBatter ? 'bg-yellow-100' : ''}>
                        <td className="border border-gray-400 p-2 text-center font-bold">{playerNum}</td>
                        <td className="border border-gray-400 p-2 text-sm">Player {playerNum}</td>
                        <td className="border border-gray-400 p-2 h-8 w-8 relative">
                          {inning >= 1 && (
                            <div className="w-full h-full bg-white border border-gray-300 relative">
                              {playerNum === 1 && inning >= 1 && <span className="text-xs">1B</span>}
                            </div>
                          )}
                        </td>
                        <td className="border border-gray-400 p-2 h-8 w-8"></td>
                        <td className="border border-gray-400 p-2 h-8 w-8"></td>
                        <td className="border border-gray-400 p-2 h-8 w-8"></td>
                        <td className="border border-gray-400 p-2 h-8 w-8"></td>
                        <td className="border border-gray-400 p-2 text-center font-bold">0</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Game Status</h4>
                <p><strong>Inning:</strong> {inning}</p>
                <p><strong>Outs:</strong> {outs}/3</p>
                <p><strong>Current Batter:</strong> #{currentBatter}</p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleNextBatter}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  ⚾ Next Batter
                </button>
                <button 
                  onClick={handleOut}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  ❌ Record Out
                </button>
                <button 
                  onClick={resetDemo}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  🔄 Reset Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tutorial Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Basic Symbols */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">📝 Basic Scorekeeping Symbols</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">1B</span>
                <span>Single</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">2B</span>
                <span>Double</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">3B</span>
                <span>Triple</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">HR</span>
                <span>Home Run</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">BB</span>
                <span>Walk (Base on Balls)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">K</span>
                <span>Strikeout</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">6-3</span>
                <span>Ground out (SS to 1B)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg">F7</span>
                <span>Fly out to Left Field</span>
              </div>
            </div>
          </div>

          {/* Position Numbers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🔢 Position Numbers</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">1</span>
                <span>Pitcher</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">2</span>
                <span>Catcher</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">3</span>
                <span>First Base</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">4</span>
                <span>Second Base</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">5</span>
                <span>Third Base</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">6</span>
                <span>Shortstop</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">7</span>
                <span>Left Field</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">8</span>
                <span>Center Field</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-lg font-bold">9</span>
                <span>Right Field</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to Fill the Box */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">📐 How to Fill Each Box</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Diamond Diagram */}
            <div className="text-center">
              <h4 className="font-bold mb-4">🔷 The Diamond Method</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <svg width="120" height="120" className="mx-auto">
                  <rect x="10" y="10" width="100" height="100" fill="white" stroke="black" strokeWidth="2"/>
                  <line x1="60" y1="10" x2="110" y2="60" stroke="black" strokeWidth="1"/>
                  <line x1="110" y1="60" x2="60" y2="110" stroke="black" strokeWidth="1"/>
                  <line x1="60" y1="110" x2="10" y2="60" stroke="black" strokeWidth="1"/>
                  <line x1="10" y1="60" x2="60" y2="10" stroke="black" strokeWidth="1"/>
                  <text x="60" y="25" textAnchor="middle" className="text-xs">1B</text>
                  <text x="95" y="65" textAnchor="middle" className="text-xs">2B</text>
                  <text x="60" y="105" textAnchor="middle" className="text-xs">3B</text>
                  <text x="25" y="65" textAnchor="middle" className="text-xs">H</text>
                </svg>
              </div>
              <p className="text-sm mt-2">Track base advancement through the diamond</p>
            </div>

            {/* Example Plays */}
            <div>
              <h4 className="font-bold mb-4">✅ Example: Single to Right</h4>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-sm"><strong>Record:</strong> 1B</p>
                <p className="text-sm"><strong>Draw:</strong> Line from home to first base</p>
                <p className="text-sm"><strong>Result:</strong> Runner on first base</p>
              </div>
              
              <h4 className="font-bold mb-4 mt-6">❌ Example: Strikeout</h4>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="text-sm"><strong>Record:</strong> K</p>
                <p className="text-sm"><strong>Draw:</strong> Large K in center</p>
                <p className="text-sm"><strong>Result:</strong> Batter out</p>
              </div>
            </div>

            {/* Advanced Tips */}
            <div>
              <h4 className="font-bold mb-4">💡 Pro Tips</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <strong>RBI:</strong> Circle the RBI in the corner when a run scores
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <strong>Errors:</strong> Use E followed by position number (E6 = error by shortstop)
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <strong>Substitutions:</strong> Draw a line under the last at-bat for that player
                </div>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <strong>Stolen Bases:</strong> Use SB next to the base they steal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bat Selection Guide */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">🏏 ASSL Approved Bats</h3>
          <p className="text-center text-gray-600 mb-8">Click on a bat to see its specifications</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 1, name: "Demarini CF", compression: "240", approved: true },
              { id: 2, name: "Easton Fire Flex", compression: "220", approved: true },
              { id: 3, name: "Louisville Slugger", compression: "200", approved: true },
              { id: 4, name: "Miken Freak", compression: "300", approved: false }
            ].map((bat) => (
              <div 
                key={bat.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedBat === bat.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : bat.approved 
                      ? 'border-green-300 bg-green-50 hover:border-green-500' 
                      : 'border-red-300 bg-red-50'
                }`}
                onClick={() => setSelectedBat(selectedBat === bat.id ? null : bat.id)}
              >
                <h4 className="font-bold text-center">{bat.name}</h4>
                <p className="text-sm text-center">Compression: {bat.compression}</p>
                <div className="text-center mt-2">
                  {bat.approved ? (
                    <span className="text-green-600 font-bold">✅ APPROVED</span>
                  ) : (
                    <span className="text-red-600 font-bold">❌ NOT APPROVED</span>
                  )}
                </div>
                {selectedBat === bat.id && (
                  <div className="mt-3 p-2 bg-white rounded border text-xs">
                    <p><strong>Details:</strong> {bat.approved ? 'Meets ASSL compression standards and safety requirements.' : 'Exceeds compression limits for recreational play.'}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <h4 className="font-bold mb-2">⚠️ Important Bat Guidelines</h4>
            <ul className="text-sm space-y-1">
              <li>• All bats must be ASA/USA approved</li>
              <li>• Maximum compression rating of 240</li>
              <li>• No altered or modified bats allowed</li>
              <li>• Wood bats are always welcome</li>
              <li>• When in doubt, ask the commissioner!</li>
            </ul>
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📋 Quick Reference Card</h3>
          <p className="mb-6">Keep these handy during games!</p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Common Outs</h4>
              <p>K = Strikeout</p>
              <p>6-3 = Ground out</p>
              <p>F7 = Fly out</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Hits</h4>
              <p>1B = Single</p>
              <p>2B = Double</p>
              <p>HR = Home Run</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Other</h4>
              <p>BB = Walk</p>
              <p>E = Error</p>
              <p>SB = Stolen Base</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}