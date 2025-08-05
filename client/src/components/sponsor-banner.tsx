import { useState, useEffect } from "react";

const sponsors = [
  {
    id: "sponsor-hulas",
    name: "Hula's Bar & Lei Stand",
    url: "https://hulas.com/",
    image: "https://static.wixstatic.com/media/df1e99_df8e26ec547d49d48546138fe541f8ef~mv2.png"
  },
  {
    id: "sponsor-tapas",
    name: "Tapas Waikiki",
    url: "https://www.hawaiigaybar.com/",
    image: "https://static.wixstatic.com/media/df1e99_15421420fa1848a8a1ba6509e9bb80ef~mv2.png"
  },
  {
    id: "sponsor-boh",
    name: "Bank of Hawaiʻi",
    url: "https://www.boh.com/",
    image: "https://static.wixstatic.com/media/df1e99_b39ff2b25c5b492591872cf7fb1b34ee~mv2.png"
  },
  {
    id: "sponsor-scarlet",
    name: "Scarlet Honolulu",
    url: "https://www.scarlethonolulu.com/",
    image: "https://static.wixstatic.com/media/df1e99_d0a44f9755154669a51d7b884a01b91d~mv2.png"
  },
  {
    id: "sponsor-whipped",
    name: "Whipped & Whisked",
    url: "https://www.instagram.com/whippednwhiskedhawaii/",
    image: "https://static.wixstatic.com/media/df1e99_80cc683f43274a94b66ecd62773e0d97~mv2.png"
  },
  {
    id: "sponsor-kelli",
    name: "Kelli with an Eye Photography",
    url: "https://www.kelliwithaneyephotography.com/",
    image: "https://static.wixstatic.com/media/df1e99_168ba11d5a514d338ece56115d5fe243~mv2.png"
  },
  {
    id: "sponsor-eric",
    name: "Eric Z Martin Photography",
    url: "https://ericzmartin.com/",
    image: "https://static.wixstatic.com/media/df1e99_5890ac34dd0c48e9bf7d1b059fe1d5c9~mv2.png"
  },
  {
    id: "sponsor-future",
    name: "Future of Cool",
    url: "https://www.futureofcool.co/",
    image: "https://static.wixstatic.com/media/df1e99_85f53ed5f46246deb395e8e0f96e22f2~mv2.png"
  },
  {
    id: "sponsor-oteam",
    name: "The O Team",
    url: "https://oteamhawaii.com/",
    image: "https://static.wixstatic.com/media/df1e99_b7555d6dc77c439f9cb4e7718bcd7148~mv2.png"
  },
  {
    id: "sponsor-wang",
    name: "Wang Chung's",
    url: "https://www.wangchungs.com/",
    image: "https://static.wixstatic.com/media/df1e99_6fc56a91f0554b928bcf944fdf4d08b5~mv2.png"
  },
  {
    id: "sponsor-bacchus",
    name: "Bacchus Waikiki",
    url: "#",
    image: "https://static.wixstatic.com/media/df1e99_c44094fb039e4250ab4c770d4063fc77~mv2.png"
  },
  {
    id: "sponsor-mimosa",
    name: "Team Mimosa",
    url: "#",
    image: "https://static.wixstatic.com/media/df1e99_56ea612f4d554ad2b98f6b7687725051~mv2.png"
  },
  {
    id: "sponsor-mylemon",
    name: "Hawaiʻi Lemon Law",
    url: "https://www.mylemon.com/hawaii-lemon-law/",
    image: "https://static.wixstatic.com/media/df1e99_949a605d460e4f0e96855ac5f51d59ed~mv2.png"
  },
  {
    id: "sponsor-kaimana",
    name: "Kaimana Beach Hotel",
    url: "https://www.kaimana.com/",
    image: "https://static.wixstatic.com/media/df1e99_5f8cc36fa139496b9d35798aa4279ab9~mv2.png"
  }
];

export default function SponsorBanner() {
  const [tappedSponsors, setTappedSponsors] = useState<Set<string>>(new Set());
  const BINGO_VICTORY_THRESHOLD = 7;

  useEffect(() => {
    // Load tapped sponsors from sessionStorage
    const storedTaps = sessionStorage.getItem('sponsor-bingo-taps');
    if (storedTaps) {
      try {
        const tappedIds = JSON.parse(storedTaps);
        setTappedSponsors(new Set(tappedIds));
      } catch (e) {
        console.error('Error loading sponsor bingo state:', e);
      }
    }
  }, []);

  const handleSponsorTap = (sponsorId: string) => {
    const newTappedSponsors = new Set(tappedSponsors);
    
    if (!newTappedSponsors.has(sponsorId)) {
      newTappedSponsors.add(sponsorId);
      setTappedSponsors(newTappedSponsors);
      
      // Save to sessionStorage
      sessionStorage.setItem('sponsor-bingo-taps', JSON.stringify(Array.from(newTappedSponsors)));
      
      // Check for bingo victory
      if (newTappedSponsors.size >= BINGO_VICTORY_THRESHOLD) {
        setTimeout(() => {
          alert("🎉 You completed Sponsor Bingo! Mahalo for supporting our league.");
        }, 100);
      }
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-2">
      <div 
        className="sponsor-section max-w-screen-xl mx-auto bg-cover bg-center rounded-xl px-6 py-3 shadow-md"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/df1e99_7d482e4975b446269ed7f7f9cb8c2d62~mv2.png')"
        }}
      >
        <div 
          className="sponsor-section-overlay backdrop-blur-md rounded-lg px-4 py-3"
          style={{
            backgroundImage: "url('@assets/image_1754433185640.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          
          {/* Header Image */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://static.wixstatic.com/media/df1e99_ad0f0c0a9221428690d41358cd5ad6c9~mv2.png"
              alt="Mahalo to our 2025 Sponsors!"
              className="w-auto max-h-10 md:max-h-12 object-contain"
              loading="lazy"
            />
          </div>
          
          {/* Sponsor Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center min-h-[276px]">
            {sponsors.map((sponsor) => (
              <a 
                key={sponsor.id}
                href={sponsor.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
                onClick={(e) => {
                  if (sponsor.url === "#") {
                    e.preventDefault();
                  }
                  handleSponsorTap(sponsor.id);
                }}
              >
                <img 
                  id={sponsor.id}
                  src={sponsor.image}
                  alt={sponsor.name}
                  title={sponsor.name}
                  className={`sponsor-bingo h-32 max-w-[180px] object-contain mx-auto transition-all duration-300 hover:scale-110 ${
                    tappedSponsors.has(sponsor.id) ? 'opacity-75 scale-95' : ''
                  }`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          {/* Become a Sponsor Button */}
          <div className="mt-4 text-center">
            <a 
              href="https://www.zeffy.com/en-US/fundraising/support-aloha-state-softball-2025-season"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden inline-block bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Become a Sponsor</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}