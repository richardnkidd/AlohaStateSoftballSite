#!/usr/bin/env node
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "..", "content");
const OUT_PATH = path.join(__dirname, "..", "data", "assl-embeddings.json");
const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL || "text-embedding-3-small";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function scrubDivisionB(text) {
  // Remove explicit "Division B" lines and labels
  return text
    .replace(/^.*\b(B Division|Division B)\b.*$/gmi, "")
    .replace(/\b(B Division|Division B)\b/gi, "");
}

function chunk(md, { maxChars = 1800, overlap = 200 } = {}) {
  const sections = md.split(/\n(?=#{1,6}\s)/g);
  const chunks = [];
  for (const sec of sections) {
    if (sec.length <= maxChars) chunks.push(sec.trim());
    else {
      let i = 0;
      while (i < sec.length) {
        const end = i + maxChars;
        chunks.push(sec.slice(i, end).trim());
        i = end - overlap;
      }
    }
  }
  return chunks.filter(Boolean);
}

console.log(`Building embeddings from ${CONTENT_DIR}...`);

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".md"));
const docs = [];
for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const cleaned = scrubDivisionB(raw);
  chunk(cleaned).forEach((text, idx) => {
    docs.push({
      source: file,
      id: `${file}:${idx}`,
      title: path.basename(file, ".md"),
      tags: [],
      text,
      version: new Date().toISOString().slice(0,10)
    });
  });
}

const BATCH = 64;
const out = [];
for (let i = 0; i < docs.length; i += BATCH) {
  const batch = docs.slice(i, i + BATCH);
  const emb = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: batch.map(d => d.text)
  });
  emb.data.forEach((e, j) => out.push({ ...batch[j], embedding: e.embedding }));
  process.stdout.write(`Embedded ${Math.min(i + BATCH, docs.length)}/${docs.length}\r`);
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(out), "utf8");
console.log(`\nWrote ${OUT_PATH} (${out.length} chunks).`);