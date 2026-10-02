# QA AI Lab working rules

Follow the knowledge processing and source-quality rules in [README.md](README.md).

## Project scope

QA, AI, and Tools are independent pillars. AI includes foundations, neural networks, personal growth, game and app development, everyday automation, learning, and future business projects. Tools includes utilities for QA, AI, and general development. AI for testing is an intersection; never require a QA use case to accept or analyze AI material. Choose examples and relevance sections according to the source's actual domain. Preserve cross-links without forcing every note into QA.

## Agent retrieval through QMD

When the `qaAiLab` MCP server is available, use it to discover related notes and duplicates before adding content. On this Windows host, start with a typed `lex` search and `rerank: false`; use `vec` only after a successful runtime check because the current direct vector query can stall despite valid embeddings. Treat search results as navigation hints: read the canonical Markdown file before changing it or citing its claims. The QMD index is derived and rebuildable; Markdown plus Git remains the source of truth. If MCP is unavailable in the current session, use `rg` and repository reads and do not claim that semantic search ran.

## Choose scope before writing

For every new source, first decide what is worth adding and how much detail it needs. Inspect the accessible material and existing related notes before choosing a format; length alone is not a reason to compress it.

- **Link and description:** navigation resources, large courses, or material the user explicitly wants bookmarked.
- **Concise synthesis:** a few durable ideas with little additional practical detail.
- **Detailed practical note:** tutorials, comparisons, workflows, or material with useful tables, examples, checklists and decision criteria. Retain the substance of those elements in an original, reviewed form.
- **Update an existing note:** overlapping content; add only the useful new knowledge and its source.

Before editing, briefly tell the user the chosen scope, why it fits, what will be retained and what will be omitted. Proceed within the authorized scope; ask only when an unresolved preference materially affects the result. A request to shorten one source does not apply to later sources.

Judge sections by practical value, novelty, reliability and relevance to QA, AI or Tools. Remove repetition, promotion and unsupported claims; do not discard useful tables or examples merely to save tokens. Check that important decisions, conditions and limitations remain understandable. Respect copyright: preserve knowledge through original synthesis and source links, not wholesale reproduction.

Start published notes with useful content. Do not add PDF page maps, editorial histories or original-versus-corrected claim tables. Integrate verified explanations directly; keep references at the end. The scope decision belongs in the progress update, not in the article introduction.

If only a link or a summary was saved, name it accordingly. Do not imply that all source material was included. Apply this assessment to each future ingestion and to existing notes when they are revisited; a rule change alone does not mean the library has been reprocessed.

## Every article ingestion session

When the user sends one or more articles or learning resources:

1. Read and analyze the accessible full material, distinguishing source claims, applications in the relevant domain, and limitations. If access is incomplete, report exactly what remains unread; do not label a bookmark or downloaded body as analyzed.
2. Check for duplicates using canonical source URLs without tracking parameters. Reuse or update an existing analysis rather than creating duplicate notes.
3. Save English notes in the appropriate topic and full Russian counterparts under `locales/ru/<canonical-path>`, with matching IDs, attribution, tags and related links. Repository Markdown is the current knowledge store; do not imply a separate database was updated. Run `python scripts/check_translations.py` before publishing content changes.
4. Make the material accessible in the website/application through its formatted reader and relevant navigation or collection. Check affected links and rendering. Report any application integration that remains unfinished.
   Every substantial note must contain at least one article-specific visual artifact: an authored Mermaid model for sequences, states, architecture or data flow; a comparison or decision table; or a practical checklist. The reader promotes the first meaningful artifact into a large visual model at the start of the article. Generic cards that repeat section headings are not a visual explanation. Choose the visual form from the relationships in the material, keep it readable without the prose, and do not add decorative diagrams that merely repeat prose.
5. End every ingestion session, including duplicate-only sessions, with a short result and freshly retrieved account usage: **5-hour window: X% used; weekly window: Y% used**. Use the account usage tool immediately before the final response. These are cumulative account percentages, not usage attributable solely to this session. If a value is unavailable, say so rather than estimating it.
6. When the user specifies a usage ceiling, check usage before work and between batches, leaving room to save progress and report. Do not consume reset credits without explicit authorization. Apply later user changes to the ceiling.

Keep final updates concise and in the user's conversational language. English and Russian are active languages. New notes should include a complete Russian counterpart under locales/ru/<canonical-path>, with the same ID and source links. Do not call untranslated content translated. Track unfinished translations in packages/i18n/README.md.

## Source-language-first processing

For Russian sources, author the reviewed note in Russian first, then translate it into English. For English sources, author in English first, then translate into Russian. Do not translate a Russian source to English and back to Russian. Preserve the source's original title, URL and language in attribution; record `source_language` and `authored_language` in both note variants (use `mixed` for multilingual sources and identify each source's language). Storage paths remain unchanged: English at the canonical topic path, Russian at `locales/ru/<canonical-path>`. The English path does not imply the source was English. The saved note is an analysis with examples and corrections, not a verbatim copy of the external article. Retain supplied originals unchanged when archived; never label a rewritten analysis as the original text. Update the existing pair when reprocessing rather than translating unchanged content again.
