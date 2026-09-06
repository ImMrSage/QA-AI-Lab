---
id: atomic-test-composition
language: en
title: Composing UI Test Components
topic: automation
tags: [page-objects, architecture, maintainability]
format: source-review
learning_depth: SHOULD KNOW
reviewed: 2026-09-06
---

# Composing UI Test Components

## Summary

The author adapts Atomic Design to UI test architecture: selectors become atoms, interactions become molecules, forms become organisms, shared layouts become templates, and pages combine them. The motivation is duplicated selectors and large page classes, especially with shared menus and configurable forms. The article acknowledges ambiguous boundaries and proposes an extension rather than a universal replacement.

## Practical QA use

| Repeated element | Possible extraction |
| --- | --- |
| Shared navigation | Navigation component |
| Address section | Address-form component |
| Repeated save flow | Narrow action with explicit outcome checks |

Try extracting one repeated form and compare code duplication, locator scope and diagnostic clarity before restructuring an entire suite.

## Critical review

The claim that Page Objects cannot reuse components is too strong. The useful design question is composition and responsibility, not whether every project needs five named layers. Page Objects are not restricted to Selenium. The source's snippets contain syntax and parameter inconsistencies and are treated as illustrations, not runnable examples. Global selectors or wrappers that simply rename existing APIs can add indirection without improving test intent.

## Related topics and source

- [Web UI checklist](../../playbooks/checklists/web-ui-testing.md)
- [Origami evaluation](origami-framework-review.md)
- [Atomic Autotest Design](https://habr.com/ru/articles/1060244/). Full cached article body read; architecture proposal based on author experience. No framework migration performed.
