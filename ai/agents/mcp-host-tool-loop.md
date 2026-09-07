---
id: mcp-host-tool-loop
language: en
title: MCP and the Host Tool Loop
topic: agents
tags: [mcp, agents, integration, tools]
format: source-review
learning_depth: SHOULD KNOW
reviewed: 2026-09-07
---

# MCP and the Host Tool Loop

## Source summary

Dmitry Barovik illustrates an application receiving a model's requested weather operation, calling an MCP server, and returning the result to the model. The useful distinction is between a model proposing an operation and host code executing it. The article introduces tools, resources, prompts, sampling, roots and elicitation.

This belongs to independent AI learning and application development, with a Tools connection. It can inform personal assistants, game-development helpers and learning applications as well as QA tooling.

## Protocol corrections

Against the explicitly versioned MCP 2025-11-25 schema, use `sampling/createMessage`, `elicitation/create`, and `notifications/message`; resource reading uses `resources/read`. Several method names in the article differ. Sampling is a request subject to client control, not an unconditional ability to spend tokens. Roots describe filesystem scope; listing a path is not itself an operating-system permission grant. Version and negotiated capabilities matter.

The article's model-provider JSON is an illustration, not MCP's required model API. Its claims about always receiving valid arguments and mutually exclusive text/tool output should not become host assumptions. Validate every requested operation.

## Practical design — original exercise

| Stage | Host responsibility |
| --- | --- |
| Discover | Record available tool schemas |
| Receive proposal | Validate name, arguments and scope |
| Execute | Apply permissions and timeout |
| Return evidence | Match each result to its call |
| Continue | Bound repeated calls and total cost |

Build a read-only assistant for searching personal project notes. Test unknown tools, malformed arguments, unavailable servers and misleading tool-returned text before adding write operations.

## Sources and coverage

- [Dmitry Barovik — MCP explained](https://habr.com/ru/articles/1027508/): article text reviewed; examples not executed, images and linked courses not audited.
- [MCP 2025-11-25 schema](https://modelcontextprotocol.io/specification/2025-11-25/schema): method names and client control reference. This note does not claim a latest-version compatibility audit.
- [Roots protocol reference](https://modelcontextprotocol.io/specification/2025-03-26/client/roots)
