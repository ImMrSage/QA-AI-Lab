---
id: permission-aware-analytics
language: en
title: Permission-Aware Conversational Analytics
topic: ai-tools
tags: [amazon-quick, analytics, tenancy, data-quality]
format: article
learning_depth: GOOD TO KNOW
reviewed: 2026-09-06
---

# Permission-Aware Conversational Analytics

## Summary

Tradeshift describes replacing internal BI and embedding analytics for customers with Amazon Quick. Dashboards, curated metric definitions, natural-language queries and recurring reporting share underlying datasets. The architecture combines SSO, tenant namespaces, time-limited embedding and row-level security. Production MCP write access is described as future work, not an already delivered capability.

## QA relevance and practical use

This is an enterprise analytics case study with indirect relevance to a personal QA library. Its useful testing pattern is checking answers against both authoritative data and the requesting user's permissions.

| Risk | Proposed test |
| --- | --- |
| Tenant leakage | Ask the same invoice question as users from different tenants |
| Stale data | Compare an answer with the last successful dataset refresh |
| Ambiguous metric | Ask for a total with explicit date, currency and status rules |
| Channel inconsistency | Compare dashboard, export and conversational results |
| Permission change | Revoke access and check existing sessions and shared links |
| Future write tools | Verify approval, audit and duplicate-action behavior before rollout |

## Tool evaluation and limitations

The product targets cloud enterprise analytics, not lightweight local note storage. Adoption would involve data modeling, permissions, service costs and platform dependence; no pricing or alternatives benchmark was performed.

The source reports faster queries, not increased latency. Its claim of reduced maintenance from 50% of one FTE to 0.5 FTE is numerically inconsistent. Retention differences do not establish causality. Ordinary automation can also schedule reports; the claim that only agentic AI can solve this is too broad. Vendor results and embedded demo videos were not independently validated.

## Related topics and source

- [Agent evaluation lifecycle](../llm-testing/agent-evaluation-lifecycle.md)
- [API request review](../../playbooks/checklists/api-request-review.md)
- [Tradeshift and AWS case study](https://aws.amazon.com/blogs/machine-learning/evolving-from-legacy-bi-to-agentic-ai-at-tradeshift-with-amazon-quick/). Complete cached body read.
