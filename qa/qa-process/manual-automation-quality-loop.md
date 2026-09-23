---
id: manual-automation-quality-loop
language: en
title: One Quality Loop for Manual and Automated Testing
topic: qa-process
format: playbook
tags: [manual-testing, automation, regression, triage, release-readiness]
learning_depth: MUST KNOW
reviewed: 2026-09-23
---

# One Quality Loop for Manual and Automated Testing

## Organize decisions, not competing teams

Manual and automated testing provide different evidence. A useful process makes the hand-offs reproducible: which risk needs coverage, why automation is valuable, what existing suites must run, who investigates a failure and what evidence supports feature or release readiness.

## Feature workflow

| Stage | Decision | Evidence left behind |
| --- | --- | --- |
| Before implementation | Select risks and automation candidates; choose test level, environments, timing and owner | Backlog item naming the risk and expected signal |
| During development | Run relevant existing checks; review the meaning of the proposed scenario | Results linked to the change; agreed scenario and oracle |
| Feature verification | Combine exploratory/manual evidence with reliable automated results | Covered paths, findings, environment and unresolved risk |
| Completion | Record implemented, manual and deferred coverage where normal work happens | Links among requirement, tests, runs, defects and follow-up work |

Automate when repeated execution, criticality, regression frequency, setup cost or configuration breadth justify maintenance cost. A manual tester can review scenario intent without reviewing framework code. Immediate automation of every feature belongs in the Definition of Done only when the team has deliberately adopted and can sustain that policy.

## Regression workflow

1. Agree scope before execution: builds, configurations, installation and upgrade paths, suites, manual checks, owners and exit criteria.
2. Run the planned automated sets on the agreed matrix.
3. Classify every failure as product defect, test defect, infrastructure failure or expected behavior change.
4. Assign the next action and decide whether a rerun can restore a trustworthy signal.
5. If it cannot, document whether a manual check can compensate for the missing evidence.
6. Link runs, defects, tasks, compensation and open risks before the release decision.

Manual compensation is temporary evidence, not a silent “pass.” Record the exact scenario, environment, result, limitation and the task that restores automation.

## Failure record

| Field | Purpose |
| --- | --- |
| Failed check and configuration | Reproduce the signal |
| Classification and evidence | Separate product, test and infrastructure work |
| Owner and next action | Prevent ownerless failures |
| Rerun or manual compensation | Explain how confidence was restored |
| Linked defect or task | Preserve follow-up |
| Residual risk and decision owner | Make acceptance explicit |

Keep coverage information in the issue tracker, TMS and CI links used during the work. A parallel coverage spreadsheet or mind map becomes misleading when nobody updates it. The process should define decision points, ownership, outputs and criteria; it cannot repair flaky tests, weak environments or poor test architecture.

## Release-ready means explainable

A release decision should reconstruct what was checked, on which builds and environments, which failures were investigated, what was checked manually, which risks remain and who accepts them. The process does not prove the absence of defects or guarantee a shorter regression. It makes the evidence observable and repeatable.

## Sources

- [InfoWatch on Habr: connecting manual and automated testing](https://habr.com/ru/companies/infowatch/articles/1063872/)

