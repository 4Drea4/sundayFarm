// Mobile nav (you already have this)
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  const btn = document.querySelector('.menu-toggle');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple accordion (no dependencies)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.accordion-trigger');
  if (!btn) return;

  const item = btn.closest('.accordion-item');
  const acc = btn.closest('[data-accordion]');
  const expanded = btn.getAttribute('aria-expanded') === 'true';

  // close others (single-open behavior)
  acc.querySelectorAll('.accordion-item[open]').forEach((openItem) => {
    if (openItem !== item) {
      openItem.removeAttribute('open');
      openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
    }
  });

  // toggle current
  if (expanded) {
    item.removeAttribute('open');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    item.setAttribute('open', '');
    btn.setAttribute('aria-expanded', 'true');
  }
});
