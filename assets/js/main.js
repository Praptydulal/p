// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple lightbox for portfolio images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('#lightbox .lightbox__img');
const lightboxClose = document.querySelector('#lightbox .lightbox__close');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Expanded image';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-lightbox]').forEach((img) => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Lightweight 3D tilt effect
const tiltElements = document.querySelectorAll('.tilt');
tiltElements.forEach((el) => {
  let rect;
  const update = (e) => {
    rect = rect || el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6; // -6deg .. 6deg
    const rotateX = -((y - midY) / midY) * 6;
    el.style.setProperty('--rx', rotateX.toFixed(2) + 'deg');
    el.style.setProperty('--ry', rotateY.toFixed(2) + 'deg');
  };
  const reset = () => {
    rect = undefined;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };
  el.addEventListener('mousemove', update);
  el.addEventListener('mouseleave', reset);
});
