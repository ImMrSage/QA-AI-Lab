---
id: http-header-checks
language: en
source_language: mixed
authored_language: ru
title: "HTTP Headers: Practical API Checks"
topic: api-testing
tags: [http, headers, caching, cors, cookies]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-10-05
---

# HTTP Headers: Practical API Checks

Verify the complete response: exact status, headers, body and state change. HTTP 200 does not guarantee business success. Whether `success: false` is acceptable depends on the contract; monitoring must detect business failures.

## Header matrix

| Headers | Scenario | Check |
| --- | --- | --- |
| Content-Type, Accept | Data format | Contractual type; HTML has not replaced JSON |
| Location | Creation, redirect | Correct target; required method is preserved |
| Cache-Control, Vary | Repeated request | Users and response variants are not mixed |
| ETag, Last-Modified | Conditional read | Validator matches resource version |
| Set-Cookie | Session | Flags, scope, browser transmission |
| WWW-Authenticate, Allow | 401, 405 | Required information is present |
| Retry-After | Limiting, unavailability | Client respects the supplied delay |
| Access-Control-* | Browser API | Preflight and actual response permit the scenario |

## Format, creation and redirects

Content-Type describes the representation; Accept expresses acceptable formats. Check status and actual body before JSON parsing. A 204 has no body; the server must not send Content-Length in it, even zero.

For 201, the created resource is identified by Location or the request URI. Location is not unconditionally required; relative addresses are valid. Check access to the created resource against the contract. Single-range 206 requires Content-Range; multipart responses carry it within parts.

301/302 allow POST to become GET; 307/308 preserve the method. 303 directs retrieval of a representation, normally GET; HEAD is also possible. Check the needed Location as part of the redirect contract, including relative targets, the chain and permitted external destinations. An external domain is not inherently a defect. Unwanted user-controlled destinations require an open-redirect check.

202 means accepted for processing. Check final state and absence of repeated charges separately. Idempotency-Key works only with an implemented server contract.

## Cache and personal data

no-cache allows storage with validation before reuse; no-store prohibits storage. private excludes shared caches; max-age controls freshness and s-maxage applies to shared caches. Vary selects variants but does not replace protection of personal responses. Authenticated requests and cookies require inspecting actual CDN and server configuration.

Read user A's profile, then B's at the same URL through the same shared cache: B must not receive A's data. Repeat a read with If-None-Match using the received ETag: a match should produce bodyless 304; a change should return the current version. ETags may be weak or strong; do not require identical strings across different representations. If-Modified-Since with Last-Modified is an alternative scenario.

## Cookies and security

Secure restricts transmission to HTTPS. HttpOnly prevents JavaScript reading but does not eliminate XSS. SameSite=None requires Secure. For cross-site POST consider SameSite, credentials mode and browser restrictions; SameSite and CORS solve different problems. Check Domain, Path, expiry and logout removal. Preserve multiple Set-Cookie fields separately rather than combining them with an ordinary comma.

According to requirements, check HSTS, CSP, nosniff and embedding protection through frame-ancestors or X-Frame-Options. Presence without an appropriate value is insufficient. Do not include live cookies or tokens in reports.

## CORS in the browser

Cross-origin requests with Authorization, JSON Content-Type or PUT normally require preflight unless suitable permission is cached. OPTIONS checks allowed origins, methods and headers. Do not require a user session on preflight. Check CORS fields on the actual response too: successful OPTIONS does not prove JavaScript can access the result.

Credentialed requests need a specific allowed origin and Access-Control-Allow-Credentials: true; wildcard origin is unsuitable. Account for Vary: Origin when selecting origins dynamically. JavaScript access to non-safelisted response headers is controlled by Access-Control-Expose-Headers. A CORS reading restriction does not prove the server never executed the request. Postman does not replace browser testing.

## Errors and retries

401 requires WWW-Authenticate; 405 requires Allow. 403 means refusal to fulfill the request, not proof of successful authentication. 404 may conceal resource existence. Retry-After is not universally required on 429 or 503; when present, it accepts seconds or an HTTP date. Without it, define bounded retries under the contract. Do not assume every 503 is prohibited from caching; inspect explicit directives.

On 5xx check that public responses do not expose stacks, SQL or filesystem paths. A request ID helps correlate logs if the service provides one.

## Bug report evidence

- Method, sanitized URL, time, environment and steps; status and HTTP version. A reason phrase is not mandatory and is absent in HTTP/2 and HTTP/3.
- Relevant request and response headers, redirect chain or OPTIONS, request ID.
- Raw body with secrets and personal data removed, expected contract and actual side effects.
- For caching, the two-user sequence; for browsers, Network evidence and the observed failure. Sanitize HAR files too.

## Related materials

[HTTP status codes](http-status-codes.md) · [Token transport](token-transport-options.md).

## Sources

- [QA❤️4Life, Евгений Гусинец: «HTTP-статусы и заголовки: шпаргалка для тестировщика»](https://telegra.ph/HTTP-statusy-i-zagolovki-shpargalka-dlya-testirovshchika-09-24) — Russian; complete text read through the Telegraph API. The URL does not establish a publication year.
- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html), [RFC 9111: HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111.html) — English.
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) — English.

These are learning scenarios; no live API was tested in this session.
