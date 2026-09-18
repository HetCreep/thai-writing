#!/usr/bin/env node
// check-thai.mjs — mechanical checks for Thai text (zero-dep, Node ≥ 20). The signpost's instrument: it catches only what a
// machine can decide (composition, spacing, stray characters); register, wording and genre judgment stay with the reader.
// Usage (from the skill folder): node scripts/check-thai.mjs [--genre <name>] [--allow-ellipsis] [--plain] [--json] [--strict] [--fix [--write]] <file>...
// From a repo checkout: node skills/thai-writing/scripts/check-thai.mjs ...
//   exit 1 when an `error` finding exists (or any finding under --strict); --fix prints the repaired text (--write saves it).
import { readFileSync, writeFileSync } from 'node:fs';

const TH = '\\u0e01-\\u0e4e';               // Thai letters, vowels, tone marks (ก..๎)
const TH_LETTER = '\\u0e01-\\u0e3a\\u0e40-\\u0e45\\u0e47-\\u0e4e'; // excludes ๆ (0e46) and ฿ (0e3f)
// Common Thai abbreviations that legitimately end in a full stop (checked as the run of letters before the dot).
const ABBR = new Set(['พ', 'ศ', 'ค', 'ม', 'ต', 'จ', 'อ', 'น', 'ร', 'ธ', 'ส', 'ว', 'ป', 'ณ', 'ดร', 'นพ', 'พญ', 'ผศ', 'รศ', 'ทพ', 'สพ', 'ภก', 'ภญ', 'พล', 'ปณ', 'บจก', 'บมจ', 'หจก', 'โทร', 'สต', 'มค', 'กพ', 'มีค', 'เมย', 'พค', 'มิย', 'กค', 'สค', 'กย', 'ตค', 'พย', 'ธค']);

export const RULES = {
  'sara-am-decomposed': { id: 'sara-am-decomposed', severity: 'error', description: 'ำ written as U+0E4D U+0E32; must be the single code point U+0E33' },
  'zero-width-space': { id: 'zero-width-space', severity: 'error', description: 'U+200B inside text' },
  'nbsp': { id: 'nbsp', severity: 'error', description: 'no-break space U+00A0 inside text (kept under --genre ui: MS Thai guide §4.1.9 says a source string\'s NBSP is carried over)' },
  'bom': { id: 'bom', severity: 'error', description: 'byte-order mark U+FEFF (at the file start or inside the text)' },
  'double-space': { id: 'double-space', severity: 'warn', description: 'two or more spaces mid-line (one space is the house digital-text convention; ORST allows a wider space, วรรคใหญ่, at sentence end) — a trailing Markdown hard break is not flagged' },
  'full-width-char': { id: 'full-width-char', severity: 'error', description: 'full-width punctuation, digit or letter (U+FF01–FF5E, U+3000–3002) leaked from CJK sources' },
  'maiyamok-space-before': { id: 'maiyamok-space-before', severity: 'warn', description: 'ไม้ยมก (ๆ) needs one space before it' },
  'maiyamok-space-after': { id: 'maiyamok-space-after', severity: 'warn', description: 'ไม้ยมก (ๆ) needs one space after it' },
  'thai-sentence-full-stop': { id: 'thai-sentence-full-stop', severity: 'warn', description: 'a Thai sentence ends with a space, not a full stop (abbreviations, numbers and URLs excepted)' },
  'thai-number-spacing': { id: 'thai-number-spacing', severity: 'warn', description: 'one space between Thai text and a number' },
  'thai-latin-spacing': { id: 'thai-latin-spacing', severity: 'warn', description: 'one space between Thai text and a Latin word' },
  'thai-semicolon': { id: 'thai-semicolon', severity: 'warn', description: 'Thai has no ";" clause connector — use a phrase space' },
  'thai-middot': { id: 'thai-middot', severity: 'warn', description: 'Thai does not use " · " as a mid-sentence separator' },
  'space-before-punct': { id: 'space-before-punct', severity: 'warn', description: 'no space before , ;' },
  'space-before-mark': { id: 'space-before-mark', severity: 'info', description: 'space before ? ! : — ORST (1.2.15.1) spaces them; vendor and thesis guides (ms-thai, netflix-th, kmutt-thesis) attach them; follow the genre' },
  'space-before-paiyannoi': { id: 'space-before-paiyannoi', severity: 'warn', description: 'ฯ attaches to its word (กรุงเทพฯ)' },
  'space-before-etc': { id: 'space-before-etc', severity: 'warn', description: 'ฯลฯ takes one space before it' },
  'ellipsis-char': { id: 'ellipsis-char', severity: 'warn', description: 'U+2026 ellipsis; the house form is three ASCII dots (genre may allow the character)' },
  'thai-digits': { id: 'thai-digits', severity: 'info', description: 'Thai digits ๐-๙; Arabic numerals by default, Thai numerals in government documents' },
};

