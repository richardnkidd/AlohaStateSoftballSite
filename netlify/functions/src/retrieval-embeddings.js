import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.join(__dirname, "..", "..", "..", "data", "assl-embeddings.json");
let INDEX = null;

function loadIndex() {
  if (!INDEX) {
    try {
      INDEX = JSON.parse(fs.readFileSync(INDEX_PATH, "utf8"));
    } catch (err) {
      console.error(`Failed to load embeddings index from ${INDEX_PATH}:`, err);
      INDEX = [];
    }
  }
  return INDEX;
}

function cosine(a,b){
  let d=0,na=0,nb=0;
  for(let i=0;i<a.length;i++){
    d+=a[i]*b[i];
    na+=a[i]*a[i];
    nb+=b[i]*b[i];
  }
  return d/(Math.sqrt(na)*Math.sqrt(nb)+1e-8);
}

export function createEmbeddingRetriever(openai, embeddingModel = process.env.EMBEDDING_MODEL || "text-embedding-3-small") {
  const index = loadIndex();
  
  return async function getRelevant(query, { k=3, charLimit=2500, minScore=0.7 } = {}) {
    if (!index || index.length === 0) {
      console.warn("Embeddings index is empty or not loaded");
      return { context: "", matches: [] };
    }
    
    try {
      const q = await openai.embeddings.create({ model: embeddingModel, input: query });
      const qv = q.data[0].embedding;
      
      const scored = index.map(doc => ({ doc, score: cosine(qv, doc.embedding) }))
                          .sort((a,b)=>b.score-a.score);
      
      const picked = [];
      let total = 0;
      for (const {doc, score} of scored) {
        if (picked.length >= k) break;
        picked.push({ ...doc, score });
        total += doc.text.length;
        if (total > charLimit) break;
        if (picked.length >= 1 && score < minScore) break;
      }
      
      const context = picked.map(p => `### ${p.title} (src: ${p.source})\n${p.text}`).join("\n\n");
      return { context, matches: picked };
    } catch (err) {
      console.error("Error creating embeddings for query:", err);
      return { context: "", matches: [] };
    }
  };
}