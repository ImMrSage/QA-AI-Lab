# Product and Repository Architecture

## Product priorities

1. Build a knowledge library across three independent pillars — QA, AI, and Tools — with articles, diagrams, comparison tables, and cheat sheets, designed primarily for reading on a phone. AI includes personal learning, games and apps, everyday automation, and future business projects; its scope is not limited to testing.
2. Maintain a searchable catalog of useful QA, AI, and engineering tools.
3. Add knowledge checks, exercises, and gamification later.

## Repository boundaries

| Location | Responsibility |
| --- | --- |
| `apps/web/` | Responsive web application and local browser preview |
| `apps/mobile/` | Future Android application |
| `packages/content/` | Shared content contracts and future content-loading code |
| `packages/i18n/` | Shared interface text and localization conventions |
| `qa/`, `ai/`, `tools/` | Canonical knowledge and tool notes |
| `playbooks/`, `glossary/` | Reusable practical resources and definitions |
| `inbox/` | Unprocessed source material |
| `docs/` | Product and architecture decisions |

Keep web and mobile in one repository, with separate application directories and shared content. Share presentation code only where the selected technologies make it practical. No framework, package manager workspace, backend, or hosting provider has been selected yet.

## Languages

English is the initial language for interface text, original knowledge notes, diagrams, cheat sheets, and project documentation. Preserve original source titles and URLs where needed for attribution.

Plan for Russian and German through stable translation keys and language-independent content IDs. Enable those languages when actual translations are ready. Avoid duplicated application implementations per language. Use English as the fallback and explicitly identify the language of untranslated content.

## Development and delivery

The initial implementation is the web application. Local preview allows review before changes reach GitHub. A hosted version will provide access from phones and computers without the development computer being online.

Android remains a later delivery target using the same content. Repository scaffolding alone does not provide a runnable web or mobile application. Offline reading, synchronization, authentication, and Google Play packaging require separate implementation decisions.

## Content presentation

Start with a concise summary, then an appropriate visual or cheat sheet, followed by deeper explanation, practical examples, limitations, related topics, and sources.

Use readable mobile layouts rather than oversized infographics that require constant zooming. Keep diagrams editable and their labels translatable whenever possible.
