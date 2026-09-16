# Transfer table — English convention to Thai form

**When the ENGLISH convention says X, the Thai form is Y.** Use this table when translating from English or when an English-trained habit is about to leak into Thai. The columns are the same as the genre references: the topic, what the English convention does, the Thai form (with an example), and the source (`../sources.md`). Genre references override a row here for their genre (for example Netflix subtitles drop question marks); the universal core in `SKILL.md` is not repeated.

## Punctuation

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| sentence-final period | `Windows cannot connect.` | remove it; sentences are separated by one space: `Windows ไม่สามารถเชื่อมต่อได้` (ORST still lists มหัพภาค as an end mark, but prose, UI and subtitles omit it) | `ms-thai`, `netflix-th`, `orst-punct` |
| period in abbreviations | `Jan.`, `hr.` | keep the Thai abbreviation's own dots: `ม.ค.`, `ชม.`, `ตร.ม.` | `ms-thai` |
| comma after a connector | `However, ...` | space + connector, no comma: `... อย่างไรก็ตาม ...` | `ms-thai` |
| comma between clauses | `When X, Y.` | `เมื่อ X แล้ว Y` — a space, no comma | `ms-thai` |
| serial comma, Oxford comma | `A, B, and C` | `A B และ C`: spaces between items, one space before และ or หรือ | `ms-thai`, `orst-spacing` |
| commas in a number series | `Sections 2, 3 and 4` | keep the commas: `บทที่ 2, 3 และ 4` | `ms-thai` |
| commas between Latin names | `Blogger, WordPress, TypePad` | keep them in the Latin run: `Blogger, WordPress, TypePad และอื่น ๆ` | `ms-thai`, `orst-punct` |
| semicolon | `ready; starting now` | a phrase space or a conjunction; where a manual keeps `;` (lists in technical text) no space before it, one after | `house`, `kmutt-thesis` |
| colon | `To download:` / `Here's how:` | UI strings keep the colon, no space before it (`ms-thai`, `kmutt-thesis` — ORST's own rule puts a small space before and after a colon, 1.2.15.1); documentation prose replaces it with `ดังนี้` or `ได้แก่` | `ms-thai`, `kmutt-thesis` |
| em dash | `the update—released today—fixed it` | Thai does not strictly separate hyphen, en dash and em dash; prefer parentheses or a phrase space; keep `—` only when the dash is the point | `ms-thai` |
| en dash in ranges | `pages 10–25` | hyphen: `หน้า 10-25` | `ms-thai` |
| route or span "to" | `Bangkok–Chiang Mai` | spaced hyphen: `กรุงเทพฯ - เชียงใหม่` | `ms-thai` |
| hyphenation at line end | `perfor-mance` | never; carry the whole word to the next line | `mfu-thesis`, `uax14` |
| hyphenated compound modifiers | `high-performance cluster` | no hyphen; a Thai compound phrase: `คลัสเตอร์ประสิทธิภาพสูง` | `house` |
| parentheses | `Text Documents (*.txt)` | same, no space inside; one space outside within Thai text: `เอกสารข้อความ (*.txt)` | `ms-thai`, `kmutt-thesis` |
| quotation marks | `"Save"` | same use with curly marks: “บันทึก”; a quote may be dropped when it only marks a UI name | `ms-thai` |
| nested quotes | `"He said 'no'"` | ‘ ’ inside “ ” | `netflix-th` |
| ellipsis | `Downloading…` | three dots: `กำลังดาวน์โหลด...`; Netflix subtitles use the single `…` character | `ms-thai`, `netflix-th` |
| question mark | `Delete "%s"?` | kept after a real question (`...หรือไม่?`); may be omitted when the English is a polite request, not a question | `ms-thai`, `orst-punct` |
| exclamation mark | `Done!` | sparingly, attached to the word | `netflix-th` |
| possessive apostrophe | `the user's files`, `My Documents` | `ของ` phrase: `ไฟล์ของผู้ใช้`, `เอกสารของฉัน` | `ms-thai` |
| italics for emphasis or foreign words | *italic* | Thai has no italic habit (Netflix bans italics in Thai subtitles); carry emphasis with word choice, quotes or bold | `netflix-th`, `house` |
| underline for emphasis | underline | avoid under Thai text — the line collides with below-base vowels; use bold | `house` |

## Case, numbers, dates, units

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| title case and sentence case | `Account Settings` | Thai letters have no case; nothing to apply. Latin words keep their own casing | `ucd` |
| ALL CAPS | `WARNING` | impossible in Thai; use bold or a stronger word (`คำเตือน`) | `ucd`, `house` |
| spelling out small numbers | AP/Chicago one–nine | mirror the source: a digit stays a digit, a word becomes a Thai word | `ms-thai` |
| counted nouns | `3 oranges` | number + noun + classifier: `ส้ม 3 ผล` | `ms-thai` |
| ordinals | `step 2`, `2nd step` | `ขั้นตอนที่ 2`, `บทที่ 2`; no `st/nd/rd/th` | `ms-thai` |
| thousands and decimals | `1,234.5` | same symbols: `1,234.5` | `cldr` |
| currency | `$1,234.50`, `THB 1,234.50` | `฿1,234.50` (symbol attached) or `1,234.50 บาท` | `cldr`, `ms-thai` |
| percent | `30%` | `30%` | `cldr` |
| units | `640 bytes`, `640 KB`, `5 km` | spelled-out units in Thai (`640 ไบต์`); unit symbols stay Latin (`640 KB`, `5 km`) | `ms-thai` |
| long date | `September 16, 2026` | `16 กันยายน 2569` (day, month, B.E. year) | `cldr`, `saraban` |
| abbreviated date | `Sep 16, 2026` | `16 ก.ย. 2569` | `cldr` |
| numeric date | `9/16/26` | `16/9/69` (day first, B.E. two-digit year) | `cldr` |
| clock time | `2:30 PM` | `14:30` in UI; `14.30 น.` in prose | `cldr`, `house` |

## Grammar, register, names

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| passive voice | `The file was deleted.` | active or subjectless: `ลบไฟล์แล้ว` | `ms-thai` |
| pronoun "it" | `let it float` | drop or repeat the noun, not มัน: `ให้ลอยอยู่` | `ms-thai` |
| progressive -ing | `Printing…` | `กำลังพิมพ์...` | `ms-thai` |
| "you" | `you can ...` | `คุณ` or no subject; avoid a `คุณสามารถ` on every line | `ms-thai` |
| "I" | `I` in examples | `ฉัน` | `ms-thai` |
| generic he or she | `he or she can` | a role noun, `ของตน`, or `คุณ` — no generic เขา or เธอ | `ms-thai` |
| idioms and colloquialisms | `a piece of cake` | translate the meaning, or omit if nothing is lost; swap in a Thai idiom only when it fits exactly | `ms-thai` |
| courtesy title + name | `Mr. Somchai Jaidee` | title attached, one space before the surname: `นายสมชาย ใจดี` | `orst-spacing` |
| company suffix | `ABC Co., Ltd.` | `บริษัท เอบีซี จำกัด` (space before จำกัด) | `orst-spacing` |
| addresses | comma-separated parts | parts separated by spaces | `orst-spacing` |
| "e.g." | `e.g. A, B` | `เช่น` with a space before and after | `orst-spacing` |
| "etc." | `A, B, etc.` | `A B เป็นต้น` (space before เป็นต้น) or `ฯลฯ` | `orst-spacing`, `orst-punct` |

## Lists, headings, loanwords, what stays English

| topic | English signpost | Thai delta | source |
|---|---|---|---|
| list item end marks | period on sentence items | no period on any item | `ms-thai` |
| gerund headings | `Installing the app` | `การติดตั้งแอป` or `วิธีติดตั้งแอป` | `house` |
| acronyms | `CPU`, `LAN`, `TCP/IP` | mostly unchanged; a few established ones localized (`ซีพียู`, `พีซี`) | `ms-thai` |
| loanwords: tone marks | `coke`, `coma` | no tone marks in transliteration unless a Thai homograph would confuse: `โค้ก`, `โคม่า` | `orst-translit-en` |
| loanwords: double letters | `football`, `cell` | one letter in general words (`ฟุตบอล`); both kept, the last silenced, in technical words and proper names (`เซลล์`) | `orst-translit-en` |
| loanwords: silent letters | `horn`, `Windsor` | mark with ทัณฑฆาต: `ฮอร์น`, `วินด์เซอร์` | `orst-translit-en` |
| established loanwords | `chocolate`, `gas` | keep the dictionary forms already in use: `ช็อกโกแลต`, `แก๊ส` | `orst-translit-en` |
| checking one word | guess | look it up in ORST's transliteration database | `orst-translit-db` |
| code, commands, paths, placeholders | code font | never translated: `npm install`, `%s`, `{0}` | `google-dev`, `ms-thai` |
| product and trademark names | as registered | untranslated unless an approved local legal form exists | `ms-thai` |
