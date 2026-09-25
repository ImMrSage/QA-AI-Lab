---
id: performance-testing-degradation-thinking
language: en
source_language: ru
authored_language: ru
title: Performance Testing as Behaviour Under Sustained Load
summary: Model workload, time and degradation instead of treating a performance scenario as a fast functional script.
topic: performance
tags: [performance, load-testing, workload-model, latency, test-data, observability]
format: reviewed-guide
learning_depth: MUST KNOW
reviewed: 2026-09-25
---

# Performance Testing as Behaviour Under Sustained Load

Performance testing asks how a system behaves under a defined workload over time. Functional correctness remains a prerequisite, but the target evidence concerns latency, throughput, errors, resource saturation, recovery and degradation. A short green script does not establish sustained performance.

## Build a workload model

Describe users or producers, their concurrency and arrival pattern, the distribution of business actions, think time, data reuse, ramp-up, duration and expected service levels. A single account may introduce locks, caching or unrealistic contention; prepare enough independent identities and data objects for the model.

Every request still needs a functional oracle. Failed or semantically wrong operations must not be counted as successful throughput. At the same time, do not serialize virtual users by waiting indefinitely: enforce the response-time requirements that a real user or upstream system has.

## Read behaviour as a time series

Look beyond averages. Track percentiles, error categories, throughput, queue depth, connection pools, CPU, memory, garbage collection, storage and downstream dependencies. Correlate changes in these signals. Typical questions are:

- When does p95 or p99 latency bend upward?
- Which resource saturates first?
- Does an error rate remain bounded or cascade?
- Does memory return after load, or accumulate over hours?
- Does the system recover after the workload drops?

Separate test types and their decisions: baseline, load, stress, spike, endurance and capacity tests are not interchangeable. Warm-up, steady state and recovery should be distinguishable in the run and report.

## Make the result reproducible

Record code and infrastructure versions, configuration, dataset, generator capacity, time window, workload profile and monitoring dashboards. Verify that the load generator is not the bottleneck. Run enough repetitions to explain variance, and compare against an owned baseline or SLO rather than a visually attractive chart.

The source is the opening article of a planned series and deliberately focuses on the mental model. Tool selection, detailed execution and numeric thresholds require project-specific evidence.

## Sources

- [Алексей Тиньков: «Как провести нагрузочное тестирование правильно. Часть 1»](https://habr.com/ru/companies/lemana_tech/articles/1068776/)
- [Grafana k6: test types](https://grafana.com/docs/k6/latest/testing-guides/test-types/)

