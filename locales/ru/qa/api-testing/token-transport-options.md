---
id: token-transport-options
language: ru
source_language: mixed
authored_language: ru
title: "Передача токенов: заголовок, cookie и URL"
topic: api-testing
tags: [tokens, authentication, cookies, csrf, api-security]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-10-03
---

# Передача токенов: заголовок, cookie и URL

Для Bearer API стандартный выбор — `Authorization: Bearer <token>` через HTTPS. Это не гарантия безопасности: токен может утечь из хранилища клиента или логов заголовков. Cookie подходят для браузерной сессии, а долгоживущий токен в URL следует избегать.

## Выбор способа

| Способ | Применение | Что учитывать |
| --- | --- | --- |
| Authorization | API-клиент явно добавляет Bearer-токен | Защита хранения и маскирование логов |
| Cookie | Браузер автоматически отправляет сессию по области действия | Secure, HttpOnly, SameSite и защита от CSRF |
| Query string | Специальный ограниченный доступ по ссылке | URL может сохраниться в истории, логах и аналитике |

Cookie часто содержит непрозрачный идентификатор серверной сессии, а не OAuth access token. JWT — формат токена, не способ его передачи и не признак шифрования.

## Браузерный сценарий

`HttpOnly` запрещает JavaScript читать cookie, но XSS всё ещё может выполнять действия от имени пользователя. `Secure` ограничивает передачу HTTPS. `SameSite` снижает часть рисков CSRF; не заменяет всю защиту. Для cross-site cookie `SameSite=None` требует `Secure`.

Прямая навигация по ссылке не позволяет добавить произвольный Authorization-заголовок. Используйте подходящую браузерную сессию либо специально спроектированную ссылку с коротким сроком и ограниченной областью. Подписанная ссылка — отдельный механизм доступа, а не повод помещать обычный access token в URL.

## QA-проверки: учебный API заметок

1. Пользователь A читает свою заметку; пользователь B получает отказ без содержимого.
2. Истёкший и отозванный токены перестают работать по правилам системы.
3. Токен в неподдерживаемом месте не принимается; конфликтующие credentials не дают неопределённого выбора пользователя.
4. В логах приложения и прокси, отчётах тестов и ссылках отсутствуют секреты.
5. Для cookie проверьте область, флаги, logout и запрещённый запрос с другого сайта.
6. Для временной ссылки проверьте срок, доступ только к нужному ресурсу и повторное использование согласно контракту.

Для OAuth Bearer RFC 6750 рекомендует заголовок и запрещает передавать токен несколькими предусмотренными способами в одном запросе. Cookie-сессии имеют собственный контракт. CORS регулирует доступ браузерного JavaScript к ответу и не заменяет серверную авторизацию.

## Связанные материалы

- [Аутентификация и авторизация](../security/authentication-authorization-review.md)
- [Ответ, доступ и состояние API](api-response-access-state-checks.md)

## Источники

- [RFC 6750: Bearer Token Usage (EN)](https://www.rfc-editor.org/rfc/rfc6750.html)
- [OWASP: Session Management (EN)](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP: CSRF Prevention (EN)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
