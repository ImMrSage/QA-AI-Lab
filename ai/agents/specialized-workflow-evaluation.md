---
id: specialized-workflow-evaluation
language: en
title: Evaluating Specialized Agent Workflows
topic: agents
tags: [nemo, amazon-quick, mcp, evaluations, workflows]
format: cheat-sheet
learning_depth: SPECIALIZED
reviewed: 2026-09-06
---

# Evaluating Specialized Agent Workflows

## Summary

AWS and NVIDIA present a supply-chain demo connecting Amazon Quick to a NeMo Agent Toolkit workflow through AgentCore. Separate tools inspect delayed orders, inventory, customer impact, policies and logistics before ranking mitigations. Structured evidence, timings and evaluation results accompany the recommendation. Sample tools use CSV data; production integrations remain implementation work.

## Test boundaries

| Boundary | Proposed QA check |
| --- | --- |
| Chat routing | Distinguish a dashboard question from a workflow request |
| Tool input | Reject unknown supplier IDs and malformed parameters |
| Policy decision | Require the correct approval for a proposed action |
| Evidence | Link each recommendation to current supporting records |
| Partial failure | Expose missing inventory or policy data instead of inventing it |
| Actual action | Separate recommending a change from executing it |

## Practical use

Apply the pattern to incident triage: collect deployment, error and dependency evidence, propose next steps, and retain the reason for each. Test tools independently, then orchestration, then the complete user flow. A backend evaluator cannot establish that the chat selected the right action.

## Limitations and corrections

The local evaluation harness does not test the full Quick conversation. Its example latency is one demo run, not a capacity benchmark. The shown clone destination and subsequent `cd` names differ; verify setup before execution. Configuration references also need checking against the actual registered function names.

The sample explicitly uses `AuthorizerType=NONE`; its placeholder header is not authentication. A production adaptation needs enforced identity and authorization. Approval to run an investigation does not authorize later ERP writes. No deployment, sample execution or repository audit was performed.

## Related topics and source

- [Agent evaluation lifecycle](../llm-testing/agent-evaluation-lifecycle.md)
- [Query observability](../../tools/monitoring/agent-query-observability.md)
- [AWS and NVIDIA workflow tutorial](https://aws.amazon.com/blogs/machine-learning/build-specialized-agent-workflows-for-your-business-with-amazon-quick-and-nvidia-nemo-agent-toolkit/). Complete cached body read.
