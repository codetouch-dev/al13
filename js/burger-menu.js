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