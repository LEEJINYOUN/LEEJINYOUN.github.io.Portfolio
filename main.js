const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("navbar_dark");
  } else {
    header.classList.remove("navbar_dark");
  }
});

const toggle = document.querySelector("#toggle");
const navbar_menu = document.querySelector("#navbar_menu");

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

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
