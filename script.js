document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
      navLinks.style.right = '0';
    } else {
      navLinks.style.right = '-100%';
    }
  });
});