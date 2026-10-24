'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
menu.addEventListener('click', () => { const expanded = menu.getAttribute('aria-expanded') === 'true'; navigation.classList.toggle('open', !expanded); menu.setAttribute('aria-expanded', String(!expanded)); menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation'); });
navigation.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 621px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
const gallery = {
  simple: { image: 'assets/simple.png', alt: 'Vibe Wire Simple Mode downloader', caption: 'Simple Mode · Everything you need for your next download.', detail: 'Simple Mode — actual Vibe Wire 0.4.0 Beta. Demonstration destination; no active download.' },
  advanced: { image: 'assets/advanced.png', alt: 'Vibe Wire Advanced Mode with Downloads and tool navigation', caption: 'Advanced Mode · A shared workspace for your media tools.', detail: 'Advanced Mode — actual Vibe Wire 0.4.0 Beta. Demonstration destination; no active download.' },
  converter: { image: 'assets/converter.png', alt: 'Vibe Wire Media Converter showing format, quality and output controls', caption: 'Media Converter · Choose the next format for your media.', detail: 'Media Converter — actual Vibe Wire 0.4.0 Beta. Owned demonstration video and destination text; no active conversion.' }
};
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
  const selected = gallery[button.dataset.gallery];
  document.querySelectorAll('[data-gallery]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  const image = document.querySelector('#gallery-image'); image.src = selected.image; image.alt = selected.alt;
  document.querySelector('#gallery-caption').textContent = selected.caption;
  const opener = document.querySelector('#gallery-open'); opener.dataset.image = selected.image; opener.dataset.caption = selected.detail;
}));
const dialog = document.querySelector('.lightbox');
let previousFocus;
dialog.addEventListener('keydown', e => { if (e.key === 'Tab') { e.preventDefault(); dialog.querySelector('.lightbox-close').focus(); } });
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  previousFocus = button;
  const image = document.querySelector('#lightbox-image'); image.src = button.dataset.image; image.alt = button.dataset.caption;
  document.querySelector('#lightbox-caption').textContent = button.dataset.caption;
  dialog.showModal(); document.body.classList.add('lightbox-open');
}));
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const box = dialog.getBoundingClientRect(); if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('lightbox-open'); if (previousFocus) previousFocus.focus({ preventScroll: true }); });
