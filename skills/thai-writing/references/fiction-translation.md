# Fiction and novel translation — the Thai deltas

**English signpost you already follow:** the publisher's house style and the conventions of the licensed edition you translate from — paragraphing, dialogue layout, italics for thoughts, scene breaks. Keep that structure. This reference turns its typographic signals into their Thai forms. Most rows are this skill's conventions (`house`), because no Thai authority regulates fiction typography; where an ORST or platform rule applies it is cited. Anything specific to one book — character names, a pronoun table, a running glossary, a censorship list — belongs in that project's own files, never here.

## Source hierarchy

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| primary text | the edition you were licensed or commissioned to translate | that edition is the **primary** source for every sentence | `house` |
| a second-language source | — | an original-language text (when one exists) is a **secondary** check for names, wordplay, register and an ambiguous line — never the primary source unless the commission says so | `house` |
| divergence | — | when the primary edition adds, cuts or reorders material against a secondary source, follow the primary and **flag** the divergence for the human translator to decide; never import the secondary source's own typography (brackets, ruby text, a scene-break glyph) into the Thai text | `house` |

## Emphasis and quotation

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| an italic thought or silent speech | italic paragraph or clause | a Thai convention such as parentheses `( ... )` or quotation marks, per the publisher's own house style | `house` |
| one italic word for stress | italic word | Thai has no readable single-word italic; carry the stress with word choice instead | `house`, `netflix-th` (I.11 bans italics in Thai timed text) |
| quotation marks | the edition's marks | mirror the source's quote types and nesting exactly: “ ” outside, ‘ ’ nested | `house` |

## Names and loanwords

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| transliterating a name | the edition's spelling | transliterate per ORST's English-loanword rules and keep one spelling for the whole book; a project's own glossary file records it after the first lock | `orst-translit-en` |
| checking one word | guess | look it up in ORST's transliteration database before locking a spelling | `orst-translit-db` |
| ไม้ยมก and spacing | — | the universal core's rules apply unchanged: one space on both sides of ๆ (`orst-spacing`), no sentence-final full stop (`ms-thai`), one ordinary space between phrases (`house`) | `orst-spacing`, `ms-thai`, `house` |

## Scene breaks and chapter headings

There is no Thai authority for fiction page layout; follow the publisher's own house style first. Where none is given, a common convention (marked `house`) is:

| topic | convention | note |
|---|---|---|
| scene break | a short horizontal rule or a blank-line gap, matching whatever divider the primary edition uses at that point | never invent a break the primary edition does not have |
| labelled break ("Meanwhile", "The next day") | set off on its own line, blank line above and below | mirror how the primary edition sets off the label |
| chapter heading | the title alone, with blank lines separating it from the text above and below; no `บทที่` or a chapter number unless the publisher's style uses one | follow the publisher's own style for chapter openings |

## Pronouns and register

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| first and second person | "I" / "you" | English "I" and "you" have no single Thai equivalent. Thai fiction picks a first- and second-person form per character, relationship and register (`ผม`, `ฉัน`, `ข้า`, `เรา` / `คุณ`, `เธอ`, `นาย`, `แก`, among others) — the choice is the translator's, recorded in the project's own notes | `house` |
| polite particles | — | not automatic; a translator adds ครับ or ค่ะ where the scene's register calls for it | `house` |

## Common failures

- Importing the source language's own typography (brackets, ruby text, a scene-break glyph) into a Thai edition that has no such convention.
- A pronoun choice applied uniformly across every character instead of per character, relationship and register.
- A name transliterated two different ways across the same book.
