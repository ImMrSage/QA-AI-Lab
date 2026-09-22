---
id: delphitools-file-utilities
language: ru
source_language: ru
authored_language: ru
title: delphitools: локальные браузерные инструменты для файлов
summary: Практический выбор инструментов для изображений, цветов, документов, PDF и задач разработки.
topic: productivity
tags: [files, images, pdf, svg, privacy, browser-tools]
format: tool-guide
learning_depth: SHOULD KNOW
reviewed: 2026-09-22
---

# delphitools: локальные браузерные инструменты для файлов

## Что это

[delphitools](https://delphi.tools/) — бесплатный open-source каталог небольших браузерных инструментов. Актуальный сайт заявляет обработку внутри браузера без аккаунта, tracking и сбора данных. Старый адрес tools.rmv.fyi перенаправляет на delphi.tools, а корневой rmv.fyi теперь открывает портфолио автора.

## Выбор по задаче

| Задача | Подходящие инструменты |
| --- | --- |
| Подготовить изображения | Background Remover, Image Converter, Compressor, Clipper, Splitter, Stitcher и Metadata Stripper |
| Создать веб-ассеты | трассировка растра в SVG, SVG Optimiser, Favicon Generator и Base64 Encoder |
| Оформить соцсети | Seamless Scroll Generator, Social Media Cropper, Watermarker и Matte Generator |
| Работать с цветом | извлечение и генерация палитр, градиенты, гармонии, проверка контраста и симуляция дальтонизма |
| Конвертировать документы | Markdown, HTML, Word, LaTeX, EPUB и другие форматы через Document Converter |
| Проверить PDF | PDF Preflight, Organiser, Compressor, Rotate & Crop, нумерация страниц и преобразование изображений |
| Решать задачи QA и разработки | JSON Formatter, Regex Tester, HTTP Status, JWT Decoder, Request Builder и UUID Generator |

Актуальный каталог подтверждает добавление водяных знаков, но отдельного инструмента для их удаления в нём нет. Браузерный PDF Preflight подходит для быстрой проверки; отдельный нативный проект [Taxiway](https://rmv.fyi/projects/taxiway/) предлагает более глубокую допечатную проверку на Apple silicon.

## Правила безопасной работы

1. Перед переносом файла убедитесь, что открыт адрес delphi.tools.
2. Локальная обработка снижает риск загрузки файла в облако, но конфиденциальные материалы обрабатывайте только одобренными организацией инструментами.
3. Удаляйте метаданные осознанно и проверяйте экспорт: конвертация может изменить цветовой профиль, шрифты, прозрачность, ссылки или доступность.
4. Считайте удаление фона и трассировку растра черновиками, требующими проверки краёв и геометрии.
5. Проверяйте контраст на реальных цветах фона и текста, размере шрифта и требуемом уровне WCAG.
6. Сохраняйте оригинал и после обработки сравнивайте размеры, формат, вес и видимый результат.
7. Для печатных, архивных, юридических и регулируемых материалов применяйте требуемый профильный процесс, а не одну браузерную проверку.

## Источники

- [delphitools](https://delphi.tools/)
- [Страница проекта delphitools](https://rmv.fyi/projects/delphitools/)
- [Проект PDF-preflight Taxiway](https://rmv.fyi/projects/taxiway/)