// Shared by the check (CHECKS below) and by fixText's fixFullWidth (N9 — was two literal copies, drifted checking vs
// fixing). matchAll and String#replace both reset a global regex's lastIndex per call, so one object is safe for both.
const FULL_WIDTH_RE = /(?<![぀-ヿ㐀-鿿].{0,1})[！-～　-。](?!.{0,1}[぀-ヿ㐀-鿿])/g;

// Each check: regex over ONE line (no /m needed) or a function returning [{index, length}].
const CHECKS = [
  ['sara-am-decomposed', /ํา/g],
  ['zero-width-space', /​/g],
  ['nbsp', / /g],
  ['bom', /﻿/g],
  ['double-space', /(?<=\S) {2,}(?=\S)/g], // any run of trailing spaces at line end is a Markdown hard break, not flagged
  // full-width marks are wrong in THAI prose; inside a CJK run (a quoted Japanese/Chinese sentence) they are native. No
  // Han/Kana within 2 chars = Thai context. Shared with fixFullWidth (N9) — matchAll and replace both reset lastIndex.
  ['full-width-char', FULL_WIDTH_RE],
  ['maiyamok-space-before', new RegExp(`(?<=[${TH_LETTER}])\\u0e46`, 'g')],
  ['maiyamok-space-after', new RegExp(`\\u0e46(?=[${TH_LETTER}])`, 'g')],
  ['thai-sentence-full-stop', (line) => {
    const out = []; const re = new RegExp(`([${TH}]+)\\.(?=\\s|$)`, 'g'); let m;
    while ((m = re.exec(line))) { if (!ABBR.has(m[1])) out.push({ index: m.index + m[1].length, length: 1 }); }
    return out;
  }],
  ['thai-number-spacing', new RegExp(`[${TH_LETTER}][0-9]|[0-9][${TH_LETTER}]`, 'g')], // ฿ (U+0E3F) attaches to its number
  ['thai-latin-spacing', new RegExp(`[${TH_LETTER}][A-Za-z]|[A-Za-z][${TH_LETTER}]`, 'g')],
  ['thai-semicolon', new RegExp(`[${TH}]\\s*;\\s*[${TH}]`, 'g')],
  ['thai-middot', new RegExp(`[${TH}]\\s*\\u00b7\\s*[${TH}]`, 'g')],
  ['space-before-punct', new RegExp(`(?<=[${TH}][^\\n]{0,20}) +[,;](?![=.:?!])`, 'g')],
  ['space-before-mark', new RegExp(`(?<=[${TH}][^\\n]{0,20}) +[?!:](?![=.:?!])`, 'g')], // != !== ?. ?: are operators
  ['space-before-paiyannoi', /(?<=\S) +ฯ(?!ลฯ)/g],
  ['space-before-etc', new RegExp(`(?<=[${TH}])\\u0e2f\\u0e25\\u0e2f`, 'g')],
  ['ellipsis-char', /…/g],
  ['thai-digits', /[๐-๙]+/g],
];

