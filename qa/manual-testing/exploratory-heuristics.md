---
id: exploratory-heuristics
language: en
title: Exploratory Testing Heuristics
topic: manual-testing
format: cheat-sheet
tags: [manual-testing, testing]
learning_depth: MUST KNOW
reviewed: 2026-09-05
---

# Exploratory Testing Heuristics

## TL;DR

Heuristics generate questions. They are neither expected results nor proof of complete coverage. Pick a few that match the feature's risks and use requirements or other evidence to judge behavior.

## Exploration matrix

| Lens | Variation | Example investigation |
| --- | --- | --- |
| Interruption | Logout, restart, lost network | Is a draft recoverable after reconnecting? |
| Resource pressure | CPU, memory, disk, network | Does the operation fail clearly under constrained resources? |
| Position | First, middle, last | Can a list item be moved across each boundary? |
| Selection | None, some, all | Does a bulk action affect only selected records? |
| Quantity | Zero, one, many | Is an empty collection usable? |
| Concurrency | Multiple users or sessions | Is one user's edit silently overwritten? |
| Relationships | Parent and child records | What happens to orders when a customer is removed? |
| Constraints | Duplicate, invalid, forbidden | Is uniqueness enforced after saving? |
| Input route | Typing, paste, import | Are equivalent inputs handled consistently? |
| Sequence | Reorder, repeat, skip | Can an operation bypass a required prior step? |

## Example session

Explore saved filters for 20 minutes using selection, quantity, and concurrency. Record the setup, questions tried, observations, defects, and untested risks. The timebox and scenario are original examples, not source requirements.

## Limitations and source review

The PDF associates selection with permissions; the lens is broader and also applies to selections and subsets. Maximum-load checks need an agreed environment and limits. A heuristic is not an instruction to exhaust resources on a production system.

## Related topics and sources

- [Testing concepts](../fundamentals/testing-concepts.md)
- [Form testing](../../playbooks/checklists/form-testing.md)
- Source: `cheatlisteurist.pdf`, p. 1; [provenance](../../docs/sources/2026-09-05-testing-cheat-sheets.md).
