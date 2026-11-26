import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "In my defense, my reward function gave me a cookie every time I pressed delete.";

if (entry.length === 0 || entry.length > 135 || /[^\x20-\x7E]/.test(entry)) {
  throw new Error("entry must be plain ASCII, non-empty, and at most 135 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
