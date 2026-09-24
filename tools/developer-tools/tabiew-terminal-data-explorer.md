---
id: tabiew-terminal-data-explorer
language: en
source_language: en
authored_language: en
title: "Tabiew: Explore Tabular Data in the Terminal"
summary: Inspect, search and query common tabular formats from a terminal UI without opening a spreadsheet application.
topic: developer-tools
tags: [csv, json, excel, parquet, sql, terminal, data-tools]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-09-24
---

# Tabiew: Explore Tabular Data in the Terminal

## What it is useful for

[Tabiew](https://github.com/shshemi/tabiew) is a lightweight terminal UI for viewing and querying tabular data. It supports CSV, TSV, Parquet, JSON, JSONL, Arrow, fixed-width files, SQLite, Excel, Avro, HTML tables and Markdown tables. It also provides SQL queries, filters, sorting, fuzzy search, multi-table workflows, plotting and more than 400 themes.

For QA work, it is useful for quickly inspecting exported test data, API result dumps, event logs and database snapshots. Multiple files can be opened together, and `--max-rows` provides a safer sample of a very large dataset before loading it fully.

## Practical recommendation

1. Start with `tw <file>` and check the detected schema and row sample.
2. Use `/` for fuzzy search and the command palette (`:`) for Query, Filter, Order, Select, Cast, Import, Export and Schema.
3. Use SQL when a comparison, aggregation or join is clearer than manual scanning.
4. Preserve the original file and export results to a new path.
5. Do not assume a successful import proves semantic correctness: verify encodings, delimiters, null handling, inferred types, date formats and truncated rows.
6. Avoid opening production exports containing secrets or personal data on an unmanaged workstation.

Tabiew is a local inspection tool, not a replacement for reproducible validation in automated tests. Installation methods and supported formats can change, so use the current project README and release page as the source of truth.

## Sources

- [Tabiew repository and documentation](https://github.com/shshemi/tabiew)
- [Tabiew releases](https://github.com/shshemi/tabiew/releases)

