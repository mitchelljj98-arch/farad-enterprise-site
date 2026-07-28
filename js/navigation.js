
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.primary-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav-trigger').forEach(btn=>{
 btn.addEventListener('click',e=>{const item=btn.closest('.nav-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
});
document.addEventListener('click',e=>{if(!e.target.closest('.nav-item'))document.querySelectorAll('.nav-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');});});
