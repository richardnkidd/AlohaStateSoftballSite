import { useEffect } from "react";

export default function Ratings() {
  useEffect(() => {
    document.title = "Player Ratings Guide - Aloha State Softball League";
  }, []);

  const skillAreas = [
    {
      title: "🏏 Hitting",
      color: "red",
      skills: [
        { name: "Power", description: "Ability to drive the ball deep" },
        { name: "Contact", description: "Consistency making solid contact" },
        { name: "Placement", description: "Strategic hitting to gaps" },
        { name: "Situational", description: "Adapting approach based on game state" }
      ]
    },
    {
      title: "🏃 Running",
      color: "yellow",
      skills: [
        { name: "Speed", description: "Raw acceleration and top speed" },
        { name: "Base Running", description: "Smart decisions on the paths" },
        { name: "Sliding", description: "Safe and effective sliding technique" },
        { name: "Game Awareness", description: "Reading situations and coaches" }
      ]
    },
    {
      title: "🥎 Fielding",
      color: "green",
      skills: [
        { name: "Catching", description: "Consistent glove work on routine plays" },
        { name: "Range", description: "Ability to cover ground effectively" },
        { name: "Hands", description: "Soft hands and quick transfers" },
        { name: "Positioning", description: "Smart positioning and communication" }
      ]
    },
    {
      title: "⚾ Throwing",
      color: "blue",
      skills: [
        { name: "Accuracy", description: "Consistent throws to intended target" },
        { name: "Arm Strength", description: "Velocity and carry on throws" },
        { name: "Quick Release", description: "Getting the ball out fast" },
        { name: "Mechanics", description: "Proper throwing form and footwork" }
      ]
    }
  ];

  const ratingScale = [
    { range: "1-2", level: "Beginner", description: "Learning basics", color: "red" },
    { range: "3-4", level: "Developing", description: "Building skills", color: "orange" },
    { range: "5-6", level: "Average", description: "Solid fundamentals", color: "yellow" },
    { range: "7-8", level: "Above Average", description: "Strong player", color: "blue" },
    { range: "9-10", level: "Elite", description: "Exceptional skill", color: "purple" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-header text-gray-900 mb-4">Player Ratings Guide</h2>
          <p className="text-xl text-gray-600">Understanding our fair and inclusive rating system</p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-header text-gray-900 mb-4">How We Rate Players</h3>
            <p className="text-gray-700 mb-4">
              Our rating system focuses on <strong>Fairness</strong>, <strong>Safety</strong>, and <strong>Fun</strong>. 
              Every player is evaluated across four key skill areas to ensure balanced teams and competitive games.
            </p>
            <div className="bg-white/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-semibold text-blue-800">📌 Remember: Ratings help create balanced teams, not define your worth as a person or player!</p>
            </div>
          </div>

          {/* Skill Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillAreas.map((area, index) => (
              <div key={index} className={`border-l-4 border-${area.color}-400 bg-${area.color}-50 p-6 rounded-r-xl`}>
                <h4 className={`text-xl font-bold text-${area.color}-700 mb-3`}>{area.title}</h4>
                <ul className="space-y-2 text-gray-700">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <strong>{skill.name}:</strong> {skill.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Rating Scale */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-header text-gray-900 mb-6">Rating Scale (1-10)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {ratingScale.map((rating, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <div className={`text-2xl font-bold text-${rating.color}-600`}>{rating.range}</div>
                  <div className="text-sm font-semibold text-gray-700">{rating.level}</div>
                  <div className="text-xs text-gray-500">{rating.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-header text-gray-900 mb-4">Key Points to Remember</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>Ratings can change:</strong> As you improve, your ratings will be updated to reflect your growth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>It's about balance:</strong> We use ratings to create competitive, fun games for everyone.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span><strong>Improvement is celebrated:</strong> We love seeing players develop their skills!</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span><strong>Ratings don't define you:</strong> You're valued for being part of our ohana, regardless of skill level.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
