
//GSAP
var tween = TweenLite.to("#bldng3", 1, {top: 100, easing: Power2.EaseOut});
//Scrollmagic
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#prlx3", offset: 300, duration: 300})
    .setTween(tween)
    .addIndicators()
    .addTo(controller);