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

- Illustrative targets; define percentile, measurement boundary and workload
- A single failed critical journey may block release regardless of percentage
- Every endpoint needs the correct access policy; some are intentionally public
- Useful evidence, not proof that undiscovered vulnerabilities do not exist
- RTO concerns restoration time; RPO concerns the recoverable data point and potential data loss

### Availability example

For a time-based calculation over a 365-day year:

`365 × 24 × (1 − 0.999) = 8.76 hours`

Thus 99.9% corresponds to about 8 hours 46 minutes of unavailability under that definition. An actual agreement may use a different window, exclusions or request-based measurement. A percentage without its denominator and policy is incomplete.

## Practical application

For our library, consider reading success, search relevance, readable mobile layouts and content accuracy together. A fast page that displays an incorrect explanation is still a quality failure. Record a small set of agreed criteria and the evidence for each rather than combining unrelated measures into an unexplained overall score.

## Sources

- [QA4Life / Евгений Гусинец — Software quality and quality criteria](https://telegra.ph/Kachestvo-PO-i-kriterii-kachestva-v-testirovanii-07-01-4): entire article text read on 2026-09-12. Targets are source examples, not measured results. Its cited IEEE and ISTQB documents were not separately audited for this review.
- [Testing concepts](testing-concepts.md)
- [Risk-based test planning](../qa-process/test-planning.md)
