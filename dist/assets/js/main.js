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
