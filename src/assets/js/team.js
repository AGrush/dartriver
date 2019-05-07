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

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var xPosition = e.clientX;
    if (xPosition < window.innerWidth / 2) {
      btn.nextElementSibling.classList.toggle('visibleR')
      btn.firstElementChild.classList.toggle('rotate45')
      clickOff.classList.toggle('visible')
      logo.style.display = "none"
    } else {
      btn.nextElementSibling.classList.toggle('visibleL')
      btn.firstElementChild.classList.toggle('rotate45')
      clickOff.classList.toggle('visible')
      logo.style.display = "none"
    }
  })
})

clickOff.addEventListener('click', () => {
  clickOff.classList.toggle('visible');
  button.forEach((item) => {
    if (item.nextElementSibling.classList.contains('visibleR')) {
      item.nextElementSibling.classList.remove('visibleR')
      item.firstElementChild.classList.toggle('rotate45')
      logo.style.display = "block"
    };
    if (item.nextElementSibling.classList.contains('visibleL')) {
      item.nextElementSibling.classList.remove('visibleL')
      item.firstElementChild.classList.toggle('rotate45')
      logo.style.display = "block"
    };
  })
});