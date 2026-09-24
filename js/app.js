const WHATSAPP_NUMBER='94715231454';
function waLink(message='Hello Fine Elegance Gems & Jewelry, I would like to make a gemstone inquiry.'){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function initNav(){
  const nav=document.getElementById('nav');
  const toggle=document.getElementById('menuToggle');
  if(!nav||!toggle)return;
  toggle.addEventListener('click',()=>nav.classList.toggle('mobile-open'));
  nav.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
}
function initHero(){
  const slides=[...document.querySelectorAll('.hero-slide')];
  const dots=[...document.querySelectorAll('.hero-dots span')];
  if(!slides.length)return;
  let i=0;
  const show=n=>{slides.forEach((s,k)=>s.classList.toggle('active',k===n));dots.forEach((d,k)=>d.classList.toggle('active',k===n));};
  show(0);
  setInterval(()=>{i=(i+1)%slides.length;show(i)},5000);
}
function initWaButtons(){
  document.querySelectorAll('[data-wa]').forEach(a=>{a.href=waLink(a.dataset.wa||undefined);});
}
document.addEventListener('DOMContentLoaded',()=>{initNav();initHero();initWaButtons();const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();});
