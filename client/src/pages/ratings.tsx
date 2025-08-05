import { useEffect, useState } from "react";

export default function Ratings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = "Aloha State Softball League Guide";
    
    // Scroll progress handler
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    // Scroll animation observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with js-scroll-trigger class
    const scrollElements = document.querySelectorAll('.js-scroll-trigger');
    scrollElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    document.documentElement.classList.toggle('dark-mode', checked);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="scrollProgressBar" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '5px',
          width: `${scrollProgress}%`,
          backgroundColor: isDarkMode ? '#4dabf7' : '#007bff',
          zIndex: 9999,
          transition: 'width 0.1s linear'
        }}
      />

      <div className="min-h-screen" style={{
        fontFamily: "'Barlow', sans-serif",
        backgroundImage: 'url("https://static.wixstatic.com/media/df1e99_381ca0e7b1b84e88973b4ba2977f8fdb~mv2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="content-wrapper">
          {/* Dark Mode Toggle */}
          <div className="dark-mode-toggle">
            <span>🌙 Dark Mode</span>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={isDarkMode}
                onChange={(e) => toggleDarkMode(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <img 
            src="https://static.wixstatic.com/media/df1e99_c16538715deb475e9f25e24745a4d790~mv2.png" 
            alt="Aloha State Softball League Logo" 
            className="js-scroll-trigger"
            style={{
              display: 'block',
              margin: '0 auto 2rem',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />

          <h1 className="js-scroll-trigger text-4xl font-bold text-center mb-8" style={{fontFamily: "'Poppins', sans-serif"}}>
            ⚾ ALOHA STATE SOFTBALL LEAGUE ⚾<br />PLAYER RATINGS GUIDE
          </h1>

          <p className="note pin-note js-scroll-trigger">
            <strong>Welcome to the iPride League Ratings System!</strong> This guide will help you understand how player ratings work 
            and what to expect during the rating process. Take your time reading through it – we want everyone to feel comfortable 
            and prepared.
          </p>

          <h2 className="js-scroll-trigger text-2xl font-bold mt-8 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
            Why do we use player ratings?
          </h2>
          <p className="js-scroll-trigger">
            Player ratings are important because they help us create a positive playing environment by ensuring:
          </p>
          <ul className="js-scroll-trigger">
            <li><strong>Fairness:</strong> You'll compete against players with similar skill levels.</li>
            <li><strong>Safety:</strong> You won't face pitchers or hitters far beyond your ability level.</li>
            <li><strong>Fun:</strong> Games are more enjoyable when teams are evenly matched.</li>
          </ul>

          <img 
            src="https://static.wixstatic.com/media/df1e99_1847c91ae48545d2be9639b4b861dab3~mv2.png" 
            alt="Team huddle" 
            className="js-scroll-trigger"
          />

          <p className="js-scroll-trigger">
            The Aloha State Softball League uses the iPride Ratings System, a widely adopted standard across LGBTQ+ leagues 
            in North America, to achieve these goals.
          </p>

          <p className="note pin-note js-scroll-trigger">
            📌 Think of ratings like belt colors in martial arts – they help place you with others at a similar level so 
            everyone can enjoy the game and develop their skills appropriately.
          </p>

          <hr className="js-scroll-trigger" />

          <img 
            src="https://static.wixstatic.com/media/df1e99_2e1d96fc428548c4a7eb124f864cdb3a~mv2.jpg" 
            alt="Close up of softball glove" 
            className="js-scroll-trigger"
          />

          <h2 className="js-scroll-trigger text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
            Sunday Scrimmages & Rating Opportunities
          </h2>
          <p className="js-scroll-trigger">
            We're organizing Sunday Scrimmages at{' '}
            <a href="https://g.co/kgs/Rccw7r1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Crane Field
            </a>{' '}
            in April and May to help teams get ready and warmed up before the season starts. They also serve as official 
            rating opportunities for new and returning players.
          </p>

          <h3 className="js-scroll-trigger text-xl font-bold mt-6 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
            Why Scrimmages?
          </h3>
          <p className="js-scroll-trigger">
            They're a fun way to shake off the rust and get play time in with your squad. Plus, they're the official site 
            for completing or reconfirming ratings.
          </p>

          <h3 className="js-scroll-trigger text-xl font-bold mt-6 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
            How Ratings Work During Scrimmage Days:
          </h3>
          <p className="js-scroll-trigger">
            We'll use the warmup time before each scrimmage to check key skills like hitting, fielding, throwing 
            (including pitching), and running speed. These check-ins will follow iPride guidelines but will be short and low-stress.
          </p>

          <h3 className="js-scroll-trigger text-xl font-bold mt-6 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
            What You Need to Do:
          </h3>
          <p className="js-scroll-trigger">
            Each team should attend at least one scrimmage. If someone can't make it, we'll offer a couple of makeup dates. 
            Captains: Please coordinate with your teams to bring as many players as possible.
          </p>

          <hr className="js-scroll-trigger" />

          <ul className="emoji-bullet js-scroll-trigger">
            <li><strong>Quick Start: The 3 Most Important Things to Know</strong></li>
          </ul>

          <h3 className="js-scroll-trigger text-xl font-bold mt-6 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
            The 60% Rule (Consistency is Key!)
          </h3>
          <p className="js-scroll-trigger">
            To get a "YES" for most skills, you need to show you can do it successfully at least 6 out of 10 times (60%). 
            This applies to most hitting, fielding, and throwing skills.
          </p>

          <h3 className="js-scroll-trigger text-xl font-bold mt-6 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
            Division Restrictions (Hitting Power Limits)
          </h3>
          <p className="js-scroll-trigger">
            These rules prevent players with very high hitting power from playing in lower divisions, ensuring safety and fairness:
          </p>
          
          <div className="restriction js-scroll-trigger">
            <p><span className="no-icon">🚫 </span><strong>E Division Players CANNOT</strong> receive a YES for:</p>
            <ul>
              <li>Q3: Hitting high velocity balls ≥ 20% of the time</li>
              <li>Q5: Hitting fly balls over 300 ft</li>
            </ul>
          </div>
          
          <div className="restriction js-scroll-trigger">
            <p><span className="no-icon">🚫 </span><strong>D Division Players CANNOT</strong> receive a YES for:</p>
            <ul>
              <li>Q5: Hitting fly balls over 300 ft</li>
            </ul>
          </div>
          
          <p className="note pin-note js-scroll-trigger">
            📌 If you demonstrate these restricted skills, you'll be rated for a higher division.
          </p>

          <h3 className="js-scroll-trigger text-xl font-bold mt-6 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
            The Ratings Process (How It Works)
          </h3>
          <ol className="js-scroll-trigger">
            <li>Attend a Sunday Scrimmage.</li>
            <li>Evaluators watch during specific rating drills (part of the warm-up) and record YES (✅) or NO (❌) 
                for each of the 26 skill-based questions based on the guidelines.</li>
            <li>Your total YES answers help determine your division placement (see examples and typical ranges below).</li>
          </ol>

          <hr className="js-scroll-trigger" />

          <ul className="emoji-bullet js-scroll-trigger">
            <li><strong>Complete Rating Questions Summary</strong></li>
          </ul>
          <p className="js-scroll-trigger">
            (Remember: Unless noted, a 60% success rate = YES)
          </p>
          <p className="note pin-note js-scroll-trigger">
            📌 Whenever a higher-level skill is a YES, all lower-level skills in the set are also YES.
          </p>
          
          <details className="js-scroll-trigger">
            <summary><strong>See Example</strong></summary>
            <p>Example: If you throw 100 ft accurately (Q24), you also earn YES for Q21–Q23.</p>
          </details>

          {/* Hitting Skills Section */}
          <div className="section-content section-hitting js-scroll-trigger" id="hitting-skills">
            <img 
              src="https://static.wixstatic.com/media/df1e99_744c9166048448d2b6abc40c32a23aaa~mv2.jpg" 
              alt="Velocity tiers graphic" 
              className="js-scroll-trigger skill-section-image"
            />
            <h3><span className="icon-emoji">🥎</span>Hitting Skills (Questions 1–9)</h3>
            <p>These questions evaluate how hard and consistently you can hit the ball, and how successful you are at the plate.</p>
            <ul>
              <li>Remember the 60% rule for these questions.</li>
            </ul>

            <img 
              src="https://static.wixstatic.com/media/df1e99_ce9b64689bf24791bf91dfc4a0d8186d~mv2.png" 
              alt="Runner sliding into base"
            />
            
            <h4>Velocity Tiers (for Hitting):</h4>
            <ul>
              <li><strong><span className="tooltip" title="Hit up to 150 ft in the air or ground ball equivalent.">Low Velocity</span>:</strong> 
                  A ball hit up to 150 feet (45.7m) or less in the air or a ground ball that would roll to a distance of less than 150 feet (45.7m), if not impeded.</li>
              <li><strong><span className="tooltip" title="Hit 150-250 ft in the air or ground ball equivalent.">Medium Velocity</span>:</strong> 
                  A ball hit 150 to 250 feet (45.7 to 76.2 meters) in the air or a ground ball that would roll to a distance of 150 to 250 feet (45.7 to 76.2 meters), if not impeded.</li>
              <li><strong><span className="tooltip" title="Hit over 250 ft in the air or ground ball equivalent.">High Velocity</span>:</strong> 
                  a ball hit greater than 250 feet (76.2m) in the air or a ground ball that would roll to a distance greater than 250 feet (76.2m), if not impeded.</li>
            </ul>

            <ul>
              <li>Q1: Hit a fair or foul ball with low velocity. (60% threshold)</li>
              <li>Q2: Hit a fair or foul ball with medium velocity. (60% threshold)</li>
              <li className="restriction"><span className="no-icon">🚫</span>Q3: Hit a fair or foul ball with high velocity. (20% threshold) <strong>(E Division Restriction)</strong></li>
              <li>Q4: Hit a fair or foul ball with high velocity. (60% threshold)</li>
              <li className="restriction"><span className="no-icon">🚫</span>Q5: Hit a fly ball 300'+ (91.4m) or more. (5% threshold) <strong>(D & E Division Restriction)</strong></li>
            </ul>

            <h4><span className="tooltip" title="Modified Batting Average – Measures how often you get on base with a hit or error vs. total at-bats.">Modified Batting Average (MBA)</span>:</h4>
            <p>Measures how often you get on base with a hit or error vs. total at-bats (your batting effectiveness) against different levels.</p>
            <ul>
              <li>MBA is calculated as: (Hits + Bases Safely Reached on Error) ÷ At-Bats</li>
            </ul>
            <p>A <strong>hit</strong> is when the batter safely reaches base after hitting the ball fairly because:</p>
            <ol>
              <li>The ball lands in fair territory and either stays on the field, clears the fence (home run), or hits the fence before a fielder touches it.</li>
              <li>The ball is hit so hard, so softly, or takes a strange bounce that a fielder cannot reasonably make the play in time for an out.</li>
              <li>The fair ball touches an umpire (their body or clothing) before any fielder has touched it.</li>
              <li>A fielder tries unsuccessfully to make an out on another runner, and the official scorer decides the batter-runner would have reached first base safely even with perfect fielding.</li>
            </ol>
            <ul>
              <li>A <strong>base safely reached on error</strong> is when a defensive player(s) who is charged with an error by the scorekeeper.</li>
              <details>
                <summary><strong>See MBA Example</strong></summary>
                <p>Example: If you have 5 hits and 1 error in 10 at-bats against E Division pitching, your MBA is (5 + 1) / 10 = 0.600. 
                   These MBA calculations are based on performance against pitchers within the specified division (e.g., MBA vs. 'D' division pitchers).</p>
              </details>
              <li>Q6: MBA ≥ .700 (vs E Division pitching)</li>
              <li>Q7: MBA ≥ .600 (vs D Division pitching)</li>
              <li>Q8: MBA ≥ .500 (vs C Division pitching)</li>
              <li>Q9: MBA ≥ .400 (vs B Division pitching)</li>
            </ul>
          </div>

          {/* Running Speed Section */}
          <div className="section-content section-running js-scroll-trigger" id="running-speed">
            <img 
              src="https://static.wixstatic.com/media/df1e99_ebdd29086143488798c287ad91e6b60b~mv2.jpg" 
              alt="Softball players fielding" 
              className="js-scroll-trigger skill-section-image"
            />
            <h3><span className="icon-emoji">🏃</span>Running Speed (Questions 10–12)</h3>
            <p>Measures base-to-base sprinting speed.</p>
            <ul>
              <li>No 60% threshold here – just need to do it successfully once!</li>
              <li>The 70-foot distance is measured from home plate to first base, one base to the next, or third base to home plate.</li>
              <li>Q10: Run 70 feet in under 4.5 seconds.</li>
              <li>Q11: Run 70 feet in under 4.0 seconds.</li>
              <li>Q12: Run 70 feet in under 3.5 seconds.</li>
            </ul>
          </div>

          {/* Fielding Skills Section */}
          <div className="section-content section-fielding js-scroll-trigger" id="fielding-skills">
            <img 
              src="https://static.wixstatic.com/media/df1e99_b29070098bda492781bff3daa6e67a37~mv2.jpg" 
              alt="Pitcher throwing ball" 
              className="js-scroll-trigger skill-section-image"
            />
            <h3><span className="icon-emoji">🧤</span>Fielding Skills (Questions 13–20)</h3>
            <p>Assesses how reliably you stop, control, and respond to hit balls.</p>
            <ul>
              <li>60% success rate = YES</li>
              <li>Generally, an <span className="tooltip" title="A misplay by a fielder allowing a batter/runner to advance when ordinary effort could have made the play.">error</span> 
                  is a misplay by a fielder that allows a batter to reach base or a runner to advance when, with ordinary effort, 
                  the play could have been made. Examples include dropping a catchable fly ball, mishandling a ground ball, or making a wild throw. 
                  The scorer's judgment according to USA Softball (ASA) rules is the final authority.</li>
            </ul>

            <h4>Fielding Locations Explained:</h4>
            <ul>
              <li><strong>Directly at player:</strong> A ball hit at a player that does not require the player to move his/her feet, 
                  although it may cause the player to reach in any direction to make the play.</li>
              <li><strong>Within a few steps:</strong> A ball hit that requires a player to take 2-3 steps (9-10 feet or 2.7-3 meters) 
                  in order to make the play.</li>
              <li><strong>In the hole:</strong> A ball hit that requires a player to take 4-5 steps (12 feet (3.7m) or greater) 
                  in order to make the play.</li>
              <li>Q13–15: Cleanly fields a ball hit with low velocity (directly at, nearby, in the hole)</li>
              <li>Q16–18: Cleanly fields a ball hit with medium velocity (directly at, nearby, in the hole)</li>
              <li>Q19–20: Cleanly fields a ball hit with high velocity (directly at, nearby)</li>
              <li>Note: The full system distinguishes between cleanly stopping vs. cleanly fielding, fly balls vs. grounders, 
                  and infield/outfield skill.</li>
            </ul>
          </div>

          <img 
            src="https://static.wixstatic.com/media/df1e99_509f4987cb8141a881c53d79218e2fa2~mv2.jpg" 
            alt="Softball action shot" 
            className="js-scroll-trigger skill-section-image"
          />

          {/* Throwing Skills Section */}
          <div className="section-content section-throwing js-scroll-trigger" id="throwing-skills">
            <h3><span className="icon-emoji">🎯</span>Throwing Skills (Questions 21-26)</h3>
            <p>Evaluates strength and accuracy of your throws across distances, including pitching ability.</p>
            <ul>
              <li>60% success rate = YES (unless otherwise noted)</li>
              <li><strong><span className="tooltip" title="A throw within one or two steps of the intended target.">Accuracy Explained</span>:</strong> 
                  A throw that is within one to two steps of the intended target.</li>
              <li>Q21: Throw 50 feet (15.2 meters) with a <span className="tooltip" title="A ball that rises vertically less than 5% of its horizontal distance.">line drive</span> 
                  (regardless of accuracy)</li>
              <li>Q22: Throw 50 feet (15.2 meters) with a line drive and accuracy</li>
              <li>Q23: Throw 70 feet (21.3 meters) with a line drive and accuracy</li>
              <li>Q24: Throw 100 feet (30.5 meters) with a line drive and accuracy</li>
              <li>Q25: Throw 150 feet (45.7 meters) with a line drive and accuracy</li>
              <li>Q26: Throw &gt;200 feet (61 meters) with a line drive and accuracy OR 100/150 ft off-balance with accuracy 
                  (e.g., throwing after fielding a ground ball while running toward first base)</li>
            </ul>
            <ul>
              <li>Within these throwing questions (21-26), evaluators will also assess the following pitching criteria:
                <ul>
                  <li>Deliver multiple pitch techniques (e.g., curve, change up) while pitching a strike and/or causing the batter to swing (60% threshold).</li>
                  <li>Vary the height, depth, and location of the pitch while pitching a strike and/or causing the batter to swing (60% threshold).</li>
                  <li>Pitch a strike and/or cause the batter to swing (60% threshold).</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Definitions:
                <ul>
                  <li>A "strike" is a legally delivered ball that enters the strike zone or that the batter swings at and misses.</li>
                  <li>"Multiple pitch techniques" refers to the ability to use arc, spin, location and movement of the ball to deliver 
                      various pitches (e.g. curve, change up, cutter / reverse curve, knuckle ball) that are called strikes or cause the batter to swing.</li>
                  <li>"Vary the height, depth, and location" means the pitcher can control where the ball goes within and around the strike zone.</li>
                </ul>
              </li>
            </ul>
          </div>

          <hr className="js-scroll-trigger" />

          <h2 className="js-scroll-trigger text-2xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
            What Happens After Ratings?
          </h2>
          <ul className="js-scroll-trigger">
            <li>Captains will receive their teams' rating results</li>
            <li>Players will be placed in appropriate divisions (E, D, C, or B)</li>
            <li>The league ensures balanced competition by reviewing team compositions</li>
          </ul>

          <h2 className="js-scroll-trigger text-2xl font-bold mt-8 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
            Example Division Placements
          </h2>
          <div className="important-note js-scroll-trigger">
            <p><strong>These are typical ranges – actual placement depends on league balance:</strong></p>
            <ul>
              <li><strong>E Division:</strong> 0-6 YES answers (newer players, developing skills)</li>
              <li><strong>D Division:</strong> 5-12 YES answers (intermediate recreational players)</li>
              <li><strong>C Division:</strong> 10-18 YES answers (experienced recreational players)</li>
              <li><strong>B Division:</strong> 16-26 YES answers (competitive/advanced players)</li>
            </ul>
          </div>

          <hr className="js-scroll-trigger" />

          <div className="note js-scroll-trigger">
            <h3>🌈 Remember: This is about FUN and GROWTH!</h3>
            <p>Your ratings will change as you play more and improve. We're all here to support each other and have a great time 
               playing softball together. Every player brings something valuable to their team!</p>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-gray-700">
              Ready to play ball? Let's make this season amazing! 🥎⚾🌺
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-wrapper {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1.5rem 2rem;
          background-color: ${isDarkMode ? '#2c2c2c' : '#ffffff'};
          border-radius: 8px;
          box-shadow: 0 4px 15px ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
          position: relative;
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
          color: ${isDarkMode ? '#f1f1f1' : '#1b1c1d'};
        }

        .dark-mode-toggle {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          z-index: 10;
        }
        .dark-mode-toggle span {
          margin-right: 8px;
          font-size: 0.9rem;
          color: ${isDarkMode ? '#bbbbbb' : '#505050'};
        }
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
          background-color: ${isDarkMode ? '#555' : '#ccc'};
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
          background-color: ${isDarkMode ? '#ccc' : 'white'};
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: ${isDarkMode ? '#4dabf7' : '#007bff'};
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }

        h1, h2, h3, h4 {
          color: ${isDarkMode ? '#ffffff' : '#000000'};
        }

        .note, .important-note {
          background-color: ${isDarkMode ? '#3a3a3a' : '#f8f9fa'};
          border-left: 4px solid ${isDarkMode ? '#4dabf7' : '#007bff'};
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 4px;
        }

        .restriction {
          background-color: ${isDarkMode ? '#3a3a3a' : '#f8f9fa'};
          border-left: 4px solid ${isDarkMode ? '#ff6b6b' : '#dc3545'};
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 4px;
        }

        .emoji-bullet {
          list-style-type: none;
          padding-left: 0;
        }
        .emoji-bullet li::before {
          content: "🔹";
          display: inline-block;
          margin-right: 0.5em;
        }

        hr {
          border: none;
          height: 1px;
          background-color: ${isDarkMode ? '#555555' : '#e0e0e0'};
          margin: 2.5rem 0;
        }

        details {
          background-color: ${isDarkMode ? '#3a3a3a' : '#f8f9fa'};
          border: 1px solid ${isDarkMode ? '#555555' : '#e0e0e0'};
          border-radius: 4px;
          padding: 0.5rem 1rem;
          margin: 1rem 0;
        }
        summary {
          cursor: pointer;
          font-weight: bold;
          color: ${isDarkMode ? '#bbbbbb' : '#505050'};
        }
        summary:hover {
          color: ${isDarkMode ? '#f1f1f1' : '#1b1c1d'};
        }
        details[open] {
          padding-bottom: 1rem;
        }
        details > p {
          margin-top: 0.5rem;
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .tooltip {
          position: relative;
          cursor: help;
          border-bottom: 1px dotted ${isDarkMode ? '#bbbbbb' : '#505050'};
        }
        .tooltip::after {
          content: attr(title);
          position: absolute;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background-color: ${isDarkMode ? '#eeeeee' : '#333333'};
          color: ${isDarkMode ? '#1b1c1d' : '#ffffff'};
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.85rem;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          z-index: 10;
        }
        .tooltip:hover::after {
          opacity: 1;
          visibility: visible;
        }

        .js-scroll-trigger {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .js-scroll-trigger.visible {
          opacity: 1;
          transform: none;
        }

        .section-content {
          padding-left: 1rem;
          margin-left: -1rem;
          border-left-width: 6px;
          border-left-style: solid;
          margin-bottom: 2rem;
          transition: border-color 0.3s ease;
        }
        .section-hitting { border-left-color: ${isDarkMode ? '#ff6b6b' : '#f94144'}; }
        .section-running { border-left-color: ${isDarkMode ? '#ffdd87' : '#f9c74f'}; }
        .section-fielding { border-left-color: ${isDarkMode ? '#7fcdb6' : '#43aa8b'}; }
        .section-throwing { border-left-color: ${isDarkMode ? '#a5bdd4' : '#577590'}; }

        .icon-emoji {
          display: inline-block;
          transform: scale(1);
          transition: transform 0.3s ease;
          margin-right: 0.4rem;
          cursor: default;
        }
        h3:hover .icon-emoji {
          transform: scale(1.25) rotate(5deg);
        }

        img {
          display: block;
          margin: 2rem auto;
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
        }

        .skill-section-image {
          width: 56.25%;
          max-width: 100%;
          height: auto;
          margin: 2rem auto;
        }

        a {
          color: ${isDarkMode ? '#69b1ff' : '#0056b3'};
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
          color: ${isDarkMode ? '#a3ceff' : '#003d80'};
        }

        ul, ol {
          margin-left: 1.5rem;
          padding-left: 1rem;
          margin-bottom: 1rem;
        }
        li {
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        :global(.dark-mode) {
          filter: invert(1) hue-rotate(180deg);
        }
        :global(.dark-mode img) {
          filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </>
  );
}