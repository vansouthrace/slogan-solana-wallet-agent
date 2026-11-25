import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Your Solana wallet finally has a butler: it pays, swaps, and guards — you just live.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}, words: ${entry.split(/\s+/).length}`);
