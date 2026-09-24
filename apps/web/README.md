# Web Application

Topic workspace, searchable library, compact tool directory, original PDF materials and linked source index. From the repository root run `python scripts/preview.py`, then open `http://127.0.0.1:8001/apps/web/`. The local-only server sends `Cache-Control: no-store` so returning from a note does not restore an outdated library from the HTTP cache.

Development supports local preview before committing or publishing. The published application should serve both phone and desktop browsers. Select English or Русский in the top bar; language persists and follows reader links. Russian content mirrors canonical paths under `locales/ru/`. Missing translations show an explicit English fallback notice.

Cards open full formatted notes with an outline, tables, code and Mermaid diagrams. Related Markdown links stay in the reader. DOMPurify sanitizes HTML and Mermaid uses strict mode. The collection register links all twenty digest reviews.

Bundled assets are committed, so reading requires no CDN or npm installation. After installing dependencies with `npm ci`, run `npm run build` from this directory to regenerate `catalog.json` from repository notes and PDFs and bundle the reader. Python is required for catalog generation. Commit the catalog and changed assets with the sources. Direct `file://` opening is unsupported; deployments must include repository content paths as well as this application.

`workspace.js` contains topic relationships and concise bilingual tool descriptions. Standalone tools are excluded from the article feed; comparison and workflow guides remain articles. The URL preserves the selected view, language, search and filters. Reader navigation returns to the previous page, with a validated library fallback for direct links. Profile and theme placeholders have been removed.
