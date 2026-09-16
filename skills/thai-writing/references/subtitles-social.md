# Subtitles and social copy — the Thai deltas

**English signposts you already follow:** the Netflix English (USA) Timed Text Style Guide (`netflix-en`: 42 characters per line, up to 20 characters per second for adult programs and 17 for children's, two lines at most, 0–10 spelled out, italics for narration and off-screen voices), the BBC subtitle guidelines (`bbc-subtitles`, ⚠️ not reachable on the stamp date, named only), and each platform's own limits. The Thai authority is the **Netflix Thai Timed Text Style Guide** (`netflix-th`, updated 2025-10-17). A client's own Thai guide overrides both.

Netflix's Thai guide departs from the ORST rules the core follows in two places (ไม้ยมก spacing and the ellipsis character). For a Netflix deliverable, Netflix wins; run the checker with `--allow-ellipsis` and read the ไม้ยมก warnings as expected.

## Timed text (Netflix Thai guide)

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| characters per line | 42 | **35**, not counting composite characters: tone marks and above/below vowels are excluded from the count | `netflix-th` (I.3) |
| reading speed, subtitles | adult 20 cps, children 17 | adult **17** cps, children **13** cps | `netflix-th` (I.16), `netflix-en` |
| reading speed, SDH | — | adult 20 cps, children 17 cps | `netflix-th` (II.2) |
| lines | max two | max two; one line preferred; avoid two short lines; break two-liners bottom-heavy (pyramid) | `netflix-th` (I.12) |
| sentence end | period | no periods; separate sentences with a single space | `netflix-th` (I.14) |
| question marks | used | **not used** | `netflix-th` (I.14) |
| dashes | dual-speaker and interruption dashes | not used (hyphen and colon allowed only in forced narratives) | `netflix-th` (I.14) |
| ellipsis | smart ellipsis `…` | the single ellipsis character (the page prints its code point as U+2086, a typo for U+2026 `…`) | `netflix-th` (I.14) |
| exclamation | sparingly | sparingly, no space before | `netflix-th` (I.14) |
| quotes | double, single inside | double “ ” with no inner spaces, single ‘ ’ nested; mark the start and end of a quote, not every line | `netflix-th` (I.15) |
| italics | narration, songs, off-screen voices | **no italics** at all | `netflix-th` (I.11) |
| ไม้ยมก | — | one space **after** ๆ, none before (`เด็กๆ กิน`); not for consecutive homographs, not for whole sentences or long phrases, generally once per instance | `netflix-th` (I.17) |
| numbers | 0–10 spelled out | 1–10 written as Thai words, above 10 as numerals; round numbers short in words (`แปดแสน`); dates, times, scores as numerals; a number starting a sentence written out | `netflix-th` (I.13) |
| measurements, currency | convert per client | convert measurements to metric unless plot-pertinent; never convert currency | `netflix-th` (I.13) |
| abbreviations, acronyms | per English style | no space before, between or after abbreviations; no spaces or periods inside acronyms | `netflix-th` (I.1–I.2) |
| on-screen text | forced narrative, italic or caps | in parentheses (except song lyrics, archive footage, foreign dialogue); never combined with a dialogue subtitle | `netflix-th` (I.9) |
| songs | subtitle when plot-pertinent | only when plot-pertinent **and** rights are granted; opening/ending themes normally not, except children's content | `netflix-th` (I.18) |
| titles | — | use the approved Thai title; never translate a main title from scratch | `netflix-th` (I.19) |
| formality | — | pronouns and register follow kinship and hierarchy; formal speech is acceptable between strangers, not obligatory; consider era and setting | `netflix-th` (I.21) |
| SDH speaker IDs | `[MAN]` | square brackets, Thai: `[ผู้ชาย]`, `[หมอ]`; off-screen source inside the ID (`[แม่ในสาย]`) | `netflix-th` (II.4) |
| SDH sound effects | `[engine starts]` | describe the source or action without the word เสียง: `[สตาร์ทรถมอเตอร์ไซค์]` | `netflix-th` (II.8) |
| font | Arial placeholder | Arial as the proportional placeholder, white | `netflix-th` (I.8) |

### Counting a Thai line

Netflix's 35 excludes composite characters, so count **base characters**: every code point except the Thai combining marks (Unicode category Mn: ั ิ ี ึ ื ุ ู ฺ ็ ่ ้ ๊ ๋ ์ ํ ๎). ำ (U+0E33) is a spacing letter (category Lo), so this count includes it — the guide does not address ำ, so treat that as ⚠️ `house`. A plain `.length` over-counts Thai by every tone mark and vowel sign. (`netflix-th`, `ucd`)

### Line breaks

Break at phrase or clause boundaries — the places a Thai writer would put a space — and keep the result bottom-heavy (`netflix-th` I.12). Never split a word across the two lines (`mfu-thesis` 3.1.7 states the whole-word rule for print; `house` for subtitles). Without a dictionary a Thai phrase has no break opportunity at all (`uax14`), so place the line break by hand at a phrase space.

## Social copy

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| X/Twitter length | 280 weighted characters | Thai code points U+0E00–U+0E7F fall in the weight-1 range (0–4351), so a Thai post gets up to 280 code points — **every tone mark and vowel sign counts** as one; emoji and most characters above U+10FF count two | `x-counting` |
| counting in code | `string.length` | count with twitter-text; do not count graphemes (under-counts Thai) or UTF-16 units blindly | `x-counting` |
| hashtags | CamelCase for readability | Thai has no case; a space ends the tag, so a Thai hashtag is one unbroken run (`#ภาษาไทย`) | `house` (⚠️ hashtag grammar not verified) |
| register | brand voice | brand voice decides; polite particles (ครับ, ค่ะ, นะคะ) are a brand choice that also fixes a speaker gender — pick one voice and keep it | `house` |
| emoji and full stops | period at end of post | no full stop; an emoji or a line break ends the thought | `house` |
| links and mentions | inline | one space before and after a URL or `@handle` inside Thai text — ORST's spacing rule does not name URLs or `@handles`; this extends its general Thai–foreign-script spacing principle to them | `orst-spacing` (general rule), `house` (the URL/handle extension) |

## Common failures

- A 42-character English limit applied to Thai, or a Thai count that includes tone marks.
- Question marks and dialogue dashes copied from the English template into a Netflix Thai file.
- Italics used for songs or narration.
- `ๆ` spaced both sides in a Netflix file (core habit), or no space after it.
- Numbers 1–10 left as digits; currency converted to baht.
- A Thai tweet trimmed by grapheme count and rejected by the platform for length.
