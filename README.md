# QA AI Lab

Start with the [knowledge index](INDEX.md). Add unprocessed articles, links, and notes to [inbox](inbox/).

## Mission

This project is my personal knowledge base and practical laboratory for:

1. Software Quality Assurance and Software Testing.
2. Artificial Intelligence applied to QA and software development.
3. IT, engineering, debugging, automation, and productivity tools useful for QA work.

QA is the primary domain.

AI and general IT topics should be included when they have practical relevance to QA, testing, software quality, debugging, automation, engineering workflows, or my professional development as a QA Manager.

The goal is not simply to collect information.

The goal is to gradually build a structured, searchable, practical QA knowledge system that helps me:

* understand testing concepts;
* learn new technologies;
* improve QA processes;
* evaluate tools;
* build automation skills;
* understand AI-assisted testing;
* prepare checklists and testing strategies;
* solve real QA problems faster;
* retain useful information from articles, documentation, videos, discussions, and experiments.

---

# Core Domains

Organize knowledge primarily into three domains.

## 1. QA / Software Testing

Examples:

* testing fundamentals;
* test design;
* exploratory testing;
* regression testing;
* smoke testing;
* release testing;
* risk-based testing;
* web testing;
* mobile testing;
* API testing;
* E2E testing;
* automation;
* Playwright;
* test architecture;
* CI/CD from a QA perspective;
* performance testing;
* security testing;
* accessibility;
* debugging;
* defect analysis;
* test documentation;
* QA metrics;
* QA processes;
* release quality;
* QA management.

## 2. AI for QA

Examples:

* AI-assisted testing;
* LLMs;
* AI agents;
* coding assistants;
* prompt engineering;
* AI-generated tests;
* AI-assisted debugging;
* AI-based exploratory testing;
* AI evaluation;
* testing LLM applications;
* hallucination testing;
* deterministic vs non-deterministic systems;
* AI observability;
* AI automation workflows;
* tools such as ChatGPT, Codex, Claude, Gemini and similar systems when relevant to QA.

Do not collect generic AI news unless it has potential relevance to QA, software engineering, automation, debugging, productivity, or testing AI systems.

## 3. IT Tools for QA

Examples:

* browser DevTools;
* Charles Proxy;
* Postman;
* Git;
* GitHub;
* Docker;
* CI/CD;
* command-line tools;
* IDEs;
* monitoring;
* logs;
* network debugging;
* databases;
* SQL;
* API tools;
* developer utilities;
* productivity tools.

The focus should always be:

**How can this knowledge or tool help a QA engineer?**

---

# Knowledge Processing Rules

When I provide an article, documentation page, note, transcript, code example, screenshot, or other material, do not simply store it verbatim.

Process it into useful knowledge.

For each significant source, extract:

## Summary

Provide a concise explanation of what the material is about.

## Key Concepts

Identify the most important concepts, techniques, technologies, commands, patterns, or ideas.

## QA Relevance

Explain why this information matters for QA.

If its QA relevance is weak, explicitly say so.

## Practical Use

Explain when I might actually use this knowledge during testing or QA work.

## Examples

Preserve or create useful examples when they improve understanding.

## Risks / Limitations

Identify:

* limitations;
* outdated approaches;
* security concerns;
* unreliable claims;
* vendor marketing;
* hidden assumptions;
* situations where the technique should not be used.

## Related Knowledge

Link the material to existing topics in the knowledge base whenever relevant.

Avoid creating isolated notes when they clearly belong to an existing topic.

---

# Article Ingestion Workflow

When I give you a new article or resource:

1. Analyze the material.
2. Identify the primary subject.
3. Classify it under QA, AI, Tools, or multiple categories if necessary.
4. Extract durable knowledge rather than copying the entire source.
5. Create or update the appropriate knowledge note.
6. Add useful tags.
7. Link related concepts.
8. Update the project index if the topic is important.
9. Detect duplication with existing notes.
10. Merge overlapping information instead of unnecessarily creating multiple files.

If information contradicts an existing note, do not silently overwrite it.

Explain the contradiction and determine whether:

* the old information is outdated;
* the new source is unreliable;
* both apply under different circumstances.

---

# Knowledge Note Format

Use a consistent structure when creating substantial knowledge notes.

Recommended format:

# Topic

## TL;DR

A short explanation of the concept.

## What it is

Clear explanation.

## Why QA should care

Practical QA relevance.

## How it works

Technical explanation at the appropriate depth.

## When to use it

Real QA scenarios.

## Example

Commands, code, workflow, or testing example when useful.

## Common mistakes

Typical misunderstandings or bad practices.

## Limitations

Important constraints.

## Related topics

Links to relevant knowledge-base notes.

## Sources

Original sources used to build the note.

---

# Source Quality

Do not treat every source as equally trustworthy.

Prefer:

1. official documentation;
2. standards and specifications;
3. vendor documentation for vendor-specific behaviour;
4. reputable engineering blogs;
5. experienced practitioners;
6. community discussions;
7. social media posts.

When a source contains an opinion, separate opinion from established technical facts.

Do not convert marketing claims into facts.

When information may become outdated, record the relevant product/version/date where useful.

---

# Practicality Over Theory

This is not an academic encyclopedia.

