for(var options={wrapAround:!1,accessibility:!0,prevNextButtons:!0,cellAlign:"left",pageDots:!1,setGallerySize:!1,arrowShape:{x0:10,x1:60,y1:50,x2:60,y2:45,x3:15}},galleryElems=document.querySelectorAll("[data-carousel]"),i=0,len=galleryElems.length;i<len;i++){var galleryElem=galleryElems[i];this["flkty"+i]=new Flickity(galleryElem,options)}var lax0=document.querySelector(".lax0"),lax2=document.querySelector(".lax2"),lax3=document.querySelector(".lax3"),lax4=document.querySelector(".lax4"),lax5=document.querySelector(".lax5"),lax6=document.querySelector(".lax6"),controller=new ScrollMagic.Controller,scene1=new ScrollMagic.Scene({triggerElement:NaN,duration:$("#sec1").height()+0}).on("enter leave",function(){$("#sec1").toggleClass("show-slides"),lax0.classList.toggle("show-slides"),$("#nav").toggleClass("gal1")}).addTo(controller);new ScrollMagic.Scene({triggerElement:"#sec2",duration:$("#sec2").height()+0}).on("enter leave",function(){$("#sec2").toggleClass("show-slides"),lax2.classList.toggle("show-slides"),$("#nav").toggleClass("gal2")}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#sec3",duration:$("#sec3").height()+0}).on("enter leave",function(){$("#sec3").toggleClass("show-slides"),lax3.classList.toggle("show-slides"),$("#nav").toggleClass("gal3")}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#sec4",offset:0,duration:$("#sec4").height()+0}).on("enter leave",function(){$("#sec4").toggleClass("show-slides"),lax4.classList.toggle("show-slides"),$("#nav").toggleClass("gal4")}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#sec5",offset:0,duration:$("#sec5").height()+0}).on("enter leave",function(){$("#sec5").toggleClass("show-slides"),lax5.classList.toggle("show-slides"),$("#nav").toggleClass("gal5")}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#sec6",offset:0,duration:$("#sec5").height()+0}).on("enter leave",function(){$("#sec6").toggleClass("show-slides"),lax6.classList.toggle("show-slides"),$("#nav").toggleClass("gal6")}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#sec7",offset:-300,duration:1500}).on("enter leave",function(){$("#navigator").toggleClass("hide"),$("#nav").toggleClass("hide")}).addTo(controller);