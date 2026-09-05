# Testing Cheat Sheets: Source Review

Received: 2026-09-05. Language: Russian. All 14 pages were rendered and visually reviewed because the PDFs contain no extractable text. This batch was processed into English notes and checklists, not executed as testing instructions.

The heuristics, planning, Web UI, and fundamentals PDFs display ERMITA / Ermita.One branding. The forms and API PDFs have no visible attribution in the reviewed pages. Publication dates, original article URLs, and reuse licenses were not established. No affiliation with ISTQB is inferred. Originals remain in the user-provided Downloads location; source PDFs are not included in the Git repository.

## Routing

| Source file | Pages | Processed knowledge |
| --- | --- | --- |
| `cheatlisteurist.pdf` | 1 | [Exploratory heuristics](../../qa/manual-testing/exploratory-heuristics.md) |
| `cheatlistforms.pdf` | 2 | [Form testing](../../playbooks/checklists/form-testing.md) |
| `cheatlistplan.pdf` | 3 | [Test planning](../../qa/qa-process/test-planning.md) |
| `cheatlistwebui.pdf` | 4 | [Web UI testing](../../playbooks/checklists/web-ui-testing.md) |
| `cheatlistapitesting.pdf` | 2 | [API review (merged)](../../playbooks/checklists/api-request-review.md) |
| `cheatlistbase.pdf` | 2 | [Testing concepts](../../qa/fundamentals/testing-concepts.md) |

## File fingerprints (SHA-256)

- `cheatlisteurist.pdf`: `3ab34e930f6e817e5b081ef03f01a3f7a1d875654e2213a7a70667e73e953058`
- `cheatlistforms.pdf`: `55ed28ae34ad8777203a2bb7aabfa4101aa67bfddd8120684663d02e3bffa9a0`
- `cheatlistplan.pdf`: `48bae1308bda3cb0c99f24e9bf60690d8df1cb3694edcfd359ad5a29c78ad868`
- `cheatlistwebui.pdf`: `2454679a7354fe428deabb37cc3af9a80a71117d5564db1a72a2bed8774f6de3`
- `cheatlistapitesting.pdf`: `87ccb5e84a880ffb1e4684dd5274a7217e5497e81585a95e29551c8320d48cb0`
- `cheatlistbase.pdf`: `daa534303a0406e667ac74d8836f01643a2be7a9f0fd0aa6f7dde470334d719e`

## Editorial decisions

- Reused the existing API checklist; did not create a competing HTTP primer.
- Separated core concepts, exploration prompts, reusable checks, and planning decisions.
- Treated UI defaults, monetary precision, pagination behavior, and update contracts as product-specific.
- Corrected broad claims about exhaustive testing and incomplete security probes.
- Added original examples, tables, two editable Mermaid diagrams, and a practical test-plan template.
- These are learning resources, not completed test results, a security audit, or an official ISTQB syllabus.

## Verification references

- [ISTQB CTFL v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)
- [OWASP input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [W3C modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Existing HTTP reference and RFC sources](../../qa/api-testing/rest-api-request-basics.md)
