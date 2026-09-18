---
name: thai-writing
description: Signpost for drafting or editing THAI text in any genre or file type. Use it whenever the text you are about to write, or the file you are editing, contains Thai script (ก–๙) — articles and news, README and technical docs, government or legal letters, UI strings and i18n files (JSON, .po, .resx, .strings), subtitles (.srt/.vtt), social copy, chat replies, code comments, commit messages. You already follow the English style guide for the genre; this skill gives you only the Thai deltas, each anchored to a Thai authority, plus a checker for the mechanics.
license: Apache-2.0
metadata:
  version: 0.1.0
  visibility: public
---

# Thai writing — the signpost

You draft English correctly because the style guides are in your training. Thai has no such classroom inside you: the "obvious" conventions (spacing is punctuation, no full stop, ไม้ยมก, which numerals) are exactly what you will get half right. This skill does not re-teach writing. **Keep the English guide you already follow for the genre; apply the deltas below; run the checker.**

## How to use it (three moves)

1. **Name the genre** from the file or the request, pick its row in the router below, and read that reference (each one is short: only what changes in Thai).
2. **Draft with the English signpost in mind** — the structure, tone, and length rules of AP/Chicago, Google/Microsoft doc style, Material/HIG UX text, Netflix timed text, plain-language government style — and rewrite every sentence with the universal core.
3. **Run the checker on the result** — from the skill folder: `node scripts/check-thai.mjs <file>` (from a repo checkout: `node skills/thai-writing/scripts/check-thai.mjs <file>`); `--genre gov` for government documents, `--fix` for the safe mechanics. Fix every `error`; read every `warn` — a warning is a judgment call the reference explains.

## The universal core (every genre, every file type)

