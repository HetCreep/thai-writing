# UI strings and i18n files — the Thai deltas

**English signposts you already follow:** Material writing (`material`, ⚠️ page not readable, named only), Apple HIG Writing (`apple-hig`: pick a voice, be clear, label buttons with verbs, write with localization in mind), Microsoft UX text (`ms-writing`), CLDR/ICU for formats (`cldr`). Keep them. The Thai authority for product voice is Microsoft's Thai localization guide (`ms-thai`); the format facts come from CLDR 48 as shipped in ICU, checked on 2026-09-16 (see "Measured" in `sources.md`). The universal core is not repeated.

## Voice, pronouns, strings

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| user address | "you" | `คุณ` where a subject is needed; most commands and labels have no subject at all | `ms-thai` |
| product/system as speaker | "we" | `เรา` is acceptable in explanatory text (`เราจะเปิดใช้งาน Windows ให้แก่คุณ`) | `ms-thai` |
| "I" in labels ("My files") | first person | `ของฉัน` (`เอกสารล่าสุดของฉัน`); ฉัน is the gender-neutral choice | `ms-thai` |
| polite particles | — | no ครับ or ค่ะ in UI; politeness comes from word choice | `ms-thai` (warm, clear voice), `house` |
| formality | conversational | conversational but not slang; AI prompt strings take a formal tone | `ms-thai` |
| gendered generics | avoid | no generic เขา or เธอ; roles or `ของตน` | `ms-thai` |
| buttons | verb labels ("Save") | bare Thai verb or verb phrase (`บันทึก`, `ยกเลิก`), no subject, no end mark | `apple-hig`, `ms-thai` |
| "Cannot ..." errors | varied English | standard openings: `ไม่สามารถ...` (cannot, failed to), `ไม่พบ...` (cannot find), `หน่วยความจำไม่เพียงพอ` (not enough memory) | `ms-thai` |
| progress | `Saving…` | `กำลังบันทึก...` | `ms-thai` |
| sentence end | period | removed; keep `?` only for a real question | `ms-thai` |
| colon in labels | `Name:` | kept in UI strings | `ms-thai` |
| passive | "File was deleted" | active or subjectless: `ลบไฟล์แล้ว` | `ms-thai` |
| counts | `3 items` | number + classifier: `3 รายการ` | `ms-thai` |

## Layout and line breaking

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| where lines break | at spaces | Thai has break opportunities only where a dictionary finds word ends; UAX #14 class SA "requires morphological analysis" and, without it, is treated as AL — the whole Thai run has no break and overflows | `uax14` |
| CSS | `word-break: break-all` for long tokens | never `break-all` on Thai: it treats SA letters as ideographs and breaks inside words; keep `normal` and set `lang="th"` so the engine can pick its dictionary | `css-text` |
| native apps | platform line breaker | use the ICU/platform break iterator; ICU applies its Thai dictionary automatically | `icu-boundary` |
| JS segmentation | split on spaces | `Intl.Segmenter('th', {granularity: 'word'})` (measured: `ภาษา` `ไทย` `ไม่มี` ...) | `cldr` (measured) |
| truncation | cut at N chars and append `…` | cut on **grapheme** boundaries (`Intl.Segmenter` granularity `grapheme`); a code-unit cut can strand a tone mark or split น้ำ | `cldr` (measured), `house` |
| length | English string length | plan for growth and for taller lines (stacked vowels and tone marks); the core's growth figure is a planning number, not a measurement — test with real strings | `w3c-thai`, `house` |
| letter-spacing | tracking on caps labels | none on Thai — adding space after every letter separates marks from their base | `w3c-thai-gap` |
| justification | justified paragraphs | Thai justification expands the space between clusters, not letters; prefer start-aligned UI text | `ms-justify` |

## CLDR `th` facts (CLDR 48)

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| digits | Latin digits | default numbering system `latn`; native `thai` digits available — do not switch unless the product asks | `cldr` |
| number symbols | `1,234.5` | same: group `,` decimal `.`; percent pattern `#,##0%` | `cldr` |
| currency | `$1,234.50` | `฿1,234.50` (pattern `¤#,##0.00`, symbol attached) | `cldr` |
| calendar | Gregorian | `th-TH` **formats in the Buddhist calendar by default** in ICU/`Intl`: `16 ก.ย. 2569`; request `th-TH-u-ca-gregory` for Gregorian (`ค.ศ. 2026`) | `cldr` (measured) |
| date patterns | `MMM d, y` | long `d MMMM G y` (Buddhist), medium `d MMM y`, short `d/M/yy` → `16/9/69` | `cldr` |
| time | `h:mm a` | 24-hour `HH:mm`, no AM/PM | `cldr` |
| plural categories | one, other | **only `other`** (cardinal and ordinal) | `cldr` |
| sorting | code-point or English collation | locale collation: `Intl.Collator('th')` gives `ก, กา, เก, ข`; a code-point sort misplaces words that start with a leading vowel (`กา, ข, เก`) | `cldr` (measured) |
| storing years | — | store ISO/Gregorian; convert only at display. A B.E. year parsed as Gregorian is 543 years in the future | `house` |

## File mechanics

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| placeholders | `{name}`, `%s`, `%1$s`, `{{count}}` | never translated; find out what fills them and move them to Thai word order | `ms-thai` |
| non-breaking space (NBSP) | `&nbsp;` in the source string | an NBSP already present in the **source string** is kept in the Thai translation, not stripped — Microsoft's guide lists NBSP among the special characters to preserve as-is; the core's NBSP ban covers NBSP you type into prose, not one carried over from the source string. Run the checker with `--genre ui` on resource strings so a carried-over NBSP is not flagged | `ms-thai` (§4.1.9) |
| ICU MessageFormat | `{n, plural, one {...} other {...}}` | only the `other` branch is used: `{n, plural, other {# รายการ}}`; a missing `one` branch is correct, not a bug | `cldr` |
| gettext `.po` | per-language Plural-Forms header | one form (`nplurals=1; plural=0;`) | `cldr` (header syntax ⚠️ gettext manual not opened) |
| Apple `.stringsdict` / String Catalogs, Android `plurals` | one/other keys | supply `other` only | `cldr` (platform detail ⚠️ not opened) |
| `.resx`, `.json`, `.strings` | UTF-8 files | edit string values only; keys, comments for translators and markup stay verbatim; keep the file's existing encoding, no BOM added | `ucd`, `house` |
| accelerators | `&File`, access keys | ⚠️ the Thai guide's keyboard section was not read; keep the source key letter unless the product's Thai terminology says otherwise | `ms-thai` (⚠️ section not read) |
| trademarks, product names | untranslated | untranslated, unless a local legal form exists | `ms-thai` |

## Common failures

- `คุณ` inserted into every button and menu item; `กรุณา` stacked on every instruction.
- A plural branch `one {}` translated with a Thai singular, or a linter "fixing" the missing `one` branch.
- `toLocaleDateString('th-TH')` shipped where a Gregorian date was expected (or a B.E. year written back to the database).
- CSS `word-break: break-all` added to fix overflow, breaking Thai words mid-cluster.
- Sorting a Thai list with a code-point sort; truncating with `substring` and orphaning a tone mark.
