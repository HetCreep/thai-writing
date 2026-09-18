# Sources — the bibliography every rule cites

Every row in every reference cites one `id` from this table. `stamp` is the day the assembler opened the document (or tried to); `revalidate` is stamp + 180 days. ✓ = opened and read at the URL on the stamp date. ⚠️ = could not be read (the reason is given) — a ⚠️ source is named, never quoted, and a rule resting on it says so. `house` is not a source: it marks a convention this skill chose where no authority speaks.

The machine-readable copy is `sources.json` (same ids, same fields) for a watcher that re-checks the pages.

## Thai authorities

| id | name · what it governs | URL | edition / date | stamp | revalidate | status |
|---|---|---|---|---|---|---|
| `orst-spacing` | สำนักงานราชบัณฑิตยสภา, หลักเกณฑ์การเว้นวรรค — sentence-end space, phrase spaces, names and titles, company and address parts, lists, Thai–foreign script | https://www.orst.go.th/iwfm_modal.asp?i=3529352MTG5813223326234222622&m=n | in หลักเกณฑ์การใช้เครื่องหมายวรรคตอนและเครื่องหมายอื่น ๆ (printing 6) | 2026-09-16 | 2027-03-15 | ✓ |
| `orst-punct` | สำนักงานราชบัณฑิตยสภา, หลักเกณฑ์การใช้เครื่องหมายวรรคตอนฯ — pages มหัพภาค, ไม้ยมก, ไปยาลน้อย, วงเล็บ, ปรัศนี | http://legacy.orst.go.th/?page_id=10387 (also 10422, 10427, 10431) | printing 6, revised (ฉบับราชบัณฑิตยสถาน) | 2026-09-16 | 2027-03-15 | ✓ (HTTP only — the site's HTTPS port refuses the connection; fetch as `http://`) |
| `orst-translit-en` | ประกาศสำนักนายกรัฐมนตรี เรื่อง หลักเกณฑ์การทับศัพท์ภาษาอังกฤษ — English loanword spelling | `http://legacy.orst.go.th/wp-content/uploads/2015/03/หลักเกณฑ์ทับศัพท์อังกฤษ2532.pdf` | ราชกิจจานุเบกษา เล่ม 106 ตอนที่ 153, 14 กันยายน 2532 | 2026-09-16 | 2027-03-15 | ✓ |
| `orst-translit-db` | สำนักงานราชบัณฑิตยสภา, ระบบฐานข้อมูลคำทับศัพท์ — per-word lookup | https://transliteration.orst.go.th/ | live | 2026-09-16 | 2027-03-15 | ✓ reached (no entry quoted) |
| `saraban` | ระเบียบสำนักนายกรัฐมนตรีว่าด้วยงานสารบรรณ พ.ศ. 2526 with ฉบับที่ 2 — letter types, letter parts (ข้อ 11–12), date form, ชั้นความเร็ว (ข้อ 28), paper (ข้อ 74–76), salutation table (ภาคผนวก 2) | https://www.opm.go.th/media1/temp/pitthais/CentralReg/6govtdoc2526.pdf | ราชกิจจานุเบกษา เล่ม 122 ตอนพิเศษ 99 ง, 23 กันยายน 2548 | 2026-09-16 | 2027-03-15 | ✓ |
| `saraban-3` | ระเบียบฯ (ฉบับที่ 3) พ.ศ. 2560 — amendment | https://icead.kku.ac.th/docs/2564-sarabun-4/ (listing only) | 2560 | 2026-09-16 | 2027-03-15 | ⚠️ existence seen in a university listing; text not opened |
| `saraban-4` | ระเบียบฯ (ฉบับที่ 4) พ.ศ. 2564 — electronic correspondence | https://laws.md.go.th/laws-implement/home/detail/81/?sID=81 | 2564 | 2026-09-16 | 2027-03-15 | ✓ title and dates only; articles not read |
| `opm-typing` | หนังสือสำนักนายกรัฐมนตรี ที่ นร 0106/ว 2019 and คำอธิบายการพิมพ์หนังสือราชการภาษาไทยด้วยโปรแกรมการพิมพ์ในเครื่องคอมพิวเตอร์ — TH SarabunPSK 16 pt, margins, spacing, garuda; cites มติคณะรัฐมนตรี 7 กันยายน 2553 (13 national fonts) | https://www.opm.go.th/media1/temp/panidapa/File/template/Explain_Typing_.pdf · https://www.opm.go.th/media1/temp/panidapa/File/template/CN20189.pdf | November 2553 | 2026-09-16 | 2027-03-15 | ✓ (scanned; read as images) |
| `gov-thai-digits` | NSTDA gov-dx, การใช้เลขไทยในเอกสารราชการ — secondary summary of the cabinet policy on Thai numerals and B.E. years | https://pub.nstda.or.th/gov-dx/thai-number-format/ | undated | 2026-09-16 | 2027-03-15 | ✓ secondary; the resolution itself ⚠️ not opened |
| `mfu-thesis` | มหาวิทยาลัยแม่ฟ้าหลวง, คู่มือการจัดทำวิทยานิพนธ์ ระดับบัณฑิตศึกษา — page setup ch. 3 | `https://postgrads.mfu.ac.th/wp-content/uploads/2023/04/คู่มือการจัดทำวิทยานิพนธ์-2568_1.pdf` | ฉบับปรับปรุง พ.ศ. 2568 | 2026-09-16 | 2027-03-15 | ✓ |
| `kmutt-thesis` | มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี คณะวิศวกรรมศาสตร์, คู่มือการเขียนและพิมพ์วิทยานิพนธ์ ระดับบัณฑิตศึกษา | https://eng.kmutt.ac.th/wp-content/uploads/2025/06/THESIS-DISSERTATIOMN-PREPARATION-THAI-MANUAL.pdf | ฉบับปรับปรุง 1 ตุลาคม 2560 | 2026-09-16 | 2027-03-15 | ✓ |
| `chula-thesis` | บัณฑิตวิทยาลัย จุฬาลงกรณ์มหาวิทยาลัย, คู่มือการพิมพ์วิทยานิพนธ์ | https://www.grad.chula.ac.th/download/thesis.pdf | 2548 | 2026-09-16 | 2027-03-15 | ⚠️ bot wall on the stamp date; numbers carried from this house's reading of 2026-09-05 |
| `mahidol-thesis` | Faculty of Graduate Studies, Mahidol University — thesis format | https://graduate.mahidol.ac.th/Thesis_format/main_thesis.aspx | current | 2026-09-16 | 2027-03-15 | ⚠️ connection refused; figures seen only in a search snippet |

