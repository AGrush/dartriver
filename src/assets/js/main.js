const sliderTrigger = document.querySelector('[data-id="slider-open"]');
const sliderClose = document.querySelector('[data-id="slider-close"]');
const slider1 = document.querySelector(".slider-container__inner");
const clickAway = document.querySelector(".clickAway");

sliderTrigger.addEventListener("click", function (event) {
  event.preventDefault();

  if (slider1.classList.contains("active")) {
    slider1.classList.remove("active");
  } else {
    slider1.classList.add("active")
    clickAway.style.visibility = "initial"
  }
});

sliderClose.addEventListener("click", function (event) {
  event.preventDefault();

  if (slider1.classList.contains("active")) {
    slider1.classList.remove("active");
    clickAway.style.visibility = "hidden"
  } else {
    slider1.classList.add("active");
  }
});

clickAway.addEventListener('click', () => {
  clickAway.style.visibility = "hidden"
  slider1.classList.remove("active");
})

const line = document.querySelectorAll(".line")
const burgerbtn = document.querySelector(".header__menu")

burgerbtn.addEventListener("mouseover", () => {
  line.forEach(line => {
    line.classList.add('changeBg')
  })  
})

burgerbtn.addEventListener("mouseout", () => {
  line.forEach(line => {
    line.classList.remove('changeBg')
  })  
})