---
id: token-transport-options
language: en
source_language: mixed
authored_language: ru
title: "Token Transport: Headers, Cookies and URLs"
topic: api-testing
tags: [tokens, authentication, cookies, csrf, api-security]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-10-03
---

# Token Transport: Headers, Cookies and URLs

For a Bearer API, the standard choice is `Authorization: Bearer <token>` over HTTPS. This does not guarantee security: client storage or header logs can leak the token. Cookies fit browser sessions; avoid long-lived tokens in URLs.

## Choosing transport

| Method | Use | Consideration |
| --- | --- | --- |
| Authorization | API client explicitly adds a Bearer token | Protect storage and redact logs |
| Cookie | Browser automatically sends a session within its scope | Secure, HttpOnly, SameSite and CSRF protection |
| Query string | Specialized restricted link access | URLs can persist in history, logs and analytics |

A cookie often holds an opaque server-session identifier rather than an OAuth access token. JWT is a token format, not a transport method or evidence of encryption.

## Browser scenario

`HttpOnly` prevents JavaScript from reading the cookie, but XSS can still perform actions as the user. `Secure` restricts transmission to HTTPS. `SameSite` reduces some CSRF risks; it does not replace all protection. Cross-site cookies with `SameSite=None` require `Secure`.

Direct link navigation cannot attach an arbitrary Authorization header. Use an appropriate browser session or a purpose-built, short-lived, scoped link. A signed URL is a separate access mechanism, not a reason to put an ordinary access token in a URL.

## QA checks: learning notes API

1. User A reads their note; user B receives a denial without content.
2. Expired and revoked tokens stop working according to system rules.
3. Unsupported token locations are rejected; conflicting credentials do not create ambiguous user selection.
4. Application and proxy logs, test reports and links contain no secrets.
5. For cookies, check scope, flags, logout and a forbidden cross-site request.
6. For temporary links, check expiry, access only to the intended resource and reuse according to the contract.

For OAuth Bearer, RFC 6750 recommends the header and prohibits sending a token through multiple specified methods in one request. Cookie sessions have their own contract. CORS governs browser JavaScript access to responses and does not replace server authorization.

## Related materials

- [Authentication and authorization](../security/authentication-authorization-review.md)
- [API responses, access and state](api-response-access-state-checks.md)

## Sources

- [RFC 6750: Bearer Token Usage (EN)](https://www.rfc-editor.org/rfc/rfc6750.html)
- [OWASP: Session Management (EN)](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP: CSRF Prevention (EN)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