## Vendor, platform and standards sources

| id | name · what it governs | URL | edition / date | stamp | revalidate | status |
|---|---|---|---|---|---|---|
| `ms-thai` | Microsoft Thai Localization Style Guide — voice, pronouns, punctuation, numbers, placeholders, error phrases | https://aka.ms/thai-styleguide | PDF revised 2024-09-05 | 2026-09-16 | 2027-03-15 | ✓ |
| `ms-writing` | Microsoft Writing Style Guide (English signpost) | https://learn.microsoft.com/en-us/style-guide/welcome/ | 2025-01-08 | 2026-09-16 | 2027-03-15 | ✓ |
| `google-dev` | Google developer documentation style guide — code in text; writing for a global audience | https://developers.google.com/style/code-in-text | 2026-01-06; global page 2026-08-25 | 2026-09-16 | 2027-03-15 | ✓ |
| `diataxis` | Diátaxis — four documentation modes | https://diataxis.fr/ | undated | 2026-09-16 | 2027-03-15 | ✓ |
| `gitbook` | GitBook docs — hint and tabs blocks; Git Sync content configuration (SUMMARY.md, .gitbook.yaml) | https://gitbook.com/docs/docs-as-code/git-sync/content-configuration | live | 2026-09-16 | 2027-03-15 | ✓ |
| `gfm` | GitHub Flavored Markdown Spec — soft line breaks | https://github.github.com/gfm/ | 0.29-gfm, 2019-04-06 | 2026-09-16 | 2027-03-15 | ✓ |
| `conv-commits` | Conventional Commits | https://www.conventionalcommits.org/en/v1.0.0/ | 1.0.0 | 2026-09-16 | 2027-03-15 | ✓ |
| `apple-hig` | Apple Human Interface Guidelines — Writing | https://developer.apple.com/design/human-interface-guidelines/writing | change note 2025-12-16 | 2026-09-16 | 2027-03-15 | ✓ |
| `material` | Material Design 3 — content design style guide | https://m3.material.io/foundations/content-design/style-guide | live | 2026-09-16 | 2027-03-15 | ⚠️ script-rendered page; text not readable |
| `netflix-th` | Netflix Thai Timed Text Style Guide | https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308-Thai-Timed-Text-Style-Guide | updated 2025-10-17 | 2026-09-16 | 2027-03-15 | ✓ |
| `netflix-en` | Netflix English (USA) Timed Text Style Guide | https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977-English-USA-Timed-Text-Style-Guide | updated 2025-12-19 | 2026-09-16 | 2027-03-15 | ✓ |
| `bbc-subtitles` | BBC Subtitle Guidelines | https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/ | live | 2026-09-16 | 2027-03-15 | ✓ reached (`<title>BBC Subtitle Guidelines`); named only, not quoted anywhere in this skill |
| `x-counting` | twitter-text configuration v3 — weighted character count | https://github.com/twitter/twitter-text/blob/master/config/v3.json | v3 | 2026-09-16 | 2027-03-15 | ✓ |
| `cldr` | Unicode CLDR — `th` plural rules chart; cldr-json `th` numbers and Buddhist calendar; checked in Node ICU 78.3 / CLDR 48 | https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html | CLDR 48 | 2026-09-16 | 2027-03-15 | ✓ |
| `icu-boundary` | ICU User Guide — boundary analysis (dictionary word breaks for Thai) | https://unicode-org.github.io/icu/userguide/boundaryanalysis/ | live | 2026-09-16 | 2027-03-15 | ✓ |
| `uax14` | Unicode UAX #14 Line Breaking — class SA | https://www.unicode.org/reports/tr14/ | Unicode 17.0.0, 2025-09-05 | 2026-09-16 | 2027-03-15 | ✓ |
| `ucd` | Unicode Character Database, UnicodeData.txt — U+0E33 decomposition, no case in Thai | https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt | latest | 2026-09-16 | 2027-03-15 | ✓ |
| `css-text` | W3C CSS Text Module Level 3 — `word-break`, segment breaks | https://www.w3.org/TR/css-text-3/ | CRD 2026-08-14 | 2026-09-16 | 2027-03-15 | ✓ |
| `w3c-thai-gap` | W3C Thai Gap Analysis — sentence spaces, justification, letter-spacing, ไม้ยมก at line start | https://www.w3.org/TR/thai-gap/ | Group Draft Note 2025-06-01 | 2026-09-16 | 2027-03-15 | ✓ |
| `w3c-thai` | W3C Thai Script Resources | https://www.w3.org/International/sealreq/thai/ | undated | 2026-09-16 | 2027-03-15 | ✓ |
| `iso29500` | ISO/IEC 29500-1 (= ECMA-376 Part 1) as quoted in the Open XML SDK reference — `w:lang`, `w:rFonts`, `w:szCs`, `w:jc` values, `w:spacing` line rule | https://learn.microsoft.com/en-us/dotnet/api/documentformat.openxml.wordprocessing.runfonts | Open XML SDK 3.0.1 reference | 2026-09-16 | 2027-03-15 | ✓ (ECMA PDF itself not opened) |
| `word-vba` | Word VBA reference — `WdParagraphAlignment`, `Font.NameBi` | https://learn.microsoft.com/en-us/office/vba/api/word.wdparagraphalignment | 2017-06-08 | 2026-09-16 | 2027-03-15 | ✓ |
| `ms-justify` | Microsoft Globalization — text justification (Thai = inter-cluster) | https://learn.microsoft.com/en-us/globalization/fonts-layout/text-justification | 2023-10-31 | 2026-09-16 | 2027-03-15 | ✓ |
| `cp874` | Microsoft — code page identifiers (874 windows-874 Thai) | https://learn.microsoft.com/en-us/windows/win32/intl/code-page-identifiers | live | 2026-09-16 | 2027-03-15 | ✓ |
| `python-docx` | python-docx source — `Font.name` writes `w:ascii` and `w:hAnsi` only | https://github.com/python-openxml/python-docx/blob/master/src/docx/text/font.py | 1.2.0 | 2026-09-16 | 2027-03-15 | ✓ |
| `docxjs` | docx (npm) source — run fonts object, `sizeComplexScript`, `language` | https://github.com/dolanmiu/docx/blob/master/src/file/paragraph/run/properties.ts | master | 2026-09-16 | 2027-03-15 | ✓ |
| `pandoc` | Pandoc User's Guide — `lang`, `--reference-doc` | https://pandoc.org/MANUAL.html | 2026-08-28 | 2026-09-16 | 2027-03-15 | ✓ |
| `drive-export` | Google Drive API `files.export` — 10 MB export limit | https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export | 2025-08-26 | 2026-09-16 | 2027-03-15 | ✓ |
| `signposts` | AP Stylebook · Chicago Manual of Style · plainlanguage.gov — named as English signposts only | https://www.apstylebook.com/ · https://www.chicagomanualofstyle.org/ · https://www.plainlanguage.gov/guidelines/ | live | 2026-09-16 | 2027-03-15 | ✓ reached (not quoted) |
| `google-fonts` | Google Fonts — Sarabun, Noto Sans Thai | https://fonts.google.com/specimen/Sarabun | live | 2026-09-16 | 2027-03-15 | ✓ reached |
| `unverified-tools` | LibreOffice headless, Adobe Acrobat export, GNU gettext plural header, Word theme-font precedence, Windows Thai supplemental fonts | — | — | 2026-09-16 | 2027-03-15 | ⚠️ not opened (gettext manual 403); rules resting on them say ⚠️ |

## Measured by this house (2026-09-16, reproducible)

- `Intl` in Node 24 (ICU 78.3, CLDR 48): `th-TH` formats with the Buddhist calendar by default (`16 ก.ย. 2569`, short `16/9/69`); `th-TH-u-ca-gregory` gives `ค.ศ. 2026`; `Intl.Collator('th')` sorts `ก, กา, เก, ข` while a code-point sort gives `กา, ข, เก`; `Intl.Segmenter('th', {granularity: 'word'})` splits `ภาษา|ไทย|ไม่มี|ช่อง|ว่าง`.
- `pdftotext` (Poppler 25.07) on four Thai PDFs: three returned ำ as U+0E4D U+0E32 (or dropped it) and inserted spaces before combining marks.
