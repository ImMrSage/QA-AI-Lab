---
id: obsidian-mind-agent-vault
language: en
source_language: en
authored_language: en
title: "Obsidian Mind: an agent-ready knowledge vault"
summary: Add agent memory, lifecycle hooks and optional semantic search to an Obsidian vault while keeping Markdown as the durable source of truth.
topic: productivity
tags: [obsidian, knowledge-management, mcp, ai-agents, qmd, markdown]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-09-28
---

# Obsidian Mind: an agent-ready knowledge vault

## What it solves

[Obsidian Mind](https://github.com/breferrari/obsidian-mind) is an MIT-licensed vault template for knowledge work with coding agents. It combines an Obsidian folder structure, agent instructions, lifecycle hooks, plain-Markdown memory, an MCP server and optional [QMD](https://github.com/tobi/qmd) semantic search. It is designed for Claude Code, Codex CLI and Gemini CLI rather than being a conventional Obsidian community plugin.

The useful idea for QA AI Lab is a shared knowledge layer: people browse the same Markdown in Obsidian and on the website, while agents search and update it through controlled tools. Obsidian Bases and Graph provide views and relationships; Git keeps reviewable history; a QMD index can improve retrieval without becoming the authoritative store.

## Fit for QA AI Lab

| Capability | Recommended use here | Boundary |
|---|---|---|
| Obsidian vault | Open the repository root directly | Do not copy articles into a second vault |
| Bases | Filter the existing frontmatter into QA, AI, Tools and language views | A Base is a view, not a database migration |
| Graph and links | Navigate explicit relationships between notes | Folder proximity alone does not create a useful graph |
| QMD | Rebuildable local semantic index for agent retrieval | Its SQLite index is derived data, not source of truth |
| MCP | Search, read and later write through a small controlled interface | Restrict writable roots and validate changes before commit |
| Hooks | Validate frontmatter, links and repository hygiene | Adopt selectively; the template's schemas do not match this repository unchanged |

## Practical recommendation

Use an **adapted integration**, not `shardmind install` over this repository. The upstream template is intended for a fresh folder and brings its own `AGENTS.md`, `.codex`, directory taxonomy and frontmatter requirements. A full overlay could replace rules that already govern QA AI Lab.

Open this repository as an Obsidian vault and use the committed Bases dashboard. Keep the existing English notes and their Russian counterparts in place, and add explicit links only when the relationship is meaningful. QA AI Lab now maintains a named, project-local QMD index and exposes its search and read operations to Codex through the `qaAiLab` MCP server. Search results locate canonical Markdown; they do not replace reviewing the note. Keep agent writes behind path restrictions, Git diffs and the existing translation checks.

## Cost and operational notes

Obsidian's desktop application and Obsidian Mind's source code can be used without a subscription. Obsidian Sync and Publish are optional paid services. QMD runs locally and does not require a per-query API key, but its recommended embedding, query-expansion and reranking models require downloads and local memory/storage. The upstream project currently requires Obsidian 1.12+, Node.js 22+ and Git; QA AI Lab already uses a compatible Node.js 22 runtime.

Treat hooks and MCP servers as executable code. Review upstream changes before updating, pin versions for repeatable automation, keep secrets outside the vault and never expose private notes through a broad MCP root.

## Sources

- [Obsidian Mind repository and setup guide](https://github.com/breferrari/obsidian-mind)
- [Obsidian Mind agent integration notes](https://github.com/breferrari/obsidian-mind/blob/main/AGENTS.md)
- [Obsidian Bases syntax](https://obsidian.md/help/bases/syntax)
- [Obsidian pricing](https://obsidian.md/pricing)
