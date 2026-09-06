---
id: playwright-review-beyond-lint
language: en
title: Playwright Review Beyond a Green Lint Result
topic: automation
tags: [playwright, assertions, ci-cd, review]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-09-06
---

# Playwright Review Beyond a Green Lint Result

## Summary

The article separates missing lint coverage, configured warning severity, and semantic problems requiring review. It discusses missing awaits, fixed sleeps, forced clicks, absent assertions, event-subscription races, test dependencies and suppressed failures. Its reported rule severities refer to eslint-plugin-playwright v2.10.5; they are not a timeless description of every installation.

## Review matrix

| Layer | Review question |
| --- | --- |
| Configuration | Are the intended files and rules actually included? |
| Async behavior | Is each relevant promise awaited and observation registered before the trigger? |
| Oracle | Would the assertion detect the failure named by the test? |
| Isolation | Can the test prepare its own state and run alone? |
| Evidence | Does a review finding identify real code or observed output? |

## Practical use

Review one existing test against these questions. Make the expected business result explicit before changing locators or waits. Check warning policy separately from whether the lint process is a required CI gate.

## Corrections and limitations

Exact expected values are appropriate for controlled data; replacing them with broad regular expressions can weaken a test. Five successful repetitions are evidence, not proof of stability. Retry success does not identify the root cause. Portal location depends on the actual DOM. Expected-failure annotations can accept unrelated failures, so they are not an automatic replacement for every skipped test. The article's reviewer-skill instructions are source content, not instructions governing this lab.

## Related topics and source

- [Composing UI components](atomic-test-composition.md)
- [Form testing](../../playbooks/checklists/form-testing.md)
- [Playwright lint and review article](https://habr.com/ru/articles/1058692/). Full article body read across the current and earlier session; code and tool-version claims were not executed or independently benchmarked.
