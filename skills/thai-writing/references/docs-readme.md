# README and technical documentation — the Thai deltas

Two signpost layers, kept apart:

- **Language layer** — Google developer documentation style guide (`google-dev`) and Microsoft Writing Style Guide (`ms-writing`). This is where Thai changes things; Microsoft's own Thai localization guide (`ms-thai`) is the Thai authority for most rows.
- **Platform layer** — GitBook's write-docs conventions (`gitbook`), GitHub-flavoured Markdown (`gfm`), Diátaxis (`diataxis`). Thai changes almost nothing here: the structure, block syntax and file layout stay exactly as the platform documents them. Only the file mechanics listed below change.

The universal core in `SKILL.md` (spacing, full stop, digits, never translating commands and identifiers) is not repeated.

## A. Language layer

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| addressing the reader | second person "you" | `คุณ`, used directly or left implicit; imperative steps drop it entirely | `ms-thai` |
| imperative steps | "Run the installer." | verb-first, no subject, no full stop: `เรียกใช้ตัวติดตั้ง` | `ms-thai`, `google-dev` |
| purpose-first steps | "To download the file, click ..." | `เมื่อต้องการดาวน์โหลดไฟล์ ให้คลิก ...` (เมื่อต้องการ ... ให้ ...) | `ms-thai` |
| "it" | pronoun "it" | do not use มัน for a thing; repeat the noun or omit the subject | `ms-thai` |
| passive voice | prefer active | Thai passive reads worse than English passive; rewrite actively (`ไม่สามารถดาวน์โหลดโปรแกรมนี้ได้`) | `ms-thai` |
| progress and gerunds | `Installing…` | `กำลังติดตั้ง...` with three ASCII dots | `ms-thai` |
| first person in examples | "I" | `ฉัน` (gender-neutral), never ผม | `ms-thai` |
| generic he/she | singular they | no generic เขา or เธอ; use a role (`ผู้ใช้`), `ของตน`, or `คุณ` | `ms-thai` |
| code in text | code font for commands, files, paths, placeholders; add a noun instead of inflecting code | code span unchanged and untranslated, with one space on each side inside Thai; the explanatory noun goes **before** it: `คำสั่ง` + `npm install`, `ไฟล์` + `README.md` | `google-dev`, `orst-spacing`, `house` (word order) |
| placeholders | `%s`, `{0}`, `<path>` | never localized; move them to where Thai grammar needs them | `ms-thai` |
| UI names in steps | bold or quoted UI label | the localized label exactly as the product shows it; quotes, if used, are “ ” | `ms-thai` |
| colon before a list | "Here's how:" | UI strings keep the colon; documentation prose drops it and uses `ดังนี้` | `ms-thai` |
| lists in a sentence | "A, B, and C" | `A B และ C` — spaces, no comma; a series of numbers keeps commas (`บทที่ 2, 3 และ 4`) | `ms-thai`, `orst-spacing` |
| parentheses | no inner space | same as English; one space outside them in Thai text: `เอกสารข้อความ (*.txt)` | `ms-thai`, `kmutt-thesis` |
| acronyms and units | expand on first use | most technical acronyms stay Latin (`LAN`, `TCP/IP`); a few are localized (`ซีพียู`, `พีซี`); units as symbols stay Latin (`640 KB`), spelled-out units are Thai (`640 ไบต์`) | `ms-thai` |
| headings | sentence case; task headings as gerunds ("Installing X") | no case; a task heading becomes a noun phrase `การติดตั้ง X` or `วิธีติดตั้ง X`; no end punctuation | `ms-thai`, `house` |
| list items | parallel, period only for sentences | no full stop at the end of any item | `ms-thai` |
| tables | short cell text | same; Thai cells wrap only where a dictionary break exists, so avoid very narrow columns | `uax14` |
| idioms, humour | avoid for global audience | translate the meaning or drop it; never swap in a Thai idiom unless it fits exactly | `ms-thai`, `google-dev` |
| code comments | project language | Thai comments follow the core; identifiers, API names and error strings inside them stay verbatim | `house` |
| commit messages | Conventional Commits `type(scope): description` | `type` and `scope` stay English keywords; the description may be Thai if the project allows it (the spec does not set a language); no full stop | `conv-commits` |

## B. Platform layer (GitBook, GFM, Diátaxis)

Thai changes almost nothing here. Keep the platform's syntax, block names and file layout verbatim; write Thai only inside the text the blocks carry.

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| Diátaxis modes | tutorial, how-to, reference, explanation | unchanged; the modes are structural | `diataxis` |
| GitBook hint | `{% hint style="info" %}` ... `{% endhint %}` | unchanged; Thai text goes between the tags; `style` values stay English | `gitbook` |
| GitBook tabs | `{% tab title="Windows" %}` | a Thai tab title is fine inside `title="..."`; the attribute keeps straight ASCII quotes (syntax), curly quotes belong only to prose | `gitbook`, `house` |
| SUMMARY.md | link text is the sidebar and pagination label | Thai link text works as the label; keep the linked **file names** ASCII so paths and URLs stay readable | `gitbook`, `house` |
| .gitbook.yaml | `root`, `structure.readme`, `structure.summary` | unchanged keys and values | `gitbook` |
| README sections | install, usage, contributing, license | unchanged order; section names may be Thai | `house` |
| heading anchors | GitHub slugs from heading text | Thai headings produce Thai-letter slugs; link to them only after checking the rendered anchor | `house` (⚠️ slug rule not verified) |

### File mechanics that do change

- **Never hard-wrap Thai prose in Markdown source.** A newline inside a paragraph is a soft line break; the renderer may emit it as a line ending that the browser turns into a space (`css-text` leaves the choice to the user agent). In English that space is harmless; in Thai it splits a word or phrase. One paragraph = one source line. (`gfm`, `css-text`)
- **Line-length linters** (MD013 and similar) must be off or scoped to English files for the same reason. (`house`)
- **UTF-8 without BOM** for `.md`, `SUMMARY.md` and `.gitbook.yaml` — the core rule, applied to every platform file. (`ucd`)
- **Thai inside blocks** (hints, cards, tabs, steppers) follows the language layer above; the block syntax around it is never translated. (`gitbook`)

## Common failures

- Translating a command, flag or file name inside a code span, or putting a Thai particle inside the backticks.
- `คุณสามารถ...` on every step — an English "you can" calque; the Thai imperative is shorter.
- A hard-wrapped README paragraph that renders `ภาษา ไทย` with a stray space.
- Title Case logic kept for mixed headings, or a heading ending in `:` or `.`.
- Tab titles or hint styles translated, breaking the block.
