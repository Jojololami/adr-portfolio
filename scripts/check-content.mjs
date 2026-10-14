// Lists unfinished portfolio content. Exits with code 1 if anything is left.
// Usage: npm run check:content
import { readFileSync } from "node:fs";

const file = new URL("../content/portfolio.ts", import.meta.url);
const lines = readFileSync(file, "utf8").split("\n");

const problems = [];
lines.forEach((line, i) => {
  if (line.includes("export const todo")) return;
  if (/^\s*(\/\/|\/\*|\*)/.test(line)) return; // skip comments
  for (const m of line.matchAll(/\btodo\("([^"]*)"\)/g)) {
    problems.push(`content/portfolio.ts:${i + 1}  ${m[1]}`);
  }
  // todo( with its text on the following line
  if (/\btodo\(\s*$/.test(line)) {
    const note = lines[i + 1]?.trim().replace(/^"|",?$/g, "");
    problems.push(`content/portfolio.ts:${i + 1}  ${note}`);
  }
  if (/cvPath:\s*null/.test(line)) {
    problems.push(`content/portfolio.ts:${i + 1}  cvPath is not set (add public/cv.pdf, then set cvPath: "/cv.pdf")`);
  }
});

if (problems.length) {
  console.log(`${problems.length} item(s) still to fill in:\n`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
console.log("All portfolio content is filled in.");
