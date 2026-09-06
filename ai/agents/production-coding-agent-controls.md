---
id: production-coding-agent-controls
language: en
title: Quality Controls for Production Coding Agents
topic: agents
tags: [coding-agents, evaluations, memory, ci-cd, governance]
format: cheat-sheet
learning_depth: SHOULD KNOW
reviewed: 2026-09-06
---

# Quality Controls for Production Coding Agents

## Summary

monday.com describes agents integrated into team tasks, identities and delivery infrastructure. Durable event queues, session workspaces, file-based memory and audit artifacts support continuity. Remote sandboxes and automated standards reviews check changes before merging. The company discusses confidence-based automatic merging using agent history, change class, standards checks and sandbox results.

## Practical QA matrix

| Control | Proposed verification |
| --- | --- |
| Event handling | Duplicate or replayed events do not repeat external actions |
| Session recovery | A restarted worker resumes the right task and constraints |
| Shared memory | Concurrent updates do not overwrite decisions or mix repositories |
| Sandbox | Representative dependencies work without production side effects |
| Automated review | A deliberately bad change is rejected for the intended reason |
| Merge decision | Evidence applies to this agent version and change category |
| Audit | A deployed change can be traced to input, diff, checks and owner |

For a small lab, begin with explicit task context, reviewable diffs and targeted checks. The enterprise orchestration stack is not a prerequisite.

## Limitations

PR throughput and adoption are not measures of delivered quality. The reported 19-in-20 automatic merge rate concerns one agent; the approximately 30% merge figure covers a broader agent population. Their denominators differ. A low revert rate among filtered merges does not measure all defects or establish automatic-merge safety.

Judge-score gains require a fixed independent evaluation set to interpret. Shared human infrastructure does not automatically address agent-specific permissions or untrusted inputs. File memory worked in this case; it does not establish that vector retrieval is universally inferior. The internal wrapper is not open source, and metrics were not independently audited.

## Related topics and source

- [CATS change safety](../../qa/qa-process/ai-change-safety-cats.md)
- [Agent evaluation lifecycle](../llm-testing/agent-evaluation-lifecycle.md)
- [monday.com production agents on AWS](https://aws.amazon.com/blogs/machine-learning/ai-teammates-how-monday-com-runs-production-ai-agents-on-amazon-bedrock/). Complete cached body read.
