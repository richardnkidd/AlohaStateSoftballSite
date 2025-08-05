import { useEffect } from "react";

export default function Board() {
  useEffect(() => {
    document.title = "Board of Directors - Aloha State Softball League";
  }, []);

  const boardMembers = [
    {
      name: "🥎 Mikey Rickman",
      title: "Commissioner",
      description: "Oversees league operations and strategy.",
      email: "Mikey@alohastatesoftball.com"
    },
    {
      name: "💰 Michael Covert",
      title: "Treasurer",
      description: "Manages the league's finances and budget.",
      email: "MichaelCovert.2009@gmail.com"
    },
    {
      name: "📝 Brandon Childress",
      title: "Secretary",
      description: "Maintains league records, meeting minutes, and official documents.",
      email: "brandon.childress@alohastatesoftball.com"
    },
    {
      name: "🌴 Kaylee Bonnett",
      title: "Assistant Commissioner (C Division)",
      description: "Assists the Commissioner, focusing on C Division matters.",
      email: "kayleebonnett@gmail.com"
    },
    {
      name: "🌴 Kaye Stentiford",
      title: "Assistant Commissioner (D Division)",
      description: "Assists the Commissioner, focusing on D Division matters.",
      email: "cstentiford@gmail.com"
    },
    {
      name: "🌴 Kiera Williams",
      title: "Assistant Commissioner (E Division)",
      description: "Assists the Commissioner, focusing on E Division matters.",
      email: "williamsmkiera@gmail.com"
    },
    {
      name: "🤝 Andrew Shelton",
      title: "Community Outreach",
      description: "Leads initiatives connecting the league with the wider community.",
      email: "sheltonandrew504@gmail.com"
    },
    {
      name: "🧰 Daniel Kovaloff",
      title: "Director of Fields & Equipment",
      description: "Manages field scheduling, maintenance, and league equipment.",
      email: "portillodaniel1985@outlook.com"
    },
    {
      name: "📬 Branden Kamealoha",
      title: "Member at Large",
      description: "Represents the general membership on the board.",
      email: "bkamealoha@gmail.com"
    }
  ];

  const bccEmails = boardMembers.map(member => member.email).join(',');

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img 
            src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png"
            alt="Aloha State Softball League Logo"
            className="mx-auto mb-8 h-32 w-auto rounded-md shadow-sm animate-fade-in-up"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-header">🌺 2025 Board of Directors</h2>
          <p className="text-xl md:text-2xl text-gray-700 font-header mb-8">Leading with Aloha and Inclusivity</p>
          
          <a 
            href={`mailto:?bcc=${bccEmails}`}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105"
          >
            📬 Contact Entire Board (BCC)
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="board-card p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-md text-blue-700 font-semibold mb-1">{member.title}</p>
              <p className="text-sm text-gray-600 mb-3 flex-grow">{member.description}</p>
              <a 
                href={`mailto:${member.email}`} 
                className="text-sm text-gray-700 hover:text-blue-700 hover:underline transition duration-200"
              >
                📧 {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
