// === MOBILE MENU TOGGLE === //
(function() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-menu');
  if (!toggleBtn || !navList) return;

  toggleBtn.addEventListener('click', function () {
    const isOpen = navList.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any nav link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Optional: close when clicking outside
  document.addEventListener('click', e => {
    if (!navList.classList.contains('is-open')) return;
    if (!e.target.closest('.nav')) {
      navList.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();


// === FOOTER YEAR === //
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// === SIMPLE ACCORDION === //
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
