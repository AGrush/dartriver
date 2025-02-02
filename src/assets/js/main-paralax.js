//for media queries
var windowWidth = $(window).width();


//GSAP first building
var tween1 = TweenLite.to("#bldng1", 1, {
  backgroundPosition: "100% 140%",
  ease: Power3.EaseOut
});
//Scrollmagic
var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#prlx1",
  offset: 300,
  duration: 400
})
  .setTween(tween1)
  // .addIndicators()
  .addTo(controller1);


if (windowWidth <= 550){
  //GSAP second building
var tween2 = TweenLite.to("#bldng2", 1, {
  backgroundPosition: "100% 100%",
  ease: Power3.EaseIn
});
//Scrollmagic
var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#prlx2",
  offset: 0,
  duration: 500
})
  .setTween(tween2)
  // .addIndicators()
  .addTo(controller2);
}

if (windowWidth > 550){
  //GSAP second building
var tween2 = TweenLite.to("#bldng2", 1, {
  backgroundPosition: "140% 100%",
  ease: Power3.EaseIn
});
//Scrollmagic
var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#prlx2",
  offset: 0,
  duration: 500
})
  .setTween(tween2)
  // .addIndicators()
  .addTo(controller2);
}





//GSAP third building
var tween3 = TweenLite.to("#bldng3", 1, {
  backgroundPositionY: "105%",
  ease: Power2.EaseInOut
});
//Scrollmagic
var controller3 = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#prlx3",
  offset: 50,
  duration: 400
})
  .setTween(tween3)
  // .addIndicators()
  .addTo(controller3);
