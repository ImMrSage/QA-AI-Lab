---
id: ml-cheatsheet-review
language: ru
title: ML Glossary — оценка ресурса и охват
tags: [source-ledger, machine-learning, learning-resource]
format: source-ledger
reviewed: 2026-09-07
status: partially-processed
---

# ML Glossary — оценка ресурса и охват

## Оценка ресурса

[Machine Learning Glossary](https://ml-cheatsheet.readthedocs.io/en/latest/) — многостраничный учебный справочник с визуальными объяснениями, математикой и примерами. Полезен для общей грамотности ML, а не как специализированный QA-инструмент, benchmark модели или современное руководство тестирования LLM. Некоторые разделы явно помечены TODO. Для чтения проверенных страниц не потребовались аккаунт или установка.

**Сохранённый результат:** [Основы машинного обучения для QA](../../ai/llm-testing/ml-foundations-for-qa.md), доступен карточкой приложения.

## Охват

| Страница | Состояние разбора |
| --- | --- |
| [Главная и оглавление](https://ml-cheatsheet.readthedocs.io/en/latest/) | Прочитаны; ресурс классифицирован |
| [Glossary](https://ml-cheatsheet.readthedocs.io/en/latest/glossary.html) | Полный текст прочитан и разобран |
| [Logistic Regression](https://ml-cheatsheet.readthedocs.io/en/latest/logistic_regression.html) | Полный текст и показанный код прочитаны и разобраны |
| [Loss Functions](https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html) | Полный текст и показанные формулы прочитаны и разобраны |
| [Regularization](https://ml-cheatsheet.readthedocs.io/en/latest/regularization.html) | Полный текст и показанный код прочитаны и разобраны |

Остальные главы **не разобраны**: Linear Regression, Gradient Descent, Calculus, Linear Algebra, Probability, Statistics, Notation, нейросетевые Concepts, Forwardpropagation, Backpropagation, Activation Functions, Layers, Optimizers, Architectures, Classification, Clustering, Regression, Reinforcement Learning, Datasets, Libraries, Papers, Other и руководство участия. Их наличие замечено в оглавлении; это не свидетельство чтения. Внешние ссылки и изображения не проверялись исчерпывающе. Модели не обучались, примеры не выполнялись.

## Сохранённые исправления

| Раздел | Находка |
| --- | --- |
| Glossary | Определение loss как знаковой невязки слишком узкое; нормализация смешана с регуляризацией весов. Универсальная аппроксимация не гарантирует успешного обучения или обобщения. |
| Logistic Regression | Scaling обучается на всех данных до разделения. Пример ссылается на неопределённый `clf`, старый import и печать Python 2. `classify` присваивает значение локальному имени, которое читает, вызывая ошибку unbound-local в представленном виде. |
| Loss Functions | Линейная ветвь Huber пропускает модуль невязки. При delta = 1 и невязке = -2 напечатанная ветвь даёт -2.5 вместо 1.5; положительные и отрицательные ошибки здесь должны быть симметричны. |
| Regularization | В примерах зарезервированное `lambda` используется как параметр, а распаковка кортежа в параметрах недопустима в Python 3. В выводах ошибка стоит там, где нужен её градиент. Сила регуляризации не становится отрицательной просто из-за отрицательного веса. |

Находки получены чтением текста и кода, а не запуском руководств. Для Huber приведён прямой арифметический контрпример. Примеры нельзя импортировать как готовый production-код.

## Сверка с первичным справочником

[scikit-learn: частые ошибки](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage) подтверждает разделение до обучения обработки, обучение преобразований только на тренировочных данных и pipelines для предотвращения утечек. Использованы только релевантные разделы обработки и утечек. Попытка прочитать документацию PyTorch Huber вернула редирект без содержимого и не считалась проверкой.

[Каталог знаний](../../INDEX.md)
