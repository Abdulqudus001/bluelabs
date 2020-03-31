const navbar = document.querySelector('.navbar');
const getScrollTop = e => {
  const scroll = window.scrollY;
  if (scroll > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
};

window.addEventListener('scroll', getScrollTop);
