// for animation
AOS.init();

// burger button
const btn = document.querySelector('.fancy-burger');

btn.addEventListener('click', ()=>{
  btn.querySelectorAll('span').forEach((span) => span.classList.toggle('open'));
});