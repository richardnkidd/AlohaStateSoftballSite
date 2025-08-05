import { useEffect, useState } from "react";
import { Clipboard, Users, PenTool } from "lucide-react";

export default function Scorekeeping() {
  const [demoNotation, setDemoNotation] = useState("Click a play!");
  const [demoColor, setDemoColor] = useState("bg-slate-200");

  useEffect(() => {
    document.title = "Scorekeeping Guide - Aloha State Softball League";
  }, []);

  const updateScorebox = (notation: string) => {
    setDemoNotation(notation);
    
    // Add visual feedback based on notation type
    if (['1B', '2B', '3B', 'HR'].includes(notation)) {
      setDemoColor('bg-green-200');
    } else if (['K', 'F8', '6-3'].includes(notation)) {
      setDemoColor('bg-red-200');
    } else {
      setDemoColor('bg-blue-200');
    }
  };

  const fieldPositions = [
    { number: 7, position: "Left Field", top: "20%", left: "15%" },
    { number: 8, position: "Center Field", top: "20%", left: "50%" },
    { number: 9, position: "Right Field", top: "20%", left: "85%" },
    { number: 5, position: "3rd Base", top: "60%", left: "15%" },
    { number: 6, position: "Shortstop", top: "60%", left: "40%" },
    { number: 4, position: "2nd Base", top: "60%", left: "85%" },
    { number: 1, position: "Pitcher", top: "75%", left: "50%" },
    { number: 3, position: "1st Base", top: "85%", left: "85%" },
    { number: 2, position: "Catcher", top: "95%", left: "50%" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-header text-gray-900 mb-4">🥎 Beginner's Guide to Scorekeeping</h2>
          <p className="text-xl text-gray-600 mb-2">iPride Style - Keep the Game, Keep the Pride! 🏳️‍🌈</p>
        </div>

        {/* What You Need */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Clipboard className="h-8 w-8 mr-3 text-indigo-500" />
            What Do You Need?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl text-center transition-transform hover:scale-105">
              <div className="text-4xl mb-3">📖</div>
              <h4 className="font-bold text-lg text-slate-700">Scorebook</h4>
              <p className="text-slate-500">Official or any lined notebook.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center transition-transform hover:scale-105">
              <div className="text-4xl mb-3">✏️</div>
              <h4 className="font-bold text-lg text-slate-700">Pencil</h4>
              <p className="text-slate-500">Erasable! Mistakes happen.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center transition-transform hover:scale-105">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-lg text-slate-700">Team Lineups</h4>
              <p className="text-slate-500">Get from the team captains.</p>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg">
            <strong>Pro Tip:</strong> Write down team names, date, and mark <strong>Home</strong> vs <strong>Visitor</strong>. Home team always bats second!
          </div>
        </div>

        {/* Field Numbers */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-green-500" />
            The Field = Numbers
          </h3>
          <p className="text-gray-600 mb-6">Each position on the field has a number. You'll use these to record plays.</p>
          <div className="bg-gradient-to-b from-green-600 to-green-800 rounded-2xl p-8 relative h-96">
            {fieldPositions.map((pos) => (
              <div
                key={pos.number}
                className="absolute bg-white/90 rounded-full p-3 text-center shadow-md transition-transform hover:scale-110 cursor-pointer"
                style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
              >
                <div className="font-black text-xl text-green-700">{pos.number}</div>
                <div className="text-xs font-semibold text-slate-600 whitespace-nowrap">{pos.position}</div>
              </div>
            ))}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-center italic">
              (10 = Rover/Short Fielder, if used in your league)
            </p>
          </div>
        </div>

        {/* Interactive Scorebox Demo */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <PenTool className="h-8 w-8 mr-3" />
            Try It: Interactive Scorebox
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Demo Scorebox */}
            <div className="bg-white border-4 border-slate-800 w-40 h-40 rounded-lg flex flex-col items-center justify-center relative shadow-2xl">
              <div className={`w-20 h-20 ${demoColor} border-2 border-slate-400 transform rotate-45 transition-all duration-300`}></div>
              <div className="absolute bottom-2 text-slate-800 font-bold text-sm">{demoNotation}</div>
            </div>
            
            {/* Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-bold text-center">Hits</h4>
                <button onClick={() => updateScorebox('1B')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">1B</button>
                <button onClick={() => updateScorebox('2B')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">2B</button>
                <button onClick={() => updateScorebox('HR')} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition">HR</button>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-center">Outs</h4>
                <button onClick={() => updateScorebox('K')} className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">K</button>
                <button onClick={() => updateScorebox('F8')} className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">F8</button>
                <button onClick={() => updateScorebox('6-3')} className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg transition">6-3</button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-bold mb-2">Quick Reference:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div><strong>1B/2B/3B/HR:</strong> Base hits</div>
              <div><strong>K:</strong> Strikeout</div>
              <div><strong>F8:</strong> Fly out to center field</div>
              <div><strong>6-3:</strong> Shortstop to first base</div>
            </div>
          </div>
        </div>

        {/* Basic Notation */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Basic Notation Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-green-700">✅ Hits & Positive Plays</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>1B, 2B, 3B, HR:</strong> Singles, doubles, triples, home runs</li>
                <li><strong>BB:</strong> Walk (Base on Balls)</li>
                <li><strong>HBP:</strong> Hit by Pitch</li>
                <li><strong>FC:</strong> Fielder's Choice</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-red-700">❌ Outs & Negative Plays</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>K:</strong> Strikeout</li>
                <li><strong>F7:</strong> Fly out to left field</li>
                <li><strong>4-3:</strong> Second base to first base</li>
                <li><strong>E5:</strong> Error by third baseman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
