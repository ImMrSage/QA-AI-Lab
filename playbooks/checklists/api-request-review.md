---
id: api-request-review
language: en
title: API Request Review
topic: api-testing
tags: [http, api-testing, checklist]
format: checklist
learning_depth: MUST KNOW
---

# API Request Review

Use with [REST API Request Basics](../../qa/api-testing/rest-api-request-basics.md). These are proposed testing prompts; expected results must come from the endpoint contract and product requirements.

- [ ] Confirm the environment, method, path, and query parameters.
- [ ] Check required headers and the request body's schema and data types.
- [ ] Exercise a valid request and verify actual returned values.
- [ ] Verify status, response headers, schema, and business side effects together.
- [ ] Cover missing, empty, malformed, and boundary input values where relevant.
- [ ] Check access with missing or invalid credentials and another user's resource ID.
- [ ] Check unknown resource IDs and unsupported methods against the contract.
- [ ] For changes, verify persisted state through an appropriate independent read.
- [ ] Consider duplicate submissions and retries when the operation changes state.
- [ ] For asynchronous operations, verify the eventual outcome separately from acceptance.
- [ ] Ensure error messages do not expose credentials or internal implementation details.
- [ ] Record reproducible evidence with secrets removed and clean up test data.

This checklist supplements endpoint-specific tests; it does not establish full security or performance coverage.

## Method-specific checks

| Operation | Additional checks |
| --- | --- |
| POST | All fields vs required-only; missing fields; empty object vs missing body; types, bounds, duplicates, timestamps, saved result |
| GET | Empty/populated collections; valid, unknown and malformed IDs; filters; sorting; pagination boundaries |
| PUT | Complete replacement contract; missing fields; nonexistent target; uniqueness; resulting state |
| PATCH | Supported patch format; targeted changes; unaffected values; invalid patch and concurrent changes |
| DELETE | Existing, missing and already-deleted targets; dependent records; recreation if supported |

- [ ] Check supported media types, localization when applicable, and relevant request/response headers.
- [ ] Measure response time and concurrency against agreed targets in a suitable environment.
- [ ] Check available error logs and correlation evidence with sensitive data protected.

## Contract-dependent corrections

The source treats partial PUT and unchanged omitted fields as general expectations. PUT describes replacement; use the actual contract and distinguish PATCH. Negative offsets do not universally mean the first page, and invalid pagination does not universally require 400. Record the chosen API behavior. Repeated DELETE may return different statuses while preserving the intended effect. Do not require XML support or cascading deletion unless specified.

## Sources

Additional intake: `cheatlistapitesting.pdf`, pp. 1-2; [batch provenance](../../docs/sources/2026-09-05-testing-cheat-sheets.md). The existing [HTTP reference](../../qa/api-testing/rest-api-request-basics.md) remains the canonical methods and status explanation.
