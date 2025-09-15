// netlify/functions/src/retrieval.js
import { SECTIONS } from "./league-content.js";

// Core sections to fall back to when matching is weak.
// Put player-helpful content first.
const CORE_IDS = ["rules-faq", "rules", "tournament", "about", "links", "ratings", "board"];

const SYNONYMS = {
  "home run": ["home runs", "homer", "hr", "dinger", "over the fence"],
  "tiebreaker": ["international tiebreaker", "extra innings", "one-pitch"],
  "location": ["field", "fields", "where do you play", "ala wai", "crane"],
  "photos": ["gallery", "pictures", "eric z martin"],
  "schedule": ["standings", "teamsideline", "games", "when do we play"],
  "ratings": ["division", "skill", "tryout", "scrimmage", "ipride"],
  "uniforms": ["jersey", "shirt", "numbers", "dress code"],
  "bats": ["bat list", "approved bats", "equipment"],
  "contact": ["board", "email", "director", "commissioner"],
  "tournament": ["anuenue", "classic", "event", "dates", "when", "registration"],
  "instagram": ["ig", "insta", "social media", "socials"],
  "linktree": ["all links", "link tree", "links page"]
};

function expandQuery(q) {
  const base = (q || "").toLowerCase();
  const extras = [];
  for (const [root, vals] of Object.entries(SYNONYMS)) {
    if (base.includes(root) || vals.some(v => base.includes(v))) extras.push(root, ...vals);
  }
  return Array.from(new Set([base, ...extras]));
}

function scoreSection(s, terms, phrase) {
  const hay = `${s.title}\n${s.text}\n${(s.tags || []).join(" ")}`.toLowerCase();
  let score = 0;
  for (const t of terms) if (t && hay.includes(t)) score += 2;          // word hits
  if (phrase && hay.includes(phrase.toLowerCase())) score += 3;         // phrase hit
  const tagset = new Set((s.tags || []).map(t => t.toLowerCase()));
  for (const t of terms) if (tagset.has(t)) score += 1;                 // tag bonus
  return score;
}

export function getRelevantSections(query, { maxSections = 3, maxChars = 2500 } = {}) {
  const q = (query || "").trim();
  const terms = expandQuery(q);

  // Intent: force-include certain sections
  const force = [];

  // Tournament routing
  if (/(tournament|anuenue|classic|event|date|dates|when|registration)/i.test(q)) {
    const t = SECTIONS.find(s => s.id === "tournament");
    if (t) force.push(t);
  }

  // Home run / rules routing
  if (/(home\s*run|hr|over[-\s]*the[-\s]*fence)/i.test(q)) {
    const rfaq = SECTIONS.find(s => s.id === "rules-faq");
    const rules = SECTIONS.find(s => s.id === "rules");
    for (const sec of [rfaq, rules]) if (sec && !force.includes(sec)) force.push(sec);
  }

  // Sign up / join routing - PRIORITY
  if (/(sign\s*up|signup|join|register|registration|how\s+to\s+join|new\s+player|beginner|start\s+playing)/i.test(q)) {
    const about = SECTIONS.find(s => s.id === "about");
    if (about && !force.includes(about)) force.push(about);
  }

  // Season/summer routing
  if (/(season|summer|when.*start|may|june|july|august)/i.test(q)) {
    const about = SECTIONS.find(s => s.id === "about");
    if (about && !force.includes(about)) force.push(about);
  }

  // Location, photos, schedule, ratings, contact
  const intents = [
    { re: /(field|fields|where|location|ala\s*wai|crane)/i, id: "locations" },
    { re: /(photo|gallery|picture|eric\s*z|eric\s*z\s*martin)/i, id: "photos" },
    { re: /(schedule|standings|teamsideline|games|when do we play)/i, id: "links" },
    { re: /(rating|division|skill|scrimmage|ipride)/i, id: "ratings" },
    { re: /(contact|board|commissioner|email)/i, id: "board" },
    { re: /(uniform|jersey|number)/i, id: "rules" },
    { re: /(bat|equipment)/i, id: "rules" }
  ];
  for (const { re, id } of intents) {
    if (re.test(q)) {
      const sec = SECTIONS.find(s => s.id === id);
      if (sec && !force.includes(sec)) force.push(sec);
    }
  }

  // Score remaining sections
  const scored = SECTIONS.map(s => ({ s, score: scoreSection(s, terms, q) }));

  const forcedIds = new Set(force.map(x => x.id));
  let rest = scored
    .filter(x => !forcedIds.has(x.s.id))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.s);

  // *** CRITICAL FALLBACK ***
  // If nothing matched and nothing was forced, include CORE sections so basic Qs never produce empty context.
  if (force.length === 0 && rest.length === 0) {
    rest = CORE_IDS.map(id => SECTIONS.find(s => s.id === id)).filter(Boolean);
  }

  const top = [...force, ...rest].slice(0, maxSections);
  let out = top.map(s => `### ${s.title}\n${s.text}`).join("\n\n");
  if (out.length > maxChars) out = out.slice(0, maxChars) + "\n…";
  return out;
}