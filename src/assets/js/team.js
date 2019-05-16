var options = {
  wrapAround: false,
  accessibility: true,
  prevNextButtons: true,
  cellAlign: "left",
  pageDots: false,
  contain: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};

var carousel = document.querySelector("[data-carousel]");
var flkty = new Flickity(carousel, options);

//Overlay text bio stuff
const overlay = document.querySelector(".overlay");
const clickOff = document.querySelector(".clickOff");
const button = document.querySelectorAll(".button");
const logo = document.querySelector(".header__logo-higher");
const prevNextBtn = document.querySelectorAll(".flickity-button");
const burgerText = document.querySelector(".header-products__burger-text");

button.forEach(btn => {
  btn.addEventListener("click", e => {
    var xPosition = e.clientX;
    //if click on left side of screen
    if (xPosition < window.innerWidth / 2) {
      btn.nextElementSibling.classList.toggle("visibleR");
      btn.firstElementChild.classList.toggle("rotate45");
      clickOff.classList.toggle("visible");
      prevNextBtn.forEach(x => {
        x.style.display = "none";
      });
      logo.style.display = "none";
    } else {
      //if click on right side of screen
      btn.nextElementSibling.classList.toggle("visibleL");
      btn.firstElementChild.classList.toggle("rotate45");
      clickOff.classList.toggle("visible");
      burgerText.style.display = "none";
      prevNextBtn.forEach(x => {
        x.style.display = "none";
      });
      logo.style.display = "none";
    }
  });
});

//exit the popups
clickOff.addEventListener("click", () => {
  burgerText.style.display = "initial";
  clickOff.classList.toggle("visible");
  prevNextBtn.forEach(x => {
    x.style.display = "initial";
  });
  button.forEach(item => {
    if (item.nextElementSibling.classList.contains("visibleR")) {
      item.nextElementSibling.classList.remove("visibleR");
      item.firstElementChild.classList.toggle("rotate45");
      logo.style.display = "block";
    }
    if (item.nextElementSibling.classList.contains("visibleL")) {
      item.nextElementSibling.classList.remove("visibleL");
      item.firstElementChild.classList.toggle("rotate45");
      logo.style.display = "block";
    }
  });
});
