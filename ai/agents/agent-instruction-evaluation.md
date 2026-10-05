---
id: agent-instruction-evaluation
language: en
source_language: mixed
authored_language: ru
title: "AI Agent Instructions: Evaluate Outcomes, Risk and Cost"
topic: agents
tags: [agents, evaluation, instructions, productivity]
format: practical-guide
learning_depth: SHOULD KNOW
reviewed: 2026-10-05
---

# AI Agent Instructions: Evaluate Outcomes, Risk and Cost

Extra instructions change agent behavior without guaranteeing improvement. Evaluate completed tasks, regressions and cost per accepted outcome together.

## Published experiment

Phenx reports three paired runs on the first 100 SWE-bench Lite tasks with Qwen3.6-27B Q4 and SWE-agent, allowing 30 tool calls per task. The comparison added a community instruction set to a baseline configuration.

| Run | Baseline fixes | With instructions | Difference |
| --- | --- | --- | --- |
| 1 | 47 | 40 | −7 |
| 2 | 49 | 43 | −6 |
| 3 | 45 | 40 | −5 |

These are the author's observations, not our reproduced benchmark. Rerunning one sample does not create independent new tasks. Regression rates use different task sets and do not establish a comparable risk reduction. Results do not automatically transfer to other models, budgets or projects.

## Proposed QA Lab pilot

- Select different task types: classification, source processing and UI repairs.
- Fix identical inputs, model, tools and budget for both configurations.
- Change one instruction block; define acceptance criteria beforehand.
- Record paired outcomes: both succeed, instructions only succeed, baseline only succeeds, neither succeeds.
- Verify outcomes independently of agent explanations; count incomplete tasks.
- Measure cost per accepted result, including reading, tools, human review and corrections.

This is a plan, not a change to our rules. Separate mandatory access restrictions from experimental workflow advice. Never remove safety requirements to increase a benchmark score. Redundant instructions can be investigated without weakening those boundaries.

## Sources

- [OTUS: Попросил ИИ-агента писать код осторожнее — а он стал исправлять меньше багов (RU)](https://habr.com/ru/companies/otus/articles/1083366/)
- [Phenx: I Gave My Coding Agent Karpathy’s Discipline Rules (EN)](https://www.phenx.ai/research/karpathy-discipline-rules)
