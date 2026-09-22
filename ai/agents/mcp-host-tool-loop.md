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

## Core interaction

An application receives a model-proposed weather operation, calls an MCP server and returns the result to the model. The model proposes an operation; host code validates and executes it. MCP can expose tools, resources and prompts, while sampling, roots and elicitation support additional controlled interactions.

The same loop applies to personal assistants, developer tools, game-development utilities, learning applications and QA tooling.

## Practical guidance

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

## Sources

- [Dmitry Barovik — MCP explained](https://habr.com/ru/articles/1027508/): article text reviewed; examples not executed, images and linked courses not audited.
- [MCP 2025-11-25 schema](https://modelcontextprotocol.io/specification/2025-11-25/schema): method names and client control reference. This note does not claim a latest-version compatibility audit.
- [Roots protocol reference](https://modelcontextprotocol.io/specification/2025-03-26/client/roots)
