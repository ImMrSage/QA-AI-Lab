---
id: flaky-test-investigation
language: en
source_language: mixed
authored_language: ru
title: "Flaky Tests: Investigation and CI Control"
topic: automation
tags: [flaky, ci, isolation, retries]
format: practical-guide
learning_depth: SHOULD KNOW
reviewed: 2026-10-05
---

# Flaky Tests: Investigation and CI Control

An unstable outcome calls for investigation, not an automatic increase in retries. One SHA does not freeze data, dependencies, configuration or environmental load.

## Investigation map

| Symptom | Inspect | Evidence of repair |
| --- | --- | --- |
| Passes after retry | Every attempt, environment errors and product races | Cause removed; stable first attempts |
| Depends on speed | Waiting for an observable outcome | Passes across permitted delays |
| Fails only in a suite | Fixture leaks, order and shared data | Order and concurrency do not change outcomes |
| Breaks at date boundaries | Clock, seed, timezone and locale | Explicit inputs and boundary scenarios |
| Remains quarantined | Owner, expiry and lost coverage | Restored to the blocking suite |

## Retries and waits

Playwright distinguishes passed, flaky and failed. It replaces a worker after failure; this does not clean an external database. `failOnFlakyTests` can fail CI on flaky outcomes. Since 1.62, `retryStrategy: 'isolated'` defers retries until the end and runs them sequentially. Check the installed runner version before changing configuration.

Preserve a whole-test retry as another attempt with a bounded budget. A retrying assertion waiting for permitted business-result latency is a different mechanism. Do not repeat non-idempotent operations without duplicate protection. Even HTTP 502 can indicate a product defect.

## Minimal team plan

1. Preserve traces, logs, environment data, seed and attempt number before rerunning.
2. Compare the original failure with retry outcomes; never replace history with the final pass.
3. Run alone, with a suspected neighbor and under controlled concurrency.
4. Isolate external records and files; serialize shared resources explicitly.
5. Assign cause, owner, repair and verification date. Quarantine keeps execution; disabling removes feedback.

Suggested register: test ID, SHA, environment fingerprint, first outcome, retries, cause and investigation minutes. Track tests passing after failure among executed tests and affected builds, with explicit denominators. This is a working template, not a QA Lab measurement.

## Sources

- [OTUS: Пять способов навсегда поселить flaky-тесты в своём CI (RU)](https://habr.com/ru/companies/otus/articles/1080406/)
- [Playwright: Retries (EN)](https://playwright.dev/docs/test-retries)
- [Playwright: TestConfig (EN)](https://playwright.dev/docs/api/class-testconfig)
