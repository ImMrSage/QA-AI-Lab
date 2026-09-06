---
id: usability-beyond-complaints
language: en
title: Usability Beyond User Complaints
topic: web-testing
tags: [ux, research, usability, prioritization]
format: cheat-sheet
learning_depth: SHOULD KNOW
reviewed: 2026-09-06
---

# Usability Beyond User Complaints

## Summary

Alfa Research Center describes a student-portal study combining interviews, task observation, competitor comparison, eye tracking and facial-expression analysis. Thirty-two participants were split between experienced portal users and students from other institutions. Familiar users had learned navigation that newcomers struggled to discover. Frequently used entry points received priority over some isolated task problems.

## Practical QA use

| Evidence | Question to ask |
| --- | --- |
| Successful completion | Was the path direct, or did the user need workarounds? |
| Time and errors | Where did the participant hesitate or recover? |
| New versus experienced users | Are we measuring learnability or familiarity? |
| Satisfaction | Does the explanation agree with observed behavior? |
| Task frequency and impact | How often does this problem harm real work? |

For QA AI Lab, an original pilot task is: find a saved API checklist on a phone and return to the library. Observe first-time and returning readers separately; record completion, wrong turns and assistance. Ask follow-up questions after the task to avoid steering behavior during timing.

## Limitations

The source is a consultancy case study, not a controlled validation of its instruments. Facial-expression scores do not by themselves establish a person's emotions or cognitive load; the reported group difference lacks uncertainty estimates. Heatmaps were not independently audited. Specialized hardware is not shown to be necessary to detect these navigation problems. Frequency should inform prioritization without automatically outweighing rare, severe failures. Its composite score thresholds should not be adopted without the calculation and context.

## Related topics and source

- [Web UI checklist](../../playbooks/checklists/web-ui-testing.md)
- [Test planning](../qa-process/test-planning.md)
- [Student-portal usability study](https://habr.com/ru/articles/1060872/). Complete cached body read.