// Markdown awareness (off under opts.plain): fenced blocks are skipped, inline code spans are masked with a neutral
// character of the same length (columns stay true), and table rows are exempt from the double-space rule only.
const MASK = '░';
function prepare(rawLine, state, opts) {
  if (opts.plain) return { line: rawLine, skip: false, table: false };
  if (/^\s*(```|~~~)/.test(rawLine)) { state.fenced = !state.fenced; return { line: rawLine, skip: true, table: false }; }
  if (state.fenced) return { line: rawLine, skip: true, table: false };
  const line = rawLine.replace(/`[^`\n]*`/g, (m) => MASK.repeat(m.length));
  return { line, skip: false, table: /^\s*\|/.test(rawLine) };
}

export function checkText(text, opts = {}) {
  const findings = [];
  const lines = String(text).split(/\r?\n/);
  const state = { fenced: false };
  lines.forEach((rawLine, i) => {
    const { line, skip, table } = prepare(rawLine, state, opts);
    if (skip) return;
    for (const [rule, matcher] of CHECKS) {
      if (rule === 'ellipsis-char' && opts.allowEllipsisChar) continue;
      if (rule === 'thai-digits' && opts.genre === 'gov') continue;
      if (rule === 'nbsp' && opts.genre === 'ui') continue;
      if (rule === 'double-space' && table) continue;
      const hits = typeof matcher === 'function' ? matcher(line) : [...line.matchAll(matcher)].map((m) => ({ index: m.index, length: m[0].length }));
      for (const h of hits) {
        findings.push({ rule, severity: RULES[rule].severity, line: i + 1, col: h.index + 1,
          snippet: line.slice(Math.max(0, h.index - 12), h.index + h.length + 12) });
      }
    }
  });
  return findings;
}

// Safe mechanics only — every replacement is semantics-preserving. Judgment rules (full stop, double-space, spacing
// around numbers, ไม้ยมก) are reported, never auto-fixed. Runs through the same markdown-awareness path as checkText
// (fenced blocks and inline code spans are left byte-for-byte alone; --plain turns that off for both).
function fixFullWidth(str) {
  return str.replace(FULL_WIDTH_RE, (c, offset, s) => {
    const code = c.codePointAt(0);
    if (code >= 0xff01 && code <= 0xff5e) return String.fromCharCode(code - 0xfee0);
    // U+3000/3001/3002 map to a space, unless a space already sits next to this mark (N8) — drop it there instead of
    // writing a second one.
    return s[offset - 1] === ' ' || s[offset + c.length] === ' ' ? '' : ' ';
  });
}
function applyFixes(str, opts) {
  let out = str
    .replace(/\u0E4D\u0E32/g, '\u0E33')
    .replace(/\u200B/g, '')
    .replace(/\uFEFF/g, '');
  if (opts.genre !== 'ui') out = out.replace(/\u00A0/g, ' '); // NBSP kept verbatim for source-carried UI strings (MS §4.1.9)
  return fixFullWidth(out);
}
function fixLine(rawLine, state, opts) {
  if (opts.plain) return applyFixes(rawLine, opts);
  if (/^\s*(```|~~~)/.test(rawLine)) { state.fenced = !state.fenced; return rawLine; }
  if (state.fenced) return rawLine;
  const parts = rawLine.split(/(`[^`\n]*`)/);
  return parts.map((part) => (part.startsWith('`') && part.endsWith('`') && part.length >= 2) ? part : applyFixes(part, opts)).join('');
}
export function fixText(text, opts = {}) {
  const state = { fenced: false };
  return String(text).split('\n').map((rawLineWithCR) => {
    const hasCR = rawLineWithCR.endsWith('\r');
    const rawLine = hasCR ? rawLineWithCR.slice(0, -1) : rawLineWithCR;
    const fixed = fixLine(rawLine, state, opts);
    return hasCR ? fixed + '\r' : fixed;
  }).join('\n');
}

function main(argv) {
  const opts = { genre: null, allowEllipsisChar: false, json: false, strict: false, fix: false, write: false, plain: false };
  const files = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--genre') opts.genre = argv[++i];
    else if (a === '--allow-ellipsis') opts.allowEllipsisChar = true;
    else if (a === '--plain') opts.plain = true;
    else if (a === '--json') opts.json = true;
    else if (a === '--strict') opts.strict = true;
    else if (a === '--fix') opts.fix = true;
    else if (a === '--write') opts.write = true;
    else files.push(a);
  }
  if (!files.length) { console.error('usage: check-thai.mjs [--genre <name>] [--allow-ellipsis] [--plain] [--json] [--strict] [--fix [--write]] <file>...'); return 2; }
  let worst = 0; const report = {};
  for (const f of files) {
    let text;
    try { text = readFileSync(f, 'utf8'); }
    catch (e) { console.error(`${f}: cannot read (${e.code || e.message}) — check the path and permissions`); worst = 2; continue; }
    if (opts.fix) {
      const fixed = fixText(text, opts);
      if (opts.write) { if (fixed !== text) writeFileSync(f, fixed, 'utf8'); console.log(`${f}: ${fixed !== text ? 'fixed' : 'unchanged'}`); }
      else { if (files.length > 1) console.log(`===== ${f} =====`); process.stdout.write(fixed.endsWith('\n') ? fixed : fixed + '\n'); }
      continue;
    }
    const findings = checkText(text, opts);
    report[f] = findings;
    for (const x of findings) {
      if (x.severity === 'error' || (opts.strict && x.severity !== 'info')) worst = 1;
      if (!opts.json) console.log(`${f}:${x.line}:${x.col} ${x.severity} ${x.rule} — ${RULES[x.rule].description} | ${JSON.stringify(x.snippet)}`);
    }
    if (!opts.json && !findings.length) console.log(`${f}: clean`);
  }
  if (opts.json) console.log(JSON.stringify(report, null, 2));
  return worst;
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}` || process.argv[1]?.endsWith('check-thai.mjs')) {
  process.exitCode = main(process.argv.slice(2));
}
