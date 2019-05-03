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

//Overlay stuff
var overlayr = document.querySelector(".overlay-right");
var button = document.querySelector(".button1");
var firstBtn = document.querySelector(".firstBtn");
var clickOff = document.querySelector(".clickOff");

var toggle = function() {
  overlayr.classList.toggle("visible");
  clickOff.classList.toggle("visible");
  firstBtn.classList.toggle("rotate45");
};
button.addEventListener("click", toggle);
clickOff.addEventListener("click", toggle);

//var buttons = document.querySelectorAll(".buttons");

// set info text behind images
// listen to mouse click event
// if mouse click event is on the left side of the screen and on the button {
// 	get that buttons
// }

var overlayl = document.querySelector(".overlay-left");
var secondBtn = document.querySelector(".secondBtn");
var button2 = document.querySelector(".button2");

var toggle2 = function() {
  overlayl.classList.toggle("visible");
  // clickOff.classList.toggle("visible");
  secondBtn.classList.toggle("rotate45");
};
button2.addEventListener("click", toggle2);
