#!/usr/bin/env node
import fs from "fs";
import path from "path";

const CONTENT_DIR = "content";
const OUT = "netlify/functions/src/league-content.js";

function parseFrontmatter(md) {
  // Accepts three cases: YAML-ish between ---; JSON-ish; or none at all.
  const m = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return [{}, md.trim()];
  const headRaw = m[1].trim();
  const body = (m[2] || "").trim();
  const obj = {};
  for (const line of headRaw.split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    // try JSON first
    try { v = JSON.parse(v); } catch { /* keep as string */ }
    obj[k] = v;
  }
  return [obj, body];
}

function firstHeadingOrFile(body, file) {
  const h1 = body.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : path.basename(file, ".md");
}

const files = fs.existsSync(CONTENT_DIR)
  ? fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".md"))
  : [];

const sections = [];
for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const [fm, body] = parseFrontmatter(raw);
  const id = (fm.id || path.basename(file, ".md")).toLowerCase();
  const title = fm.title || firstHeadingOrFile(body, file);
  const tags = Array.isArray(fm.tags) ? fm.tags : [];
  const text = (body || "").replace(/\b(B Division|Division B)\b/gi, "").trim();
  if (!text) continue; // skip empty docs
  sections.push({ id, title, tags, text });
}

if (sections.length === 0) {
  console.error("[build-content] ERROR: No sections generated from /content. Check front-matter and file paths.");
  process.exit(1);
}

const banner = `// AUTO-GENERATED from /content/*.md — do not edit by hand\n`;
const js = `${banner}export const SECTIONS = ${JSON.stringify(sections, null, 2)};\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, js, "utf8");
console.log(`[build-content] Wrote ${OUT} with ${sections.length} sections.`);