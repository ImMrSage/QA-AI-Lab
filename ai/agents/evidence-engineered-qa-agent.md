---
id: evidence-engineered-qa-agent
language: en
source_language: ru
authored_language: ru
title: Evidence-Engineered QA Agents
topic: agents
tags: [ai-agents, qa, evidence, tools, safety, evaluation]
format: architecture-guide
learning_depth: MUST KNOW
reviewed: 2026-09-23
---

# Evidence-Engineered QA Agents

## Build a verification system, not a perfect prompt

A QA agent receives incomplete and conflicting inputs. Its job is to reconstruct an explicit acceptance model, collect independent evidence, expose uncertainty and leave the acceptance decision to the authorized person. Fluent text is not evidence.

## Architecture

| Layer | Responsibility |
| --- | --- |
| Operating instructions | Required sequence, definitions, evidence standard and stopping conditions |
| Skills | Repeatable workflows for requirements, code, API, database, UI and reporting |
| Rules | Permissions, confirmations, secret handling, publication policy and boundaries |
| Project configuration | Repositories, environments, services, roles, allowed actions and artifact locations |
| Deterministic tools | Analyzers, API/DB/UI executors and schema validators |
| Artifacts and feedback | Plans, observations, reports, outcomes, defect patterns and reviewed lessons |

Keep project names, endpoints, roles and tracker states in configuration. Keep secrets outside configuration and versioned artifacts. A portable core still needs an adapter for each real tracker or service.

## Evidence chain

1. Collect the issue, parent, comments, attachments, decisions, code and previous results.
2. Write each required postcondition before treating the implementation as the requirement.
3. Record the source and the observation that could prove or disprove each postcondition.
4. Trace affected code and select checks by risk.
5. Execute deterministic API, read-only database and UI checks where each layer adds independent evidence.
6. Build a matrix: criterion → source → code fact → executed observation → gap → conclusion.
7. Return **met**, **not met** or **insufficient evidence**, plus a focused human checklist.

A successful HTTP response may prove request acceptance without proving persistence or user-visible behavior. If database access is unavailable, report a persistence evidence gap rather than inventing a product defect.

## Controlled actions

- Separate reading, local artifact creation, test-environment mutation and external publication.
- Default database access to read-only; grant writes through a separate, narrow profile.
- Require confirmation for tracker comments, status changes, Git writes and consequential environment actions when policy demands it.
- Never place credentials in plans, reports, repositories or learned patterns.
- Treat tool failure as an execution limitation until product behavior independently demonstrates a defect.
- Let the agent choose the next permitted check; reserve organizational acceptance for its owner.

## Process memory

Store reviewed outcomes outside model weights: recommendation, human decision, missed fact, lesson and the signal that should trigger a future check. A previous pattern raises a hypothesis; current evidence must still confirm it. Version artifacts and record provenance so a reviewer can reconstruct why the process changed.

## Evaluation

Measure returned tasks after an agent recommendation, missed facts, false alarms, criteria with independent executable evidence, time to first useful finding, repeated defect classes and human review effort. Confidence scores need empirical calibration; otherwise use evidence states instead of decorative percentages. Compare a pilot with a suitable baseline and account for task mix, environment changes and team maturity.

## Sources

- [Habr: an engineering verification loop for QA agents](https://habr.com/ru/articles/1064824/)
- [NIST AI Risk Management Framework 1.0](https://doi.org/10.6028/NIST.AI.100-1)
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2023/file/1b44b878bb782e6954cd888628510e90-Paper-Conference.pdf)

