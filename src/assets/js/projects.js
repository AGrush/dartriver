//FLICKITY OPTIONS
var options = {
  wrapAround: false,
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

var galleryElems = document.querySelectorAll("[data-carousel]");
for (var i = 0, len = galleryElems.length; i < len; i++) {
  var galleryElem = galleryElems[i];
  this["flkty" + i] = new Flickity(galleryElem, options);
}

//parralax stuff for first gallery
// const slides0 = document.querySelectorAll(".parralax0");
// flkty0.on("scroll", function() {
//   flkty0.slides.forEach(function(slide, i) {
//     var image = slides0[i];
//     var x = ((slide.target + flkty0.x) * -1) / 3;
//     image.style.backgroundPosition = x + "px";
//   });
// });

//parralax stuff for second gallery
// var slides1 = document.getElementsByClassName("parralax2");
// flkty1.on("scroll", function() {
//   flkty1.slides.forEach(function(slide, i) {
//     var image = slides1[i];
//     var x = ((slide.target + flkty1.x) * -1) / 3;
//     image.style.backgroundPosition = x + "px";
//   });
// });

//parralax stuff for third gallery
// var slides2 = document.getElementsByClassName("parralax3");
// flkty2.on("scroll", function() {
//   flkty2.slides.forEach(function(slide, i) {
//     var image = slides2[i];
//     var x = ((slide.target + flkty2.x) * -1) / 3;
//     image.style.backgroundPosition = x + "px";
//   });
// });

var lax0 = document.querySelector(".lax0")
var lax2 = document.querySelector(".lax2")
var lax3 = document.querySelector(".lax3")
var lax4 = document.querySelector(".lax4")
var lax5 = document.querySelector(".lax5")
var lax6 = document.querySelector(".lax6")


//Scrollmagic & gsap to move buildings//
var controller = new ScrollMagic.Controller();
// build scene first building


var scene1 = new ScrollMagic.Scene({
  triggerElement: "#sec1" - 40,
  duration: $("#sec1").height() + 0
})
  .on("enter leave", function() {
    $("#sec1").toggleClass("show-slides");
    lax0.classList.toggle("show-slides");
    $("#nav").toggleClass("gal1");
  })
  // .addIndicators()
  .addTo(controller);



new ScrollMagic.Scene({
  triggerElement: "#sec2",
  duration: $("#sec2").height() + 0
})
  .on("enter leave", function() {
    $("#sec2").toggleClass("show-slides");
    lax2.classList.toggle("show-slides");
    $("#nav").toggleClass("gal2");
  })
  // .addIndicators()
  .addTo(controller);


  

new ScrollMagic.Scene({
  //triggerHook: myTriggerHook,
  triggerElement: "#sec3",
  duration: $("#sec3").height() + 0
})
  .on("enter leave", function() {
    $("#sec3").toggleClass("show-slides");
    lax3.classList.toggle("show-slides");
    $("#nav").toggleClass("gal3");
  })
  // .addIndicators()
  .addTo(controller);



new ScrollMagic.Scene({
  triggerElement: "#sec4",
  offset: 0,
  duration: $("#sec4").height() + 0
})
  .on("enter leave", function() {
    $("#sec4").toggleClass("show-slides");
    lax4.classList.toggle("show-slides");
    $("#nav").toggleClass("gal4");

  })
  // .addIndicators()
  .addTo(controller);



new ScrollMagic.Scene({
  triggerElement: "#sec5",
  offset: 0,
  duration: $("#sec5").height() + 0
})
  .on("enter leave", function() {
    $("#sec5").toggleClass("show-slides");
    lax5.classList.toggle("show-slides");
    $("#nav").toggleClass("gal5");
  })
  // .addIndicators()
  .addTo(controller);



new ScrollMagic.Scene({
  triggerElement: "#sec6",
  offset: 0,
  duration: $("#sec5").height() + 0
})
  .on("enter leave", function() {
    $("#sec6").toggleClass("show-slides");
    lax6.classList.toggle("show-slides");
    $("#nav").toggleClass("gal6");
  })
  // .addIndicators()
  .addTo(controller);



  //hide the buttons
new ScrollMagic.Scene({
  //triggerHook: myTriggerHook,
  triggerElement: "#sec7",
  offset: -300,
  duration: 1500
})
  .on("enter leave", function() {
    $("#navigator").toggleClass("hide");
    $("#nav").toggleClass("hide");
  })
  // .addIndicators()
  .addTo(controller);




//Media Queriessss
// $(window).bind("resize", function() {
//   var width = window.innerWidth;
//   if (width < 1024){
//     scene1.duration(200);
//     scene1.offset(30);
//   } else if (width >= 1024 ) {
//     scene1.duration($("#sec1").height() + 0)
//     scene1.offset(0);
//   }
// })