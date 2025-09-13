import { SECTIONS } from "./league-content.js";

const SYNONYMS = {
  "home run": ["home runs", "homer", "hr", "dinger", "over the fence"],
  "courtesy runner": ["pinch runner", "courtesy"],
  "tiebreaker": ["international tiebreaker", "extra innings", "one-pitch"],
  "board": ["directors", "commissioner", "officers", "leadership"],
  "rating": ["ratings", "player rating", "skill level", "division placement"],
  "scorekeeping": ["scorekeeper", "scoring", "official scorer"],
  "schedule": ["games", "calendar", "season", "when do we play"],
  "membership": ["join", "register", "sign up", "how to join"],
  "softball": ["assl", "league", "aloha state"],
  "rules": ["gameplay", "regulations", "how to play"],
  "bylaws": ["constitution", "governance", "policies"],
  "tournament": ["anuenue", "anuenue classic", "competition", "march", "2026", "dates", "when"],
  "anuenue": ["tournament", "anuenue classic", "march", "2026"],
  "dates": ["when", "schedule", "calendar", "march", "tournament"]
};

function expandQuery(q) {
  const base = q.toLowerCase();
  const extras = [];
  for (const [k, vals] of Object.entries(SYNONYMS)) {
    if (base.includes(k) || vals.some(v => base.includes(v))) {
      extras.push(k, ...vals);
    }
  }
  return Array.from(new Set([base, ...extras]));
}

export function getRelevantSections(query, options = {}) {
  const { maxSections = 3, maxChars = 2500 } = options;
  const terms = expandQuery(query);

  const scored = [];
  for (const s of SECTIONS) {
    const hay = (s.title + "\n" + (s.text || "") + "\n" + (s.tags || []).join(" ")).toLowerCase();
    let score = 0;
    for (const t of terms) if (hay.includes(t)) score += 2;     // term match
    for (const tag of (s.tags || [])) for (const t of terms) if (tag.includes(t)) score += 1; // tag boost
    if (hay.includes(query.toLowerCase())) score += 3;         // exact phrase boost
    if (score > 0) scored.push({ s, score });
  }

  // Fallback routing: if user asks about home runs, force include Rules section
  if (!scored.length && /\bhome\s*runs?\b|\bhr\b/i.test(query)) {
    const rules = SECTIONS.find(sec => sec.id === "rules" || /gameplay rules/i.test(sec.title));
    if (rules) scored.push({ s: rules, score: 1 });
  }

  // Additional fallback for board/contact questions
  if (!scored.length && /\b(contact|email|board|commissioner)\b/i.test(query)) {
    const board = SECTIONS.find(sec => sec.id === "board");
    if (board) scored.push({ s: board, score: 1 });
  }
  
  // Fallback for tournament questions
  if (!scored.length && /\b(tournament|anuenue|classic|march)\b/i.test(query)) {
    const tournament = SECTIONS.find(sec => sec.id === "tournament" || /anuenue/i.test(sec.title));
    if (tournament) scored.push({ s: tournament, score: 1 });
  }

  const top = scored.sort((a, b) => b.score - a.score).slice(0, maxSections);
  let out = top.map(({ s }) => `### ${s.title}\n${s.text}`).join("\n\n");
  if (out.length > maxChars) out = out.slice(0, maxChars) + "\n…";
  return out;
}