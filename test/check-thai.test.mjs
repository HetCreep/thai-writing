// check-thai.mjs — tests first (RED before GREEN). Zero-dep, node:test.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkText, fixText, RULES } from '../skills/thai-writing/scripts/check-thai.mjs';

const ids = (text, opts) => checkText(text, opts).map((f) => f.rule);

test('clean Thai passes with no findings', () => {
  assert.deepEqual(checkText('เด็ก ๆ ไปโรงเรียนตอน 8 โมง แล้วกลับบ้าน\nวันนี้อากาศดี'), []);
});

test('ำ written as two code points (U+0E4D U+0E32) is an error', () => {
  const f = checkText('นํา');
  assert.equal(f.length, 1);
  assert.equal(f[0].rule, 'sara-am-decomposed');
  assert.equal(f[0].severity, 'error');
});

test('ไม้ยมก must have a space before and after', () => {
  assert.ok(ids('เด็กๆ ได้').includes('maiyamok-space-before'));
  assert.ok(ids('เด็ก ๆได้').includes('maiyamok-space-after'));
  assert.deepEqual(ids('เด็ก ๆ ได้'), []);
  assert.deepEqual(ids('เด็ก ๆ'), []);            // end of text is fine
  assert.deepEqual(ids('(เด็ก ๆ)'), []);          // closing punctuation is fine
});

test('a full stop ending a Thai sentence is a warning; abbreviations are not', () => {
  assert.ok(ids('วันนี้อากาศดี.').includes('thai-sentence-full-stop'));
  assert.deepEqual(ids('พ.ศ. 2569 และ ดร.สมชาย'), []);
  assert.deepEqual(ids('ราคา 3.5 บาท'), []);
});

test('zero-width space, NBSP, and full-width characters are errors', () => {
  assert.ok(ids('สวัส​ดี').includes('zero-width-space'));
  assert.ok(ids('สวัสดี ครับ').includes('nbsp'));
  assert.ok(ids('สวัสดี！').includes('full-width-char'));
  assert.ok(ids('ปี２５６９').includes('full-width-char'));
});

test('double-space is a warning (ORST allows a wider space, วรรคใหญ่, at sentence end); any run of trailing spaces at line end is not flagged (N7)', () => {
  assert.ok(ids('สวัสดี  ครับ').includes('double-space'));
  assert.equal(checkText('สวัสดี  ครับ')[0].severity, 'warn');
  assert.deepEqual(ids('บรรทัดแรก  \nบรรทัดสอง'), []);  // two trailing spaces = Markdown hard break, not flagged
  assert.deepEqual(ids('บรรทัดแรก   \nบรรทัดสอง'), []); // three trailing spaces likewise (N7 regression)
});

test('spacing between Thai and numbers or Latin words is a warning; % stays attached', () => {
  assert.ok(ids('เลเวล50แล้ว').includes('thai-number-spacing'));
  assert.ok(ids('ค่าHPลด').includes('thai-latin-spacing'));
  assert.deepEqual(ids('ลด 30% แล้ว'), []);
  assert.deepEqual(ids('เลเวล 50 แล้ว'), []);
});

test('semicolon or middle dot as a Thai clause connector is a warning', () => {
  assert.ok(ids('ไปตลาด; ซื้อของ').includes('thai-semicolon'));
  assert.ok(ids('ไปตลาด · ซื้อของ').includes('thai-middot'));
  assert.deepEqual(ids('a; b · c'), []);          // Latin-only context is not Thai prose
});

test('ฯ takes no space before it; ฯลฯ needs one', () => {
  assert.ok(ids('กรุงเทพ ฯ').includes('space-before-paiyannoi'));
  assert.ok(ids('หมูไก่ฯลฯ').includes('space-before-etc'));
  assert.deepEqual(ids('กรุงเทพฯ และหมู ไก่ ฯลฯ'), []);
});

test('space before , and ; is a warning; space before ? ! : is info (N1 — ORST 1.2.15.1 spaces them, ms-thai/netflix-th/kmutt-thesis attach them)', () => {
  assert.ok(ids('จริง , ใช่').includes('space-before-punct'));
  assert.ok(ids('ไปตลาด ; ซื้อของ').includes('space-before-punct'));
  assert.ok(ids('ใคร ?').includes('space-before-mark'));
  assert.ok(ids('โอ๊ย !').includes('space-before-mark'));
  assert.ok(ids('หัวข้อ : รายละเอียด').includes('space-before-mark'));
  assert.ok(!ids('ใคร ?').includes('space-before-punct'));       // ORST-style ? is not the comma/semicolon rule
  assert.equal(checkText('ใคร ?').find((f) => f.rule === 'space-before-mark').severity, 'info');
});

test('ellipsis character is a warning under the house default and allowed when the genre permits it', () => {
  assert.ok(ids('รอ…').includes('ellipsis-char'));
  assert.deepEqual(ids('รอ…', { allowEllipsisChar: true }), []);
});

test('Thai digits are info by default and silent for the government genre', () => {
  assert.ok(ids('ปี ๒๕๖๙').includes('thai-digits'));
  assert.deepEqual(ids('ปี ๒๕๖๙', { genre: 'gov' }), []);
});

