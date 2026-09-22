(() => {
  const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = './i18n.css'; document.head.append(css);
  const params = new URLSearchParams(location.search);
  let saved = 'en';
  try { saved = localStorage.getItem('lab-language') || 'en'; } catch {}
  const language = params.has('lang') ? params.get('lang') : saved;
  const lang = language === 'ru' ? 'ru' : 'en';
  const phrases = {
    'Knowledge system':'База знаний','Library':'Библиотека','Playbooks':'Практика','Sources':'Источники',
    'Your QA, AI & Tools knowledge system':'База знаний QA, AI и Tools',
    'FIELD NOTES · CURATED':'ПРОВЕРЕННЫЕ МАТЕРИАЛЫ','Learn faster.':'Учись быстрее.','Build smarter.':'Создавай осознанно.',
    'Three pillars: QA, AI, and Tools. Explore software quality, learn AI for work and personal projects, and discover utilities for testing, automation, and development.':'Три направления: QA, AI и Tools. Изучай качество ПО и AI для работы и личных проектов, находи инструменты для тестирования, автоматизации и разработки.',
    'curated notes':'материалов','topic paths':'направлений','active language':'язык интерфейса',
    'EXPLORE THE LAB':'ИССЛЕДУЙ ЛАБОРАТОРИЮ','Knowledge library':'Библиотека знаний',
    'All topics':'Все темы','QA & testing':'QA и тестирование','Tools & utilities':'Инструменты',
    'REVIEWED COLLECTION':'РАЗОБРАННАЯ ПОДБОРКА','26 articles, analyzed and connected':'26 статей с разборами и связями',
    'Explore English summaries, practical QA examples, diagrams and source caveats in the knowledge-base review register.':'Разборы на русском и английском, практические примеры, схемы и ограничения источников — в реестре базы знаний.',
    'Open all 26 reviews →':'Открыть 26 разборов →','QA AI Lab · Practical knowledge, connected over time.':'QA AI Lab · Практические знания и связи между ними.',
    '← Library':'← Библиотека','← Back to library':'← В библиотеку','Back to top ↑':'Наверх ↑','On this page':'На этой странице',
    'Loading your note…':'Загружаем материал…','Search notes, tags, ideas…':'Найти материал, тему, идею…','Filter by topic':'Фильтр по теме',
    'Open menu':'Открыть меню','Toggle theme':'Переключить тему','Close':'Закрыть','Knowledge note':'Материал',
    'Scrollable reference table':'Таблица с прокруткой','MUST KNOW':'ОБЯЗАТЕЛЬНО','SHOULD KNOW':'РЕКОМЕНДУЕТСЯ',
    'GOOD TO KNOW':'ПОЛЕЗНО ЗНАТЬ','SPECIALIZED':'СПЕЦИАЛИЗИРОВАННОЕ',
    'automation':'автоматизация','manual testing':'ручное тестирование','web testing':'web-тестирование',
    'security':'безопасность','performance':'производительность','agents':'агенты',
    'ai for testing':'AI для тестирования','ai tools':'AI-инструменты','ai testing':'тестирование AI',
    'llm testing':'тестирование LLM','monitoring':'мониторинг',
    'fundamentals':'основы','api testing':'тестирование API','qa process':'QA-процессы','developer tools':'инструменты разработки',
    'Read note':'Читать','No notes match this search yet.':'По запросу ничего не найдено.',
    'Choose a Markdown note from this library.':'Выберите материал Markdown из библиотеки.',
    'This note could not be found. Return to the library and try another material.':'Материал не найден. Вернитесь в библиотеку и выберите другой.',
    'Workflow diagram · Scroll sideways on small screens':'Схема · На узком экране доступна горизонтальная прокрутка',
    'Diagram preview unavailable. Its source is shown below.':'Схема недоступна. Ниже показан её исходный код.'
  };
  const t = text => lang === 'ru' ? (phrases[text] || text) : text;
  function localize(root = document.body) {
    if (lang !== 'ru') return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest('script,style,#article')) continue;
      const key = node.textContent.trim();
      if (phrases[key]) node.textContent = node.textContent.replace(key, phrases[key]);
    }
    root.querySelectorAll('[aria-label],[placeholder]').forEach(el => {
      for (const attr of ['aria-label','placeholder']) if (el.hasAttribute(attr)) el.setAttribute(attr,t(el.getAttribute(attr)));
    });
  }
  function withLanguage(href) { const url = new URL(href, location.href); url.searchParams.set('lang',lang); return url.href; }
  document.documentElement.lang = lang;
  const select = document.createElement('select');
  select.id = 'language'; select.setAttribute('aria-label','Language / Язык');
  select.innerHTML = '<option value="en">English</option><option value="ru">Русский</option>';
  select.value = lang;
  select.addEventListener('change', () => {
    try { localStorage.setItem('lab-language',select.value); } catch {}
    const url = new URL(location.href); url.searchParams.set('lang',select.value); url.hash = ''; location.href = url.href;
  });
  (document.querySelector('.top-actions') || document.querySelector('.reader-bar'))?.append(select);
  document.querySelectorAll('a[href*="reader.html"],a[href*="index.html"]').forEach(a => a.href = withLanguage(a.href));
  const edition = document.querySelector('.sidebar-foot');
  if (edition) edition.textContent = lang === 'ru' ? 'Русская версия · EN / RU' : 'English edition · EN / RU';
  const badge = document.querySelector('.stats > div:last-child strong'); if (badge) badge.textContent = lang.toUpperCase();
  localize();
  window.labI18n = {lang,t,localize,withLanguage};
})();
