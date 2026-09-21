---
id: testing-foundations-blocks-1-3-review
language: en
source_language: ru
authored_language: ru
title: Testing Foundations: Review of Blocks 1–3
summary: A reviewed guide to 22 pages on testing goals, terminology, software quality, requirements and reviews.
topic: fundamentals
tags: [fundamentals, terminology, quality, requirements, reviews]
format: source-review
learning_depth: MUST KNOW
reviewed: 2026-09-21
---

# Testing Foundations: Review of Blocks 1–3

## TL;DR

The PDF provides a broad map of foundational concepts and works well for revision. Its strength is connecting terms to examples. Numeric rules, career matrices and some classifications should be treated as the author's guidance. In practice, selecting checks by risk, recording expected results and measurement conditions, and separating standards from local team processes matter more.

All 22 image-based PDF pages were reviewed visually. The cover names Evgeniy Gusinets as the author and QA❤️4Life as the Telegram channel. The original URL and license are unknown. File metadata contains a creation date of 2026-04-27, but this is not a verified publication date. The review was authored in Russian first, then translated into English.

## Source map

| Pages | Subject | What to retain in practice |
| --- | --- | --- |
| 1–8 | Definition and purposes of testing, early testing, positive and negative scenarios, skills, QA/QC/Testing, seven principles | Testing provides information about risk; start feedback early; exhaustive coverage is usually impossible |
| 9–14 | Error, defect and failure; expected and actual result; testware; process; criteria; verification/validation; severity/priority; bug report; metrics | Use an agreed vocabulary, reproducible evidence and metric context |
| 15–22 | Software quality, ISO/IEC 25010, functional and non-functional requirements, requirement attributes, review types, quality gates and traceability | Turn needs into testable criteria and apply static testing before code execution |

## Working model

1. Identify the object, stakeholders and risk to reduce.
2. Find the test basis: requirements, design, code, agreements, regulations or observed behavior.
3. Record a testable expected result and the conditions under which it applies.
4. Select static and dynamic checks, a test level and relevant quality characteristics.
5. Collect evidence: environment, data, steps, actual result, logs and impact.
6. Communicate residual risk and the decision owner; test or bug counts alone do not establish quality.

```mermaid
flowchart TD
    A[Need and context] --> B[Risks and test basis]
    B --> C[Testable criteria]
    C --> D[Static and dynamic checks]
    D --> E[Evidence and defects]
    E --> F[Residual risk and decision]
    F -->|New information| B
```

## Terms worth separating

| Pair | Practical distinction |
| --- | --- |
| Error / defect / failure | A human action may introduce a defect; execution of the defective item under particular conditions may cause an observable failure |
| Expected / actual result | Expected behavior is derived from the test basis and agreed criteria; a discrepancy requires investigation rather than automatic defect classification |
| Severity / priority | Severity describes impact; priority describes work order and urgency. Scales and decision owners depend on the team |
| Verification / validation | Simplified: conformance to specification and fitness for a need; real activities may provide both kinds of evidence |
| Positive / negative check | Valid scenarios confirm expected behavior; invalid and exceptional conditions check safe, understandable handling |
| Static / dynamic testing | Static testing evaluates work products without executing the software under test; dynamic testing requires its execution |

## Critical clarifications

| PDF claim or model | Clarification |
| --- | --- |
| Defect-fix cost grows by ×1/×5/×10/×20/×100–1000 | Early feedback is useful, but these multipliers are not a universal law. Cost depends on the product, architecture, detection and consequences |
| 80% of defects occur in 20% of modules | Defect clustering describes observed concentration; 80/20 is a heuristic. Do not treat the percentages as guaranteed |
| QA ⊃ QC ⊃ Testing with three fixed duty sets | This model appears in learning materials, but titles and boundaries vary. ISTQB describes test roles and activities, not a mandatory QA/QC corporate hierarchy |
| Junior/Middle/Senior skills matrix for 2025–2026 | This is the author's career guide. SQL, API and Git are useful, while a particular language, broker, Kubernetes or AI depends on the vacancy and product context |
| C1–C5 with fixed severity/priority actions | A local scale. Agree definitions, examples, authority and triage SLA within the organization |
| Coverage, pass rate, DDP and other formulas | Always state denominator, period, scope, severity and data source. A high percentage does not prove acceptable risk |
| Eight ISO/IEC 25010 characteristics | This is the 2011 model. The current [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html) has nine characteristics; the complete paid standard was not reviewed here |
| Functional and non-functional requirements as a strict pyramid | This is a convenient model, but constraints can apply at every level, and a quality characteristic often qualifies how a function is delivered |
| Quality Gate, Quality Debt, TQM, SAFe and RTM as one vocabulary | These terms come from different practices and models. Before applying one, define its meaning, owner and the decision the artifact supports |

## Testware, criteria and reviews

Plans, strategies, test bases, scenarios, test cases, logs and reports form testware in an organization's particular context. Each document does not need a separate artifact. Keep the minimum set that supports planning, execution, reproducibility and decisions.

Entry, exit, suspension and resumption criteria answer different questions: when useful testing can start, when enough has been completed, when to stop and what allows work to resume. Definition of Done is a team agreement about completion of a work item; it does not automatically replace testing exit criteria or a release decision.

Reviewing requirements, code and tests can reveal ambiguity and defects before software execution. Formality depends on risk. An inspection requires defined roles and a process; a walkthrough and technical review do not have to copy that structure. See the official [ISTQB CTFL v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf).

## Practical checklist

- [ ] The check names the risk or question it should answer.
- [ ] Test basis, environment, data and build version are recorded.
- [ ] The expected result is testable and does not rely on “fast,” “friendly” or “normal” without a criterion.
- [ ] Positive, negative and exceptional scenarios are selected by risk.
- [ ] Severity is distinct from priority, and the release decision from the number of closed test cases.
- [ ] A metric has a period, denominator, scope and purpose.
- [ ] Requirements and tests are linked where traceability helps assess impact and coverage.
- [ ] The result communicates known residual risk and evidence limitations.

## Related material and sources

- [Testing concepts](testing-concepts.md).
- [Software quality and measurable criteria](software-quality-criteria.md).
- [Risk-based test planning](../qa-process/test-planning.md).
- [Source PDF — “Основы тестирования Блок 1–3”](../../docs/sources/originals/2026-09-21-testing-foundations-blocks-1-3.pdf), SHA-256 `4ac1d19608900339f00e4784c862d0a6a9bd7e929b402c0ec64059f7a5faf3ba`.
- [ISTQB CTFL v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) and the public [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html) page, checked 2026-09-21.
