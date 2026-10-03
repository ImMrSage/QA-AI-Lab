---
id: free-llm-api-evaluation
language: en
source_language: mixed
authored_language: ru
title: "Free LLM APIs: Terms and Suitability Checks"
topic: ai-tools
tags: [llm, api, free-tier, rate-limits, evaluation]
format: comparison
learning_depth: SHOULD KNOW
reviewed: 2026-10-03
---

# Free LLM APIs: Terms and Suitability Checks

A free tier, trial balance and free route within a paid service serve different purposes. Before integration, assess answer quality, routing predictability and the cost of the entire workflow.

## Six options from the review

These are Ungated's observations in the September 14, 2026 article. We have not tested these APIs; bonuses and availability need rechecking.

| Service | Access reported in the review | Observation limits |
| --- | --- | --- |
| Token Harbor | Free models | Quota size not established |
| WoAiToken | Free pools; $5 bonus | Changing models; errors occurred |
| Unikey | 5,000 credits | Trial balance; catalog does not guarantee responses |
| God Router | Selected free routes | Server reported 8 RPM for one route |
| ABCRelay | $2 bonus | Trial balance; some routes failed |
| Z.ai | Free Flash models | Check individual models and limits separately |

## Documentation checks

As of October 3, 2026, Token Harbor publishes 60 requests/minute and 1,800/hour per free account, plus 100/minute and 3,000/hour per IP; keys and models share the account limit. It describes HTTP 429 and Retry-After on excess usage. These are request rates, not the free token budget.

Z.ai's pricing table marks GLM-4.5-Flash and GLM-4.7-Flash as free. FlashX variants are separately priced. A free model does not imply every built-in tool is free.

## Selection protocol for QA Lab

This is a proposed experiment, not an implemented integration.

1. Prepare 20 public or synthetic link-classification examples with expected categories and difficult boundary cases.
2. Validate outputs against a schema: allowed category, valid JSON, rationale and abstention when evidence is insufficient.
3. Record date, route, claimed model ID, latency, answer size, errors and balance before/after. A provider's identifier alone does not prove model provenance.
4. Bound concurrency, timeouts and retries. Do not blindly retry payment or invalid-model errors; respect Retry-After on throttling.
5. Compare cost per accepted result with the current process, including corrections and retries. HTTP 200 with an empty or invalid answer is not success.
6. Keep substantive processing and publication in the existing workflow until the pilot passes. Use a separate spending-capped key and review data retention terms for an external service.

A changing pool is suitable for sorting only after quality checks on our categories. Prefer a fixed route for repeatable comparisons. A short load test establishes observed throughput, not a guaranteed ceiling or SLA.

## Sources

- [Ungated: Бесплатный API для LLM: тестирую 6 сервисов, модели и реальные лимиты (RU)](https://habr.com/ru/articles/1081820/)
- [Token Harbor: API rate limits (EN)](https://tokenharbor.ai/docs/api/rate-limits)
- [Z.ai: Pricing (EN)](https://docs.z.ai/guides/overview/pricing)
