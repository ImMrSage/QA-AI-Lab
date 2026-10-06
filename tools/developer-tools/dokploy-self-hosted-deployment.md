---
id: dokploy-self-hosted-deployment
language: en
source_language: en
authored_language: en
title: "Dokploy: Self-Hosted Application Deployment"
summary: Manage application deployments, Docker Compose stacks and databases on your own servers.
topic: developer-tools
tags: [dokploy, docker, deployment, self-hosted, devops]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-10-06
---

# Dokploy: Self-Hosted Application Deployment

[GitHub](https://github.com/Dokploy/dokploy) · [Documentation](https://docs.dokploy.com/).

Dokploy is a self-hostable PaaS for deploying applications and managing databases. Its README lists Docker Compose, Traefik routing, resource monitoring, database backups to external storage, remote servers and CLI/API access.

## Recommendation

Consider it for a test environment containing an application and its dependencies. Begin with one disposable stack; verify deployment, logs and data recovery before expanding. Your server costs and maintenance remain your responsibility. A configured backup does not prove restoration works.

The README was reviewed; installation, hosting prices and feature behavior were not tested. QA AI Lab hosting was not changed.

## Related material

[Docker Zero to Hero](docker-zero-to-hero.md).

## Sources

- [Dokploy README (English)](https://github.com/Dokploy/dokploy)
