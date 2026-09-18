# Academic theses and reports — the Thai deltas

**English signpost you already follow:** APA / Chicago manuscript conventions and the university's thesis template — front matter, chapters, captions, reference list, one consistent style. Keep that structure. In Thailand **the institution's own manual is the only authority for page setup**; there is no national page standard for theses. This file records what verified manuals say, side by side, so an agent stops filling gaps with US defaults. Every number names its manual:

- **MFU** — มหาวิทยาลัยแม่ฟ้าหลวง, คู่มือการจัดทำวิทยานิพนธ์ ระดับบัณฑิตศึกษา, ฉบับปรับปรุง พ.ศ. 2568, ch. 3 (`mfu-thesis`, ✓)
- **KMUTT-Eng** — มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี คณะวิศวกรรมศาสตร์, คู่มือการเขียนและพิมพ์วิทยานิพนธ์ ระดับบัณฑิตศึกษา, ฉบับปรับปรุง 1 ตุลาคม 2560, parts 8 and "รายละเอียดเพิ่มเติม" (`kmutt-thesis`, ✓)
- **CU** — จุฬาลงกรณ์มหาวิทยาลัย, คู่มือการพิมพ์วิทยานิพนธ์ 2548 (`chula-thesis`, ⚠️ the manual exists; it could not be read on the stamp date, so no value from it is quoted here — ask the institution or reach the manual directly)
- **MU** — มหาวิทยาลัยมหิดล thesis format (`mahidol-thesis`, ⚠️ the manual exists; it could not be read on the stamp date, so no value from it is quoted here — ask the institution or reach the manual directly)

A ⚠️ source is named, never quoted (`sources.md`), so CU and MU appear below only as "manual exists; values not verified". Where MFU and KMUTT-Eng disagree, both values are listed. Ask which institution before choosing; never blend two manuals.

## Page setup

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| paper | US Letter | A4, white, 80 g, one side (KMUTT-Eng); CU ⚠️ manual exists, values not verified | `kmutt-thesis`, `chula-thesis` (⚠️) |
| margins | 1 inch all round | MFU: top and left 1.5 in, right and bottom 1 in · KMUTT-Eng: left 4 cm, right 2 cm, top 3 cm, bottom 2 cm · CU ⚠️ and MU ⚠️: manuals exist, values not verified | `mfu-thesis`, `kmutt-thesis`, `chula-thesis` (⚠️), `mahidol-thesis` (⚠️) |
| body font (Thai thesis) | Times New Roman 12 | MFU: TH Sarabun New for Thai and English text, Arabic digits in the same font · KMUTT-Eng: AngsanaUPC 16 for body, 18–22 bold for headings; page numbers AngsanaUPC 16 | `mfu-thesis`, `kmutt-thesis` |
| body font (English thesis) | — | MFU: Times New Roman · KMUTT-Eng: Times New Roman 12 body, 13–15 bold headings | `mfu-thesis`, `kmutt-thesis` |
| line spacing (Thai thesis) | double | MFU: single throughout · KMUTT-Eng: 1.15 lines; English theses 1.5 in both | `mfu-thesis`, `kmutt-thesis` |
| alignment | left or justified | MFU: Thai distributed justification (กระจายไทย = `w:jc w:val="thaiDistribute"`, see `channels.md`) and no over-wide gaps between words | `mfu-thesis`, `iso29500` |
| paragraph indent | 0.5 in | MFU: about 0.5 in; each deeper level adds about 0.25 in | `mfu-thesis` |
| end of line | hyphenate | never split a word across lines; carry the whole word down; keep a name on one line (MFU); CU ⚠️ manual exists, its own example word not verified | `mfu-thesis`, `chula-thesis` (⚠️) |
| new paragraph near page foot | widow/orphan control | MFU: move the paragraph to the next page when too little space remains, or judge by heading | `mfu-thesis` |

