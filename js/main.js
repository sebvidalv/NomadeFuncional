document.addEventListener("DOMContentLoaded", () => {
  // Slider Sede
  let sedeIndex = 0;
  const sedeWrapper = document.querySelector('.sede-wrapper');
  const sedeSlides = document.querySelectorAll('.sede-wrapper .slide');

  // Asume que cada slide ocupa 100% del ancho, y el wrapper tiene ancho normal (100%)
  document.querySelector('.prev-sede').addEventListener('click', () => {
    sedeIndex = (sedeIndex - 1 + sedeSlides.length) % sedeSlides.length;
    sedeWrapper.style.transform = `translateX(-${sedeIndex * 100}vw)`;
  });

  document.querySelector('.next-sede').addEventListener('click', () => {
    sedeIndex = (sedeIndex + 1) % sedeSlides.length;
    sedeWrapper.style.transform = `translateX(-${sedeIndex * 100}vw)`;
  });

  // Slider Profesores
  let profIndex = 0;
  const profWrapper = document.querySelector('.prof-wrapper');
  const profSlides = document.querySelectorAll('.prof-wrapper .slide');

  // Ajustar el ancho del wrapper a (nº slides * 100%)
  profWrapper.style.width = `${profSlides.length * 100}%`;

  // Ajustar el ancho de cada slide para que ocupe espacio proporcional
  profSlides.forEach(slide => {
    slide.style.flex = `0 0 ${100 / profSlides.length}%`;
  });

  document.querySelector('.prev-prof').addEventListener('click', () => {
    profIndex = (profIndex - 1 + profSlides.length) % profSlides.length;
    profWrapper.style.transform = `translateX(-${profIndex * (100 / profSlides.length)}%)`;
  });

  document.querySelector('.next-prof').addEventListener('click', () => {
    profIndex = (profIndex + 1) % profSlides.length;
    profWrapper.style.transform = `translateX(-${profIndex * (100 / profSlides.length)}%)`;
  });
});
