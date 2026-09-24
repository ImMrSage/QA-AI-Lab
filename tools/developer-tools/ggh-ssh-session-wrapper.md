---
id: ggh-ssh-session-wrapper
language: en
source_language: en
authored_language: en
title: "GGH: Recall and Search SSH Sessions"
summary: Reconnect to previous SSH targets and search SSH config hosts through a lightweight wrapper around the existing client.
topic: developer-tools
tags: [ssh, terminal, servers, devops, productivity]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-09-24
---

# GGH: Recall and Search SSH Sessions

## What it does

[GGH](https://github.com/byawitz/ggh) is a lightweight wrapper around the system SSH client. It accepts normal SSH-style connection arguments, remembers previous sessions and provides an interactive list for reconnecting. It can also list or filter host entries from `~/.ssh/config`.

Run `ggh` to browse session history, `ggh -` to browse SSH config entries, or `ggh - <text>` to filter config hosts. `ggh --history` and `ggh --config` provide non-interactive lists. GGH does not replace SSH and requires the SSH executable to be available on the system path.

## Practical recommendation

GGH is useful when QA, development or operations work involves many test environments and bastion hosts. Keep durable connection settings in `~/.ssh/config`; treat history as a convenience rather than the source of truth.

1. Use descriptive SSH aliases such as `stage-api` rather than addresses that are easy to confuse.
2. Keep private keys, passwords, tokens and inline secrets out of hostnames and command arguments because session history may retain them.
3. Preserve normal SSH host-key verification and inspect any changed fingerprint before connecting.
4. Apply least privilege, separate production identities and prefer a managed SSH agent for keys.
5. Install a pinned release or review downloaded scripts before execution instead of piping remote code directly into a shell.

The wrapper improves discovery and recall; it does not add authentication, authorization, tunnelling safety or connection auditing beyond the underlying SSH configuration.

## Sources

- [GGH repository and README](https://github.com/byawitz/ggh)
- [GGH releases](https://github.com/byawitz/ggh/releases)

