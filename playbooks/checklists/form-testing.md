---
id: form-testing
language: en
title: Form Testing
topic: web-testing
format: checklist
tags: [web-testing, testing]
learning_depth: MUST KNOW
reviewed: 2026-09-05
---

# Form Testing

## TL;DR

Check accepted input, rejected input, clear feedback, and the final saved result. Choose expected behavior from the field and business contracts.

## Input matrix

| Class | Useful values |
| --- | --- |
| Presence | Missing, empty, whitespace-only, valid |
| Length | Minimum and maximum, just inside and outside each boundary |
| Numbers | Zero, negative, bounds, fractional value, excessive precision |
| Text | Unicode, emoji, punctuation, leading and trailing whitespace |
| Dates and times | Valid limits, impossible dates, locale ambiguity |
| Structured fields | Valid and invalid email or phone formats per contract |

Example: for a 3-20 character field, try lengths 2, 3, 4, 19, 20, and 21. Agree how length is measured for emoji and combining characters.

## Submission and feedback

- [ ] Submit an empty form and then a form containing only required fields.
- [ ] Check typing, paste, autofill, and supported input routes.
- [ ] Associate errors with the correct fields and provide useful correction guidance.
- [ ] Preserve appropriate entered values after a failed submission.
- [ ] Check repeated clicks and a failed request followed by retry.
- [ ] Verify the final saved values through an independent read when possible.
- [ ] Exercise server validation directly rather than relying only on browser restrictions.

## Security interpretation

A displayed script or a SQL keyword alone does not establish a vulnerability. Check the behavior in the relevant rendering or data-access context. The absence of one alert popup does not establish safety. Client validation can be bypassed, and input validation alone is not the primary defense against XSS or SQL injection. [OWASP input validation guidance](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

## Limitations and related topics

Currency precision, phone formats, trimming, and date ranges are product rules, not universal constants. This is not a complete security assessment.

- [Web UI testing](web-ui-testing.md)
- [API request review](api-request-review.md)
- Source: `cheatlistforms.pdf`, pp. 1-2; [provenance](../../docs/sources/2026-09-05-testing-cheat-sheets.md).
