var mobileBtn = document.querySelector("#mobile-cta");
var nav = document.querySelector("nav");
var mobileBtnExit = document.querySelector("#mobile-exit");

mobileBtn.addEventListener("click", function() {
    nav.classList.add("menu-btn");
})

mobileBtnExit.addEventListener("click", function() {
    nav.classList.remove("menu-btn");
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
}); 


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



