---
id: web-ui-testing
language: en
title: Web UI Testing
topic: web-testing
format: checklist
tags: [web-testing, testing]
learning_depth: MUST KNOW
reviewed: 2026-09-05
---

# Web UI Testing

## TL;DR

Test each component's behavior, state, keyboard interaction, and mobile presentation. Reuse the form checklist for detailed data validation.

## Component matrix

| Component | Checks |
| --- | --- |
| Buttons | Action, hover exit, pressed/disabled/loading feedback, keyboard activation |
| Text and search | Labels, placeholders, autofill, query results; see form checklist |
| Checkbox and radio | Selection, grouping, dependencies, keyboard operation |
| Dropdown | Open/close, choice, optional search, retained selection |
| Link | Destination, declared new-tab behavior, distinguishable appearance |
| Image | Load failure, appropriate text alternative, optional click action |
| Table | Accurate values, sorting, filtering, pagination |
| Modal | Open/close, actions, background blocking, deliberate dismissal policy |
| Tooltip | Discoverability, position, dismissal, keyboard and touch alternative |
| Carousel | Manual navigation, optional autoplay, pause controls, responsive content |
| Breadcrumb | Correct hierarchy, destinations, current-page indication |
| Date picker | Typed/calendar input where supported, limits, locale, dependent fields |

For modal keyboard behavior, check focus entry, containment while open, and return on close. See [W3C dialog guidance](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). A placeholder should not be the only field label.

## Pagination and shared states

- [ ] Check zero, one, and multiple pages; first/last boundaries; forward/back navigation.
- [ ] Change page size, sort, and filters; verify counts and reachable records.
- [ ] Add or remove records, including the last record on a page.
- [ ] Check current-page indication and the specified refresh/back behavior.
- [ ] Examine loading, empty, error, disabled, and successful states.
- [ ] Test narrow screens, zoom, keyboard navigation, and supported browsers.
- [ ] Review screen-reader meaning, focus visibility, contrast, and layout clipping.
- [ ] For supported locales, check translated text, dates, numbers, and currencies.
- [ ] Measure loading against agreed budgets and representative network conditions.

## Limitations and corrections

Hidden pagination, preserved page state, outside-click modal dismissal, and post-submit form clearing are design choices, not universal requirements. Radio groups normally select one option; they do not necessarily permit deselecting it directly. This checklist is not a WCAG conformance audit.

## Related topics and sources

- [Form testing](form-testing.md)
- [Test planning](../../qa/qa-process/test-planning.md)
- Source: `cheatlistwebui.pdf`, pp. 1-4; [provenance](../../docs/sources/2026-09-05-testing-cheat-sheets.md).
