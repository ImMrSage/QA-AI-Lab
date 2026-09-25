---
id: debuggable-agentic-bug-fixing
language: en
source_language: ru
authored_language: ru
title: Debuggable Agentic Bug Fixing with External Evidence
summary: Turn autonomous bug fixing into a measurable pipeline with structured artifacts, independent executors and explicit human gates.
topic: agents
tags: [ai-agents, bug-fixing, evaluation, brt, validation, human-in-the-loop]
format: reviewed-guide
learning_depth: SPECIALIZED
reviewed: 2026-09-25
---

# Debuggable Agentic Bug Fixing with External Evidence

Reliable autonomous bug fixing is an engineered workflow rather than one long prompt. Split the work into bounded stages, require a schema-valid artifact from each stage, and let deterministic code choose transitions. This makes failures attributable and improvements measurable.

## A verifiable pipeline

1. **Prepare:** choose the correct base and target branches, create an isolated branch, refresh code indexes and enforce protected paths.
2. **Acceptance:** derive observable acceptance criteria only from the bug report. Quote the evidence; mark missing expectations as blocked. Do not let implementation details redefine the oracle.
3. **Diagnose:** inspect code read-only, identify the root-cause hypothesis, affected invariants, rejected alternatives and intended change layer.
4. **Scope gate:** estimate complexity and escalate expensive or cross-cutting changes before code is written.
5. **Bug reproduction test:** where appropriate, create a test that is red before the fix and green after it. An external executor must prove that the initial failure is the intended assertion, not an infrastructure error.
6. **Implement and inspect:** make the smallest change, then perform a cheap self-review for conventions and obvious mistakes. Do not treat self-review as an independent verdict.
7. **Quality:** run targeted tests and relevant lint, type and locale checks. Distinguish product failure from inability to execute.
8. **Validate:** use an independent reviewer to compare the diff, acceptance criteria, diagnosis and execution trace. Check for test gaming, weakened assertions, symptom masking and unjustified complexity.
9. **Publish:** create a reviewable change only after the defined gates pass; otherwise return a structured blocked or failed result.

## Design principles

Separate oracle, executor and validator roles. A model must not be the sole source of both a claim and its proof. Audit the trajectory as well as the final diff because a green test can be produced by weakening the test or special-casing the implementation. Keep hard vetoes narrow and send softer concerns to human review to avoid destroying throughput.

Measure completion rate, block reasons, human wait time, escaped defects, review changes, false vetoes, attempts and execution cost. The source describes one team's evolving internal system; its complexity scale, protected paths and gates are hypotheses to calibrate, not universal defaults. Full regression was disabled in the described workflow for cost reasons, which leaves residual risk that must be managed elsewhere.

## Sources

- [Михаил Ланкин и Сергей Левенец: «Агентная правка багов, ч. 1»](https://habr.com/ru/companies/testops_tms/articles/1070080/)
- [Huang et al.: Large Language Models Cannot Self-Correct Reasoning Yet](https://arxiv.org/abs/2310.01798)

