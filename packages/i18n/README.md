# Shared Localization

English (`en`) is the only active language at launch. Russian (`ru`) and German (`de`) are planned but are not enabled and have no placeholder translations.

Store interface strings under stable semantic keys in locale JSON files. English resources start in [locales/en.json](locales/en.json). Application code should obtain user-facing text through the localization layer rather than embedding English strings in components.

Keep full phrases together, support interpolation and pluralization, and format dates and numbers according to the active locale. The localization library will be selected with the application framework.

English is the fallback for missing translations. Do not show a language switcher until another language is usable. Content language and interface language must be tracked separately: future translated interfaces may still display an English article, labeled as English.

Article translations belong with shared content and retain the original content ID. Diagrams and cheat sheets should keep editable text separate from imagery wherever possible, so translation does not require recreating the entire visual.
