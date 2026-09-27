import { marked } from 'marked';
import DOMPurify from 'dompurify';

const article = document.querySelector('#article');
const status = document.querySelector('#reader-status');
const root = new URL('../../', location.href);
const params = new URLSearchParams(location.search);
const { lang, t } = window.labI18n;
const source = new URL(params.get('note') || 'INDEX.md', root);
const backButton=document.querySelector('#reader-back');
backButton.textContent=lang==='ru'?'← Назад':'← Back';
backButton.addEventListener('click',()=>{
  try {
    const previous=new URL(document.referrer);
    if(previous.origin===location.origin&&previous.pathname.startsWith(root.pathname+'apps/web/')&&history.length>1){history.back();return;}
  } catch {}
  let candidate=params.get('from');
  try { candidate ||= sessionStorage.getItem('lab-return'); } catch {}
  const fallback=new URL('./index.html?view=library&lang='+lang,location.href);
  let destination=fallback;
  try { const u=new URL(candidate||fallback.href,location.href); if(u.origin===location.origin&&/\/apps\/web\/(index\.html)?$/.test(u.pathname))destination=u; } catch {}
  destination.searchParams.set('lang',lang);
  location.href=destination.href;
});

function readerLink(url) {
  const target = new URL('./reader.html', location.href);
  target.searchParams.set('note', url.pathname.slice(root.pathname.length));
  target.searchParams.set('lang', lang);
  if(params.get('from'))target.searchParams.set('from',params.get('from'));
  target.hash = url.hash;
  return target.href;
}

const referenceHeading = /^(sources?|источники|references?|related (knowledge|topics)|связанные (материалы|темы))$/i;

function owningHeading(node) {
  let current = node;
  while ((current = current.previousElementSibling)) if (current.tagName === 'H2') return current.textContent.trim();
  return '';
}

function isSubstantive(node) {
  return !referenceHeading.test(owningHeading(node));
}

function addVisualBrief() {
  const title = article.querySelector('h1');
  if (!title) return;
  const diagram = [...article.querySelectorAll('.diagram')].find(isSubstantive);
  const table = [...article.querySelectorAll('.table-scroll')].find(isSubstantive);
  const list = [...article.querySelectorAll('ul,ol')].find(node => isSubstantive(node) && node.children.length >= 3);
  const sourceVisual = diagram || table || list;
  if (!sourceVisual) return;

  const brief = document.createElement('section');
  brief.className = 'visual-brief';
  brief.setAttribute('aria-label', t('Visual model'));
  const header = document.createElement('div');
  header.className = 'visual-brief-head';
  const label = document.createElement('strong');
  label.textContent = t('Visual model');
  const type = document.createElement('span');
  type.textContent = diagram ? t('Architecture diagram') : table ? t('Decision matrix') : t('Practical checklist');
  const hint = document.createElement('span');
  hint.textContent = t('Click to enlarge');
  header.append(label, type, hint);
  const body = document.createElement('div');
  body.className = 'visual-brief-body';

  if (diagram || table) {
    sourceVisual.before(document.createComment('visual moved to article brief'));
    body.append(sourceVisual);
  } else {
    const flow = document.createElement('ol');
    flow.className = 'visual-checksheet';
    [...list.children].slice(0, 8).forEach((item, index) => {
      const step = document.createElement('li');
      const number = document.createElement('span');
      number.textContent = String(index + 1).padStart(2, '0');
      const copy = document.createElement('p');
      copy.textContent = item.textContent.replace(/\s+/g, ' ').trim();
      step.append(number, copy); flow.append(step);
    });
    body.append(flow);
  }
  brief.append(header, body);
  title.after(brief);
}

