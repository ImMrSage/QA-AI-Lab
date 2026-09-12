---
id: software-quality-criteria
language: en
title: Software Quality and Measurable Criteria
topic: fundamentals
tags: [quality, metrics, iso-25010, requirements, risk]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-09-12
---

# Software Quality and Measurable Criteria

## Summary

Quality depends on users, intended use and constraints. Turn a concern into an explicit criterion, then collect evidence under defined conditions. Passing tests is evidence about selected behavior, not a complete measure of product quality.

## Source review

QA4Life introduces quality as contextual fitness and surveys functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability and portability. It suggests agreeing measurable targets, monitoring trends and revisiting criteria as context changes.

These eight categories describe the **2011** product-quality model. ISO marks that edition withdrawn; **ISO/IEC 25010:2023 has nine characteristics**. Do not label the article's list as the current complete model. The official public abstracts establish this distinction; the paid standard's full text was not reviewed. [2011 model](https://www.iso.org/standard/35733.html), [2023 model](https://www.iso.org/standard/78176.html).

## Build a criterion — original worksheet

| Field | Example for a fictional search API |
| --- | --- |
| User concern | Results arrive quickly enough to continue shopping |
| Metric | End-to-end response latency and error rate |
| Conditions | Named build, environment, dataset and traffic mix |
| Target | Team-agreed p95 limit plus an error-rate ceiling |
| Window | Defined measurement duration and warm-up exclusion |
| Evidence | Load report, failed requests and service telemetry |
| Decision | Named owner reviews failures and residual risk |

Set numeric limits only after identifying product needs and realistic operating conditions. Compare like-for-like measurements over time.

## Interpret metrics carefully

| Source shortcut | Better interpretation |
| --- | --- |
| Fixed UI/API latency limits | Illustrative targets; define percentile, measurement boundary and workload |
| More than 95% smoke tests pass | A single failed critical journey may block release regardless of percentage |
| All endpoints require authorization | Every endpoint needs the correct access policy; some are intentionally public |
| Zero known critical vulnerabilities | Useful evidence, not proof that undiscovered vulnerabilities do not exist |
| RTO/RPO both describe recovery time | RTO concerns restoration time; RPO concerns the recoverable data point and potential data loss |

### Availability example

For a time-based calculation over a 365-day year:

`365 × 24 × (1 − 0.999) = 8.76 hours`

Thus 99.9% corresponds to about 8 hours 46 minutes of unavailability under that definition. An actual agreement may use a different window, exclusions or request-based measurement. A percentage without its denominator and policy is incomplete.

## Practical application

For our library, consider reading success, search relevance, readable mobile layouts and content accuracy together. A fast page that displays an incorrect explanation is still a quality failure. Record a small set of agreed criteria and the evidence for each rather than combining unrelated measures into an unexplained overall score.

## Sources and related knowledge

- [QA4Life / Евгений Гусинец — Software quality and quality criteria](https://telegra.ph/Kachestvo-PO-i-kriterii-kachestva-v-testirovanii-07-01-4): entire article text read on 2026-09-12. Targets are source examples, not measured results. Its cited IEEE and ISTQB documents were not separately audited for this review.
- [Testing concepts](testing-concepts.md)
- [Risk-based test planning](../qa-process/test-planning.md)
