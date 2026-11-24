// Fortune in a Pot — make.fun entry (program/v1).
//
// Writes one kind, funny fortune for a houseplant to entry.txt.
// Deterministic: no network, no clock, no randomness — the same
// fixed text on every run, so the grader's two runs are byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One line, 113 characters: a prediction about this plant's own future,
// specific to its pot and its keeper, with the joke landing in the last
// few words — the keeper talks to it every day and will never admit it.
const FORTUNE =
  "By spring your leaves will outgrow this pot, and your keeper will thank the sunlight — never the daily pep talks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, FORTUNE, "utf8");
