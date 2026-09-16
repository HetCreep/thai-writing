# thai-writing

ภาษาไทย → [README.th.md](README.th.md)

A signpost skill for AI coding agents: draft and edit **Thai** text correctly in any genre and any file type.

Agents already write good English because the style guides are in their training. Thai is not: the conventions a Thai reader absorbs by habit — spacing as punctuation, no sentence-final full stop, ไม้ยมก, which numerals, how a government letter is shaped — are exactly what every model gets half right. This skill does not re-teach writing. It tells the agent to **keep the English guide it already follows for the genre and apply only the Thai deltas**, each anchored to a Thai authority, and ships a zero-dependency checker for the mechanics.

## Install

The skill is a plain [Agent Skills](https://agentskills.io) folder — copy `skills/thai-writing/` into your agent's skills directory:

| agent | directory |
|---|---|
| Claude Code (personal) | `~/.claude/skills/thai-writing/` |
| Claude Code (project) | `<repo>/.claude/skills/thai-writing/` |
| Antigravity | `~/.gemini/config/skills/thai-writing/` |
| Codex CLI | `~/.codex/skills/thai-writing/` |
| GitHub Copilot CLI / any Agent-Skills reader | `~/.agents/skills/thai-writing/` |

It triggers on its own whenever the agent is about to write or edit text containing Thai script.

## The checker

```
node skills/thai-writing/scripts/check-thai.mjs <file>...            # report; exit 1 on an error finding
node skills/thai-writing/scripts/check-thai.mjs --genre gov <file>   # silence Thai-digit info findings
node skills/thai-writing/scripts/check-thai.mjs --genre ui <file>    # silence NBSP; --fix keeps U+00A0
node skills/thai-writing/scripts/check-thai.mjs --fix --write <file> # repair error-class mechanics in place
```

Rules by severity — **error** (auto-fixable): ำ written as two code points · zero-width space · NBSP (unless `--genre ui`) · BOM · full-width marks leaked from a CJK source. **warn** (judgment, explained in the references): a doubled space · sentence-final full stop · `ไม้ยมก` spacing before/after · spacing around numbers and Latin words · `;` and ` · ` as connectors · space before `,`/`;` · space before `ฯ`/`ฯลฯ` · the ellipsis character. **info**: Thai digits outside genres that require them, and space before `? ! :` — ORST's own rule spaces these marks, while the vendor and thesis guides this skill otherwise follows attach them, so either convention is only noted, never flagged as wrong. No check looks at a closing quote. A trailing run of spaces at line end (a Markdown hard break) is never flagged, and `--fix` never touches spacing at all — it repairs only the error-class mechanics above.

Flags: `--genre <name>` (`gov` silences Thai-digit findings; `ui` silences NBSP and keeps U+00A0 under `--fix`) · `--allow-ellipsis` (accepts `…` where a genre such as Netflix subtitles wants it) · `--plain` (turns off Markdown awareness — fenced blocks and code spans become prose again, for raw `.txt` corpora) · `--json` (machine-readable findings) · `--strict` (exit 1 on any non-info finding, not only `error`) · `--fix` (repairs error-class mechanics only; judgment-class `warn` findings are left for a human) · `--write` (writes the `--fix` result back to the file instead of printing it).

Exit code: 0 clean, 1 on an error finding (or any non-info finding under `--strict`), 2 on no files given or an unreadable file. Markdown-aware by default: fenced blocks, code spans and table-alignment spacing are not prose.

Zero dependencies, Node.js 20+. Tests: `node --test test/check-thai.test.mjs` (name the file — the directory form fails on Node 24).

## What is in the box

- `skills/thai-writing/SKILL.md` — the universal core, the genre router, file-type mechanics, the never-list.
- `skills/thai-writing/references/` — one short file per genre: `articles-news.md` · `docs-readme.md` · `government-legal.md` · `ui-i18n.md` · `subtitles-social.md` · `fiction-translation.md` · `academic-thesis.md` · `channels.md` (one file type, many producers — `.docx`/`.pdf`/`.xlsx`/`.pptx`) · `transfer/en-to-th.md` (the English-convention-to-Thai-form transfer table) — plus `sources.md` and its machine-readable twin `sources.json`, the bibliography every rule cites.
- `skills/thai-writing/scripts/check-thai.mjs` + `test/` — the instrument.

## Sources

Every rule cites its authority in `references/sources.md` — สำนักงานราชบัณฑิตยสภา (spacing, punctuation, transliteration), ระเบียบสำนักนายกรัฐมนตรีว่าด้วยงานสารบรรณ, Unicode/UAX/CLDR, and the official Thai style guides of Microsoft and Netflix. The most-cited core rule, dropping the sentence-final full stop, is **not** an ORST rule — ORST's own มหัพภาค page still lists the full stop as a sentence-end mark; the authority for dropping it is Microsoft's and Netflix's Thai guides (`references/sources.md` explains why). A rule with no source is marked ⚠️ house convention.

## License

Apache-2.0 — see [LICENSE](LICENSE).
