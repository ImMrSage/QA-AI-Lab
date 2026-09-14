"""Build paired topic navigation from authored note titles; never ingest raw sources."""
from pathlib import Path
import os
import re

ROOT = Path(__file__).resolve().parents[1]
TOPICS = {
    'qa/fundamentals': ('Testing fundamentals', 'Основы тестирования'),
    'qa/manual-testing': ('Manual testing', 'Ручное тестирование'),
    'qa/automation': ('Test automation', 'Автоматизация тестирования'),
    'qa/api-testing': ('API testing', 'Тестирование API'),
    'qa/web-testing': ('Web testing', 'Тестирование Web'),
    'qa/mobile-testing': ('Mobile testing', 'Мобильное тестирование'),
    'qa/performance': ('Performance testing', 'Тестирование производительности'),
    'qa/security': ('Security testing', 'Тестирование безопасности'),
    'qa/qa-process': ('QA process and management', 'Процессы и управление QA'),
    'ai/ai-for-testing': ('AI for testing', 'AI для тестирования'),
    'ai/llm-testing': ('Testing ML, LLM and agent systems', 'Тестирование ML, LLM и агентов'),
    'ai/agents': ('AI agents', 'AI-агенты'),
    'ai/prompts': ('Prompts', 'Промпты'),
    'ai/tools': ('AI tools', 'AI-инструменты'),
    'tools/developer-tools': ('Developer tools', 'Инструменты разработки'),
    'tools/debugging': ('Debugging', 'Отладка'),
    'tools/ci-cd': ('CI/CD', 'CI/CD'),
    'tools/monitoring': ('Monitoring and observability', 'Мониторинг и наблюдаемость'),
    'tools/productivity': ('Productivity', 'Продуктивность'),
    'playbooks/checklists': ('Checklists', 'Чек-листы'),
    'playbooks/workflows': ('Workflows', 'Процессы'),
    'playbooks/templates': ('Templates', 'Шаблоны'),
    'glossary': ('Glossary', 'Глоссарий'),
    'inbox': ('Inbox', 'Входящие'),
}
RELATED = {
    'qa/automation': ['qa/api-testing/consumer-driven-contracts.md'],
    'qa/api-testing': ['tools/developer-tools/api-testing-toolkit.md', 'playbooks/checklists/api-request-review.md'],
    'qa/web-testing': ['playbooks/checklists/form-testing.md', 'playbooks/checklists/web-ui-testing.md'],
    'qa/qa-process': ['playbooks/templates/test-plan.md'],
    'ai/agents': ['ai/llm-testing/agent-evaluation-lifecycle.md'],
    'ai/ai-for-testing': ['ai/tools/mcp-for-qa.md'],
    'ai/llm-testing': ['ai/agents/specialized-workflow-evaluation.md'],
    'tools/monitoring': ['ai/llm-testing/agent-evaluation-lifecycle.md'],
}

def title(path):
    text = path.read_text(encoding='utf-8-sig')
    return re.search(r'^# (.+)$', text, re.M)[1]

def main():
    for topic, names in TOPICS.items():
        directory = ROOT / topic
        files = sorted(p for p in directory.glob('*.md') if p.name != 'README.md') if topic != 'inbox' else []
        files += [ROOT / p for p in RELATED.get(topic, [])]
        for lang, name in zip(('en', 'ru'), names):
            prefix = ROOT if lang == 'en' else ROOT / 'locales/ru'
            lines = ['# ' + name, '']
            if topic == 'inbox':
                lines += [('Temporary intake. Raw sources are not published here; reviewed knowledge appears in the topic catalogs.' if lang == 'en' else 'Временный приём. Исходные материалы здесь не публикуются; обработанные знания доступны в тематических каталогах.'), '']
            elif not files:
                lines += [('No reviewed materials in this topic yet.' if lang == 'en' else 'В этой теме пока нет разобранных материалов.'), '']
            for file in files:
                translated = prefix / file.relative_to(ROOT)
                relative = Path(os.path.relpath(file, directory)).as_posix()
                lines.append(f'- [{title(translated)}]({relative})')
            back = Path(os.path.relpath(ROOT / 'INDEX.md', directory)).as_posix()
            lines += ['', f'[{"Knowledge index" if lang == "en" else "Каталог знаний"}]({back})', '']
            target = prefix / topic / 'README.md'
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text('\n'.join(lines), encoding='utf-8')
    print(f'Built {len(TOPICS)} paired catalogs.')

if __name__ == '__main__':
    main()
