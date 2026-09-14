# Шпаргалки тестирования: разбор источников

Получены 2026-09-05. Язык: русский. Все 14 страниц отрисованы и визуально изучены, поскольку PDF не содержат извлекаемого текста. Пакет переработан в английские заметки и чек-листы, а не выполнен как инструкции тестирования. Для заметок также доступны русские переводы.

На PDF эвристик, планирования, Web UI и основ есть брендинг ERMITA / Ermita.One. На изученных страницах форм и API нет видимой атрибуции. Даты публикации, исходные URL и лицензии не установлены. Связь с ISTQB не предполагается. Оригиналы остаются в пользовательском Downloads; исходные PDF не включены в Git.

## Распределение

| Файл | Страниц | Обработанные знания |
| --- | --- | --- |
| `cheatlisteurist.pdf` | 1 | [Исследовательские эвристики](../../qa/manual-testing/exploratory-heuristics.md) |
| `cheatlistforms.pdf` | 2 | [Тестирование форм](../../playbooks/checklists/form-testing.md) |
| `cheatlistplan.pdf` | 3 | [Планирование](../../qa/qa-process/test-planning.md) |
| `cheatlistwebui.pdf` | 4 | [Тестирование Web UI](../../playbooks/checklists/web-ui-testing.md) |
| `cheatlistapitesting.pdf` | 2 | [Проверка API, объединено](../../playbooks/checklists/api-request-review.md) |
| `cheatlistbase.pdf` | 2 | [Понятия тестирования](../../qa/fundamentals/testing-concepts.md) |

## Отпечатки файлов SHA-256

- `cheatlisteurist.pdf`: `3ab34e930f6e817e5b081ef03f01a3f7a1d875654e2213a7a70667e73e953058`
- `cheatlistforms.pdf`: `55ed28ae34ad8777203a2bb7aabfa4101aa67bfddd8120684663d02e3bffa9a0`
- `cheatlistplan.pdf`: `48bae1308bda3cb0c99f24e9bf60690d8df1cb3694edcfd359ad5a29c78ad868`
- `cheatlistwebui.pdf`: `2454679a7354fe428deabb37cc3af9a80a71117d5564db1a72a2bed8774f6de3`
- `cheatlistapitesting.pdf`: `87ccb5e84a880ffb1e4684dd5274a7217e5497e81585a95e29551c8320d48cb0`
- `cheatlistbase.pdf`: `daa534303a0406e667ac74d8836f01643a2be7a9f0fd0aa6f7dde470334d719e`

## Редакторские решения

- Переиспользован API-чек-лист без конкурирующего вводного справочника HTTP.
- Разделены основные понятия, исследовательские вопросы, повторяемые проверки и решения планирования.
- Значения UI по умолчанию, денежная точность, пагинация и обновления трактуются как правила продукта.
- Исправлены широкие утверждения об исчерпывающем тестировании и неполных проверках безопасности.
- Добавлены авторские примеры, таблицы, две редактируемые Mermaid-схемы и шаблон тест-плана.
- Это учебные ресурсы, а не результаты выполненных тестов, аудит безопасности или официальный syllabus ISTQB.

## Проверочные источники

- [ISTQB CTFL v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)
- [OWASP: валидация ввода](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [W3C: модальный диалог](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Справочник HTTP и источники RFC](../../qa/api-testing/rest-api-request-basics.md)
