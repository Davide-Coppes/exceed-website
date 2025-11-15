/* FILE: scripts.js */
document.addEventListener('DOMContentLoaded',()=>{
    const toggle=document.getElementById('navToggle');
    const nav=document.querySelector('.nav-links');
    toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
  });