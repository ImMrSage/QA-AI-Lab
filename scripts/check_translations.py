"""Validate EN/RU coverage, note structure and canonical-relative reader links."""
from collections import Counter
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
AREAS = ('qa', 'ai', 'tools', 'playbooks', 'glossary', 'docs/sources')
GUIDES = ('INDEX.md', 'README.md', 'inbox/README.md', 'AGENTS.md', 'docs/architecture.md',
          'apps/web/README.md', 'apps/mobile/README.md', 'packages/content/README.md', 'packages/i18n/README.md')

def field(text, key):
    match = re.search(r'^' + key + r': (.+)$', text, re.M)
    return match[1] if match else None

def links(text):
    return re.findall(r'\]\(([^\s)]+)\)', text)

def structure(text):
    body = re.sub(r'^---\n.*?\n---\n', '', text, flags=re.S)
    return (Counter(len(m) for m in re.findall(r'^(#{1,3}) ', body, re.M)),
            len(re.findall(r'^\|', body, re.M)), len(re.findall(r'^- \[[ x]\]', body, re.M)),
            Counter(re.findall(r'^```(\w+)\s*$', body, re.M)))

def main():
    errors = []
    files = sorted({p for area in AREAS for p in (ROOT / area).rglob('*.md')} | {ROOT / p for p in GUIDES})
    notes = 0
    for source in files:
        relative = source.relative_to(ROOT)
        target = ROOT / 'locales/ru' / relative
        if not target.is_file():
            errors.append(f'{relative}: missing Russian counterpart')
            continue
        en, ru = (p.read_text(encoding='utf-8-sig').replace('\r\n', '\n') for p in (source, target))
        if field(en, 'id'):
            notes += 1
            for key in ('id', 'reviewed', 'source_published', 'topic', 'tags', 'format', 'learning_depth', 'status'):
                if field(en, key) != field(ru, key):
                    errors.append(f'{relative}: metadata differs: {key}')
            if field(ru, 'language') != 'ru':
                errors.append(f'{relative}: wrong language')
            if structure(en) != structure(ru):
                errors.append(f'{relative}: heading/table/checkbox/code structure differs')
            if Counter(links(en)) != Counter(links(ru)):
                errors.append(f'{relative}: links differ')
            for language, code in re.findall(r'^```(\w+)\n(.*?)^```', en, re.S | re.M):
                if language not in ('mermaid', 'text') and f'```{language}\n{code}```' not in ru:
                    errors.append(f'{relative}: changed {language} example')
        for language, content in (('en', en), ('ru', ru)):
            for href in links(content):
                parts = urlsplit(href)
                if parts.scheme or not parts.path:
                    continue
                # All translated reader links intentionally resolve from the canonical file.
                destination = (source.parent / unquote(parts.path)).resolve()
                if not destination.is_relative_to(ROOT):
                    errors.append(f'{relative}: link outside repository: {href}')
                    continue
                if destination.is_dir():
                    destination /= 'README.md'
                if not destination.exists():
                    errors.append(f'{relative} ({language}): broken link {href}')
    if errors:
        print('\n'.join(errors))
        sys.exit(1)
    print(f'PASS: {len(files)} EN/RU pairs; {notes} authored notes/registers; structure, metadata, examples and links checked.')

if __name__ == '__main__':
    main()
