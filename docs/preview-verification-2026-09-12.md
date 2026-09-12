# Article preview verification — 2026-09-12

Verified in the in-app browser at a narrow approximately 455px viewport:

- Library displays 13 cards, including the API two-part companion and the three previous Habr entries.
- API companion opens through its card with formatted headings, metadata, three tables and a rendered Mermaid diagram. The wide diagram scrolls inside its container.
- MCP note headings, mobile outline navigation and reference table were visually checked during the preceding session.
- Release coordination and Atomic Design notes render readable headings and tables without raw Markdown.
- Returning from the Atomic Design reader keeps the current 13-card library.
- New API note's local Markdown links resolve; JavaScript syntax and Git whitespace checks pass.

The old port-8000 preview returned cached HTML with only eight cards. Use `python scripts/preview.py` and port 8001 for local work; responses carry `Cache-Control: no-store`. This is a local preview fix, not a production deployment.

Scope: narrow-browser visual checks, not physical Android or comprehensive desktop testing. Article examples were reviewed as source material, not executed against third-party systems; embedded source images and linked courses remain outside the recorded text review.
