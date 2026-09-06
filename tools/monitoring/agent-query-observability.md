---
id: agent-query-observability
language: en
title: Observability for Natural-Language Data Queries
topic: monitoring
tags: [agents, sql, tracing, authorization, data-quality]
format: cheat-sheet
learning_depth: SHOULD KNOW
reviewed: 2026-09-06
---

# Observability for Natural-Language Data Queries

## Summary

Jefferies describes a conversational data assistant using schema retrieval, SQL generation and MCP tools. An executor applies row-level entitlements before querying data. A dedicated renderer produces visualizations rather than asking the model to invent chart data. Session context and audit logging support investigation. AgentCore expansion is roadmap work in this account.

## Practical QA evidence chain

| Stage | Proposed evidence to retain |
| --- | --- |
| Request | User identity, intended question and correlation ID |
| Retrieval | Schema version and relevant metric definitions |
| Query | Generated query and effective permission scope |
| Execution | Data-source timestamp, duration, row count and errors |
| Presentation | Values supplied to the renderer and resulting answer |

For a QA dashboard, independently calculate a known failed-test count, ask the assistant for it, and compare filters, time zone, deduplication and displayed values. Repeat under a role that cannot see some projects. Test whether follow-up questions accidentally retain an old project filter.

## Limitations

Syntactically valid SQL can answer the wrong question. Permission enforcement needs adversarial tests across joins, subqueries, aggregation and alternate tools; a model instruction or content filter is insufficient. Dedicated chart rendering cannot correct bad query results. Protect sensitive trace content and define retention.

The article is an architecture case study, not a detailed observability implementation or accuracy benchmark. Its claims about seamless access and efficiency are not independently demonstrated. No financial decision guidance is inferred from this technical example, and no infrastructure was deployed.

## Related topics and source

- [Permission-aware analytics](../../ai/tools/permission-aware-analytics.md)
- [Agent evaluation lifecycle](../../ai/llm-testing/agent-evaluation-lifecycle.md)
- [Jefferies and AWS trade-assistant case study](https://aws.amazon.com/blogs/machine-learning/building-trade-assistant-how-jefferies-optimized-front-office-trading-operations-with-ai/). Complete cached body read.
