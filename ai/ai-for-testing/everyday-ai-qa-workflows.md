---
id: everyday-ai-qa-workflows
language: en
source_language: ru
authored_language: ru
title: "AI in Everyday QA Work"
topic: ai-for-testing
tags: [ai, qa, test-design, sql, playwright, productivity]
format: cheat-sheet
learning_depth: SHOULD KNOW
reviewed: 2026-10-05
---

# AI in Everyday QA Work

AI can draft artifacts, explore alternatives and assemble repetitive actions. QA defines expected behavior and verifies the outcome. Editing a useful draft can save time; repairing a weak one may cost more than doing the work directly.

## 11 scenarios and outcome checks

The matrix retains the article's scenarios; acceptance criteria are authored for practical use in Lab.

| Task | Delegate to AI | Verify |
| --- | --- | --- |
| Test cases | Draft from a feature description | Expectations trace to requirements; duplicates removed |
| Scenario analysis | Missing conditions and risks | Hypotheses separated from product rules |
| Integrations | Interaction failure scenarios | Timeouts, retries, duplicates and ordering match the contract |
| Tool setup | Explain a command or configuration | Version, parameters and effect understood before execution |
| Test data | Positive, negative and boundary datasets | Constraints, currencies, rounding and locale specified |
| SQL | Query from a question and schema | JOIN, NULL, time zone and filters return expected rows |
| Logs | Hypotheses and next diagnostic step | Cause supported by reproduction or evidence |
| Bug report | Structure from QA observations | No invented steps, environment or expected outcome |
| Automated tests | Small test using existing fixtures | Project style, isolation and assertion meaning preserved |
| UI test failure | Inspect DOM and locator | Repair preserves the target element and original assertion |
| Page checks | Scenarios for selected elements | Explicit scope; check action outcomes, not just clicks |

## Example agent task

For a learning scenario involving a delivery-address change:

> Use the supplied validation rules and existing profile-edit test. Propose three address-change checks: success, invalid postal code and save failure. State the expected UI and data state for each. Turn unknown rules into questions. Show the plan first, then a small diff; do not weaken assertions to obtain a passing result.

A screenshot with highlighted elements helps define investigation scope. It does not establish business rules or prove complete page coverage. Checking every visible button still leaves states, roles, data and failures unexplored.

## Accepting the result

1. Supply relevant requirements, tool version and a project example; remove secrets from logs and data.
2. Inspect the draft for assumptions and task alignment.
3. Execute the query or test in an appropriate test environment.
4. Compare observed behavior with an independent expected outcome.
5. Save the accepted artifact and record actual effort, including verification.

The author's time estimates are personal observations, not a reproduced benchmark. Update a locator only after checking behavior: a failure may indicate a product defect rather than an outdated test. Connecting Playwright MCP does not itself establish repair correctness.

## From requirements to verified tests

Dzianis Talstsiuk's case connects requirements analysis, agreed checks and automation. An inaccessible link does not establish missing requirements.

| Stage | Output |
| --- | --- |
| Analysis | Questions about contradictions, boundaries, design and dependencies |
| Agreement | Developer handoff checklist; separate regression cases |
| Automation | Tests within existing architecture; assertion review |
| Context | Short index and task-relevant documents |

Commands define repeatable requests, subagents separate context, MCP provides tools. Preserve feedback as rules, then retest. OCR, coordinates and negative assertions need attention. An agent council does not replace human review. This describes an approach, not implemented integrations.

## Related materials

- [AI-generated test quality](ai-generated-tests-quality-gates.md)
- [Evidence-led failure triage](evidence-led-test-triage.md)
- [AI-assisted QA documentation](ai-assisted-qa-documentation.md)

## Sources

- [Evgeny Gusinets / QA❤️4Life: «Как я использую AI в работе QA. Честно.» (RU)](https://telegra.ph/Kak-ya-ispolzuyu-AI-v-rabote-QA-CHestno-09-08)

- [Aaaasonya / Dzianis Talstsiuk: «ИИ в тестировании: от анализа требований до автоматизации» (RU)](https://habr.com/ru/articles/1086562/) — translation; the Medium original was not separately reviewed.
