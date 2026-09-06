---
id: property-based-testing
language: en
title: Property-Based Testing with Hypothesis
topic: automation
tags: [python, hypothesis, test-design, stateful-testing]
format: cheat-sheet
learning_depth: SHOULD KNOW
reviewed: 2026-09-06
---

# Property-Based Testing with Hypothesis

## Summary

The article explains generating examples from strategies, checking properties, shrinking failures into simpler counterexamples, and retaining regression examples. It covers dependent input generation, stateful models, CI configuration and isolation between generated examples. The hard part is designing a meaningful property and valid input domain, not merely increasing example counts.

## Property design matrix

| Property | Original lab example |
| --- | --- |
| Round trip | Decode an encoded supported value without loss |
| Invariant | Cart quantity remains nonnegative after valid operations |
| Reference comparison | Optimized calculation agrees with a trusted baseline |
| Metamorphic relation | Reordering inputs preserves an order-independent total |
| Idempotency | Normalizing twice equals normalizing once |

## Practical use

Start with one parser or normalizer. Define accepted inputs, encode a property, inspect any minimized failure, and preserve the confirmed bug as a regression. For stateful tests, check both expected records and absence of unexpected records after each operation.

## Limitations and corrections

The source's sample cart invariant checks expected items but can miss unexpected extras or failed deletions. Case-insensitive search and lossless conversion are properties only when the contract requires them. Generated tests complement example tests and do not prove correctness. Integration functions can be property-tested with suitable isolation; the source's categorical dismissal is too broad. Research metrics, default settings and code snippets were not independently reproduced. A passing run does not guarantee that every boundary was visited.

## Related topics and source

- [Testing concepts](../fundamentals/testing-concepts.md)
- [Password-reset state testing](../security/password-reset-state-testing.md)
- [Hypothesis article](https://habr.com/ru/articles/1058390/). Full cached body read. No package installation or example execution performed.
