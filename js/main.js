/* === SLIDER DEL STAFF === */
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let slideIndex = 0;

  function actualizarSlider() {
    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
  }


  prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    actualizarSlider();
  });

  nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    actualizarSlider();
  });

  actualizarSlider();
});
