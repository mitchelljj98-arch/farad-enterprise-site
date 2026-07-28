
const pages=[
['Home','index.html','hydraulic energy recovery water wastewater'],
['Water-Cycle System','water-cycle-system.html','20 kW hydraulic pressure flow specifications economics'],
['Applications','applications.html','wastewater drinking water reclaimed water industrial'],
['Data Center Partnerships','data-center-partnerships.html','data centers reclaimed water utilities operators'],
['Pilot Projects','pilot-projects.html','screening hydraulic assessment validation measurement'],
['Technology Evaluation','technology-evaluation.html','magnetic levitation vehicle wind validation'],
['News & Updates','updates.html','news press releases events pilot milestones'],
['Investors','investors.html','strategic investors capital industry relationships'],
['About','about.html','mission values leadership philosophy'],
['FAQ','faq.html','questions technology engineering investors'],
['Contact','contact.html','site evaluation pilot investor inquiry']
];
const panel=document.querySelector('.search-panel'),openBtn=document.querySelector('.search-button'),closeBtn=document.querySelector('.search-close'),input=document.querySelector('#site-search'),results=document.querySelector('.search-results');
function closeSearch(){panel?.classList.remove('open');openBtn?.focus();}
openBtn?.addEventListener('click',()=>{panel.classList.add('open');setTimeout(()=>input.focus(),50);});
closeBtn?.addEventListener('click',closeSearch);
panel?.addEventListener('click',e=>{if(e.target===panel)closeSearch();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel?.classList.contains('open'))closeSearch();});
input?.addEventListener('input',()=>{const q=input.value.toLowerCase().trim();results.innerHTML=q?pages.filter(p=>(p[0]+' '+p[2]).toLowerCase().includes(q)).map(p=>`<a href="${p[1]}"><strong>${p[0]}</strong><br><span>${p[2]}</span></a>`).join(''):'<p>Start typing to search the FARAD site.</p>';});
