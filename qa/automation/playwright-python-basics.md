---
id: playwright-python-basics
language: en
source_language: mixed
authored_language: ru
title: Playwright Python: From Recording to Verification
summary: Playwright Python: From Recording to Verification
topic: automation
tags: [playwright, python, selenium, automation]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-10-05
---

# Playwright Python: From Recording to Verification

## Main idea
The lesson moves from recorded actions to Python tests: locators, pytest fixtures, Page Objects, parallel execution and AI assistance. The practical idea is to turn a recording into a check of an observable outcome. Successful clicks without assertions do not establish application correctness.

## Choices and limits
| Question | Practical answer |
| --- | --- |
| Playwright or Selenium? | Evaluate browser support, infrastructure and existing tests; implementation language does not determine test quality |
| Auto-waiting | Waits for action-specific element readiness, not every business event; use retrying assertions |
| Locator | Describes a search resolved again on use; an ambiguous or wrong selector still breaks the test |
| Sync or async? | Sync suits sequential pytest; async integrates with asyncio, not automatically for speed |
| Jupyter | The lesson's blanket prohibition is wrong: async can work in a compatible environment; Windows event-loop subprocess support matters |
| Parallelism | pytest-xdist is separately installed and uses processes; server-side data isolation remains your responsibility |
| Browsers | WebKit is not installed Safari; engine coverage does not cover every Safari product feature |
| Selenium | Supports explicit and implicit waits; “everything manual versus everything automatic” is too simplistic |

## Locators and workflow
Start with role and accessible name or label. Test IDs provide an agreed contract but are not unconditionally the most stable option. Scope searches to containers. Positional nth is appropriate when order itself is the requirement; otherwise it obscures element identity.

Codegen recording → refine locators → explicit outcome checks → repeatable data → Page Object for repeated actions → run and diagnose failures. A Page Object is not mandatory for every small test.

AI can propose refactoring and locators, but validate them against the actual DOM. Share only context permitted for transmission. MCP provides browser tools to an agent; it does not itself guarantee a correct test.

## Minimal example
In a separate learning environment, install pytest-playwright, then browser binaries with playwright install. Parallel execution additionally needs pytest-xdist. The correct package name is pytest-playwright; the source glossary reverses it.

Save this example as test_save.py and run pytest test_save.py. It is a standalone local HTML example, not an E2E check of the lesson's shop.
```python
from playwright.sync_api import Page, expect

def test_save(page: Page):
    page.set_content('<button onclick="this.textContent=\'Saved\'">Save</button>')
    page.get_by_role('button', name='Save', exact=True).click()
    expect(page.get_by_role('button', name='Saved', exact=True)).to_be_visible()
```

## Practical guidance
In with sync_playwright() as p, p is a Playwright object, not the context manager; p.chromium is BrowserType. The page/context fixtures help manage lifecycle but do not clean your external database. A fixed time.sleep pause does not replace an outcome wait. The test_*.py filename pattern is a configurable pytest discovery convention, not the only possible filename.

Check your understanding: what outcome proves saving, what happens with two identical buttons, and can the test run concurrently with shared data? Answer all three before publishing a test.

## Codegen: when recording actually saves time

In Evgeny Kogtev's case, the team encountered text locators instead of expected test IDs, difficult file and multi-input controls, and unnecessary recorded actions. This is experience with one interface, not proof that the generator is useless.

Codegen selects role, text and test ID locators; review the team's contract separately. It can also record visibility, text and value assertions, but the tester supplies the expected business outcome.

| After recording | Readiness criterion |
| --- | --- |
| Remove accidental actions | Each step serves the scenario under test |
| Review locators | Unambiguous element and understandable contract |
| Check file upload | Locator targets the actual file input |
| Check multi-input control | Values enter the right parts and the form accepts them |
| Assert the outcome | Requirement violations fail even when clicks succeed |
| Prepare data | Reruns do not depend on previous execution |

Do not automatically require test IDs everywhere: roles and labels often express the user interface better. If a component cannot be located reliably, agree on a markup change with its developer.

Pilot three representative scenarios: a simple form, file upload and a multi-input control. Compare total recording, editing and diagnosis time with writing manually, then repeat after an interface change. Faster recording alone does not establish savings without maintenance cost. This is a proposed experiment; it has not run in QA Lab.

## Sources
The Russian lesson was fully read, including code, comparison, AI workflows and interview questions. Whole-page authorship and publication date are not explicitly established; Евгений and Кирилл are mentioned in the text. English official documentation was used for verification. The source's shop examples were not executed; the original teaching example above was checked for syntax only.

- [«Урок 13: Playwright — основы и сравнение с Selenium»](https://qa4life.yonote.ru/share/bd0f6673-7770-4ce7-8daf-89fb837e8ee2)
- [Playwright Python library](https://playwright.dev/python/docs/library)
- [Actionability](https://playwright.dev/python/docs/actionability)
- [Pytest plugin](https://playwright.dev/python/docs/test-runners)
- [Selenium waits](https://www.selenium.dev/documentation/webdriver/waits/)

Connections: [Playwright test review](playwright-review-beyond-lint.md), [Atomic test composition](atomic-test-composition.md).


- [Евгений Когтев: Playwright Codegen: где заканчивается магия и начинается ручной труд (RU)](https://habr.com/ru/companies/domclick/articles/1082326/)
- [Playwright: Test generator (EN)](https://playwright.dev/docs/codegen)
