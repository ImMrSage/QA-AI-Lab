---
id: ai-change-safety-cats
language: en
title: CATS for AI-Assisted Change Safety
topic: qa-process
tags: [ai, contracts, invariants, observability, refactoring]
format: cheat-sheet
learning_depth: SHOULD KNOW
reviewed: 2026-09-06
---

# CATS for AI-Assisted Change Safety

## Summary

The translated essay argues that faster code generation can exceed a team's ability to validate changes. Its CATS framework combines contracts, automated verification, telemetry and simplification. The underlying problem is plausible code with untested assumptions about data, retries, domain rules and trust boundaries.

## Practical QA matrix

| Practice | Original lab example | Review evidence |
| --- | --- | --- |
| Contracts | Define whether a missing summary is allowed | Consumer compatibility test |
| Automated verification | Importing the same source twice must not duplicate it | Idempotency regression |
| Telemetry | Detect failed imports and missing content | Actionable error rate and trace |
| Simplification | Centralize source identity rules | Smaller change scope with retained behavior |

Start with one fragile boundary and one high-impact invariant. Agree ownership with engineering and product. Record a baseline for escaped defects, rework and change lead time before judging improvement.

## Limitations

CATS is practitioner guidance, not an established guarantee of incident prevention. The suggested two-week plan and error-rate threshold are examples, not universal commitments. Schema validity cannot prove semantic compatibility. Refactoring also changes risk and needs scoped verification; it is not automatically free when performed alongside feature work. High coverage and polished diffs remain incomplete evidence.

## Related topics and sources

- [Consumer-driven contracts](../api-testing/consumer-driven-contracts.md)
- [Property-based testing](../automation/property-based-testing.md)
- [Evidence-led AI triage](../../ai/ai-for-testing/evidence-led-test-triage.md)
- [Habr translation](https://habr.com/ru/articles/1058978/). Complete cached body read.
- [Underlying English essay: You shipped it fast. But did you ship it right?](https://stackoverflow.blog/2026/05/12/you-shipped-it-fast-but-did-you-ship-it-right/).
- [Author's PlatformCon session](https://platformcon.com/sessions/ai-accelerated-delivery-needs-refactoring-the-cats-guardrails-framework) identifies Lakshmi Priya Gopalsamy and the same framework. No incident dataset was independently audited.
