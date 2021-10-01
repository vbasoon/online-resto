let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".header__menu");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

menu.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search").classList.remove("active");
};

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  //loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
