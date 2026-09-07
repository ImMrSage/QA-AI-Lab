---
id: ml-cheatsheet-review
language: en
title: ML Glossary - Resource Review and Coverage
tags: [source-ledger, machine-learning, learning-resource]
format: source-ledger
reviewed: 2026-09-07
status: partially-processed
---

# ML Glossary - Resource Review and Coverage

## Resource assessment

[Machine Learning Glossary](https://ml-cheatsheet.readthedocs.io/en/latest/) is a multi-page educational reference with visual explanations, mathematics and examples. It is useful for background ML literacy, not a dedicated QA tool, model benchmark or modern LLM-testing manual. Some sections are explicitly marked TODO. No account or software installation was needed to read the reviewed pages.

**Saved result:** [Machine Learning Foundations for QA](../../ai/llm-testing/ml-foundations-for-qa.md), available as a card in the application.

## Coverage

| Page | Review state |
| --- | --- |
| [Home and contents](https://ml-cheatsheet.readthedocs.io/en/latest/) | Read; resource classified |
| [Glossary](https://ml-cheatsheet.readthedocs.io/en/latest/glossary.html) | Complete text read and analyzed |
| [Logistic Regression](https://ml-cheatsheet.readthedocs.io/en/latest/logistic_regression.html) | Complete text and displayed code read and analyzed |
| [Loss Functions](https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html) | Complete text and displayed formulas read and analyzed |
| [Regularization](https://ml-cheatsheet.readthedocs.io/en/latest/regularization.html) | Complete text and displayed code read and analyzed |

Other chapters remain **unreviewed**: Linear Regression, Gradient Descent, Calculus, Linear Algebra, Probability, Statistics, Notation, neural-network Concepts, Forwardpropagation, Backpropagation, Activation Functions, Layers, Optimizers, Architectures, Classification, Clustering, Regression, Reinforcement Learning, Datasets, Libraries, Papers, Other and contribution guidance. Their presence was observed in the contents; this is not evidence that their content was read. Linked external references and embedded images were not exhaustively audited. No model was trained or source example executed.

## Corrections to retain

| Location | Finding |
| --- | --- |
| Glossary | The signed-residual definition of loss is too narrow; normalization and weight regularization are conflated. Universal approximation does not guarantee successful training or generalization. |
| Logistic Regression | Scaling is fitted on all data before the split. The sample also refers to undefined `clf`, uses an old import and Python 2 printing. `classify` assigns to the same local name it reads, causing an unbound-local error as written. |
| Loss Functions | Huber's linear branch omits the absolute residual. For delta = 1 and residual = -2, the printed branch gives -2.5 instead of 1.5; positive and negative errors should be symmetric here. |
| Regularization | Examples use the reserved Python keyword `lambda` as a parameter, and tuple-unpacking function parameters are invalid in Python 3. Derivations use error where its gradient is required. Regularization strength is not negative merely because a weight is negative. |

These findings come from reviewing the displayed text and code, not running the tutorials. The Huber observation includes a direct arithmetic counterexample. Source examples should not be imported as working production code.

## Primary reference check

[scikit-learn: common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage) confirms splitting before fitting preprocessing, learning transformations only from training data, and using pipelines to prevent leakage. Only relevant preprocessing and leakage sections were used. The attempted PyTorch Huber documentation lookup returned a redirect without substantive content and was not treated as verification.

[Knowledge index](../../INDEX.md)
