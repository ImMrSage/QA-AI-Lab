---
id: rea-reverse-engineering
language: en
source_language: en
authored_language: en
title: "REA: Agent-Assisted Reverse Engineering"
topic: developer-tools
tags: [rea, reverse-engineering, mcp, binary-analysis, security, 3d]
format: tool-guide
learning_depth: SPECIALIZED
reviewed: 2026-10-16
---

# REA: Agent-Assisted Reverse Engineering

REA connects agents through MCP to reverse-engineering tools for native binaries, JavaScript/Electron, .NET and browser behavior. It helps investigate a specific feature using evidence; it does not automatically recover an entire application's original source project.

## Practical uses and boundaries

| Target | Useful question | Limit |
| --- | --- | --- |
| PDF application | How does a selected local document workflow behave? | Recreating one behavior is different from rebuilding Acrobat |
| Procedural 3D tool | How are geometry parameters or file conversions handled? | Validate topology, normals, UVs, units and material compatibility |
| Local AI generator | Which components prepare inputs and process outputs? | Inference code alone is insufficient without model weights and supporting components |
| Cloud generator | What does the client send and display? | Client analysis does not reveal server code, weights or training data |

## Recommendation

Start with a small program you own or are authorized to examine, one feature and synthetic inputs. Record expected outputs, inspect only the relevant component, then validate an independent implementation on edge cases. Obtain target software and analysis engines under their own licenses; REA's license grants no access to paid features or proprietary assets.

For Windows native analysis, check the exact REA release and provider support first: the Ghidra guide describes experimental support rather than full feature parity. Do not assume every repository-main feature is in the installed npm package.

## Safety

Treat REA as a powerful local tool, not a sandbox. Use an isolated VM without personal files or logged-in accounts, start with static inspection and allow runtime execution separately. Review setup changes to agent configuration and use official distribution links. Local analysis does not guarantee private AI use: returned evidence can enter the model provider's context. Avoid sending secrets, proprietary binaries or confidential documents unnecessarily.

README, security policy, package manifest, shell installer and Windows guide were reviewed. REA was not installed, executed or comprehensively audited; safety and compatibility are not certified.

## Sources

- [REA repository and README (EN)](https://github.com/morluto/rea)
- [Security policy (EN)](https://github.com/morluto/rea/blob/main/SECURITY.md)
- [Windows Ghidra guide (EN)](https://github.com/morluto/rea/blob/main/docs/windows-ghidra-p0.md)
- [Package manifest (EN)](https://github.com/morluto/rea/blob/main/package.json)
- [Shell installer (EN)](https://github.com/morluto/rea/blob/main/install.sh)
