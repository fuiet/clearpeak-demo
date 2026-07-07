// ClearPeak Landscape Luxury interactions

const cursor = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (event) => {
  if (!cursor) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

// Smooth reveal animation
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealItems.forEach((item) => revealObserver.observe(item));

// Navigation glass effect
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (!nav) return;

  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Hero parallax movement
const heroMedia = document.querySelector('.hero-media');

window.addEventListener('scroll', () => {
  if (!heroMedia) return;

  const offset = window.scrollY * 0.12;
  heroMedia.style.transform = `scale(1.06) translateY(${offset}px)`;
});

// Before / After comparison slider
const range = document.getElementById('range');
const afterImage = document.getElementById('afterImg');

if (range && afterImage) {
  range.addEventListener('input', () => {
    afterImage.style.clipPath = `inset(0 0 0 ${range.value}%)`;
  });
}

// Magnetic button effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});

// Image hover depth
const projectImages = document.querySelectorAll('.project img, .feature-image img');

projectImages.forEach((image) => {
  image.addEventListener('mousemove', (event) => {
    const rect = image.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;

    image.style.transform = `scale(1.06) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = '';
  });
});

// Dynamic year in footer if added later
const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear();
}

console.log('ClearPeak Landscape Luxury loaded');
