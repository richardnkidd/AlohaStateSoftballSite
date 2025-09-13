import { SECTIONS } from "./league-content.js";

const SYNONYMS = {
  "home run": ["home runs", "homer", "hr", "dinger", "over the fence"],
  "tiebreaker": ["international tiebreaker", "extra innings", "one-pitch"]
};

function expandQuery(q) {
  const base = (q || "").toLowerCase();
  const extras = [];
  for (const [k, vals] of Object.entries(SYNONYMS)) {
    if (base.includes(k) || vals.some(v => base.includes(v))) extras.push(k, ...vals);
  }
  return Array.from(new Set([base, ...extras]));
}

export function getRelevantSections(query, { maxSections = 3, maxChars = 2500 } = {}) {
  const q = (query || "");
  const terms = expandQuery(q);

  // Force-include Tournament for tournament-like asks
  const force = [];
  if (/(tournament|anuenue|classic|event|date|dates|when)/i.test(q)) {
    const t = SECTIONS.find(s => s.id === "tournament");
    if (t) force.push(t);
  }

  const scored = SECTIONS.map(s => {
    const hay = `${s.title}\n${s.text}\n${(s.tags || []).join(" ")}`.toLowerCase();
    let score = 0;
    for (const t of terms) if (t && hay.includes(t)) score += 2;
    if (q && hay.includes(q.toLowerCase())) score += 3;
    // tag boost
    const tags = (s.tags || []).map(x => x.toLowerCase());
    for (const t of terms) if (tags.includes(t)) score += 1;
    return { s, score };
  });

  const forcedIds = new Set(force.map(x => x.id));
  const rest = scored
    .filter(x => !forcedIds.has(x.s.id))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.s);

  const top = [...force, ...rest].slice(0, maxSections);
  let out = top.map(s => `### ${s.title}\n${s.text}`).join("\n\n");
  if (out.length > maxChars) out = out.slice(0, maxChars) + "\n…";
  return out;
}