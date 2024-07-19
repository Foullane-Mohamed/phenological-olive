let humbergerBar = document.querySelector('.humberger');
let nav_menu = document.querySelector('.nav_menu');
let nav_itmes = document.querySelectorAll('.nav_item');

humbergerBar.addEventListener('click', () => {
  humbergerBar.classList.toggle('active');
  nav_menu.classList.toggle('active');
});

nav_itmes.forEach((e) => {
  e.addEventListener('click', () => {
    nav_itmes.forEach((el) => {
      el.classList.remove('active_color');
    });
    e.classList.add('active_color');
    humbergerBar.classList.remove('active');
    nav_menu.classList.remove('active');
  });
});
