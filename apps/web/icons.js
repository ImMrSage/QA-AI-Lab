// Local SVG vocabulary: recognizable shapes remain distinct without color.
const paths = {
 book:'<path d="M3 4h6a4 4 0 0 1 3 2 4 4 0 0 1 3-2h6v15h-6a4 4 0 0 0-3 2 4 4 0 0 0-3-2H3z"/><path d="M12 6v15M6 8h3M15 8h3"/>',
 release:'<path d="M4 3v17h17M7 15l4-5 4 2 5-7M16 5h4v4"/>',
 shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z"/><path d="m9 10-2 2 2 2m6-4 2 2-2 2m-2-5-2 6"/>',
 code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
 network:'<rect x="8" y="2" width="8" height="6" rx="2"/><rect x="2" y="16" width="7" height="6" rx="2"/><rect x="15" y="16" width="7" height="6" rx="2"/><path d="M12 8v4H5v4m7-4h7v4"/>',
 monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4m-7-11 2 2 4-4"/>',
 bot:'<rect x="4" y="7" width="16" height="14" rx="4"/><path d="M12 3v4M9 16h6M1 12v4m22-4v4"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/>',
 people:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-17a3 3 0 0 1 0 6m2 11v-3a6 6 0 0 0-2-4"/>',
 checklist:'<rect x="5" y="4" width="16" height="18" rx="2"/><path d="M9 4V2h8v2M2 10l2 2 3-4M10 10h7M2 17l2 2 3-4m3 2h7"/>',
 gauge:'<path d="M3 19a10 10 0 1 1 18 0zM12 15l5-6M6 11l-1-1m7-5v2m6 4 1-1"/><circle cx="12" cy="15" r="1"/>',
 phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
 mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>',
 package:'<path d="m12 2 10 5v10l-10 5L2 17V7zM2 7l10 5 10-5M12 12v10M7 4.5l10 5V13"/>',
 files:'<path d="M14 2H4v16h4m0-12h8l4 4v12H8zM16 6v5h4M11 15h6m-6 3h4"/>',
 tree:'<path d="M12 22v-9m0 4-5-3m5-3 5-3"/><circle cx="7" cy="9" r="4"/><circle cx="16" cy="6" r="4"/>',
 audio:'<path d="M3 10v4m4-8v12m5-16v20m5-16v12m4-8v4"/>',
 convert:'<path d="M3 7h16l-4-4m4 4-4 4M21 17H5l4-4m-4 4 4 4"/>',
 table:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11m6-11v11M3 14h18"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 link:'<path d="m10 13 4-4m-6 7-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 1 2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 1)"/>'
};
export const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.book}</svg>`;
const themes={
 foundations:['book','#2866bc','#eaf2ff'], delivery:['release','#be4548','#fff0ef'],
 security:['shield','#19815b','#e6f6ee'], automation:['code','#7555bf','#f1ebfc'],
 interfaces:['network','#087e91','#e5f5f8'], experience:['monitor','#bb6630','#fff1e7'],
 ai:['bot','#8651bc','#f5ecff']
};
export function visual(note){
 let category=note.group;
 if(/security|authentication|password-reset/.test(note.path||''))category='security';
 const theme=themes[category]||themes.foundations;
 let shape=theme[0];
 if(/onboarding|lead-qa|hiring/.test(note.id||''))shape='people';
 else if(/test-plan|acceptance|documentation/.test(note.id||''))shape='checklist';
 else if(/mobile/.test(note.id||''))shape='phone';
 else if(/load|performance/.test(note.id||''))shape='gauge';
 else if(/transcription/.test(note.id||''))shape='mic';
 return {shape,style:`--tone:${theme[1]};--tint:${theme[2]}`};
}
const toolVisuals={
 Handy:['mic','handy','#bb6b31','#fff3e6'], Bundlephobia:['package','bundlephobia','#bd4651','#fff0f2'], Tabiew:['table',null,'#217a65','#e8f7f1'],
 delphitools:['files','delphitools','#3375b9','#eaf3ff'], AIToolTree:['tree','aitooltree','#288456','#eaf8ee'],
 NotebookLM:['book',null,'#343c59','#edf0f8'], 'Google AI Studio':['bot','ai-studio','#426cc5','#edf3ff'],
 HypeScribe:['audio','hypescribe','#7957c8','#f1edfc'], MacWhisper:['audio',null,'#a6469a','#fcedf9'],
 'Format Factory':['convert',null,'#267f88','#e8f6f7']
};
export function toolBadge(name){
 const [shape,file,tone,tint]=toolVisuals[name]||['package',null,'#6254c7','#efecfa'];
 return `<span class="visual-icon tool-visual" style="--tone:${tone};--tint:${tint}" aria-hidden="true">${icon(shape)}${file?`<img src="./tool-icons/${file}.png" alt="" loading="lazy" decoding="async">`:''}</span>`;
}
