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
    },
    {
      name: "🏃‍♂️ Scott Cubbedge",
      title: "Member at Large",
      description: "Represents the general membership on the board.",
      email: "cub8119@gmail.com"
    }
  ];

  const bccEmails = boardMembers.map(member => member.email).join(',');

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen" style={{background: 'linear-gradient(to bottom, #fffdf8, #faf3e0)'}}>
      <header className="text-center mb-10">
        <img src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png"
             alt="Aloha State Softball League Logo"
             className="mx-auto mb-6 h-32 w-auto rounded-md shadow-sm animate-fade-in-up"
             style={{animationDelay: '0.1s'}}
             onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.style.display = 'none';
             }}
             loading="lazy" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-header animate-fade-in-up" style={{animationDelay: '0.2s'}}>🌺 2025 Board of Directors</h1>
        <p className="text-xl md:text-2xl text-gray-700 font-header animate-fade-in-up" style={{animationDelay: '0.3s'}}>Aloha State Softball League</p>
      </header>

      <div className="text-center mb-12">
         <a href={`mailto:?bcc=${bccEmails}`}
           className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300">
           📬 Contact Entire Board (BCC)
         </a>
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {boardMembers.map((member, index) => (
            <article key={index} tabIndex={0} className="board-card p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-md text-blue-700 font-semibold mb-1">{member.title}</p>
              <p className="text-sm text-gray-600 mb-3 flex-grow">{member.description}</p>
              <a href={`mailto:${member.email}`} className="email-link text-sm text-gray-700 hover:text-blue-700 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500 rounded transition duration-200 mt-auto">📧 {member.email}</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}