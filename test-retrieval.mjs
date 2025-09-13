#!/usr/bin/env node
import { getRelevantSections } from "./netlify/functions/src/retrieval.js";

// Test queries about tournament
const queries = [
  "When is the tournament?",
  "When is the Anuenue Classic?",
  "What are the tournament dates?",
  "March 27-29 2026",
  "tournament dates",
  "anuenue classic dates"
];

console.log("Testing retrieval for tournament queries:\n");

for (const query of queries) {
  console.log(`\nQuery: "${query}"`);
  console.log("=" .repeat(50));
  const result = getRelevantSections(query, { maxSections: 3, maxChars: 2500 });
  
  if (result && result.includes("March 27")) {
    console.log("✅ FOUND: March 27-29, 2026");
    console.log("Preview:", result.substring(0, 200) + "...");
  } else if (result && result.includes("tournament")) {
    console.log("⚠️  Found tournament info but NOT the specific dates");
    console.log("Preview:", result.substring(0, 300) + "...");
  } else {
    console.log("❌ No tournament info found");
    console.log("Result:", result ? result.substring(0, 200) + "..." : "EMPTY");
  }
}