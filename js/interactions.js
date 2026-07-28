
document.querySelectorAll('[data-tabs]').forEach(group=>{
 const buttons=[...group.querySelectorAll('.tab-button')],panels=[...group.querySelectorAll('.tab-panel')];
 buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-selected','false'));panels.forEach(p=>p.hidden=true);btn.setAttribute('aria-selected','true');group.querySelector('#'+btn.getAttribute('aria-controls')).hidden=false;}));
});
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('[role="status"]');if(status)status.textContent='Thank you. This demonstration form must be connected to a form-processing service before launch.';}));
