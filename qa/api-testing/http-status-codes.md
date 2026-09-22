---
id: http-status-codes
language: en
source_language: mixed
authored_language: ru
title: HTTP Status Codes: Checks and Pitfalls
summary: HTTP Status Codes: Checks and Pitfalls
topic: api-testing
tags: [http, api-testing, status-codes]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-09-14
---

# HTTP Status Codes: Checks and Pitfalls

## Main idea
Check the exact status, headers, data and side effects against the API contract. Matching only a response class is weak when the contract promises a specific status.

## Status map
| Class | Meaning | What to check |
| --- | --- | --- |
| 1xx | Interim information | Do not treat it as operation completion |
| 2xx | Successful handling at the HTTP level | Data and state changes; 202 is not the task result |
| 3xx | Redirection or conditional cache use | Location and redirect method; 304 has no body |
| 4xx | Request cannot be fulfilled as presented | Error contract and absence of unwanted changes |
| 5xx | Server did not fulfill the request | Dependency diagnosis and client behavior |

## Practical matrix
| Scenario | Codes to distinguish | Check beyond the number |
| --- | --- | --- |
| Creation or background task | 201 / 202 | Created resource or subsequent task completion |
| Response without content | 204 | No body |
| Cache | 304 | Conditional request and reuse of a stored representation |
| Redirection | 301 / 302 / 303 / 307 / 308 | Target and redirect chain; 307/308 preserve the method, 301/302 may change POST to GET |
| Access | 401 / 403 / 404 | 401 requires WWW-Authenticate; 403 does not prove authentication; 404 may conceal a resource |
| Method and format | 405 / 415 / 422 | Allow for 405; unsupported format separate from data semantics |
| Conflict | 409 | Resource state and no partially completed operation |
| Rate limiting | 429 | Limit scope, recovery and bounded retries |
| Infrastructure failure | 500 / 502 / 503 / 504 | 502 means invalid upstream response, 504 means upstream timeout; check client handling |

## Practical guidance
The article covers codes, positive and negative checks, boundaries, rate limiting, headers and common mistakes. The infographic helps memorize classes, but its 3xx caption overgeneralizes behavior: 304 does not require an ordinary redirect.

Do not impose universal expectations such as “empty body → 400” or “negative number → 422”: establish allowed values and the contract first. 201 is not limited to POST; Location is not unconditionally required. RFC 9110 names 422 Unprocessable Content. HEAD has no body; some dynamically calculated headers may differ from GET. OPTIONS describes capabilities rather than guaranteeing a universal method list.

Retry-After on 429 is optional and does not promise an exact limit reset. X-RateLimit-* headers are service-specific. For 206 distinguish single-range and multipart responses. 101 concerns protocol switching in HTTP/1.1; do not generalize the example to every HTTP version. 102 is a specialized WebDAV code, not a required scenario for an ordinary REST API.

## Worked example
For order creation, record the expected code from OpenAPI, body schema and allowed side effects. Repeat without access, with the wrong format and with a conflicting identifier. After rejection, verify that no order appeared. For a background 202 response, observe the final task state separately. Retry after timeout only with idempotency in mind: otherwise duplicate creation is possible.

## Sources
Fully read the Russian article [«HTTP-статусы для тестировщика»](https://telegra.ph/HTTP-statusy-dlya-testirovshchika-06-29), QA❤️4Life, Евгений Гусинец. Its publication year is not established from the URL. The supplied Russian infographic was also fully reviewed; author and license are unspecified, and its “2024” label does not establish publication date. This is an original analysis, not a copy of the sources. Books in the article bibliography were not separately read.

English verification documentation: [HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html), [429 and additional statuses](https://www.rfc-editor.org/rfc/rfc6585.html).

Connections: [HTTP request basics](rest-api-request-basics.md), [HTTP pitfalls](api-foundations-and-http-pitfalls.md), [API request review](../../playbooks/checklists/api-request-review.md).

