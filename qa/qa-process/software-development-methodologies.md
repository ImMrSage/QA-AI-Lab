---
id: software-development-methodologies
language: en
title: Software Development Models and Delivery Frameworks
topic: qa-process
format: cheat-sheet
tags: [sdlc, waterfall, v-model, spiral, scrum, kanban, qa-process]
learning_depth: MUST KNOW
reviewed: 2026-09-22
---

# Software Development Models and Delivery Frameworks

## Name the kind of approach first

The terms are often grouped under “methodologies,” but they solve different problems.

| Kind | Examples | Main question |
| --- | --- | --- |
| Lifecycle model | Waterfall, V-Model, Spiral, incremental and iterative development | How does work move from an idea to an operated product? |
| Product delivery framework | Scrum | How does a team inspect results and adapt its plan? |
| Flow strategy | Kanban | How does a team visualize and improve the flow of work? |
| Rapid-development approach | RAD | How can modular delivery, prototyping and user feedback shorten the learning cycle? |

Teams can combine compatible ideas. Scrum can use Kanban practices, and an incremental product can still require formal verification evidence.

## Lifecycle models in practice

| Approach | Useful when | QA contribution | Main caution |
| --- | --- | --- | --- |
| Waterfall | Scope and hand-offs are stable, changes are expensive, and formal phase evidence matters | Review requirements, define acceptance evidence early, trace checks to specifications and verify each hand-off | Late feedback makes misunderstood requirements expensive; a sequential plan does not require postponing all testing |
| V-Model | Strong traceability between development work products and verification or validation evidence is valuable | Plan corresponding test levels while requirements, architecture and design are created | It is a planning model, not a guarantee of compliance or quality |
| Spiral | Major technical, safety or business risks must be reduced through repeated experiments | Design risk-focused prototypes and tests, evaluate evidence after each cycle and update the risk plan | Coordination cost is justified only when uncertainty and consequences are substantial |
| Incremental | Value can be delivered in usable slices | Test each slice and its integration with what already exists | Locally complete increments can still create system-wide gaps |
| Iterative | The solution needs repeated refinement based on evidence | Compare each iteration with learning goals and regression risks | Iteration without an explicit hypothesis becomes rework without learning |
| RAD | The product is modular, users are available for frequent feedback, and rapid prototyping is feasible | Define acceptance examples, test prototypes and protect critical integration paths | A fixed “60–90 day” promise is not part of the definition; architecture, dependencies and regulation can dominate the schedule |

Regulated medical or aviation work needs risk management, traceability, verification, validation and appropriate documentation. A V-shaped mapping can help organize that evidence, but regulation does not make one lifecycle model universally mandatory. Agile work also requires enough documentation for its risks and context.

## Scrum and Kanban

Scrum defines three accountabilities: Developers, Product Owner and Scrum Master. Its five events are the Sprint, Sprint Planning, Daily Scrum, Sprint Review and Sprint Retrospective. A Sprint lasts one month or less and contains the other events. Scrum also defines three artifacts—Product Backlog, Sprint Backlog and Increment—each with a commitment. QA is part of the cross-functional work rather than a separate Scrum role; acceptance criteria and examples are developed collaboratively.

Kanban is a strategy for optimizing flow. Make work and policies visible, control work in progress, pull new work when capacity is available, and use flow measures such as work item age, cycle time, throughput and work in progress. Kanban can support product development, service work or operations and can complement Scrum.

| Situation | Favor | Reason |
| --- | --- | --- |
| A stable team needs a regular product goal and inspect/adapt rhythm | Scrum | Timeboxed goals and feedback events provide cadence |
| Arrival rates and priorities change frequently | Kanban practices | Pull and explicit WIP control expose flow problems |
| A Scrum team has long queues or unpredictable completion | Scrum with Kanban practices | Keep the framework while improving flow |
| Formal evidence is required | Suitable lifecycle plus explicit controls | Traceability and assurance depend on controls and evidence, not the label |

## QA throughout the SDLC

| Stage | QA work and evidence |
| --- | --- |
| Concept and discovery | Identify users, quality risks, assumptions, constraints and measurable outcomes |
| Requirements | Clarify examples, acceptance criteria, permissions, failure behavior and non-functional needs |
| Architecture and design | Review testability, observability, interfaces, data, threat and failure modes |
| Development | Provide fast feedback through reviews, component and integration checks, and exploratory learning |
| System validation | Exercise critical journeys, integrations, accessibility, performance, security and recovery according to risk |
| Release | Present coverage, failures, residual risk, rollback readiness and decision ownership |
| Operation and maintenance | Use telemetry, incidents and user feedback to revise risks and regression coverage |

Early feedback usually reduces avoidable rework, but ratios such as “a defect becomes 10× more expensive at every phase” are not universal laws. Measure discovery stage, repair effort, delay, customer impact and recurrence in the actual product.

## Choose with constraints, not labels

1. How stable and discoverable are the requirements?
2. How often can users and decision-makers provide feedback?
3. What safety, privacy, legal and audit evidence is required?
4. Can value be split into independently useful increments?
5. Which technical and integration risks must be retired first?
6. How variable is incoming work and how costly is delay?
7. What skills, ownership and deployment capabilities does the team have?
8. How quickly can production evidence change the plan?

A useful decision record names the chosen combination, the constraints it addresses, expected feedback loops, required evidence, flow measures and a date to revisit the choice. The approach is a working hypothesis, not a permanent identity.

## Sources

- [Manifesto for Agile Software Development](https://agilemanifesto.org/)
- [Principles behind the Agile Manifesto](https://agilemanifesto.org/principles)
- [The Scrum Guide](https://scrumguides.org/scrum-guide.html)
- [The Kanban Guide](https://kanbanguides.org/)
- [Kanban Guide for Scrum Teams](https://www.scrum.org/resources/kanban-guide-scrum-teams)
- [FDA Medical Device Software Guidance Navigator](https://www.fda.gov/medical-devices/regulatory-accelerator/medical-device-software-guidance-navigator)
- [FDA: Off-The-Shelf Software Use in Medical Devices](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/shelf-software-use-medical-devices)

