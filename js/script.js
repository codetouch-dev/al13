const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  }
});

document.querySelectorAll('.reviews__slide').forEach(slide => {
  const text = slide.querySelector('.slide__text');
  const btn = slide.querySelector('.slide__more');
  let timeoutId;

  if (text.scrollHeight > text.clientHeight) {
    btn.classList.add('slide__more--visible');
  }

  btn.addEventListener('click', () => {
    text.classList.add('expanded');
    btn.classList.remove('slide__more--visible');

    timeoutId = setTimeout(() => {
      text.classList.remove('expanded');
      btn.classList.add('slide__more--visible');
      
    }, 5000);
  });
});