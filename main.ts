// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke
// about AI coding agents to /output/entry.txt. The joke is baked in — the
// program makes no model calls and no network calls, so both runs of the
// grader write byte-identical output.
//
// The joke: "My agent's idea of 'minimal changes' is a new folder called utils2."
// (67 characters, inside the 1-280 gate; no trailing newline, by design —
// the judge reads exactly the bytes written.)
// Why this one: the setup ("minimal changes") is a promise every agent makes,
// the punchline ("utils2") is the opposite of minimal, and any developer who
// has ever opened a repo recognises the ever-growing utils/utils2/helpers
// folder at once. One line, no explanation, fresh angle.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "My agent's idea of 'minimal changes' is a new folder called utils2.");