## Pagination and headings

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| front matter numbers | lowercase roman i, ii, iii | KMUTT-Eng: Thai theses use **Thai letters** in alphabet order (ก ข ค), English theses roman i ii iii · MFU: **no page numbers** in the front matter | `kmutt-thesis`, `mfu-thesis` |
| body numbers | bottom centre | top **right** in both: MFU from page 1 of chapter 1, at a set distance from the top and right edges; KMUTT-Eng Arabic, top right, same distance throughout · CU ⚠️ manual exists, values not verified | `mfu-thesis`, `kmutt-thesis`, `chula-thesis` (⚠️) |
| unnumbered pages | title page only | KMUTT-Eng: the first page of every chapter and every appendix is counted but not printed · CU ⚠️ manual exists, values not verified | `kmutt-thesis`, `chula-thesis` (⚠️) |
| landscape pages | rotate number | MFU: number at bottom right, positioned to line up with portrait pages | `mfu-thesis` |
| chapter opening | "Chapter 1" + title | MFU: new page; `บทที่ 1` centred, 18 pt bold; title two lines below, centred, 18 pt bold; a long title breaks into an inverted-triangle shape · CU ⚠️ manual exists, values not verified | `mfu-thesis`, `chula-thesis` (⚠️) |
| heading levels | styles H1–H3 | MFU: level `1.1` flush with the margin, about two character-widths between number and title, two blank lines before; level `1.1.1` indented; lower levels 16 pt regular | `mfu-thesis` |
| table captions | "Table 1" | MFU: `ตารางที่ 2.1` (chapter.number, the label bold) + two character-widths + title in regular weight; one-line captions centred, longer ones left-aligned; two blank lines (24 pt) after the table; horizontal rules only, double lines at top and bottom; continuation `ตารางที่ 2.1 (ต่อ)` with the header row repeated | `mfu-thesis` |
| figure captions | "Figure 1" | MFU: `ภาพที่` + chapter.number, label bold, title regular; figure = pictures, charts, maps, diagrams, graphs, chemical structures; caption position ⚠️ not read | `mfu-thesis` |

## References, abstracts, language

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| citation style | APA 7 or Chicago | MFU permits APA, Vancouver, Chicago or Turabian — pick one and follow the manual's Thai examples | `mfu-thesis` |
| reference list order | alphabetical | KMUTT-Eng: a Thai-language thesis lists Thai references first, then English; an English thesis the reverse | `kmutt-thesis` |
| Thai author names | surname, initials | Thai authors are listed by given name then surname, as printed (`สมชาย ใจดี`), not inverted | `kmutt-thesis` (example) |
| years | CE | Thai sources carry B.E. years (`2538`) | `kmutt-thesis` (example) |
| abstracts | one abstract | MFU requires both a Thai and an English abstract; order ⚠️ not stated in the pages read | `mfu-thesis` |
| Thai abstract style | — | KMUTT-Eng: no commas in the Thai abstract except inside numbers; avoid passive; use ORST-coined terms (`สมบัติ` for property, not `คุณสมบัติ`) | `kmutt-thesis` |
| spacing inside the text | — | KMUTT-Eng: one space between numbers and letters, between Thai and English, before `(` and after `)`; none before `,` `:` `;` and one after | `kmutt-thesis` |
| ไม้ยมก | — | KMUTT-Eng states no ไม้ยมก rule of its own (its manual's own body text spaces ๆ inconsistently); follow ORST — one space before and after | `kmutt-thesis` (no rule stated), `orst-punct` |
| place names in English | — | MFU: Province, District, Sub-district, Area, Sub-area for จังหวัด, อำเภอ, ตำบล, เขต, แขวง | `mfu-thesis` |

## Book and print variant

A thesis rule set is not a book rule set. For a printed book: two-sided printing needs **mirror margins** (the binding edge alternates), trade sizes such as B5 or A5 replace A4, and running heads come from the publisher's template. No Thai authority for book page setup was verified; take every value from the printer or publisher (`house`).

## Common failures (from a measured review of an agent page-setup tool)

- One manual's margins (or a generic 3.81 cm binding edge) applied to every document — letters, forms, exam papers, journal articles — and to every section, flattening landscape table pages and cover pages.
- Paper limited to A4 and Letter; no B5/A5; no mirror margins for two-sided print.
- Roman `i ii iii` front matter in a Thai thesis, bottom-centre numbers, "Chapter 1" headings, the opening page numbered.
- Headings detected by regex: body lines starting with `2.5 ล้านบาท` or a version or date (`1.2.3`, `5.9.2569`) turned into bold headings; `บทที่ 1 บทนำ` on one line or unnumbered headings missed.
- One line-spacing value for the whole book although the manual sets tables, footnotes and references differently.
- Caption, footnote, TOC, header and footer styles left at Word's English defaults (9–11 pt), so captions shrink next to 16 pt Thai body text.
- A first-line indent set on Normal and inherited by table cells, captions, TOC entries and page-number footers.
- Heading sizes and centring hard-coded, hanging indents on numbered headings removed.
- Colors, highlights, cell shading and paragraph borders stripped wholesale — including hyperlinks, data-bearing table shading and reviewer marks — or stripped only partly (direct formatting cleared, table-style colors left).
- Tracked changes and comments left in the "final" file.
- A report that claims the file "meets the national standard and is ready to submit"; claim only the institution's manual that was applied.
- Documentation saying one indent (1.25 cm) while the tool writes another (1.27 cm).
