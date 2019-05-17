var infoWindow = document.querySelector(".info-window");

function initMap() {
  const viewAreaDesktop = {
    lat: 51.505,
    lng: -0.14
  };

  const viewAreaTablet = {
    lat: 51.515,
    lng: -0.12
  };

  const viewAreaMobile = {
    lat: 51.52,
    lng: -0.13
  };

  var windowWidth = $(window).width();

  var options = (() => {
    if (windowWidth <= 550)
      return (options = {
        zoom: 11.9,
        center: viewAreaMobile,
        gestureHandling: "none",
        zoomControl: false,
        mapTypeControl: false,
        styles: mapStyles,
        streetViewControl: false,
        fullscreenControl: false
      });
    else if (windowWidth > 550 && windowWidth <= 768)
      return (options = {
        zoom: 12.3,
        center: viewAreaTablet,
        gestureHandling: "none",
        zoomControl: false,
        mapTypeControl: false,
        styles: mapStyles,
        streetViewControl: false,
        fullscreenControl: false
      });
    else
      return (optons = {
        zoom: 13.0,
        center: viewAreaDesktop,
        gestureHandling: "none",
        zoomControl: false,
        mapTypeControl: false,
        styles: mapStyles,
        streetViewControl: false,
        fullscreenControl: false
      });
  })();

  var markers = [];

  const mapDiv = document.querySelector("#map");

  const map = new google.maps.Map(mapDiv, options);
  ////////////////////////////////////////////////////////

  function removeAnimateClass(){
    setTimeout(function(){ 
      infoWindow.classList.remove('animateInfo'); 
    }, 650);
  }
  const drawMap = () => {
    mapLabels.map(label => {
      const labelTemplate = `
                <div class="info-window__image" style="background-image:url('${
                  label.imgUrl
                }')">
                </div>
                <div class="info-window__copy-container">
                    <p class="info-window__heading">${label.heading}</p>
                    <p class="info-window__copy">${label.copy}</p>
                    <p class="info-window__getintouch">For more information, please get <a>in touch</a></p>
                </div>
            `;

      function restoreColors() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setIcon(pinSymbol(markers[i].originalColor));
        }
      }

      function changeColor() {
        restoreColors();
        this.setIcon(pinSymbol("#C88F4D"));
        infoWindow.classList.add('animateInfo')
        infoWindow.innerHTML = labelTemplate;
        removeAnimateClass();
      }

      function pinSymbol(color) {
        return {
          path:
            "M19.875,48 C29.7916667,32.7268238 34.75,22.3518238 34.75,16.875 C34.75,8.65976435 28.0902357,2 19.875,2 C11.6597643,2 5,8.65976435 5,16.875 C5,22.3518238 9.95833333,32.7268238 19.875,48 Z",
          fillColor: color,
          fillOpacity: 1,
          strokeColor: "#000",
          strokeWeight: 0,
          scale: 1
        };
      }

      createMarker(label.pos, label.color, map);

      function createMarker(position, color, map) {
        var marker = new google.maps.Marker({
          map: map,
          position: position,
          icon: pinSymbol(color),
          originalColor: '#0D5071'
        });
        marker.addListener("click", changeColor);
        markers.push(marker);
        return marker;
        
      }

      
    });
  };

  drawMap();
}


// var someLink = document.querySelector('markerx');
// simulateClick(someLink);
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

const mapLabels = [

  
  //first building
  {
    title: "B",
    pos: {
      lat: 51.50196,
      lng: -0.139215
    },
    color: "#0D5071",
    imgUrl: "assets/img/broadwick/6.png",
    heading: "30 Broadwick Street, Soho",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },

  //second building
  {
    title: "T",
    pos: {
      lat: 51.5111,
      lng: -0.14
    },
    color: "#0D5071",
    imgUrl: "assets/img/wigmore/wigmore.jpg",
    heading: "95 Wigmore Street, Marylebone",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },

  //third building
  {
    title: "P",
    pos: {
      lat: 51.494,
      lng: -0.1606
    },
    color: "#0D5071",
    imgUrl: "assets/img/oxfordstreet/oxfordstreet.jpg",
    heading: "73 / 89 Oxford Street, Soho",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },


  //fourth building
  {
    title: "A",
    pos: {
      lat: 51.5037,
      lng: -0.0935
    },
    color: "#C88F4D",
    imgUrl: "assets/img/rathbone/rathbone.jpg",
    heading: "Rathbone Place, Fitzrovia",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },



  //fifth building
  {
    title: "G",
    pos: {
      lat: 51.515659,
      lng: -0.1217
    },
    color: "#0D5071",
    imgUrl: "assets/img/blackfriars/blackfriars.jpg",
    heading: "240 Blackfriars Road, Southbank",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },


  //sixth building
  {
    title: "G",
    pos: {
      lat: 51.515659,
      lng: -0.1117
    },
    color: "#0D5071",
    imgUrl: "assets/img/citytower/citytower.jpg",
    heading: "City Tower, City Of London",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  }
];

const mapStyles = [
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2"
      }
    ]
  },
  {
    featureType: "poi.attraction",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.government",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.medical",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#e6ece6"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.school",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.sports_complex",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        color: "#9a8265"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9ddce"
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ff0000"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#bfd6df"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#0d5071"
      },
      { weight: 0.1 }
    ]
  }
];
