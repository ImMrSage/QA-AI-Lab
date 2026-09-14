# Shared Localization

Author new analyses in the source language first: Russian → English, English → Russian. Preserve source-language attribution and record `source_language` and `authored_language` in both variants. This avoids Russian → English → Russian round trips. Canonical English storage paths do not imply English source authorship. An analysis remains distinct from the original article; archived supplied originals remain unchanged.

English (`en`) and Russian (`ru`) are active in the web interface. German is planned. The URL `lang` parameter overrides the saved preference. Russian articles live at `locales/ru/<canonical-path>` with the same ID; relative links resolve against the canonical article. Missing translations show an explicit notice and an English article with `lang=en`.

All current knowledge notes, topic catalogs, source registers and reader-linked guides have Russian counterparts. Raw intake is not translated or represented as analyzed content. Empty topics have explicit placeholders in both languages. A translated analysis does not mean previously unread source chapters were reviewed.

The static web app uses `apps/web/i18n.js` for phrases and `apps/web/card-translations.js` for card titles and summaries keyed by note ID. JSON resources under `packages/i18n/locales/` are scaffolds for future shared code, not consumed by the current web app.

Keep full phrases together, support interpolation and pluralization, and format dates and numbers according to the active locale. The localization library will be selected with the application framework.

English is the explicit fallback for missing translations. Article and interface language are tracked separately. Switching language retains the note but resets the section because translated headings use different anchors.

Article translations retain the original content ID, source links, code examples, caveats and review dates. Translate complete bodies, including tables and Mermaid labels. Run `python scripts/check_translations.py` for coverage and structural checks; these complement editorial review and do not prove translation quality. Rebuild reader assets after code changes and verify both languages, persistence, links and responsive presentation.
