let map;

function initialize() {

    let mapOptions = {
        center: new google.maps.LatLng(43.3, 5.4),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6195a0"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "0"
            }, {
                "saturation": "0"
            }, {
                "color": "#f5f5f2"
            }, {
                "gamma": "1"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "lightness": "-3"
            }, {
                "gamma": "1.00"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#bae5ce"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fac9a9"
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [{
                "color": "#4e4e4e"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#787878"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [{
                "hue": "#0a00ff"
            }, {
                "saturation": "-77"
            }, {
                "gamma": "0.57"
            }, {
                "lightness": "0"
            }]
        }, {
            "featureType": "transit.station.rail",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#43321e"
            }]
        }, {
            "featureType": "transit.station.rail",
            "elementType": "labels.icon",
            "stylers": [{
                "hue": "#ff6c00"
            }, {
                "lightness": "4"
            }, {
                "gamma": "0.75"
            }, {
                "saturation": "-68"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#eaf6f8"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#c7eced"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "lightness": "-49"
            }, {
                "saturation": "-53"
            }, {
                "gamma": "0.79"
            }]
        }]
    };
    map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    let iconeTotem = new google.maps.MarkerImage('images/point-mobinaute-ici.png',
        new google.maps.Size(50, 50),
        new google.maps.Point(0, 0),
        new google.maps.Point(25, 25)
    );

    let monEmplacement = new google.maps.Marker({
        position: {
            lat: 43.3029395,
            lng: 5.416929100000061
        },
        map: map,
        icon: iconeTotem
    });



$(document).ready(function() {
    $.getJSON("http://tcs-dev.totem.mobi/api/Zones", function(jsonZones) {
        $.each(jsonZones, function(key, data) {
            let latLng = new google.maps.LatLng(data.position.lat, data.position.lng);

            let zones = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: data.radius/13,
                strokeColor: "green",
                strokeOpacity: 0.5,
                strokeWeight: 1,
                fillColor: "green",
                fillOpacity: 0.35,

            };

            // Creating a marker and putting it on the map
            let marker = new google.maps.Marker({
                position: latLng,
                icon: zones,
                map:map,
                clickable: false,
            });
            marker.setMap(map);
        });
    });
});

$(document).ready(function() {
    $.getJSON("http://tcs-dev.totem.mobi/api/Vehicles", function(jsonVehicules) {
        $.each(jsonVehicules, function(key, data) {
            let latLng = new google.maps.LatLng(data.position.lat, data.position.lng);

            let iconeVerte = {
                url: "images/marker-voiture-vert.png", // url
                scaledSize: new google.maps.Size(26, 34), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            let iconeBleu = {
                url: "images/marker-voiture-bleu.png", // url
                scaledSize: new google.maps.Size(26, 34), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            let iconeOrange = {
                url: "images/marker-voiture-orange.png", // url
                scaledSize: new google.maps.Size(26, 34), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            let iconeRouge = {
                url: "images/marker-voiture-rouge.png", // url
                scaledSize: new google.maps.Size(26, 34), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            let iconeGrise = {
                url: "images/marker-voiture-gris.png", // url
                scaledSize: new google.maps.Size(26, 34), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            let iconeViolet = {
                url: "images/marker-voiture-violet.png", // url
                scaledSize: new google.maps.Size(26, 34), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            // DEFINITION DU CODE COULEUR
            let batteryLife = data.batteryLevel;
            console.log(batteryLife);
            if (batteryLife >= 56) {
                // Creating a marker and putting it on the map
                let marker = new google.maps.Marker({
                    position: latLng,
                    name: data.name,
                    icon: iconeVerte,
                    optimized: false,
                    zIndex: 999
                });

                marker.setMap(map);

                // info DIV
                var infoVehicules = '<div id="content">' +
                    '<h4 > Votre Twizy : ' + data.name + '</h4>' +
                    '<img src="images/marker-voiture-verte-info-bulle.png" alt="PICTO VERT">' +
                    '<div id="bodyContent">' +
                    '<p> Il reste ' + data.batteryLevel + '% d\'autonomie.</p>' +
                    '<p> Est-elle active ? ' + data.isCharging + '</p>' +
                    '<p>' + data.description + '</p>' +
                    '</div>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: infoVehicules
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

            } else if (batteryLife >= 26) {
                // Creating a marker and putting it on the map
                let marker = new google.maps.Marker({
                    position: latLng,
                    name: data.name,
                    icon: iconeBleu,
                    optimized: false,
                    zIndex: 999
                });
                marker.setMap(map);

                // info DIV
                var infoVehicules = '<div id="content">' +
                    '<h4 > Votre Twizy : ' + data.name + '</h4>' +
                    '<img src="images/marker-voiture-bleue-info-bulle.png" alt="PICTO BLEU">' +
                    '<div id="bodyContent">' +
                    '<p> Il reste ' + data.batteryLevel + '% d\'autonomie.</p>' +
                    '<p> Est-elle en charge ? ' + data.isCharging + '</p>' +
                    '<p>' + data.description + '</p>' +
                    '</div>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: infoVehicules
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

            } else if (batteryLife > 16) {
                // Creating a marker and putting it on the map
                let marker = new google.maps.Marker({
                    position: latLng,
                    name: data.name,
                    icon: iconeOrange,
                    optimized: false,
                    zIndex: 999
                });
                marker.setMap(map);

                // info DIV
                var infoVehicules = '<div id="content">' +
                    '<h4 > Votre Twizy : ' + data.name + '</h4>' +
                    '<img src="images/marker-voiture-orange-info-bulle.png" alt="PICTO ORANGE">' +
                    '<div id="bodyContent">' +
                    '<p> Il reste ' + data.batteryLevel + '% d\'autonomie.</p>' +
                    '<p> Est-elle en charge ? ' + data.isCharging + '</p>' +
                    '<p>' + data.description + '</p>' +
                    '</div>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: infoVehicules
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

            } else {
                // Creating a marker and putting it on the map
                let marker = new google.maps.Marker({
                    position: latLng,
                    name: data.name,
                    icon: iconeRouge,
                    optimized: false,
                    zIndex: 999
                });
                marker.setMap(map);

                // info DIV
                var infoVehicules = '<div id="content">' +
                    '<h4 > Votre Twizy : ' + data.name + '</h4>' +
                    '<img src="images/marker-voiture-rouge-info-bulle.png" alt="PICTO ROUGE">' +
                    '<div id="bodyContent">' +
                    '<p> Il reste ' + data.batteryLevel + '% d\'autonomie.</p>' +
                    '<p> Est-elle en charge ? ' + data.isCharging + '</p>' +
                    '<p>' + data.description + '</p>' +
                    '</div>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: infoVehicules
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

            }


        });
    });
});

};
/*
var app = angular.module('google_map', []);
app.controller('map', function($scope, $http) {
    $http.get("http://tcs-dev.totem.mobi/api/Vehicles")
        .then(function(response) {
            $scope.dataMap = response.data;
        });


}) */
