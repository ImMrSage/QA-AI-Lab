---
id: sql-for-testers
language: ru
source_language: mixed
authored_language: ru
title: "SQL для тестировщика: SELECT, JOIN и подзапросы"
topic: api-testing
tags: [sql, databases, joins, data-validation]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-10-05
---

# SQL для тестировщика: SELECT, JOIN и подзапросы

Начните с вопроса: что означает одна строка результата — пользователь, заказ или платёж? Это помогает заметить пропущенные записи и завышенные суммы. Ниже используется учебная схема: `users(id, name, email, status, created_at)`, `orders(id, user_id, amount)`, `payments(id, order_id, status)`. Идентификаторы — первичные ключи, `id` не допускает NULL.

## Как выбрать запрос

| Задача | Приём | Что проверить |
| --- | --- | --- |
| Найти записи | SELECT + WHERE | Границы дат, NULL, порядок |
| Получить связанные данные | INNER JOIN | Нужны ли записи без пары? |
| Сохранить записи без пары | LEFT JOIN | Условия ON и WHERE |
| Проверить наличие или отсутствие | EXISTS / NOT EXISTS | Какие записи считаются подходящими? |
| Посчитать по сущности | GROUP BY или отдельная агрегация | Не умножились ли строки после JOIN? |
| Найти дубли | GROUP BY + HAVING | Правила регистра и нормализации |

## SELECT и фильтры

```sql
SELECT id, email, status
FROM users
WHERE created_at >= '2024-01-01'
ORDER BY id DESC
LIMIT 50;
```

`LIMIT` подходит PostgreSQL, MySQL и SQLite; в SQL Server применяется другой синтаксис ограничения. Порядок должен быть однозначным: если сортируете по дате, добавьте уникальный `id` как второй ключ.

- `COUNT(*)` считает строки; `COUNT(email)` — только строки с непустым в смысле NULL значением email. Пустая строка не является NULL.
- `DISTINCT` убирает повторы выбранного набора столбцов.
- `LIKE '%test%'` ищет подстроку; чувствительность к регистру зависит от СУБД и настроек.
- `IN ('active', 'banned')` задаёт список значений; `BETWEEN` включает обе границы.

Поиск повторяющихся непустых email:

```sql
SELECT email, COUNT(*) AS occurrences
FROM users
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1;
```

Это сравнение по правилам базы. Если приложение нормализует регистр и пробелы, учитывайте его контракт.

Для полного дня в столбце timestamp используйте полуоткрытый диапазон:

```sql
SELECT id FROM users
WHERE created_at >= '2024-01-01'
  AND created_at <  '2024-01-02';
```

Границы должны соответствовать типу столбца и нужному часовому поясу. Равенство дате для timestamp обычно выбирает только полночь; для столбца DATE равенство корректно.

## JOIN и отсутствие оплаты

`INNER JOIN` возвращает совпавшие пары; `LEFT JOIN` сохраняет все строки слева, подставляя NULL при отсутствии пары. `RIGHT JOIN` сохраняет правую сторону, `FULL OUTER JOIN` — обе. В MySQL 8.4 нет собственного FULL OUTER JOIN.

Заказы, у которых вообще нет записи платежа:

```sql
SELECT o.id
FROM orders o
LEFT JOIN payments p ON p.order_id = o.id
WHERE p.id IS NULL;
```

Отсутствие записи и отсутствие успешной оплаты — разные проверки. Для второго случая:

```sql
SELECT o.id
FROM orders o
WHERE NOT EXISTS (
  SELECT 1 FROM payments p
  WHERE p.order_id = o.id AND p.status = 'successful'
);
```

Значение `successful` условное: замените его реальным статусом. Условие `WHERE p.status = 'successful'` после LEFT JOIN исключает строки без пары. Это верно для условий, отбрасывающих NULL, а не для любого WHERE: `p.id IS NULL` намеренно оставляет несовпадения. Если нужно сохранить все заказы и присоединить только успешные платежи, ограничьте статус внутри ON.

## Подзапросы

Пользователи с заказом дороже 10 000:

```sql
SELECT id, name FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE amount > 10000
);
```

Счётчик заказов без размножения строк пользователя:

```sql
SELECT u.id, u.name,
  (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count
FROM users u;
```

Скалярный подзапрос должен возвращать максимум одну строку; COUNT без GROUP BY даёт одну строку, включая ноль. Производительность зависит от плана, объёма данных и индексов, а не только от формы запроса.

Обычное сравнение с NULL даёт UNKNOWN; в WHERE остаются только TRUE. Используйте `IS NULL`. `NOT IN` может неожиданно исключить всё, если подзапрос содержит NULL; для проверки отсутствия связи обычно понятнее коррелированный NOT EXISTS.

## Связь «один ко многим» и суммы

У заказа на 100 есть два платежа: после JOIN сумма `o.amount` станет 200. DISTINCT не универсальное лечение: `SUM(DISTINCT amount)` потеряет разные заказы с одинаковой стоимостью. Сначала определите уровень подсчёта; для наличия используйте EXISTS, для нескольких дочерних таблиц агрегируйте каждую отдельно до соединения.

```sql
SELECT u.id, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
GROUP BY u.id;
```

У пользователя без заказов COUNT(o.id) равен 0, а COUNT(*) — 1 из-за сохранённой строки LEFT JOIN. При дополнительном соединении с платежами даже COUNT(o.id) может вырасти; считайте заказы отдельно либо COUNT(DISTINCT o.id), если нужны уникальные заказы.

## Проверки данных

- Подготовьте случаи без связей, с одной и несколькими связями, с NULL и равными суммами разных заказов.
- Проверьте начало дня, последнюю запись внутри дня и начало следующего дня.
- До миграции и после сверяйте не только COUNT: ключи, значения, суммы, NULL и целостность связей. Одинаковое количество не доказывает сохранность данных.
- Перед UPDATE или DELETE проверьте выборку тем же WHERE; отсутствие WHERE затрагивает все строки. Для изменений используйте предусмотренную проектом транзакцию и проверку результата.
- В коде передавайте значения параметрами запроса; не склеивайте ввод пользователя в SQL.

## Связанные материалы

[Tabiew: просмотр таблиц в терминале](../../tools/developer-tools/tabiew-terminal-data-explorer.md).

## Источники

Исходная шпаргалка предоставлена пользователем на русском языке; примеры адаптированы к учебной схеме.

- [PostgreSQL: Table Expressions](https://www.postgresql.org/docs/18/queries-table-expressions.html) — JOIN и группировка, английский.
- [PostgreSQL: Comparison Functions](https://www.postgresql.org/docs/current/functions-comparison.html) — NULL, английский.
- [PostgreSQL: Subquery Expressions](https://www.postgresql.org/docs/current/functions-subquery.html) — EXISTS, IN, NOT IN, английский.
- [MySQL 8.4: JOIN Clause](https://dev.mysql.com/doc/refman/8.4/en/join.html) — поддерживаемый синтаксис, английский.
- Alan Beaulieu, *Learning SQL*, 3rd edition; John Viescas, Michael Hernandez, *SQL Queries for Mere Mortals*, 4th edition — литература из исходной шпаргалки; текст книг отдельно не проверялся.
