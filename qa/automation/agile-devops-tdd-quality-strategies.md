---
id: agile-devops-tdd-quality-strategies
language: en
source_language: ru
authored_language: ru
title: Agile, DevOps and TDD: Quality Strategy
summary: XP, CI/CD, test pyramids, TDD, BDD and ATDD as one practical quality strategy
topic: automation
tags: [agile, devops, ci-cd, tdd, bdd, atdd, xp, testing-pyramid]
format: guide
learning_depth: MUST KNOW
reviewed: 2026-09-22
---

# Agile, DevOps and TDD: Quality Strategy

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

## Practical principles

- CI means frequent mainline integration with fast automated feedback; cadence is contextual
- Possible internal SLOs. Add baselines, failure causes, recovery time and flaky rate
- Delivery is the capability to release safely on demand; Deployment automatically releases qualifying changes. Policies and approvals can remain upstream
- TDD defines a development loop. Coverage and defects are separate outcomes
- It is a heuristic favoring many fast narrow checks and fewer broad expensive ones. BDD is not a test level
- It can expose disagreement earlier, but outcomes depend on participation and examples
- Quadrants discuss purpose; manual and automated work may occur in any quadrant
- Derive targets from risk and feedback cost. “No known critical defects” can be a release criterion, not proof of no defects

## Operational QA strategy

1. Identify risks and concrete behavior examples during refinement. Use Given/When/Then when it clarifies a rule.
2. Keep fast unit/component checks near code, integration/contract checks at boundaries, and E2E checks for critical journeys.
3. Run fast deterministic checks on every CI change. Place slower suites later while preserving a clear failure signal.
4. Stop promotion on agreed criteria such as a critical defect, broken contract/security control, or unacceptable instability. QA supplies evidence; risk acceptance has an owner.
5. Track change lead time, failure causes, recovery time, escaped defects and flaky rate. Use coverage to locate untested code, not as a quality score.
6. Revise checks using production evidence, architecture changes and maintenance cost.

## Knowledge check

- Explain CI, Continuous Delivery and Continuous Deployment without naming a tool.
- Choose test levels by speed, defect localization and risk instead of copying a fixed ratio.
- Show which uncertainty TDD, BDD and ATDD reduce and who joins each feedback loop.
- Give every numeric target an owner, measurement window, baseline and response.

## Sources

- [Principles behind the Agile Manifesto](https://agilemanifesto.org/principles)
- [The Scrum Guide](https://scrumguides.org/scrum-guide.html)
- [Martin Fowler: Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html)
- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Cucumber: BDD discovery workshop](https://cucumber.io/docs/bdd/discovery-workshop/)