function enableVisualZoom() {
  const dialog = document.createElement('dialog');
  dialog.className = 'visual-lightbox';
  dialog.setAttribute('aria-label', t('Enlarged visual'));
  const toolbar = document.createElement('div');
  toolbar.className = 'visual-lightbox-toolbar';
  const minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', t('Zoom out'));
  const reset = document.createElement('button'); reset.type = 'button'; reset.textContent = '100%'; reset.setAttribute('aria-label', t('Reset zoom'));
  const plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', t('Zoom in'));
  const close = document.createElement('button'); close.type = 'button'; close.textContent = '×'; close.setAttribute('aria-label', t('Close'));
  const help = document.createElement('span'); help.className = 'visual-lightbox-help'; help.textContent = t('Left click to zoom in · right click to zoom out');
  toolbar.append(help, minus, reset, plus, close);
  const stage = document.createElement('div'); stage.className = 'visual-lightbox-stage';
  const sizer = document.createElement('div'); sizer.className = 'visual-lightbox-sizer';
  const canvas = document.createElement('div'); canvas.className = 'visual-lightbox-canvas'; sizer.append(canvas); stage.append(sizer);
  dialog.append(toolbar, stage); document.body.append(dialog);

  const scales = [.75, 1, 1.25, 1.5, 2, 2.5, 3];
  let active = null, anchor = null, scaleIndex = 1, baseWidth = 0, baseHeight = 0;
  const applyScale = () => {
    const scale = scales[scaleIndex];
    canvas.style.transform = `scale(${scale})`;
    sizer.style.width = `${Math.ceil(baseWidth * scale)}px`;
    sizer.style.height = `${Math.ceil(baseHeight * scale)}px`;
    reset.textContent = `${Math.round(scale * 100)}%`;
    minus.disabled = scaleIndex === 0;
    plus.disabled = scaleIndex === scales.length - 1;
  };
  const restore = () => {
    if (!active || !anchor?.parentNode) return;
    anchor.parentNode.replaceChild(active, anchor);
    active.classList.remove('is-enlarged'); active = null; anchor = null;
    canvas.style.removeProperty('transform'); canvas.style.removeProperty('width');
    sizer.style.removeProperty('width'); sizer.style.removeProperty('height'); canvas.replaceChildren();
  };
  const open = node => {
    if (dialog.open) return;
    active = node; anchor = document.createComment('visual lightbox anchor'); node.before(anchor); canvas.append(node);
    node.classList.add('is-enlarged'); dialog.showModal();
    const stageStyle = getComputedStyle(stage);
    const horizontalPadding = parseFloat(stageStyle.paddingLeft) + parseFloat(stageStyle.paddingRight);
    canvas.style.width = `${Math.max(320, stage.clientWidth - horizontalPadding)}px`;
    baseWidth = canvas.getBoundingClientRect().width;
    baseHeight = canvas.getBoundingClientRect().height;
    scaleIndex = 1; applyScale();
  };
  const changeScale = direction => {
    scaleIndex = Math.min(scales.length - 1, Math.max(0, scaleIndex + direction));
    applyScale();
  };
  minus.addEventListener('click', () => changeScale(-1));
  plus.addEventListener('click', () => changeScale(1));
  reset.addEventListener('click', () => { scaleIndex = 1; applyScale(); });
  canvas.addEventListener('click', event => {
    if (!dialog.open || event.target.closest('a,button')) return;
    changeScale(1);
  });
  canvas.addEventListener('contextmenu', event => {
    if (!dialog.open || event.target.closest('a,button')) return;
    event.preventDefault(); changeScale(-1);
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', restore);

  const visuals = [...article.querySelectorAll('.diagram, img, .table-scroll, .visual-checksheet')];
  visuals.forEach(node => {
    node.classList.add('zoomable-visual'); node.tabIndex = 0; node.setAttribute('role', 'button'); node.setAttribute('aria-label', t('Click to enlarge'));
    const activate = event => {
      if (dialog.open || event.target.closest('a,button')) return;
      if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
      event.preventDefault(); open(node);
    };
    node.addEventListener('click', activate); node.addEventListener('keydown', activate);
  });
}

async function load() {
  try {
    if (source.origin !== root.origin || !source.pathname.startsWith(root.pathname) || !source.pathname.endsWith('.md')) throw new Error('Choose a Markdown note from this library.');
    let response;
    if (lang === 'ru') {
      const translated = new URL('locales/ru/' + source.pathname.slice(root.pathname.length), root);
      response = await fetch(translated);
      if (!response.ok && response.status !== 404) throw new Error('Не удалось загрузить перевод. Повторите попытку.');
      if (response.status === 404) {
        const notice = document.createElement('p'); notice.className = 'translation-notice';
        notice.textContent = 'Русский перевод пока не готов. Ниже показана английская версия (English).';
        article.before(notice); response = undefined;
      }
    }
    response ||= await fetch(source);
    if (!response.ok) throw new Error('This note could not be found. Return to the library and try another material.');
    const raw = (await response.text()).replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
    const front = raw.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    const body = front ? raw.slice(front[0].length) : raw;
    article.lang = lang === 'ru' && !document.querySelector('.translation-notice') ? 'ru' : 'en';
    const metadata = Object.fromEntries((front?.[1] || '').split('\n').map(line => {
      const colon = line.indexOf(':');
      return colon < 0 ? ['', ''] : [line.slice(0, colon), line.slice(colon + 1).trim()];
    }));
    for (const value of [metadata.topic?.replaceAll('-', ' '), metadata.learning_depth, `${Math.max(1, Math.ceil(body.split(/\s+/).length / 220))} min read`, metadata.reviewed ? `Reviewed ${metadata.reviewed}` : '']) {
      if (!value) continue;
      const badge = document.createElement('span'); badge.textContent = t(value).replace(' min read', lang === 'ru' ? ' мин чтения' : ' min read').replace('Reviewed ', lang === 'ru' ? 'Проверено ' : 'Reviewed ');
      document.querySelector('#note-meta').append(badge);
    }
    article.innerHTML = DOMPurify.sanitize(marked.parse(body), { USE_PROFILES: { html: true } });
    document.title = `${article.querySelector('h1')?.textContent || t('Knowledge note')} · QA AI Lab`;
    const usedIds = new Set();
    for (const heading of article.querySelectorAll('h1,h2,h3')) {
      const base = heading.textContent.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-') || 'section';
      let id = base, suffix = 1;
      while (usedIds.has(id)) id = `${base}-${suffix++}`;
      usedIds.add(id); heading.id = id;
      if (heading.tagName === 'H2') {
        const link = document.createElement('a'); link.href = `#${id}`; link.textContent = heading.textContent;
        document.querySelector('#toc').append(link);
      }
    }
    for (const link of article.querySelectorAll('a[href]')) {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) continue;
      const url = new URL(href, source);
      if (!['http:', 'https:', 'mailto:'].includes(url.protocol)) { link.removeAttribute('href'); continue; }
      if (url.origin === root.origin && url.pathname.startsWith(root.pathname)) {
        if (url.pathname.endsWith('/')) url.pathname += 'README.md';
        link.href = url.pathname.endsWith('.md') ? readerLink(url) : url.href;
      } else { link.href = url.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    }
    for (const img of article.querySelectorAll('img[src]')) img.src = new URL(img.getAttribute('src'), source).href;
    for (const table of article.querySelectorAll('table')) {
      const wrap = document.createElement('div'); wrap.className = 'table-scroll'; wrap.tabIndex = 0;
      wrap.setAttribute('role', 'region'); wrap.setAttribute('aria-label', t('Scrollable reference table'));
      table.before(wrap); wrap.append(table);
    }
    const intro = [...article.querySelectorAll('h2')].find(h => /^(TL;DR|Summary|Кратко)$/.test(h.textContent));
    if (intro?.nextElementSibling?.tagName === 'P') intro.nextElementSibling.classList.add('lead');
    status.hidden = true;
    if (matchMedia('(max-width: 800px)').matches) document.querySelector('.reader-outline details').open = false;
    const diagrams = article.querySelectorAll('pre code.language-mermaid');
    if (diagrams.length) {
      const { default: mermaid } = await import('mermaid');
      mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base', themeVariables: { primaryColor: '#edf5dd', primaryTextColor: '#101828', primaryBorderColor: '#a4bf76', lineColor: '#7864a6', fontFamily: 'Segoe UI, sans-serif' } });
      let index = 0;
      for (const code of diagrams) {
        try {
          const { svg } = await mermaid.render(`note-diagram-${index++}`, code.textContent);
          const figure = document.createElement('figure'); figure.className = 'diagram';
          figure.innerHTML = svg;
          const caption = document.createElement('figcaption'); caption.textContent = t('Diagram · Click to enlarge');
          figure.append(caption); code.parentElement.replaceWith(figure);
        } catch {
          const message = document.createElement('p'); message.textContent = t('Diagram preview unavailable. Its source is shown below.');
          code.parentElement.before(message);
        }
      }
    }
    addVisualBrief();
    enableVisualZoom();
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  } catch (error) {
    status.hidden = false; status.className = 'reader-error'; status.textContent = t(error.message) || (lang === 'ru' ? 'Не удалось загрузить материал.' : 'Unable to load this note. Please try again.');
  }
}
document.querySelector('#back-top').addEventListener('click', event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
load();