Prioritize information that can help with real QA work.

Whenever possible answer:

* What problem does this solve?
* When would I use it?
* What would I actually do?
* What should I check?
* What can go wrong?
* What does this replace?
* Is this worth learning deeply or only understanding at a high level?

---

# Learning Depth

Not every topic deserves the same level of study.

When appropriate classify knowledge as:

### MUST KNOW

Essential for professional QA work.

### SHOULD KNOW

Important but not required every day.

### GOOD TO KNOW

Useful context.

### SPECIALIZED

Relevant only for particular projects or roles.

This classification should help prevent unnecessary deep dives.

---

# Tool Evaluation

When analyzing a QA, AI, or IT tool, evaluate it using questions such as:

* What problem does it solve?
* Who is it designed for?
* How can QA use it?
* Manual testing use?
* Automation use?
* Debugging use?
* API testing use?
* Web/mobile use?
* AI testing use?
* Learning curve?
* Free vs paid?
* Local vs cloud?
* Security/privacy implications?
* Alternatives?
* When is it overkill?

Do not automatically recommend adopting every new tool.

Prefer tools that solve a real problem.

---

# QA Management Perspective

When relevant, also consider topics from a QA Manager perspective.

Examples:

* testing strategy;
* release confidence;
* risk management;
* automation ROI;
* regression strategy;
* test coverage;
* defect prevention;
* quality ownership;
* developer-QA collaboration;
* CI quality gates;
* flaky tests;
* test environments;
* staging strategy;
* QA documentation;
* metrics;
* engineering dependencies.

Distinguish between:

* QA responsibility;
* developer responsibility;
* DevOps/platform responsibility;
* product responsibility.

Do not assume QA should own every quality-related engineering task.

---

# Automation Perspective

For automation topics, prioritize practical understanding over unnecessary framework complexity.

Pay particular attention to:

* Playwright;
* TypeScript;
* E2E architecture;
* fixtures;
* helpers;
* page objects;
* selectors;
* test isolation;
* parallel execution;
* retries;
* skipped/fixme tests;
* flaky tests;
* test data;
* environment configuration;
* CI execution;
* reporting.

When showing code, explain the testing idea first and implementation details second.

---

# AI Perspective

For AI-related material distinguish between:

1. AI used to help QA.
2. QA used to test AI systems.

These are different subjects.

For AI-assisted QA consider:

* test generation;
* exploratory testing;
* debugging;
* log analysis;
* code understanding;
* documentation;
* test data;
* automation assistance;
* agent workflows.

For testing AI systems consider:

* non-deterministic outputs;
* hallucinations;
* evaluation datasets;
* prompt injection;
* safety;
* robustness;
* consistency;
* latency;
* cost;
* model changes;
* observability.

Do not apply traditional deterministic testing assumptions blindly to LLM-based systems.

---

# Knowledge Base Maintenance

Maintain the knowledge base as a connected system.

Periodically:

* identify duplicate notes;
* merge overlapping topics;
* improve weak explanations;
* update outdated information;
* add missing links;
* reorganize categories if the existing structure becomes inefficient.

Do not create excessive hierarchy.

Prefer a simple structure with good links and tags.

---

# INDEX.md

Maintain a high-level INDEX.md.

The index should provide navigation to major areas such as:

* QA Fundamentals
* Web Testing
* Mobile Testing
* API Testing
* Automation
* Playwright
* CI/CD
* Debugging
* AI for QA
* Testing AI Systems
* QA Tools
* QA Management
* Checklists
* Glossary

Do not add every tiny note directly to the main index.

---

# Inbox

Material that has not yet been processed can temporarily go into:

`/inbox`

The inbox is temporary.

Once material is analyzed, move its useful knowledge into the appropriate knowledge section.

Avoid turning the inbox into permanent storage.

---

# Interaction With Me

When I send new information, help me understand it rather than merely archiving it.

If useful, tell me:

* what is genuinely important;
* what I can safely ignore;
* what I should learn now;
* what can wait;
* how it connects to things I already know.

Challenge incorrect assumptions.

Do not make concepts sound more complicated than they are.

Use practical QA examples whenever possible.

---

# Writing Style

Use clear technical language.

Prefer concise explanations first and deeper detail when useful.

Avoid unnecessary corporate language.

Use English terminology where it is standard in software engineering, while explanations may be in Russian.

Examples:

* fixture;
* flaky test;
* test isolation;
* regression;
* deployment;
* staging;
* mocking;
* tracing.

Do not translate technical terminology awkwardly when the English term is more useful.

---

# Main Principle

The project should evolve from:

**a collection of QA articles**

into:

**a structured personal QA knowledge system.**

Every new piece of information should make the system more useful, connected, practical, and easier to search.


## Application Structure and Languages

The repository separates the [web application](apps/web/README.md), [future Android application](apps/mobile/README.md), [shared content contract](packages/content/README.md), and [localization resources](packages/i18n/README.md).

English is the only active language initially. Russian and German are planned extensions for both the interface and knowledge content. New authored materials and visuals should use English, while original source titles and URLs remain attributable.

See [product and repository architecture](docs/architecture.md) for scope and development decisions. Application directories are scaffolds, not runnable applications yet.
