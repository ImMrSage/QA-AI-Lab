---
id: agile-devops-tdd-quality-strategies
language: en
source_language: ru
authored_language: ru
title: Agile, DevOps and TDD: A Reviewed Quality Strategy
summary: A 15-slide review correcting claims about XP, CI/CD, test pyramids, TDD, BDD and ATDD
topic: automation
tags: [agile, devops, ci-cd, tdd, bdd, atdd, xp, testing-pyramid]
format: guide
learning_depth: MUST KNOW
reviewed: 2026-09-22
---

# Agile, DevOps and TDD: A Reviewed Quality Strategy

## TL;DR

Both editions were read in full and contain 15 pages. Ver2 is the later, substantially redesigned edition of the same material and is the current source; Ver1 is historical evidence. The sequence runs from XP and DevOps through CI/CD, TDD, BDD, ATDD, Agile Testing Quadrants, process selection and the QA role.

The useful core is shared quality ownership and fast feedback. Figures such as `60/30/10`, `80% automation`, `>90% coverage`, `5–10 integrations per day`, `95% successful builds`, and rework percentages are not universal standards.

## Map of all Ver2 pages

| Pages | Subject | Practical reading |
| --- | --- | --- |
| 1 | Agile, XP, DevOps, TDD, BDD and ATDD | Related ideas at different levels, not a complexity ladder |
| 2–3 | XP values, practices and feedback loops | Select practices for the team's problem, not its industry |
| 4–6 | DevOps, CI, Continuous Delivery and Deployment | Build a short observable path from change to production |
| 7 | TDD | Red–Green–Refactor shapes behavior in small steps; it guarantees no coverage percentage |
| 8 | BDD and test pyramid | BDD is collaborative behavior discovery, not a test layer |
| 9 | ATDD | Agree examples before implementation; measure the effect rather than promise zero rework |
| 10 | Agile Testing Quadrants | A map of testing purposes, not a strict manual/automation split |
| 11–12 | Process hybrids and selection | Consider constraints and feedback, not only schedule and requirements stability |
| 13–14 | QA role and advice | QA is a quality partner; automation ratios depend on risk |
| 15 | Career and learning plan | Useful topic map; timing is individual |

## How the practices relate

```mermaid
flowchart LR
    A[Agile values and feedback] --> X[XP engineering practices]
    A --> B[BDD / ATDD collaborative examples]
    X --> T[TDD Red–Green–Refactor]
    X --> CI[CI frequent integration]
    CI --> CD[Continuous Delivery releasable on demand]
    CD --> DP[Continuous Deployment automatic release]
    D[DevOps shared responsibility] --> CI
    D --> CD
```

Scrum is a lightweight framework for complex work and intentionally leaves engineering tactics open. XP, TDD, BDD and CI/CD can complement it. QA participates in a cross-functional team instead of acting as an isolated final gate.

## Corrections that matter

| Source claim | Reviewed interpretation |
| --- | --- |
| CI means 5–10 integrations or 10+ builds daily | CI means frequent mainline integration with fast automated feedback; cadence is contextual |
| Build success must exceed 95% and fixes take under 30 minutes | Possible internal SLOs. Add baselines, failure causes, recovery time and flaky rate |
| Delivery is manual and Deployment means “the robot decides” | Delivery is the capability to release safely on demand; Deployment automatically releases qualifying changes. Policies and approvals can remain upstream |
| TDD produces >90% coverage and fewer defects | TDD defines a development loop. Coverage and defects are separate outcomes |
| Pyramid means 60% unit, 30% BDD, 10% E2E | It is a heuristic favoring many fast narrow checks and fewer broad expensive ones. BDD is not a test level |
| ATDD cuts rework to 0–5% | It can expose disagreement earlier, but outcomes depend on participation and examples |
| Q1, Q2 and Q4 are automated while Q3 is manual | Quadrants discuss purpose; manual and automated work may occur in any quadrant |
| 80% automation and zero defects are maturity norms | Derive targets from risk and feedback cost. “No known critical defects” can be a release criterion, not proof of no defects |

## Operational QA strategy

1. Identify risks and concrete behavior examples during refinement. Use Given/When/Then when it clarifies a rule.
2. Keep fast unit/component checks near code, integration/contract checks at boundaries, and E2E checks for critical journeys.
3. Run fast deterministic checks on every CI change. Place slower suites later while preserving a clear failure signal.
4. Stop promotion on agreed criteria such as a critical defect, broken contract/security control, or unacceptable instability. QA supplies evidence; risk acceptance has an owner.
5. Track change lead time, failure causes, recovery time, escaped defects and flaky rate. Use coverage to locate untested code, not as a quality score.
6. Revise checks using production evidence, architecture changes and maintenance cost.

## Boundary of the supplied description

The accompanying text promises a Selenium/Playwright/Cypress comparison including “Playwright is 30–40% faster,” plus dedicated QA Metrics and Test Data Management/GDPR sections. Neither 15-page PDF contains them. They are not attributed to the source, and the benchmark requires a reproducible workload, versions, environment and results.

## Verified references

- [Agile Manifesto principles](https://agilemanifesto.org/principles)
- [Official Scrum Guide 2020](https://scrumguides.org/scrum-guide.html)
- [Martin Fowler: Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html)
- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Cucumber: BDD discovery workshop](https://cucumber.io/docs/bdd/discovery-workshop/)

## Review checkpoint

- Explain CI, Continuous Delivery and Continuous Deployment without naming a tool.
- Choose test levels by speed, defect localization and risk instead of copying a fixed ratio.
- Show which uncertainty TDD, BDD and ATDD reduce and who joins each feedback loop.
- Give every numeric target an owner, measurement window, baseline and response.

