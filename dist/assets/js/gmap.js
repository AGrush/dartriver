var infoWindow=document.querySelector(".info-window");function initMap(){const e={lat:51.505,lng:-.14},t={lat:51.515,lng:-.12},i={lat:51.52,lng:-.13};var l=$(window).width(),o=(()=>l<=550?o={zoom:11.9,center:i,gestureHandling:"none",zoomControl:!1,mapTypeControl:!1,styles:mapStyles,streetViewControl:!1,fullscreenControl:!1}:l>550&&l<=768?o={zoom:12.3,center:t,gestureHandling:"none",zoomControl:!1,mapTypeControl:!1,styles:mapStyles,streetViewControl:!1,fullscreenControl:!1}:optons={zoom:13,center:e,gestureHandling:"none",zoomControl:!1,mapTypeControl:!1,styles:mapStyles,streetViewControl:!1,fullscreenControl:!1})(),a=[];const n=document.querySelector("#map"),s=new google.maps.Map(n,o);mapLabels.map(e=>{const t=`\n                <div class="info-window__image" style="background-image:url('${e.imgUrl}')">\n                </div>\n                <div class="info-window__copy-container">\n                    <p class="info-window__heading">${e.heading}</p>\n                    <p class="info-window__copy">${e.copy}</p>\n                    <p class="info-window__getintouch">For more information, please get <a>in touch</a></p>\n                </div>\n            `;function i(){!function(){for(var e=0;e<a.length;e++)a[e].setIcon(l(a[e].originalColor))}(),this.setIcon(l("#C88F4D")),infoWindow.classList.add("animateInfo"),infoWindow.innerHTML=t,setTimeout(function(){infoWindow.classList.remove("animateInfo")},650)}function l(e){return{path:"M19.875,48 C29.7916667,32.7268238 34.75,22.3518238 34.75,16.875 C34.75,8.65976435 28.0902357,2 19.875,2 C11.6597643,2 5,8.65976435 5,16.875 C5,22.3518238 9.95833333,32.7268238 19.875,48 Z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:0,scale:1}}!function(e,t,o){var n=new google.maps.Marker({map:o,position:e,icon:l(t),originalColor:"#0D5071"});n.addListener("click",i),a.push(n)}(e.pos,e.color,s)})}const mapLabels=[{title:"A",pos:{lat:51.5037,lng:-.0935},color:"#C88F4D",imgUrl:"assets/img/nastuh.png",heading:"Borough",copy:"In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."},{title:"G",pos:{lat:51.516659,lng:-.1117},color:"#0D5071",imgUrl:"assets/img/homepage1.png",heading:"asfds te omnis patriotique.",copy:"In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."},{title:"B",pos:{lat:51.50196,lng:-.139215},color:"#0D5071",imgUrl:"assets/img/nastuh.png",heading:"asdfsdf",copy:"In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."},{title:"T",pos:{lat:51.5111,lng:-.14},color:"#0D5071",imgUrl:"assets/img/nastuh.png",heading:"Picadilly",copy:"In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."},{title:"P",pos:{lat:51.495,lng:-.1606},color:"#0D5071",imgUrl:"assets/img/nastuh.png",heading:"Sloane Square",copy:"In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."}],mapStyles=[{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi.attraction",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.government",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#e6ece6"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45},{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{color:"#9a8265"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#e9ddce"},{visibility:"simplified"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#ff0000"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#bfd6df"},{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#0d5071"},{weight:.1}]}];