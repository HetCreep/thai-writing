# Channels — one file type, many producers

A `.docx` written by Word on the desktop, by a Python library, by pandoc, or exported from Google Docs is the same extension and a different Thai result. The genre references say **what** the text must look like; this file says **how each producer gets Thai right**. English defaults are silently wrong here because Thai is a *complex script* in office formats, needs a dictionary to break lines, and stacks marks vertically.

**The rule:** (1) detect the limbs you actually have this session (a Word install reachable by COM/PowerShell, a Google Drive connector, an Adobe/Office connector, `pandoc`, `soffice`, `python-docx`, `docx` on npm); (2) pick the channel that owns the output; (3) apply that row; (4) open the result and inspect it — the saved XML and a rendered PDF — before reporting success. Never assume one producer's behaviour for another.

## Thai in OOXML (all `.docx` producers)

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| which font slot | `w:rFonts w:ascii` / `w:hAnsi` | Thai characters use the **complex script** slot: `w:rFonts w:cs="TH Sarabun New"` (the character's Unicode range picks the slot; `w:cs` on the run forces it) | `iso29500` |
| font size | `w:sz` | Thai size comes from `w:szCs` (half-points: `32` = 16 pt); set both `w:sz` and `w:szCs` on every run and style you touch | `iso29500` |
| language tag | `w:lang w:val="en-US"` | `w:lang w:bidi="th-TH"` — `w:bidi` is the complex-script language used for proofing; `w:val` stays the Latin language | `iso29500` |
| justification | `w:jc w:val="both"` | `w:jc w:val="thaiDistribute"` (Word's Thai justification; VBA `wdAlignParagraphThaiJustify` = 9) for Thai body text; `both` stretches the few spaces a Thai line has into holes | `iso29500`, `word-vba`, `ms-justify` |
| letter spacing | `w:spacing` on runs | none on Thai runs — marks detach from their base | `w3c-thai-gap` |
| line height | `w:lineRule="exact"` | avoid on Thai paragraphs: the spec says a too-small exact line is **clipped from the top down**, which removes tone marks and upper vowels; use `auto` (240ths of a line) or `atLeast` | `iso29500` |
| theme fonts | `w:asciiTheme`, `w:cstheme` | when you set explicit fonts, remove the theme attributes on the same `w:rFonts`, or Word may keep the theme font | `house` (⚠️ precedence not verified in the spec) |
| where Thai lives | `document.xml` | also `styles.xml` (every style, not only Normal and Heading 1–3: Caption, Footnote Text, TOC, Header, Footer), `header*.xml`, `footer*.xml`, `footnotes.xml`, `endnotes.xml`, `numbering.xml` (list numbers carry their own fonts) | `iso29500`, `house` |
| page setup | one `w:sectPr` | every section has its own `w:sectPr`; change the section you mean — landscape table sections and cover sections keep their own size and margins | `iso29500`, `house` |
| hyphenation | auto-hyphenation on | off for Thai; a Thai word is carried whole to the next line | `mfu-thesis` |

## Producers

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| Word on the machine (COM / PowerShell) | `Font.Name`, `ParagraphFormat.Alignment = 3` | Alignment `9` for Thai justify; `Font.NameBi` is documented for right-to-left text — whether it sets the Thai slot is ⚠️ unverified, so save and inspect `w:rFonts w:cs`. Word breaks Thai lines with its own dictionary, which needs Thai language support installed on that machine | `word-vba`, `house` |
| python-docx | `run.font.name = ...` | `Font.name` writes only `w:ascii` and `w:hAnsi` — Thai text is untouched. Set `w:rFonts/@w:cs`, `w:szCs` and `w:lang/@w:bidi` through the element (`run._element.get_or_add_rPr()`); `Font.complex_script` forces complex-script treatment | `python-docx` |
| docx (npm) | `font: "Name"`, `size` | pass `font: { ascii, hAnsi, cs, eastAsia }`; `sizeComplexScript` defaults to `size` (set it explicitly if they differ); `language` option writes `w:lang` | `docxjs` |
| pandoc | `-o out.docx` | set `lang: th-TH` in metadata (BCP 47); fonts, margins, page size come from `--reference-doc`, so put the `w:cs` font, `w:szCs` and Thai justification into that reference file's styles; whether pandoc writes `w:bidi` for `lang` is ⚠️ unverified — inspect | `pandoc` |
| LibreOffice headless (`soffice --convert-to`) | default fonts | set the CTL (complex text layout) font and language in the source or template; its Thai line breaking and the exported `w:cs` values are ⚠️ unverified — inspect the output XML and a PDF render | `unverified-tools` |
| Google Docs / Google Drive connector | export as `.docx` or `.pdf` | exports go through Drive `files.export` (10 MB limit per export); Docs offers the Google Fonts families (Sarabun and Noto Sans Thai are on Google Fonts; whether TH Sarabun New/PSK are offered is ⚠️ unverified — check the font menu) — how Docs maps Thai fonts and `w:cs` into the exported `.docx` is ⚠️ unverified, so inspect | `drive-export`, `google-fonts` |
| Adobe / Office connector (PDF export to `.docx`) | round-trip conversion | a PDF-to-Word conversion rebuilds runs from glyphs: check that Thai runs got `w:cs` fonts, that ำ is U+0E33, and that no spaces were inserted before tone marks | `unverified-tools`, `house` (measured PDF text extraction below) |

## Other file types

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| `.pdf` (any producer) | embed or subset fonts | embed the Thai font (subsetting is fine); render and look at line ends and stacked marks before delivery | `house` |
| text **from** a PDF | copy or `pdftotext` | measured on four Thai PDFs: three extracted ำ as U+0E4D U+0E32 or dropped it, and inserted spaces before marks — run `check-thai.mjs --fix` on anything extracted, then proofread the spaces by hand | `sources.md` (measured), `ucd` |
| legacy `.doc` / plain-text Thai | "ANSI" | the Windows Thai code page is 874 (`windows-874`), the encoding of most pre-Unicode Thai files (often called TIS-620; the exact relation is ⚠️ not verified here); convert to UTF-8 once, then never save back to 874 | `cp874` |
| `.xlsx` | cell font | Thai cells need a Thai-capable font; narrow columns wrap only at dictionary breaks | `uax14`, `house` |
| `.csv` for Excel | UTF-8 CSV | the core forbids a BOM; opening Thai UTF-8 CSV without a BOM in Excel may mis-decode — import through Excel's text import with UTF-8 instead of adding a BOM | `ucd`, `house` (⚠️ Excel behaviour not verified) |
| `.pptx` | theme fonts | Thai text frames need a complex-script font in the DrawingML run properties | `house` (⚠️ element names not verified) |
| `.html` | `lang="en"` | `lang="th"` on Thai content; `word-break: normal`, never `break-all`; the renderer supplies dictionary breaks | `css-text` |
| `.md` | wrap at 80 columns | never hard-wrap Thai paragraphs (a soft break may render as a space) | `gfm`, `css-text` |

## Common failures (from a measured review of an agent page-setup tool)

- Word defaults kept for Thai: Latin justification (`both`), auto-hyphenation on, `exact` line height, character spacing on headings.
- `w:lang w:bidi` missing on every run, so proofing does not know the text is Thai (its effect on Word line breaking is ⚠️ unverified); no note that the machine needs Thai language support.
- Fonts forced on every run including code blocks (monospace alignment lost) and romanized Pali/Sanskrit or IPA runs whose chosen font had the glyphs; symbol and math fonts (Symbol, Wingdings, Cambria Math) overwritten.
- Theme font attributes left beside explicit fonts, so the report says "font changed" and Word still shows the theme font.
- Size set only on Normal and Heading 1–3; pasted runs keep an English 11–12 pt `w:sz`, and mirroring it into `w:szCs` makes Thai tiny.
- Only `document.xml` and `styles.xml` edited — headers, footers, footnotes and `numbering.xml` keep Calibri or Cordia; the page number stays in the wrong font.
- Text boxes and drawing labels treated as body paragraphs (justified, indented) inside a 3 cm box.
- Every space next to a number, a Latin word or an abbreviation turned into a no-break space: statistics paragraphs, number-filled table cells, URLs and sentence-end spaces become unbreakable runs that overflow the margin. The core bans NBSP in text for this reason.
- The reverse gap: ๆ and ฯลฯ left free to start a line while numbers were over-glued. This one needs care, because the obvious fix (a Thai-aware breaker "just keeps them together") is not what the sources show. The core requires a **space** before ๆ and ฯลฯ, and UAX #14's rule LB18 makes a space itself a break opportunity — so a breaker is allowed to break exactly at that space, stranding ๆ or ฯลฯ alone at the next line's start. The W3C Thai gap analysis names this as a live, unresolved gap: "ๆ ... should not wrap to the beginning of a line, even if surrounded by spaces." U+0E46 (ๆ, ไม้ยมก) is UAX #14 class SA on its own entry (`0E46 ; SA # Lm THAI CHARACTER MAIYAMOK`), and U+0E2F (ฯ, ไปยาลน้อย) is class SA by the range `0E01..0E30 ; SA` — complex-context, dictionary break — but that is a narrower fact than "the whole Thai block": the same file gives U+0E3F (฿) class PR, U+0E4F (๏) class AL, U+0E50–0E59 (Thai digits) class NU, and U+0E5A–0E5B (๚, ๛) class BA, none of them SA. So: **stored text** (`.md`, `.txt`, `.json`) keeps the plain space before ๆ/ฯลฯ, and the core's NBSP ban stands there. A **layout producer** — Word/OOXML, HTML, PDF, DTP — must insert a no-break before ๆ and ฯลฯ at render time, because the breaker will not reliably protect a spaced ๆ: U+00A0 or a `white-space: nowrap` span in HTML. The `.docx`/OOXML mechanism is ⚠️ unverified — no run-level break-protection property was found in the `iso29500` rows this skill has read; do not assume one exists without checking the spec or a Word round-trip. This is a render-time device, never written into stored text. (`uax14`, `w3c-thai-gap`, `house` for the HTML/`.docx` remedy itself)
- Letters with diacritics, Greek (`α β μ`) and symbols (`© °`) not treated as Latin, so they detach from their Thai context.
- Edits written into field results (TOC, cross-references) that Word regenerates on the next field update.
- Blank paragraphs and Shift+Enter line breaks used for spacing; runs of spaces or tabs used as indents.
- A Thai-only fallback font never checked: on a machine without the requested font, Thai silently renders in whatever the system substitutes.
- No preview, no undo: the tool overwrote the file and the damage was only visible after opening it.
