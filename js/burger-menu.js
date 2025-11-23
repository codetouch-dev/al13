// for burger menu
const burgerBtn = document.querySelector('.burger-menu')
const bodyElem = document.querySelector('body')

document.addEventListener('click', (event) => {
  const target = event.target
  if (target === burgerBtn || target.parentElement === burgerBtn) {
    burgerBtn.classList.toggle('burger-menu--opened')

    bodyElem.classList.toggle('body-menu--opened')
  }
});

// for header on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});