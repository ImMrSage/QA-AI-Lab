---
id: release-readiness-playbook
language: en
source_language: ru
authored_language: ru
title: Release Preparation and Delivery: Reviewed Playbook
summary: A review of 25 slides covering DoR, DoD, branches, regression, UAT, deployment, hotfixes and reporting with risk-based corrections.
topic: qa-process
tags: [release, regression, uat, git, hotfix, reporting]
format: source-review
learning_depth: SHOULD KNOW
reviewed: 2026-09-21
---

# Release Preparation and Delivery: Reviewed Playbook

## TL;DR

The source describes the full path from work readiness to production observation: Definition of Ready, Definition of Done, branching, sprint completion, versioning, code freeze, regression, UAT, pre-release checks, deployment, hotfixes, documentation and the final report. It is a strong checklist for discussing a team's process, but not a universal sequence. Branches, stages, roles and blocking criteria should fit the architecture, delivery frequency and product risk.

All 25 image-based slides were reviewed visually. The author is Evgeniy Gusinets and the slides identify the QA❤️4Life channel. The original URL and license are unknown. PDF metadata identifies Microsoft PowerPoint and a creation date of 2026-03-16, but this is not a verified publication date. The review was authored in Russian first, then translated into English.

## Source map

| Slides | Subject | Practical takeaway |
| --- | --- | --- |
| 1–4 | Purpose, DoR and DoD | Make start and completion conditions transparent, while separating backlog-item readiness, the Increment and a release decision |
| 5–11 | Gitflow, merge control, sprint completion and SemVer | Select branching and versioning for the product; protect the main branch with checks and review |
| 12–15 | Regression, code freeze, test statuses and UAT | Define entry/exit criteria, environment, exception owners and residual risk |
| 16–19 | Production risks and ownership zones | Before deployment, confirm migrations, backup, rollback, monitoring, communications and business readiness |
| 20–23 | Post-deployment observation, hotfixes and documentation | Use staged verification, observability and a reproducible emergency-fix procedure |
| 24–25 | PM questions and the test report | Base the decision on the version, scope, results, known problems and an explicit recommendation |

## Release-readiness working model

```mermaid
flowchart LR
    A[Changes and risks] --> B[Build and immutable identifier]
    B --> C[Automated and manual checks]
    C --> D[UAT and operational readiness when required]
    D --> E{Risk acceptable?}
    E -->|Yes| F[Progressive deployment]
    E -->|No| G[Fix, defer or approved exception]
    F --> H[Smoke, monitoring and integration checks]
    H --> I[Close release and improve process]
```

For each release, record a specific build or commit SHA, change scope, dependencies, migrations, test results, unresolved defects, rollback plan, monitoring signals and decision owner. The same artifact should be tested and promoted to production; rebuilding after approval creates new uncertainty.

## Claims that need context

| Source wording | Reviewed interpretation |
| --- | --- |
| DoR is a mandatory contract before a sprint | Definition of Ready is a common team agreement, but not an official Scrum commitment. The Scrum Guide says items gain sufficient readiness through refinement |
| DoD prevents technical debt and means “ready to start work” | DoD describes the state of the Increment and required quality measures. It neither guarantees zero technical debt nor grants release approval by itself |
| QA is the last line of defense before develop or production | Quality is shared responsibility. QA supplies risk information; CI, branch rules, reviews and access controls should enforce technical constraints |
| A release branch is always frozen when regression starts | This is one viable workflow. Trunk-based development, feature flags, short-lived branches and continuous delivery stabilize changes differently |
| SemVer applies to every application | SemVer communicates changes to a declared public API. An internal application may use another scheme if it unambiguously connects build, code and environment |
| No failed, blocked or not-run tests may remain | Status alone does not decide release readiness. Consider criticality, covered risk, reason, workaround, exception owner and residual impact |
| UAT is always the final check before production | Acceptance depends on contract and process. It may include user, operational, contractual or regulatory confirmation and need not be the only final stage |
| The first two hours after deployment are critical | The observation period follows traffic shape, delayed jobs, caches, integrations and SLOs. Some failures require a day or a full business cycle to surface |
| A hotfix must follow one master/release branch path | Reproducibility, minimal diff, verification, approval, observability and propagation to all supported branches matter more than branch names |

## Release criteria as evidence

| Area | Minimum evidence |
| --- | --- |
| Identity | Version, commit SHA, checksum or image digest; component list |
| Changes | Linked work items, release notes, migrations, feature flags and configuration |
| Quality | Required-check results, known defects, omissions and rationale |
| Data | Verified migration, backup or another demonstrated recovery mechanism |
| Operations | Dashboards, alerts, logs, response owners and rollback thresholds |
| Business | Required approvals, support, communications and launch timing |
| Decision | Who approved release, when, from which evidence and with what residual risk |

## Detected inconsistencies

- The final slide states 150 test cases, but the statuses total 142 passed + 5 failed + 1 blocked + 0 skipped = 148. Two cases have no status. The report is incomplete until its denominator is reconciled.
- The regression donut chart is illustrative. Percentages and absolute counts should come from the same data snapshot to keep the visualization consistent with the report.
- “Production configuration differs” is correctly identified as a threat, but documentation alone is insufficient: version, compare and automatically validate configuration before deployment.
- A rollback plan does not prove rollback is possible. Irreversible data migrations need a separate roll-forward or recovery strategy and rehearsal.

## Release checklist

- [ ] The release version and immutable artifact are identified.
- [ ] Changes, dependencies, migrations and feature flags are known.
- [ ] Required checks are complete; deviations have an owner and risk assessment.
- [ ] The environment and configuration are production-like or their differences were explicitly tested.
- [ ] Deployment, stop, rollback or recovery procedures are executable and verified.
- [ ] Dashboards, alerts, logs and business signals are ready before deployment.
- [ ] Decision owner, deployer and incident responders are assigned.
- [ ] Smoke scenarios, integrations and selected metrics are checked after deployment.
- [ ] The final report includes denominators, omissions, known issues and a recommendation.

## Related material and sources

- [Source PDF — “QA Release Playbook”](../../docs/sources/originals/2026-09-21-qa-release-playbook.pdf), SHA-256 `faacf54d819a9db558c4ef4b584b05fac9839b2f0dfe61ee2c4556e3851c146d`.
- [Automating release coordination](release-orchestration.md).
- [Risk-based test planning](test-planning.md).
- [Test plan template](../../playbooks/templates/test-plan.md).
- [Scrum Guide 2020](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf), [Semantic Versioning 2.0.0](https://semver.org/) and [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow), checked 2026-09-21.
