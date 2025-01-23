const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', (event) => {
  event.stopPropagation();
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !toggleMenu.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});