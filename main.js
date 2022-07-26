const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;
const toggle = document.querySelector("#toggle");
const navbar_menu = document.querySelector("#navbar_menu");

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("navbar_dark");
  } else {
    header.classList.remove("navbar_dark");
  }
});

document.addEventListener("click", function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar_menu"
  ) {
    toggle.classList.toggle("active");
    navbar_menu.classList.toggle("active");
  }
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  navbar_menu.classList.toggle("active");
});
