//GSAP
// TweenLite.set("#bldng1", { top: 0 });
//TweenLite.to("#bldng1", 1, { top: 200, easing: Power2.easeOut });
var tween1 = TweenLite.to("#bldng1", 1, { top: 50, easing: Power3.EaseOut });
//Scrollmagic
var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#prlx1",
  offset: 400,
  duration: 300
})
  .setTween(tween1)
  //   .addIndicators()
  .addTo(controller1);

//GSAP
// TweenLite.set("#bldng2", { top: 100 });
var tween2 = TweenLite.to("#bldng2", 1, { top: -10, easing: Power2.EaseIn });
//Scrollmagic
var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#prlx2",
  offset: 0,
  duration: 400
})
  .setTween(tween2)
  //   .addIndicators()
  .addTo(controller2);

//GSAP
// TweenLite.set("#bldng3", { top: 150 });
var tween3 = TweenLite.to("#bldng3", 1, { top: 0, easing: Power2.EaseOut });
//Scrollmagic
var controller3 = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#prlx3",
  offset: 100,
  duration: 400
})
  .setTween(tween3)
  //   .addIndicators()
  .addTo(controller3);
