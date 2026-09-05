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