| rule | the English habit it replaces | Thai | source |
|---|---|---|---|
| A sentence ends with a **space**, never a full stop | `.` at the end of a sentence | `.` only in abbreviations (พ.ศ., ดร.), numbers, times, URLs. ORST's own มหัพภาค rule still lists the full stop as a sentence-end mark; the authority for dropping it is the vendor Thai style guides below — modern prose, UI text and subtitles all omit it | `ms-thai`, `netflix-th` |
| **One ordinary space** between phrases in digital text | double spacing after a period | ORST's own rule is finer: a small space (วรรคเล็ก, about the width of ก) between phrases and a wide space (วรรคใหญ่, about twice that) at the end of a sentence. One space everywhere is this skill's digital-text convention, not an ORST requirement — the checker only **warns** on a doubled space, it never errors | `house` (convention), `orst-spacing` (the underlying วรรคเล็ก/วรรคใหญ่ rule) |
| No space **before** `,` `;`; a space **after** them | — | ORST 1.2.15.3 states a space after จุลภาค (`,`) and อัฒภาค (`;`), nothing about a space before — the checker **warns** on a space before either | `orst-spacing` |
| No space **before** `? ! :`; a space **after** them | — | ORST's own rule (1.2.15.1) puts a **small space before and after** these marks (`ใคร ?`, `โอ๊ย !`); the no-space-before convention here follows the vendor and thesis guides instead, which diverge from ORST — the checker only **informs**, it never warns, so ORST-conformant text is not flagged | `kmutt-thesis` (no space before `, : ;`), `netflix-th` (no space before `!`), `ms-thai` (colon as in English) |
| **ไม้ยมก (ๆ)** takes one space on both sides | — | `เด็ก ๆ ได้` never `เด็กๆได้` | `orst-spacing` (1.2.15.1, the spacing rule), `orst-punct` (usage) |
| **ฯ** attaches to its word; **ฯลฯ** takes a space before | — | `กรุงเทพฯ` · `หมู ไก่ ฯลฯ` | `orst-spacing` (1.2.15.1/1.2.15.3, the spacing rule), `orst-punct` (usage) |
| **Numbers and Latin words** get one space on each side inside Thai | — | `เลเวล 50 แล้ว` · `ค่า HP ลด` · `30%` stays attached; the baht sign attaches (`฿0.5`) | `orst-spacing` |
| **Arabic numerals** by default; thousands `1,000`; time `14.30 น.` | `1000`, `2:30 pm` | Thai digits (๐–๙) only where a genre requires them (government documents) | `gov-thai-digits`, `cldr` |
| **ำ** is one code point (U+0E33) | — | never ◌ํ + า (U+0E4D U+0E32); never NFKC-normalise Thai text — it splits ำ | `ucd` |
| No zero-width space, no NBSP, no BOM inside text | — | a source string's own NBSP is the one exception — see `references/ui-i18n.md` | `ucd`, `house` |
| Quotes: `“ ”` for speech and titles, `‘ ’` nested | `"` `'` | double outside, single nested (`“เด็กบอกว่า ‘ผมหิว’”`); mirror the source's nesting exactly when translating — the curly form itself is this skill's convention (MS's own guide uses straight quotes in its Thai examples) | `netflix-th` (I.15, nesting), `house` (the curly form) |
| Ellipsis `...` (three ASCII dots) unless the genre allows `…` | `…` | never `..` or `....` | `house` (genre references may override, e.g. `netflix-th`) |
| Dash: `10-12` for a numeric range (hyphen) | `–` en dash | Thai does not strictly separate hyphen, en dash and em dash; ORST/MS back the hyphen for a range. Using `—` (U+2014) specifically for a stylistic dash is this skill's own convention, not stated by MS | `ms-thai` (the hyphen range), `house` (`—` as "the" dash character) |
| Full-width marks (`！？，。` U+3000) never leak from a CJK source into Thai | — | inside a quoted Japanese/Chinese sentence they stay | `house` |
| No `;` as a clause connector and no ` · ` as a mid-sentence separator | `a; b · c` | a phrase space, or a comma for a short token list | `house` (a thesis manual may keep `;`, see `references/academic-thesis.md`) |
| Buddhist-era years are **B.E.**: `พ.ศ. 2569` = 2026 | — | never treat a B.E. year as Gregorian in code or copy | `cldr`, `gov-thai-digits` |
| Register: no `ครับ/ค่ะ` unless the genre asks; pronouns per the genre reference | — | — | `house` |

Every id above is a row in `references/sources.md`; a rule marked `house` is this skill's own convention where no authority speaks.

## Genre router

| genre | English signpost you already follow | Thai deltas |
|---|---|---|
| articles, news, blog | AP / Chicago; inverted pyramid; house style | `references/articles-news.md` |
| README, technical documentation, changelogs | Google developer documentation style guide · Microsoft Writing Style Guide · Diátaxis | `references/docs-readme.md` |
| government and legal letters, complaints, contracts, policies | plain-language guidelines; business-letter conventions | `references/government-legal.md` (ระเบียบงานสารบรรณ) |
| UI strings and i18n files | Material writing · Apple HIG writing · Microsoft UX text · CLDR th-TH | `references/ui-i18n.md` |
| subtitles and timed text; social copy | Netflix Timed Text Style Guide (EN) · platform limits | `references/subtitles-social.md` (Netflix Thai TTSG) |
| fiction and novel translation | the publisher's house style | `references/fiction-translation.md` |
| academic thesis, dissertation, book and print layout | APA / Chicago manuscript conventions; the university's thesis template | `references/academic-thesis.md` (the Thai university thesis manuals) |
| any genre whose SOURCE text is English (translation, localisation, a draft written in English first) | the English convention itself | `references/transfer/en-to-th.md` — "the English convention says X, the Thai form is Y" |
| code comments, commit messages, chat replies | Conventional Commits; the project's language rule | the core above; technical terms, commands, paths, identifiers stay verbatim and untranslated |

## File-type mechanics

| file | what changes |
|---|---|
| `.md` | the checker skips fenced blocks and code spans and exempts table alignment; prose in cells is still checked |
| `.txt` corpora | CRLF or LF as the corpus already uses; **no BOM**; verify the tail after every append |
| `.json` / `.po` / `.resx` / `.strings` | strings only; placeholders (`{name}`, `%s`, `{{count}}`) stay verbatim; Thai has one plural form in CLDR; a source string's own NBSP is kept, not stripped (see `references/ui-i18n.md`); the 20–40% length-growth figure is a `house` planning number, not a measurement — test with real strings |
| `.srt` / `.vtt` | characters per line and per second per the Thai timed-text guide; no trailing full stop; line breaks at phrase boundaries |
| `.html` | `lang="th"`; word breaking needs the browser's dictionary (`word-break: normal`, never `break-all`); `<wbr>` only where a break is wanted |
| `.csv` | Thai text with commas must be quoted; UTF-8 without BOM |
| `.docx` / `.doc` / `.pdf` / `.xlsx` / `.pptx` | one extension, many producers — Google Docs, Word by COM, a library, a converter, an Office/Acrobat connector — and the Thai mechanics differ per producer (complex-script attributes, fonts, line breaking, PDF shaping): detect the limbs you have, then follow `references/channels.md` |

## Never

- Never translate a technical term, command, path, identifier, config key, model or tier name, or error string.
- Never NFKC/NFKD-normalise Thai; never "fix" ๆ or ำ by hand without the checker.
- Never guess a rule a source does not state — mark it ⚠️ house convention and move on.

## Honest bound

The checker decides mechanics only (composition, spacing, stray characters). Register, wording, tone, and whether a sentence reads as Thai are the reader's judgment — the references say what to weigh, they do not decide it. A clean checker run is not a proofread.
