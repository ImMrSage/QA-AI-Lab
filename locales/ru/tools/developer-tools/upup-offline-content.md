---
id: upup-offline-content
language: ru
source_language: en
authored_language: en
title: "UpUp: Контент сайта без сети"
summary: Небольшая JavaScript-библиотека с лицензией MIT: использует service workers, чтобы показывать заданную офлайн-страницу и кешированные ресурсы при отсутствии сети. Требует HTTPS.
topic: developer-tools
tags: [offline-first, service-workers, javascript, developer-tools]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-10-03
---

# UpUp: Контент сайта без сети

Небольшая JavaScript-библиотека с лицензией MIT: использует service workers, чтобы показывать заданную офлайн-страницу и кешированные ресурсы при отсутствии сети. Требует HTTPS.

## Рекомендация

Подходит для простой офлайн-страницы. Ресурсы должны попасть в кеш при предыдущем посещении с сетью; некешированные страницы и сетевые API автоматически офлайн не заработают. Проверяйте первое и повторное посещения и обновление кеша в целевых браузерах.

## Источники

- [UpUp](https://github.com/TalAter/UpUp)
