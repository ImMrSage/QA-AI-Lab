# Web Application

Static library and responsive article reader. Serve the repository root with `python -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000/apps/web/`.

Development should support local preview before committing or publishing. The published application should serve both phone and desktop browsers.

Cards open full formatted notes with an outline, tables, code and Mermaid diagrams. Related Markdown links stay in the reader. DOMPurify sanitizes HTML and Mermaid uses strict mode. The collection register links all twenty digest reviews.

Bundled assets are committed, so reading requires no CDN or npm installation. After changing `reader.js`, run `npm ci` and `npm run build` from this directory, then commit `assets/` with the source changes. Direct `file://` opening is unsupported; deployments must include repository content paths as well as this application.
