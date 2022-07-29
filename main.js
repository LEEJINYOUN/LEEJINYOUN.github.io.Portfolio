const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;
const toggle = document.querySelector("#toggle");
const navbar_menu = document.querySelector("#navbar_menu");
const navbar_menu_item_link = document.querySelector(".navbar_menu_item_link");

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("navbar_dark");
  } else {
    header.classList.remove("navbar_dark");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList == "navbar_menu_item_link") {
    toggle.classList.toggle("active");
    navbar_menu.classList.toggle("active");
  }
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  navbar_menu.classList.toggle("active");
});

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log(value);
// });

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
