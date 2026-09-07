import { marked } from 'marked';
import DOMPurify from 'dompurify';

const article = document.querySelector('#article');
const status = document.querySelector('#reader-status');
const root = new URL('../../', location.href);
const params = new URLSearchParams(location.search);
const source = new URL(params.get('note') || 'INDEX.md', root);

function readerLink(url) {
  const target = new URL('./reader.html', location.href);
  target.searchParams.set('note', url.pathname.slice(root.pathname.length));
  target.hash = url.hash;
  return target.href;
}

async function load() {
  try {
    if (source.origin !== root.origin || !source.pathname.startsWith(root.pathname) || !source.pathname.endsWith('.md')) throw new Error('Choose a Markdown note from this library.');
    const response = await fetch(source);
    if (!response.ok) throw new Error('This note could not be found. Return to the library and try another material.');
    const raw = (await response.text()).replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
    const front = raw.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    const body = front ? raw.slice(front[0].length) : raw;
    const metadata = Object.fromEntries((front?.[1] || '').split('\n').map(line => {
      const colon = line.indexOf(':');
      return colon < 0 ? ['', ''] : [line.slice(0, colon), line.slice(colon + 1).trim()];
    }));
    for (const value of [metadata.topic?.replaceAll('-', ' '), metadata.learning_depth, `${Math.max(1, Math.ceil(body.split(/\s+/).length / 220))} min read`, metadata.reviewed ? `Reviewed ${metadata.reviewed}` : '']) {
      if (!value) continue;
      const badge = document.createElement('span'); badge.textContent = value;
      document.querySelector('#note-meta').append(badge);
    }
    article.innerHTML = DOMPurify.sanitize(marked.parse(body), { USE_PROFILES: { html: true } });
    document.title = `${article.querySelector('h1')?.textContent || 'Knowledge note'} · QA AI Lab`;
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
      wrap.setAttribute('role', 'region'); wrap.setAttribute('aria-label', 'Scrollable reference table');
      table.before(wrap); wrap.append(table);
    }
    const intro = [...article.querySelectorAll('h2')].find(h => /^(TL;DR|Summary)$/.test(h.textContent));
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
          const caption = document.createElement('figcaption'); caption.textContent = 'Workflow diagram · Scroll sideways on small screens';
          figure.append(caption); code.parentElement.replaceWith(figure);
        } catch {
          const message = document.createElement('p'); message.textContent = 'Diagram preview unavailable. Its source is shown below.';
          code.parentElement.before(message);
        }
      }
    }
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  } catch (error) {
    status.hidden = false; status.className = 'reader-error'; status.textContent = error.message || 'Unable to load this note. Please try again.';
  }
}
document.querySelector('#back-top').addEventListener('click', event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
load();
