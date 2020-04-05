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

const dropdown = document.querySelector('.dropdown');
const showDropdown = () => {
  dropdown.classList.toggle('show-dropdown');
  dropdown.classList.toggle('hide-dropdown');
};

const lazyLoad = () => {
  let images;
  if ('IntersectionObserver' in window) {
    images = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          console.log(image);
          image.src = image.dataset.src;
          image.classList.add('animate');
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });

    images.forEach(image => {
      imageObserver.observe(image);
    });
  }
};

document.addEventListener('DOMContentLoaded', lazyLoad);
