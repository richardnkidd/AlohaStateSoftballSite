// Simple keyword-based retrieval for league content
import { SECTIONS } from "./league-content.js";

export function getRelevantSections(query, options = {}) {
  const { maxSections = 3, maxChars = 2500 } = options;
  const q = query.toLowerCase();

  // naive keyword scoring
  const scored = SECTIONS.map((s) => {
    const hay = (s.title + "\n" + s.text + "\n" + (s.tags || []).join(" ")).toLowerCase();
    // simple overlap score
    const terms = q.split(/\W+/).filter(Boolean);
    const score = terms.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0)
                 + (hay.includes(q) ? 3 : 0); // small boost for full phrase
    return { s, score };
  }).filter(x => x.score > 0);

  const top = scored.sort((a, b) => b.score - a.score).slice(0, maxSections);
  let out = top.map(({ s }) => `### ${s.title}\n${s.text}`).join("\n\n");

  if (out.length > maxChars) {
    out = out.slice(0, maxChars) + "\n…";
  }
  return out;
}