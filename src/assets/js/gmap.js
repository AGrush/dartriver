var infoWindow = document.querySelector(".info-window");

function initMap() {
  var markers = [];
  const viewArea = {
    lat: 51.505022,
    lng: -0.120316
  };
  const mapDiv = document.querySelector("#map");
  const options = {
    zoom: 14.2,
    center: viewArea,
    gestureHandling: "none",
    zoomControl: false,
    mapTypeControl: false,
    styles: mapStyles,
    streetViewControl: false,
    fullscreenControl: false
  };
  const map = new google.maps.Map(mapDiv, options);
  ////////////////////////////////////////////////////////

  const drawMap = () => {
    mapLabels.map(label => {
      const labelTemplate = `
                <div class="info-window__image" style="background-image:url('${
                  label.imgUrl
                }')">
                </div>
                <p class="info-window__heading">${label.heading}</p>
                <p class="info-window__copy">${label.copy}</p>
                <p class="info-window__getintouch">For more information, please get <a>in touch</a></p>
            `;

      function restoreColors() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setIcon(pinSymbol(markers[i].originalColor));
        }
      }

      function changeColor() {
        restoreColors();
        this.setIcon(pinSymbol("#C88F4D"));
        infoWindow.innerHTML = labelTemplate;
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
          originalColor: color
        });
        marker.addListener("click", changeColor);
        markers.push(marker);
        return marker;
      }
    });
  };

  drawMap();
}

const mapLabels = [
  {
    title: "A",
    pos: {
      lat: 51.5037,
      lng: -0.0935
    },
    color: "#0D5071",
    imgUrl: "assets/img/nastuh.png",
    heading: "Borough",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },
  {
    title: "G",
    pos: {
      lat: 51.516659,
      lng: -0.1117
    },
    color: "#0D5071",
    imgUrl: "assets/img/homepage1.png",
    heading: "asfds te omnis patriotique.",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },
  {
    title: "B",
    pos: {
      lat: 51.50196,
      lng: -0.139215
    },
    color: "#0D5071",
    imgUrl: "assets/img/nastuh.png",
    heading: "asdfsdf",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },
  {
    title: "T",
    pos: {
      lat: 51.5111,
      lng: -0.14
    },
    color: "#0D5071",
    imgUrl: "assets/img/nastuh.png",
    heading: "Picadilly",
    copy:
      "In Dicam luptatum vel. Vim te omnis patriotique. tota animal quarendum his no."
  },
  {
    title: "P",
    pos: {
      lat: 51.495,
      lng: -0.1606
    },
    color: "#0D5071",
    imgUrl: "assets/img/nastuh.png",
    heading: "Sloane Square",
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
      { "weight": 0.1 }
    ]
  }
];
