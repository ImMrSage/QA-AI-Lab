---
id: python-mock-contracts
language: en
source_language: mixed
authored_language: ru
title: "Python Mocks: Contracts, Outcomes and Lifecycle"
topic: automation
tags: [python, mocks, contracts, test-doubles]
format: practical-guide
learning_depth: SHOULD KNOW
reviewed: 2026-10-05
---

# Python Mocks: Contracts, Outcomes and Lifecycle

A test double isolates an external dependency without accepting calls that the real dependency would reject. Verify application outcomes and the double's contract separately.

## Seven checks

| Risk | Response |
| --- | --- |
| Signature changed | Use autospec to validate arguments |
| Patch misses the call | Replace the name resolved at call time |
| Mock controls a branch | Supply concrete booleans, numbers and response structures |
| Patch outlives the test | Context manager or guaranteed cleanup |
| Only calls are asserted | Add expected results and side effects |
| Argument mutates after calling | Snapshot or inspect inside side_effect |
| Async replaced by a plain object | AsyncMock and await assertions |

`spec` restricts available attributes; `spec_set` also rejects unknown assignments; `autospec` checks signatures. For both strict behaviors use `create_autospec(..., spec_set=True)`. Autospec does not ensure return types or automatically prohibit new attribute assignments.

With `from gateway import send`, the call resolves `send` in the importing module. With `import gateway`, it resolves `gateway.send`. Inspect the actual import form. Dynamic attributes and descriptors complicate autospec; a narrow interface is often easier than a large object.

## Authored example

```python
from unittest.mock import create_autospec

def save_note(text, *, operation_id):
    return {"id": operation_id, "text": text}

save = create_autospec(save_note, spec_set=True)
save.return_value = {"id": "note-1", "text": "QA"}
result = save("QA", operation_id="note-1")
assert result["text"] == "QA"
try:
    save("QA")
except TypeError:
    pass
else:
    raise AssertionError("Missing operation_id was accepted")
```

This checks the test-double mechanism, not real persistence. An application test must call through application code and independently inspect its expected effect. This teaching snippet was executed locally without external services.

A stateful fake helps verify business results but can also drift. Run shared contract scenarios against the fake and a real test dependency. Copying mutable arguments can break identity checks; choose observations according to requirements.

## Sources

- [OTUS: Как писать моки, чтобы тесты падали вместе с продом: 7 частых ошибок (RU)](https://habr.com/ru/companies/otus/articles/1079908/)
- [Python: unittest.mock (EN)](https://docs.python.org/3/library/unittest.mock.html)
