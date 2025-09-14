import { SECTIONS } from "./league-content.js";

const CORE_IDS = ["rules-faq", "rules", "tournament", "about"];

function norm(s) { return (s || "").toLowerCase(); }
function tokens(s) { return norm(s).split(/\W+/).filter(Boolean); }

export function getRelevantSections(query, { maxSections = 3, maxChars = 2500 } = {}) {
  const q = norm(query);
  const terms = tokens(q);

  // Force includes
  const force = [];
  if (/(tournament|anuenue|classic|event|date|dates|when)/i.test(q)) {
    const t = SECTIONS.find(s => s.id === "tournament");
    if (t) force.push(t);
  }
  if (/(home\s*run|hr|over[-\s]*the[-\s]*fence)/i.test(q)) {
    for (const id of ["rules-faq", "rules"]) {
      const sec = SECTIONS.find(s => s.id === id);
      if (sec && !force.includes(sec)) force.push(sec);
    }
  }

  const scored = SECTIONS.map(s => {
    const hay = `${s.title}\n${s.text}\n${(s.tags||[]).join(" ")}`.toLowerCase();
    let score = 0;
    for (const t of terms) if (t && hay.includes(t)) score += 2; // word hit
    if (q && hay.includes(q)) score += 3;                        // phrase hit
    const tagset = new Set((s.tags||[]).map(norm));
    for (const t of terms) if (tagset.has(t)) score += 1;        // tag bonus
    return { s, score };
  });

  const forcedIds = new Set(force.map(x => x.id));
  let rest = scored
    .filter(x => !forcedIds.has(x.s.id))
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .map(x => x.s);

  // Fallback: if we still have nothing, include core sections so the bot can answer basics
  if (force.length === 0 && rest.length === 0) {
    rest = CORE_IDS.map(id => SECTIONS.find(s => s.id === id)).filter(Boolean);
  }

  const top = [...force, ...rest].slice(0, maxSections);
  let out = top.map(s => `### ${s.title}\n${s.text}`).join("\n\n");
  if (out.length > maxChars) out = out.slice(0, maxChars) + "\n…";
  return out;
}