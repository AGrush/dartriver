//Main Page menu
const sliderTrigger = document.querySelector('[data-id="slider-open"]');
const sliderClose = document.querySelector('[data-id="slider-close"]');
const slider1 = document.querySelector(".slider-container__inner");

sliderTrigger.addEventListener("click", function(event) {
  event.preventDefault();

  if (slider1.classList.contains("active")) {
    slider1.classList.remove("active");
  } else {
    slider1.classList.add("active");
    4;
  }
});

sliderClose.addEventListener("click", function(event) {
  event.preventDefault();

  if (slider1.classList.contains("active")) {
    slider1.classList.remove("active");
  } else {
    slider1.classList.add("active");
  }
});

//FLICKITY OPTIONS
// var flkty = new Flickity(".main-carousel", {
//   wrapAround: true,
//   imagesLoaded: true,
//   lazyLoad: 2,
//   cellAlign: "left",
//   pageDots: false
// });

var options = {
  wrapAround: true,
  accessibility: true,
  prevNextButtons: true,
  cellAlign: "left",
  pageDots: false,
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

// var carousel = document.querySelector("[data-carousel]");

// var flkty = new Flickity(carousel, options);

var galleryElems = document.querySelectorAll("[data-carousel]");
for (var i = 0, len = galleryElems.length; i < len; i++) {
  var galleryElem = galleryElems[i];
  this["flkty" + i] = new Flickity(galleryElem, options);
}

//parralax stuff for first gallery
const slides0 = document.querySelectorAll(".parralax0");
flkty0.on("scroll", function() {
  flkty0.slides.forEach(function(slide, i) {
    var image = slides0[i];
    var x = ((slide.target + flkty0.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

//parralax stuff for second gallery
var slides1 = document.getElementsByClassName("parralax2");
flkty1.on("scroll", function() {
  flkty1.slides.forEach(function(slide, i) {
    var image = slides1[i];
    var x = ((slide.target + flkty1.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

//parralax stuff for third gallery
