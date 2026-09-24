# UI redesign — 2026-09-23

User scope: replace the mixed article feed with a connected topic overview, searchable QA/AI library, compact tools directory, original PDF Materials, and deduplicated Sources linked to articles. Remove unused profile and theme controls. Preserve EN/RU and reader URLs; restore previous view/search when returning.

Design: warm neutral canvas, indigo navigation, topic tiles and contextual links. Topics connect articles, tools and original PDFs. Dedicated tool entries open concise details, not long articles. Source index is generated from stored notes. Catalog generated from repository Markdown so future additions do not require hardcoded counts.

Status: completed and published on 2026-09-24. Implementation commit: `7bdc232`, pushed to `origin/main`.

Implemented: six topic collections, 50 articles, nine compact tools, eight original PDFs, 123 source URLs with backlinks, QA/AI filters, search, sorting, EN/RU, reader return navigation. Catalog generation is part of the build. Five previously supplied PDFs are now archived unchanged alongside the three existing originals.

Validated: production reader build; JavaScript syntax; 90 EN/RU pairs; unique catalog IDs and existing bilingual note files; source backlinks; all eight PDF links return HTTP 200 with PDF content. Browser verified desktop overview, tool dialog open/close, library search, AI filter, article rendering with Mermaid and return preserving search. Fixed invisible Back text caused by legacy header color.

Mobile verification recovered after a browser reconnect: Materials and Tools visually checked at 390×844; all five navigation items now fit without horizontal scrolling. Sources backlinks and EN/RU language switching checked. Temporary viewport override reset.

Live verification: `https://qa-ai-lab.vercel.app/` serves HTTP 200 for `apps/web/index.html`, `workspace.js`, `workspace.css`, `catalog.json` and `assets/reader.js`; all five responses match the local published files. No remaining implementation or publication steps for this redesign.
