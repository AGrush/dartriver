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

// var carousel = document.querySelector("[data-carousel]");
// var flkty = new Flickity(carousel, options);
var loadScrollMagic = () => {
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
  var slides2 = document.getElementsByClassName("parralax3");
  flkty2.on("scroll", function() {
    flkty2.slides.forEach(function(slide, i) {
      var image = slides2[i];
      var x = ((slide.target + flkty2.x) * -1) / 3;
      image.style.backgroundPosition = x + "px";
    });
  });

  //Scrollmagic & gsap to move buildings//
  var controller = new ScrollMagic.Controller();

  // build scene first building

  new ScrollMagic.Scene({
    triggerHook: myTriggerHook,
    triggerElement: "#sec1",
    duration: $("#sec1").height() + 0
  })
    .on("enter leave", function() {
      $("#sec1").toggleClass("show-slides");
      $("#nav").toggleClass("startx");
    })
    //.setClassToggle("#sec1", "show-slides")
    .addIndicators()
    .addTo(controller);
  // build scene second building
  new ScrollMagic.Scene({
    triggerHook: myTriggerHook,
    triggerElement: "#sec2",
    duration: $("#sec1").height() + 0
  })
    .on("enter leave", function() {
      $("#sec2").toggleClass("show-slides");
      $("#nav").toggleClass("middlex");
    })
    //.setClassToggle("#sec2", "show-slides")
    //.setClassToggle("#nav", "middlex")
    .addIndicators()
    .addTo(controller);

  // build scene third building
  new ScrollMagic.Scene({
    triggerHook: myTriggerHook,
    triggerElement: "#sec3",
    duration: $("#sec1").height() + 0
  })
    .on("enter leave", function() {
      $("#sec3").toggleClass("show-slides");
      $("#nav").toggleClass("endx");
    })
    //.setClassToggle("#sec3", "show-slides")
    //.setClassToggle("#nav", "end")
    .addIndicators()
    .addTo(controller);

  // build scene for the hovering nav buttons on the left
  new ScrollMagic.Scene({
    triggerHook: myTriggerHook,
    triggerElement: "#sec4",
    offset: -300,
    duration: 800
  })
    .on("enter leave", function() {
      $("#navigator").toggleClass("hide");
      $("#nav").toggleClass("hide");
    })
    .addIndicators()
    .addTo(controller);
};
loadScrollMagic();
var myTriggerHook;
//Media Queries

var mqls = [
  window.matchMedia("(min-width: 1024px)"),
  window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),
  window.matchMedia("(max-width: 767px)")
];

function mediaqueryresponse(mql) {
  if (mqls[0].matches) {
    myTriggerHook = 0.5;
    loadScrollMagic();
  }
  if (mqls[1].matches) {
    myTriggerHook = 0.3;
    loadScrollMagic();
  }
  if (mqls[2].matches) {
    document.body.style.backgroundColor = "green";
  }
}

for (var i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]); // call listener function explicitly at run time
  mqls[i].addListener(mediaqueryresponse); // attach listener function to listen in on state changes
}
