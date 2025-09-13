// netlify/functions/src/retrieval.js
import { SECTIONS } from "./league-content.js";

export function getRelevantSections(query, { maxSections = 3, maxChars = 2500 } = {}) {
  const q = (query || "").toLowerCase();
  const terms = q.split(/\W+/).filter(Boolean);

  const force = [];
  if (/(tournament|anuenue|classic|event|date|dates|when)/i.test(q)) {
    const t = SECTIONS.find(s => s.id === "tournament");
    if (t) force.push(t);
  }
  if (/(home\s*run|hr|over[-\s]*the[-\s]*fence)/i.test(q)) {
    const rfaq = SECTIONS.find(s => s.id === "rules-faq");
    const r = SECTIONS.find(s => s.id === "rules");
    for (const x of [rfaq, r]) if (x && !force.includes(x)) force.push(x);
  }
  if (/(time\s*limit|50\s*minutes|last\s*inning)/i.test(q)) {
    const rfaq = SECTIONS.find(s => s.id === "rules-faq");
    const r = SECTIONS.find(s => s.id === "rules");
    for (const x of [rfaq, r]) if (x && !force.includes(x)) force.push(x);
  }
  if (/(board|contact|email|commissioner)/i.test(q)) {
    const b = SECTIONS.find(s => s.id === "board");
    if (b && !force.includes(b)) force.push(b);
  }
  if (/(rating|division|skill|placement)/i.test(q)) {
    const rt = SECTIONS.find(s => s.id === "ratings");
    if (rt && !force.includes(rt)) force.push(rt);
  }
  if (/(scorekeeper|scoring|notation)/i.test(q)) {
    const sk = SECTIONS.find(s => s.id === "scorekeeping");
    if (sk && !force.includes(sk)) force.push(sk);
  }

  const scored = SECTIONS.map(s => {
    const hay = `${s.title}\n${s.text}\n${(s.tags||[]).join(" ")}`.toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (!t) continue;
      if (hay.includes(t)) score += 1;
    }
    // tag matches get bonus
    const tags = (s.tags || []).map(x => x.toLowerCase());
    for (const t of terms) if (tags.includes(t)) score += 2;

    // exact phrase light boost
    if (q && hay.includes(q)) score += 3;
    return { s, score };
  });

  // Dedup + prioritize forced sections
  const forcedIds = new Set(force.map(x => x.id));
  const rest = scored
    .filter(x => !forcedIds.has(x.s.id))
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .map(x => x.s);

  const top = [...force, ...rest].slice(0, maxSections);
  let out = top.map(s => `### ${s.title}\n${s.text}`).join("\n\n");
  if (out.length > maxChars) out = out.slice(0, maxChars) + "\n…";
  
  // Debug logging
  if (process.env.DEBUG_CONTENT === "1") {
    console.log("[RAG] Query:", query);
    console.log("[RAG] Selected sections:", top.map(s => s.id));
    console.log("[RAG] Context preview:", out.slice(0, 300));
  }
  
  return out;
}