let map;

function initialize() {

    let mapOptions = {
        center: new google.maps.LatLng(43.3, 5.4),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
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

}

$(document).ready(function() {
    $.getJSON("https://tcs.totem.mobi/api/Zones?access_token=5l84OeVvSnhqg0cxHvvSPU3AoqpIDYHvl5JCD57UoJLIpAEirmbFAdUwjcQEFsGZ", function(jsonZones) {
        $.each(jsonZones, function(key, data) {
            let latLng = new google.maps.LatLng(data.position.lat, data.position.lng);

            let zones = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: data.radius / 13,
                fillColor: 'green',
                fillOpacity: 0.2,
                strokeColor: 'green',
                strokeWeight: 2,
                strokeOpacity: 0.2
            };

            // Creating a marker and putting it on the map
            let marker = new google.maps.Marker({
                position: latLng,
                name: data.name,
                icon: zones
            });
            marker.setMap(map);
        });
    });
});

$(document).ready(function() {
    $.getJSON("https://tcs.totem.mobi/api/Vehicles?access_token=5l84OeVvSnhqg0cxHvvSPU3AoqpIDYHvl5JCD57UoJLIpAEirmbFAdUwjcQEFsGZ", function(jsonVehicules) {
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

            } else if (batteryLife >= 26){
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

            } else if (batteryLife > 16){
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


/*
var app = angular.module('google_map', []);
app.controller('map', function($scope, $http) {
    $http.get("http://tcs-dev.totem.mobi/api/Vehicles")
        .then(function(response) {
            $scope.dataMap = response.data;
        });


}) */
