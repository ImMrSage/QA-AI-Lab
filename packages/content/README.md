# Shared Content Contract

The existing root-level knowledge folders are the canonical source for both web and mobile: `qa/`, `ai/`, `tools/`, `playbooks/`, and `glossary/`. `inbox/` contains unprocessed material and should not be published automatically.

This package is reserved for shared content schemas, validation, and loading code. Do not duplicate the knowledge library inside each application.

Published entries use stable IDs and a language (`en` or `ru`). Canonical English files remain at the root; Russian counterparts mirror paths under `locales/ru/`. Entries should have a title, summary, topic, tags, format, sources, and related content IDs. Tool entries should also describe the problem solved, practical uses, limitations, and the original tool URL.

Translation variants must share the same stable content ID. Existing README and INDEX documents are navigation and project documentation, not automatically published knowledge entries.
