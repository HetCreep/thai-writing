# Articles and news — the Thai deltas

**English signpost you already follow:** AP Stylebook / Chicago Manual of Style (`signposts`), the inverted pyramid, the publication's house style. Keep all of it — news judgment, lede-first structure, attribution discipline, fairness. This file lists only what changes when the copy is Thai. The universal core in `SKILL.md` (sentence-end space, ไม้ยมก, numbers spacing, B.E. years, quotes) is not repeated here.

Thai journalism has no public national stylebook this skill could verify; rows without a Thai authority are marked `house`.

## Headlines and ledes

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| headline case | AP sentence case / Chicago title case | Thai script has no letter case, so neither rule exists; a Latin brand or acronym keeps its own casing (`iPhone`, `NASA`) | `ucd` |
| headline end mark | no period; `?` for a real question | no full stop (ORST's มหัพภาค page still lists the full stop as a sentence-end mark; the authority for dropping it is the vendor Thai guide, not ORST); `?` and `!` only when the headline is a question or exclamation, attached to the last word | `ms-thai` |
| headline verbs | present tense, drop articles | Thai has no tense or article to drop; the compression habit is dropping the subject and particles — keep the actor when a reader could misattribute the claim | `house` |
| lede shape | one sentence, ~25–35 words | a Thai "sentence" is a chain of phrases joined by spaces; one lede = one idea, and a space is not a full stop the eye can find — end the lede paragraph instead of adding a second chained claim | `orst-spacing`, `house` |
| inverted pyramid | most important first | unchanged | `signposts` |

## Attribution and quotation

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| reporting verb position | `"...," she said.` (tag after) | the tag leads: `นายสมชาย กล่าวว่า “...”`; one space after ว่า before the quoted clause | `orst-spacing` |
| quote marks | curly double, single nested | same marks; the tag's comma disappears (no comma before or after a Thai quotation) | `ms-thai`, `netflix-th` |
| partial quotes, scare quotes | quotes around a word | same “ ” marks; Thai has no italic convention to fall back on, so do not italicize instead | `netflix-th` |
| courtesy titles | AP drops Mr./Ms. | the title attaches to the given name with **no space** (`นายสมชาย`, `ดร.สมศรี`); given name and surname take one space (`สมชาย ใจดี`) | `orst-spacing` |
| second reference | surname only | a Thai second reference normally uses the given name, often with the title; never surname alone | `house` |
| ranks and positions | capitalized before the name | ORST's page lists rank-and-name under both "space" and "no space" depending on the form; check the ORST examples for the specific rank before you choose | `orst-spacing` (⚠️ ambiguous) |
| royal news | — | royal vocabulary (ราชาศัพท์) is a mandatory register; follow ORST's ราชาศัพท์ guidance, never paraphrase it | `house` (ORST guidance ⚠️ not opened) |

## Numbers, dates, names of things

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| spelling out one to nine | AP/Chicago spell small numbers | the rule does not transfer; in translation mirror the source form (`3` stays `3`, `three` becomes a Thai word) | `ms-thai` |
| counted nouns | `3 oranges` | a classifier follows the number: `ส้ม 3 ผล` | `ms-thai` |
| dateline and date | `Sept. 16, 2026` | day, full or abbreviated Thai month, B.E. year: `16 กันยายน 2569`, `16 ก.ย. 2569` (date pattern itself); a small space between a day and a time is ORST's own rule (1.2.11: "เว้นวรรคเล็กระหว่างวันกับเวลา", example `...ทุกวันพฤหัสบดี เวลา ๑๐.๐๐ น."); a space between the parts *within* a date is this skill's own extension | `cldr` (date pattern), `orst-spacing` (1.2.11, day↔time), `house` (spacing within a date) |
| month abbreviations | `Jan.` | Thai abbreviations with their own dots: `ม.ค.` | `ms-thai` |
| money | `$1.2 million` | `1.2 ล้านบาท` in prose, or `฿` attached to the figure in tables; group with `,` decimal `.` | `cldr` |
| company names | `ABC Co., Ltd.` | `บริษัท ... จำกัด` with a space before จำกัด | `orst-spacing` |
| addresses and places | comma-separated | Thai address parts are separated by spaces, not commas (road, subdistrict, district, province) | `orst-spacing` |
| foreign names | as spelled | transliterate per ORST (no tone marks unless a Thai word would collide, e.g. โค้ก), and give the Latin spelling in parentheses at first mention | `orst-translit-en`, `house` |
| country and capital names | AP place-name list | use ORST's official country and capital list, not an ad hoc transliteration | `orst-translit-db` |
| lists in a sentence | serial comma | no commas: a space between items, one space before และ or หรือ before the last item | `orst-spacing`, `ms-thai` |

## Paragraphs and register

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| paragraph length | 1–3 sentences | keep the short-paragraph habit but count ideas, not full stops; a wall of space-joined phrases reads as one sentence | `house` |
| register | neutral news voice | written formal-neutral Thai; no ครับ or ค่ะ; slang only inside quotes | `house` |
| pronoun "it" | "it" freely | avoid มัน for things; repeat the noun or drop the subject | `ms-thai` |
| passive voice | AP prefers active | Thai passive with ถูก reads adversative; use active voice | `ms-thai` |
| explaining terms | parenthetical gloss | parentheses carry glosses; one space before `(` and after `)` when the parentheses sit inside Thai text | `kmutt-thesis`, `ms-thai` |

## Common failures (seen in agent output)

- Title-case logic applied to a Thai headline's embedded English, or an English-style colon kicker (`Exclusive: ...`) left untranslated.
- `ค.ศ.` years or `2026` in a Thai dateline; `Sept. 16` word order; `September 16th` ordinals.
- A comma before the quote tag or inside the closing quote, copied from AP.
- Straight ASCII quotes from a code editor instead of “ ”.
- A space between `นาย` and the given name, or no space between given name and surname.
- Foreign names respelled with tone marks (`โค๊ก`), or the same name transliterated two ways in one story.
