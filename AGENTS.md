# QA AI Lab working rules

Follow the knowledge processing and source-quality rules in [README.md](README.md).

## Project scope

QA, AI, and Tools are independent pillars. AI includes foundations, neural networks, personal growth, game and app development, everyday automation, learning, and future business projects. Tools includes utilities for QA, AI, and general development. AI for testing is an intersection; never require a QA use case to accept or analyze AI material. Choose examples and relevance sections according to the source's actual domain. Preserve cross-links without forcing every note into QA.

## Every article ingestion session

When the user sends one or more articles or learning resources:

1. Read and analyze the accessible full material, distinguishing source claims, applications in the relevant domain, and limitations. If access is incomplete, report exactly what remains unread; do not label a bookmark or downloaded body as analyzed.
2. Check for duplicates using canonical source URLs without tracking parameters. Reuse or update an existing analysis rather than creating duplicate notes.
3. Save English notes in the appropriate topic and full Russian counterparts under `locales/ru/<canonical-path>`, with matching IDs, attribution, tags and related links. Repository Markdown is the current knowledge store; do not imply a separate database was updated. Run `python scripts/check_translations.py` before publishing content changes.
4. Make the material accessible in the website/application through its formatted reader and relevant navigation or collection. Check affected links and rendering. Report any application integration that remains unfinished.
5. End every ingestion session, including duplicate-only sessions, with a short result and freshly retrieved account usage: **5-hour window: X% used; weekly window: Y% used**. Use the account usage tool immediately before the final response. These are cumulative account percentages, not usage attributable solely to this session. If a value is unavailable, say so rather than estimating it.
6. When the user specifies a usage ceiling, check usage before work and between batches, leaving room to save progress and report. Do not consume reset credits without explicit authorization. Apply later user changes to the ceiling.

Keep final updates concise and in the user's conversational language. English and Russian are active languages. New notes should include a complete Russian counterpart under locales/ru/<canonical-path>, with the same ID and source links. Do not call untranslated content translated. Track unfinished translations in packages/i18n/README.md.

## Source-language-first processing

For Russian sources, author the reviewed note in Russian first, then translate it into English. For English sources, author in English first, then translate into Russian. Do not translate a Russian source to English and back to Russian. Preserve the source's original title, URL and language in attribution; record `source_language` and `authored_language` in both note variants (use `mixed` for multilingual sources and identify each source's language). Storage paths remain unchanged: English at the canonical topic path, Russian at `locales/ru/<canonical-path>`. The English path does not imply the source was English. The saved note is an analysis with examples and corrections, not a verbatim copy of the external article. Retain supplied originals unchanged when archived; never label a rewritten analysis as the original text. Update the existing pair when reprocessing rather than translating unchanged content again.
