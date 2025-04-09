let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.getElementById('slider');

// Auto Slider
setInterval(() => {
    nextSlide();
}, 5000); // Change slide every 5 seconds

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
