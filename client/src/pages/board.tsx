import { useEffect } from "react";

export default function Board() {
  useEffect(() => {
    document.title = "Board of Directors - Aloha State Softball League";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the 2025 Board of Directors of the Aloha State Softball League, serving our community with aloha and inclusivity.');
    }
  }, []);

  const boardMembers = [
    {
      id: "mikey-name",
      name: "🥎 Mikey Rickman",
      title: "Commissioner",
      description: "Oversees league operations and strategy.",
      email: "Mikey@alohastatesoftball.com"
    },
    {
      id: "covert-name",
      name: "💰 Michael Covert",
      title: "Treasurer",
      description: "Manages the league's finances and budget.",
      email: "MichaelCovert.2009@gmail.com"
    },
    {
      id: "childress-name",
      name: "📝 Brandon Childress",
      title: "Secretary",
      description: "Maintains league records, meeting minutes, and official documents.",
      email: "brandon.childress@alohastatesoftball.com"
    },
    {
      id: "kaylee-name",
      name: "🌴 Kaylee Bonnett",
      title: "Assistant Commissioner (C Division)",
      description: "Assists the Commissioner, focusing on C Division matters.",
      email: "kayleebonnett@gmail.com"
    },
    {
      id: "kaye-name",
      name: "🌴 Kaye Stentiford",
      title: "Assistant Commissioner (D Division)",
      description: "Assists the Commissioner, focusing on D Division matters.",
      email: "cstentiford@gmail.com"
    },
    {
      id: "kiera-name",
      name: "🌴 Kiera Williams",
      title: "Assistant Commissioner (E Division)",
      description: "Assists the Commissioner, focusing on E Division matters.",
      email: "williamsmkiera@gmail.com"
    },
    {
      id: "andrew-name",
      name: "🤝 Andrew Shelton",
      title: "Community Outreach",
      description: "Leads initiatives connecting the league with the wider community.",
      email: "sheltonandrew504@gmail.com"
    },
    {
      id: "kovaloff-name",
      name: "🧰 Daniel Kovaloff",
      title: "Director of Fields & Equipment",
      description: "Manages field scheduling, maintenance, and league equipment.",
      email: "portillodaniel1985@outlook.com"
    },
    {
      id: "kamealoha-name",
      name: "📬 Branden Kamealoha",
      title: "Member at Large",
      description: "Represents the general membership on the board.",
      email: "bkamealoha@gmail.com"
    },
    {
      id: "scott-name",
      name: "📬 Brandon Scott",
      title: "Member at Large",
      description: "Represents the general membership on the board.",
      email: "cub8119@gmail.com"
    }
  ];

  const bccEmails = boardMembers.map(member => member.email).join(',');

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="text-gray-800" style={{
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(to bottom, #fffdf8, #faf3e0)',
      minHeight: '100vh'
    }}>
      <main className="container mx-auto px-4 py-8 md:py-12">
        
        <header className="text-center mb-10">
          <img 
            src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png"
            alt="Aloha State Softball League Logo"
            className="mx-auto mb-6 h-32 w-auto rounded-md shadow-sm animate-fade-in-up"
            style={{animationDelay: '0.1s'}}
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            loading="lazy"
          />
          <h1 id="board-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fade-in-up" style={{fontFamily: "'Poppins', sans-serif", animationDelay: '0.2s'}}>
            🌺 2025 Board of Directors
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 animate-fade-in-up" style={{fontFamily: "'Poppins', sans-serif", animationDelay: '0.3s'}}>
            Aloha State Softball League
          </p>
        </header>

        <div className="text-center mb-12">
          <a 
            href={`mailto:?bcc=${bccEmails}`}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300"
          >
            📬 Contact Entire Board (BCC)
          </a>
        </div>

        <section aria-labelledby="board-heading">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {boardMembers.map((member) => (
              <article 
                key={member.id}
                tabIndex={0} 
                role="region" 
                aria-labelledby={member.id}
                className="board-card p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 h-full"
              >
                <h3 id={member.id} className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-md text-blue-700 font-semibold mb-1">{member.title}</p>
                <p className="text-sm text-gray-600 mb-3">{member.description}</p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="email-link text-sm text-gray-700 hover:text-blue-700 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500 rounded transition duration-200"
                >
                  📧 {member.email}
                </a>
              </article>
            ))}
          </div>
        </section>

        <footer className="text-center mt-16 py-6">
          <p className="text-sm text-gray-700 bg-white/60 backdrop-blur inline-block px-5 py-3 rounded-lg shadow-md mb-2">
            🌈 Mahalo for supporting the Aloha State Softball League • Est. in the spirit of ʻohana and fair play
          </p>
          <p className="text-xs text-gray-600 mt-1">Board list current as of June 2025.</p>
        </footer>

      </main>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        ⬆️ Top
      </button>
    </div>
  );
}