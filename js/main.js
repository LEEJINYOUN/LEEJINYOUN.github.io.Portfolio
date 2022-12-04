const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("navDark");
  } else {
    header.classList.remove("navDark");
  }
});

const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");

document.addEventListener("click", function (e) {
  if (e.target.classList == "navMenuItemLink") {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
});

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector(".arrowUp");
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

const fm1 = new FluidMeter();
const fm2 = new FluidMeter();
const fm3 = new FluidMeter();
const fm4 = new FluidMeter();
const fm5 = new FluidMeter();
const fm6 = new FluidMeter();
const fm7 = new FluidMeter();
fm1.init({
  targetContainer: document.getElementById("skillsCard-1"),
  fillPercentage: 70,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#6ec98c",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#67af7f",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});
fm2.init({
  targetContainer: document.getElementById("skillsCard-2"),
  fillPercentage: 70,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#0e4927",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#255e3d",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});
fm3.init({
  targetContainer: document.getElementById("skillsCard-3"),
  fillPercentage: 65,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#e3e63b",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#f8fc30b2",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});
fm4.init({
  targetContainer: document.getElementById("skillsCard-4"),
  fillPercentage: 60,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#8db912c2",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#b2e034e5",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});
fm5.init({
  targetContainer: document.getElementById("skillsCard-5"),
  fillPercentage: 65,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#2658e2c2",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#6a8ae4a6",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});
fm6.init({
  targetContainer: document.getElementById("skillsCard-6"),
  fillPercentage: 60,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#A760FF",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#d568df",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});
fm7.init({
  targetContainer: document.getElementById("skillsCard-7"),
  fillPercentage: 40,
  options: {
    fontSize: "35px",
    fontFamily: "poppins",
    fontFillStyle: "white",
    drawShadow: true,
    drawText: true,
    drawPercentageSign: true,
    drawBubbles: true,
    size: 250,
    borderWidth: 25,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#d341b3c2",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150,
    },
    backgroundFluidLayer: {
      fillStyle: "#b969a8a1",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150,
    },
  },
});

const swiper = new Swiper(".projectSlideContent", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
