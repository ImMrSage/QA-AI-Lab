"""Generate the website catalog from bilingual repository notes and original PDFs."""
from pathlib import Path
import re, json
ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / 'apps/web'
TOOL_IDS = {'bundlephobia-npm-cost-check','aitooltree-discovery-guide','handy-local-speech-to-text','delphitools-file-utilities','tabiew-terminal-data-explorer','aiflowy-ai-application-platform','ggh-ssh-session-wrapper'}
def read(p): return p.read_text(encoding='utf-8-sig')
def field(s,k):
    m=re.search(r'^'+k+r':\s*(.+)$',s,re.M)
    return m[1].strip().strip('"') if m else ''
def section(path):
    if 'api-request-review' in path: return 'interfaces'
    if 'test-plan' in path or 'transcription' in path: return 'delivery'
    if 'usability' in path or 'form-testing' in path: return 'experience'
    if 'agent-query' in path: return 'ai'
    if any(x in path for x in ['qa-process','release','onboarding']): return 'delivery'
    if any(x in path for x in ['api-testing','security']): return 'interfaces'
    if any(x in path for x in ['automation','test-data']): return 'automation'
    if path.startswith('ai/'): return 'ai'
    if any(x in path for x in ['mobile','web-ui','performance']): return 'experience'
    return 'foundations'
notes=[]; sources={}
for area in ['qa','ai','tools','playbooks']:
    for p in sorted((ROOT/area).rglob('*.md')):
        en=read(p); ident=field(en,'id')
        if not ident: continue
        rel=p.relative_to(ROOT).as_posix(); rp=ROOT/'locales/ru'/rel
        ru=read(rp) if rp.exists() else en
        urls=[]
        for label,url in re.findall(r'\[([^\]]+)\]\((https?://[^\s)]+)\)',en):
            if url not in urls: urls.append(url)
            entry=sources.setdefault(url,{'url':url,'title':label,'notes':[]})
            if ident not in entry['notes']: entry['notes'].append(ident)
        notes.append({'id':ident,'path':rel,'title':{'en':field(en,'title'),'ru':field(ru,'title')},'domain':'ai' if area=='ai' or ident=='agent-query-observability' else 'qa', 'group':section(rel),'kind':'tool' if ident in TOOL_IDS else 'article','urls':urls,'tags':field(en,'tags'),'date':field(en,'reviewed')})
materials=[]
for p in sorted((ROOT/'docs/sources/originals').glob('*.pdf')):
    materials.append({'path':p.relative_to(ROOT).as_posix(),'name':p.stem,'bytes':p.stat().st_size})
(WEB/'catalog.json').write_text(json.dumps({'notes':notes,'sources':list(sources.values()),'materials':materials},ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Catalog: {len(notes)} notes, {len(sources)} sources, {len(materials)} PDFs')
