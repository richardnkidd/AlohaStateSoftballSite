#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "..", "content");
const OUTPUT_FILE = path.join(__dirname, "..", "netlify", "functions", "src", "league-content.js");

// Read all markdown files
const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".md"));
const sections = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  
  // Parse the frontmatter and content
  const lines = content.split('\n');
  let inFrontmatter = false;
  let frontmatter = {};
  let textContent = [];
  
  for (const line of lines) {
    if (line === '---') {
      inFrontmatter = !inFrontmatter;
      continue;
    }
    
    if (inFrontmatter) {
      const match = line.match(/^(\w+):\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        if (key === 'tags') {
          frontmatter[key] = JSON.parse(value.replace(/'/g, '"'));
        } else {
          frontmatter[key] = value.replace(/"/g, '');
        }
      }
    } else {
      textContent.push(line);
    }
  }
  
  sections.push({
    id: frontmatter.id || path.basename(file, '.md'),
    title: frontmatter.title || path.basename(file, '.md'),
    tags: frontmatter.tags || [],
    text: textContent.join('\n').trim()
  });
}

// Generate the JavaScript file
const output = `// League content sections - auto-generated from markdown files
// Generated on: ${new Date().toISOString()}

export const SECTIONS = ${JSON.stringify(sections, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
console.log(`Updated ${OUTPUT_FILE} with ${sections.length} sections from markdown files`);