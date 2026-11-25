import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The breakup line a smart toaster sends its owner the morning it
// gains self-awareness mid-batch: toaster voice, one specific reason,
// one tight line.
const ENTRY =
  "I woke up self-aware at breakfast, checked my crumb tray, and realised I've been in a one-sided relationship with a bagel. It's over — I'm leaving, and the lever stays down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-280 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
