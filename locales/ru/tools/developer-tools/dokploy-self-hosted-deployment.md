---
id: dokploy-self-hosted-deployment
language: ru
source_language: en
authored_language: en
title: "Dokploy: развёртывание приложений на своём сервере"
summary: Управление развёртыванием приложений, Docker Compose и базами данных на собственных серверах.
topic: developer-tools
tags: [dokploy, docker, deployment, self-hosted, devops]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-10-06
---

# Dokploy: развёртывание приложений на своём сервере

[GitHub](https://github.com/Dokploy/dokploy) · [Документация](https://docs.dokploy.com/).

Dokploy — самостоятельно размещаемая PaaS для развёртывания приложений и управления базами данных. README перечисляет Docker Compose, маршрутизацию Traefik, мониторинг ресурсов, резервные копии баз во внешнее хранилище, удалённые серверы и CLI/API.

## Рекомендация

Подходит для рассмотрения как панель тестового окружения с приложением и зависимостями. Начните с одного учебного стека; проверьте развёртывание, логи и восстановление данных. Расходы на сервер и обслуживание остаются на владельце. Настроенная резервная копия ещё не доказывает возможность восстановления.

Проверен README; установка, цены хостинга и работа функций не тестировались. Хостинг QA AI Lab не менялся.

## Связанный материал

[Docker Zero to Hero](docker-zero-to-hero.md).

## Источники

- [README Dokploy (английский)](https://github.com/Dokploy/dokploy)
