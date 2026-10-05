---
id: sql-for-testers
language: en
source_language: mixed
authored_language: ru
title: "SQL for Testers: SELECT, JOIN and Subqueries"
topic: api-testing
tags: [sql, databases, joins, data-validation]
format: cheat-sheet
learning_depth: MUST KNOW
reviewed: 2026-10-05
---

# SQL for Testers: SELECT, JOIN and Subqueries

First decide what one result row represents: a user, order or payment. This exposes missing records and inflated totals. Examples use a teaching schema: `users(id, name, email, status, created_at)`, `orders(id, user_id, amount)`, `payments(id, order_id, status)`. IDs are non-null primary keys.

## Choosing a query

| Task | Technique | Check |
| --- | --- | --- |
| Find records | SELECT + WHERE | Date boundaries, NULL, ordering |
| Read related data | INNER JOIN | Should unmatched records survive? |
| Keep unmatched records | LEFT JOIN | ON versus WHERE conditions |
| Check existence or absence | EXISTS / NOT EXISTS | What qualifies as a match? |
| Count per entity | GROUP BY or separate aggregation | Did JOIN multiply rows? |
| Find duplicates | GROUP BY + HAVING | Case and normalization rules |

## SELECT and filters

```sql
SELECT id, email, status
FROM users
WHERE created_at >= '2024-01-01'
ORDER BY id DESC
LIMIT 50;
```

LIMIT works in PostgreSQL, MySQL and SQLite; SQL Server uses different limiting syntax. Make ordering deterministic: when ordering by date, add unique id as a second key.

- COUNT(*) counts rows; COUNT(email) excludes NULL emails. An empty string is not NULL.
- DISTINCT removes duplicate combinations of selected columns.
- LIKE '%test%' searches for a substring; case sensitivity depends on the database and settings.
- IN ('active', 'banned') defines a value list; BETWEEN includes both boundaries.

Find repeated non-null emails:

```sql
SELECT email, COUNT(*) AS occurrences
FROM users
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1;
```

Comparison follows database rules. Account for the application's contract if it normalizes case and whitespace.

Use a half-open range for a complete day in a timestamp column:

```sql
SELECT id FROM users
WHERE created_at >= '2024-01-01'
  AND created_at <  '2024-01-02';
```

Boundaries must match the column type and intended time zone. Timestamp equality with a date typically selects midnight only; equality is appropriate for a DATE column.

## JOIN and missing payment

INNER JOIN returns matching pairs. LEFT JOIN keeps every left row and supplies NULL when no match exists. RIGHT JOIN keeps the right side; FULL OUTER JOIN keeps both. MySQL 8.4 has no native FULL OUTER JOIN.

Orders with no payment record at all:

```sql
SELECT o.id
FROM orders o
LEFT JOIN payments p ON p.order_id = o.id
WHERE p.id IS NULL;
```

No payment record and no successful payment are different checks. For the latter:

```sql
SELECT o.id
FROM orders o
WHERE NOT EXISTS (
  SELECT 1 FROM payments p
  WHERE p.order_id = o.id AND p.status = 'successful'
);
```

The status is illustrative; use the actual contract. WHERE p.status = 'successful' after LEFT JOIN removes unmatched rows. This applies to conditions that reject NULL, not every WHERE: p.id IS NULL intentionally keeps nonmatches. To keep all orders while joining only successful payments, put the status restriction in ON.

## Subqueries

Users with an order worth more than 10,000:

```sql
SELECT id, name FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE amount > 10000
);
```

Count orders without multiplying user rows:

```sql
SELECT u.id, u.name,
  (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count
FROM users u;
```

A scalar subquery must return at most one row; COUNT without GROUP BY returns one, including zero. Performance depends on the execution plan, data volume and indexes, not query shape alone.

An ordinary comparison with NULL produces UNKNOWN; WHERE keeps only TRUE. Use IS NULL. NOT IN can unexpectedly exclude everything when its subquery contains NULL; correlated NOT EXISTS is usually clearer for missing relationships.

## One-to-many relationships and totals

An order worth 100 with two payments produces a joined order total of 200. DISTINCT is not a universal fix: SUM(DISTINCT amount) loses separate orders with equal amounts. Define the counting grain first. Use EXISTS for presence; aggregate each child table separately before joining several children.

```sql
SELECT u.id, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
GROUP BY u.id;
```

For a user with no orders, COUNT(o.id) is zero, but COUNT(*) is one because LEFT JOIN preserves a row. Joining payments can inflate COUNT(o.id) too; count orders separately or use COUNT(DISTINCT o.id) when distinct orders are intended.

## Data checks

- Prepare cases with zero, one and multiple relationships, NULL and separate orders with equal amounts.
- Check the start of the day, the final record inside it and the start of the next day.
- Compare more than COUNT before and after migration: keys, values, totals, NULL and relationship integrity. Equal counts do not prove preservation.
- Before UPDATE or DELETE, inspect the selection using the same WHERE; omitting WHERE affects every row. Use the project's transaction and result-checking procedure for changes.
- Pass values as query parameters in application code; do not concatenate user input into SQL.

## Related materials

[Tabiew: explore tables in the terminal](../../tools/developer-tools/tabiew-terminal-data-explorer.md).

## Sources

The original Russian cheatsheet was supplied by the user; examples were adapted to a teaching schema.

- [PostgreSQL: Table Expressions](https://www.postgresql.org/docs/18/queries-table-expressions.html) — joins and grouping, English.
- [PostgreSQL: Comparison Functions](https://www.postgresql.org/docs/current/functions-comparison.html) — NULL, English.
- [PostgreSQL: Subquery Expressions](https://www.postgresql.org/docs/current/functions-subquery.html) — EXISTS, IN, NOT IN, English.
- [MySQL 8.4: JOIN Clause](https://dev.mysql.com/doc/refman/8.4/en/join.html) — supported syntax, English.
- Alan Beaulieu, *Learning SQL*, 3rd edition; John Viescas, Michael Hernandez, *SQL Queries for Mere Mortals*, 4th edition — reading listed in the supplied cheatsheet; book texts were not independently checked.
