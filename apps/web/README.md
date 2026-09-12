# Web Application

Static library and responsive article reader. From the repository root run `python scripts/preview.py`, then open `http://127.0.0.1:8001/apps/web/`. The local-only server sends `Cache-Control: no-store` so returning from a note does not restore an outdated library from the HTTP cache. Use the new port rather than an old cached preview tab.

Development should support local preview before committing or publishing. The published application should serve both phone and desktop browsers.

Cards open full formatted notes with an outline, tables, code and Mermaid diagrams. Related Markdown links stay in the reader. DOMPurify sanitizes HTML and Mermaid uses strict mode. The collection register links all twenty digest reviews.

Bundled assets are committed, so reading requires no CDN or npm installation. After changing `reader.js`, run `npm ci` and `npm run build` from this directory, then commit `assets/` with the source changes. Direct `file://` opening is unsupported; deployments must include repository content paths as well as this application.
