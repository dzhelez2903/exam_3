let map;

function initMap() {
  const mapOptions = {
    zoom: 20,
    center: {
      lat: 49.20927572020338,
      lng: 28.468004987927888
    },
    disableDefaultUI: false,
  };
  //map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const styledMapType = new google.maps.StyledMapType(
    [
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "weight": "0.2"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c8c4da"
                },
                {
                    "saturation": "-25"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#a99ddf"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c8c4da"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#a99ddf"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c8c4da"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c8c4da"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c8c4db"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#545258"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7d7b7b"
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "0.60"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b2aeae"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#cfbf8d"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#cebe8d"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "gamma": "1.74"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cebe8d"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b2aeae"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#98a9e7"
                }
            ]
        }
    ], {
      name: "Styled Map"
    }
  );
  // Create a map object, and include the MapTypeId to add
  // to the map type control. 
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 49.225555661437994,
      lng: 28.431661225246224
    },
    zoom: 15,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    },
    disableDefaultUI: true,
  });
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  image = 'data:image/png;base64,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'
  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: {
      lat: 49.230918284566734,
      lng: 28.442924003504192
    },
    animation: google.maps.Animation.BOUNCE,
    map: map,
    icon: image
  });
  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  const infowindow = new google.maps.InfoWindow({
    content: '<p>Beetroot Academy</p><img src="../img/img/origami.png" alt="">',
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}