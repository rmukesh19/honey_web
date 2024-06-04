const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal('.home-text', { delay: 300 });
sr.reveal('.home-img', { delay: 300 });