test('NBSP is an error by default and silent under the ui genre (MS Thai guide §4.1.9 keeps a source string’s NBSP)', () => {
  assert.ok(ids('สวัสดี ครับ').includes('nbsp'));
  assert.deepEqual(ids('สวัสดี ครับ', { genre: 'ui' }), []);
});

test('findings carry line and column', () => {
  const f = checkText('บรรทัดแรก\nเด็กๆ');
  assert.equal(f[0].line, 2);
  assert.equal(f[0].col, 5);
});

test('fixText repairs only the safe mechanics and leaves judgment items alone', () => {
  const out = fixText('นํา ข้อ​ความ！ วันนี้อากาศดี.');
  assert.equal(out, 'นำ ข้อความ! วันนี้อากาศดี.');
});

test('fixText leaves NBSP alone under the ui genre and collapses it to a space by default', () => {
  assert.equal(fixText('เปิด Windows'), 'เปิด Windows');
  assert.equal(fixText('เปิด Windows', { genre: 'ui' }), 'เปิด Windows');
});

test('fixText no longer collapses double spaces (double-space is now a judgment warning, not a safe mechanic)', () => {
  assert.equal(fixText('สวัสดี  ครับ'), 'สวัสดี  ครับ');
});

test('fixText drops a replaced full-width mark instead of adding a second space next to an existing one (N8)', () => {
  assert.equal(fixText('สวัสดี。 ครับ'), 'สวัสดี ครับ');
  assert.equal(fixText('ก　 ข'), 'ก ข');
  assert.equal(fixText('ก 　ข'), 'ก ข');
  assert.equal(fixText('สวัสดีครับ。ตอนนี้'), 'สวัสดีครับ ตอนนี้'); // no adjacent space: still inserts one
});

test('fixText preserves a Markdown hard break (two trailing spaces)', () => {
  const md = 'บรรทัดแรก  \nบรรทัดสอง';
  assert.equal(fixText(md), md);
});

// Markdown awareness matters here: the instrument must not read MARKUP as prose — table alignment spaces, code spans
// quoting the very characters the rules forbid, `!=` inside an expression. --plain disables it for raw corpora.
test('fenced code blocks are not prose: nothing inside them is flagged', () => {
  const md = 'ข้อความ\n```\nหัวข้อ        ← ตัวอย่าง  … ！\nเด็กๆ\n```\nหลังบล็อก';
  assert.deepEqual(ids(md), []);
});

test('fixText leaves a fenced code block byte-for-byte alone', () => {
  const md = 'ข้อความ\n```\nx = 1    # align\n```\nหลังบล็อก';
  assert.equal(fixText(md), md);
});

test('inline code spans are masked: a forbidden character quoted in backticks is not a finding', () => {
  assert.deepEqual(ids('ห้าม `…` และ `！？` และ `เด็กๆได้` ในข้อความ'), []);
  assert.ok(ids('รอ… และ `x`').includes('ellipsis-char'));       // outside the span it still counts
});

test('fixText leaves an inline code span byte-for-byte alone', () => {
  const line = 'ใช้ `นํา！` ตรงนี้';
  assert.equal(fixText(line), line);
});

test('table rows: alignment spaces around | are not double-space findings, cell prose is still checked', () => {
  assert.deepEqual(ids('| หัวข้อ   | ค่า  |\n|---|---|\n| เด็ก ๆ  | 8 โมง |'), []);
  assert.ok(ids('| หัวข้อ | เด็กๆ |').includes('maiyamok-space-before'));
});

test('operators are not punctuation: != !== ?. ?: inside prose are not flagged', () => {
  assert.deepEqual(ids('สำหรับ r != foo และ a !== bar'), []);
});

test('--plain semantics: with markdown awareness off, a code span is prose again', () => {
  assert.ok(ids('ห้าม `…`', { plain: true }).includes('ellipsis-char'));
  assert.equal(fixText('นํา `ข้อ​ความ`', { plain: true }), 'นำ `ข้อความ`');
});

test('full-width characters inside a CJK run are not flagged by checkText nor changed by fixText; a full-width mark on Thai text is flagged and fixed', () => {
  const cjk = '例：合計は１００％になりました、以上です。';
  assert.deepEqual(ids(cjk), []);
  assert.equal(fixText(cjk), cjk);
  assert.ok(ids('สวัสดี！').includes('full-width-char'));
  assert.equal(fixText('สวัสดี！'), 'สวัสดี!');
});

test('the baht sign attaches to its number', () => {
  assert.deepEqual(ids('ราคา ฿0.5 ต่อ หน่วย'), []);
});

test('a byte-order mark is an error and fixText strips it', () => {
  assert.ok(ids('﻿สวัสดี').includes('bom'));
  assert.equal(fixText('﻿สวัสดี'), 'สวัสดี');
});

test('every rule has an id, severity, and a description', () => {
  for (const r of Object.values(RULES)) {
    assert.ok(r.id && r.severity && r.description, JSON.stringify(r));
  }
});
