---
id: repeatable-load-testing
language: en
source_language: ru
authored_language: ru
title: Repeatable Load Testing
topic: performance
tags: [performance, scalability, gatling, test-data]
format: article
learning_depth: SHOULD KNOW
reviewed: 2026-10-05
---

# Repeatable Load Testing

Make performance testing a repeatable release activity with realistic data, a documented workload, and correctness checks alongside throughput.

## Workload and correctness

LDM engineers describe a recurring test programme for their content-management platform. They use Gatling against a dedicated Kubernetes environment, preload documents and access policies, test operations separately, then assess scaling and sustained load. Their checks include subsequent reads: a successful upload response does not establish that a file can be downloaded correctly.

Reported bottlenecks include database saturation, a shared network interface limiting load generation, and memory fragmentation. Reports feed changes into later releases. Mixed workloads and real application requests require additional coverage beyond isolated operations. These are the team's reported observations, not independently reproduced benchmarks. [Case study](https://habr.com/ru/articles/1061680/)

## Key concepts and QA relevance

| Concept | QA question |
| --- | --- |
| Data scale | Does the test dataset represent production size and distribution? |
| Load profile | Which operations, users, arrival rates and pauses are represented? |
| Generator capacity | Is the client or shared network limiting the measurement? |
| Correctness under load | Can completed writes be read back accurately? |
| Scalability | Which dependency prevents extra instances improving throughput? |
| Repeatability | Are version, configuration and workload changes recorded? |

## Practical example

For a document API, define an agreed latency and error budget, preload representative documents, and run upload plus read-back checks. Record response-time percentiles, errors, successful business operations, and infrastructure saturation. Repeat with a mixed profile before extrapolating to a customer workload. This is a proposed exercise, not a benchmark from the article.

```mermaid
flowchart TD
 A[Define workload and data] --> B[Validate generator and environment]
 B --> C[Run baseline and scaling scenarios]
 C --> D[Check correctness and bottlenecks]
 D --> E[Record results and improve next release]
```

## Limitations and critical reading

The article's broad scalability language coexists with a database bottleneck. Preserve that boundary. A database bottleneck remains relevant to the delivered system regardless of which team operates it. Tool comparisons, licensing statements and capacity figures are version- and setup-dependent; this note does not recommend a purchase or repeat them as universal facts. Embedded benchmark charts were not separately transcribed or audited; the complete article body was read.

## Engineering load-testing cycle

Sportmaster Lab's article adds a requirements-to-decision process to regular test runs. Use the six stages to organize artifacts, not to guarantee deterministic outcomes.

| Stage | Required deliverable |
| --- | --- |
| Preparation | Build, integrations, generator and monitoring |
| Requirements | Metric, target, workload and constraints |
| Method | Iteration goal, frequency and stop criteria |
| Scenarios | Methods → operations → user journeys; data |
| Execution | Agreed window, observation and recorded run |
| Interpretation | SLO compliance, degradation, headroom and actions |

Typical profiles and bursts answer different questions: do not permanently exclude peaks merely because they are unusual. Record excluded operations and their effect on conclusions. Pacing sets the interval between iteration starts; if execution exceeds it, inspect actual achieved intensity. Warm-up does not replace a separate cold-start scenario.

### Run passport — authored template

- Build SHA, dependency versions and configuration; differences from users' environments.
- Workload, data volume and distribution; growth forecast source.
- Business-success, latency, error and saturation metrics; measurement window and targets.
- Operator, load limits, stop conditions and recovery procedure.
- Achieved load, first violated criterion, exclusions and next task.

Do not generalize the internal 5%/15% and six-month traffic-light thresholds. Define headroom and forecast assumptions; growth need not be linear. Production testing requires agreed impact limits and immediate response to user risk. Advice against overnight repairs does not remove the obligation to stop a harmful run and restore service. These planning procedures are proposed; no QA Lab load test was run.

## Related topics and sources

- [API request review](../../playbooks/checklists/api-request-review.md)
- [Test planning](../qa-process/test-planning.md)
- Vladimir Semenov and Olesya Pankova, [LDM load-testing case study](https://habr.com/ru/articles/1061680/), supplied through the July 2026 digest. Company-authored primary account of its own work.

- [Sportmaster Lab: Нагрузочное тестирование как инженерный процесс (RU)](https://habr.com/ru/companies/sportmaster_lab/articles/1082436/)

Details presented only in embedded source images were not separately transcribed; the note uses the accessible text and authored working templates.
