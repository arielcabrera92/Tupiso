const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slide.length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 7000); // Cambiar de slide cada 3 segundos
