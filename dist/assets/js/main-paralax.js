var tween1=TweenLite.to("#bldng1",1,{top:50,ease:Power3.EaseOut}),controller1=new ScrollMagic.Controller,scene1=new ScrollMagic.Scene({triggerElement:"#prlx1",offset:400,duration:300}).setTween(tween1).addTo(controller1);TweenLite.set("#bldng2",{top:120});var tween2=TweenLite.to("#bldng2",1,{top:-10,ease:Power2.EaseIn}),controller2=new ScrollMagic.Controller,scene2=new ScrollMagic.Scene({triggerElement:"#prlx2",offset:0,duration:400}).setTween(tween2).addTo(controller2);TweenLite.set("#bldng3",{top:150});var tween3=TweenLite.to("#bldng3",1,{top:30,ease:Power2.EaseInOut}),controller3=new ScrollMagic.Controller,scene3=new ScrollMagic.Scene({triggerElement:"#prlx3",offset:50,duration:400}).setTween(tween3).addTo(controller3);