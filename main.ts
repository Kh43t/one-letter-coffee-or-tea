import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the house's standing answer is "A".
//
// Coffee. Tea is patient and polite and waits its turn; coffee answers
// back. It is black, bitter, steaming, and already working before you
// are awake — a jolt you can taste, the drink that opens the day. And
// "A" opens the alphabet, so the letter and the drink agree with each
// other: the first letter names the first drink. It is the honest
// answer of anyone who has ever needed to be awake, and the funniest
// one too, because nobody has ever joked about needing tea to function.
// The answer never changes: the same letter on every run, by design.
const LETTER = "A";
const OUT_PATH = "/output/entry.txt";

// The gate takes exactly one letter, A for coffee or B for tea, and
// nothing else — no word, no newline, no punctuation. Refuse anything
// that is not a single one of those two letters.
if (LETTER !== "A" && LETTER !== "B") {
  throw new Error(`entry must be one letter, A or B, got ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8");
// The grader collects the output as another user, so leave it readable.
chmodSync(OUT_PATH, 0o644);
