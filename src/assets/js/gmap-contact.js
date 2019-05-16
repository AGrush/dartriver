function initMap2() {
  const viewAreaDesktop = {
    lat: 51.518723,
    lng: -0.142438
  };

  const viewAreaTablet = {
    lat: 51.518723,
    lng: -0.142438
  };

  const viewAreaMobile = {
    lat: 51.518723,
    lng: -0.142438
  };

  var windowWidth = $(window).width();

  var options = (() => {
    if (windowWidth <= 550)
      return (options = {
        zoom: 16.0,
        center: viewAreaMobile,
        mapTypeControl: false,
        styles: mapStyles,
        streetViewControl: false,
        fullscreenControl: false
      });
    else if (windowWidth > 550 && windowWidth <= 768)
      return (options = {
        zoom: 16.0,
        center: viewAreaTablet,
        mapTypeControl: false,
        styles: mapStyles,
        streetViewControl: false,
        fullscreenControl: false
      });
    else
      return (optons = {
        zoom: 16.0,
        center: viewAreaDesktop,
        mapTypeControl: false,
        styles: mapStyles,
        streetViewControl: false,
        fullscreenControl: false
      });
  })();

  var markers = [];

  const mapDiv = document.querySelector("#contact-map");

  const map = new google.maps.Map(mapDiv, options);
  ////////////////////////////////////////////////////////

  const drawMap = () => {
    mapLabels.map(label => {
      function restoreColors() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setIcon(pinSymbol(markers[i].originalColor));
        }
      }

      function changeColor() {
        restoreColors();
        this.setIcon(pinSymbol("#C88F4D"));
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
        //marker.addListener("click", changeColor);
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
      lat: 51.5194,
      lng: -0.1429
    },
    color: "#0D5071",
    imgUrl: "assets/img/nastuh.png",
    heading: "Borough",
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
