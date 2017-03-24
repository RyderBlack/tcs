let map;

function initialize() {

    let mapOptions = {
        center: new google.maps.LatLng(43.3, 5.4),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    let iconeTotem = {
        url: "images/point-mobinaute-ici.png", // url
        scaledSize: new google.maps.Size(42, 42), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    let monEmplacement = new google.maps.Marker({
        position: {
            lat: 43.3029395,
            lng: 5.416929100000061
        },
        map: map,
        icon: iconeTotem
    });




var app = angular.module('google_map', []);
app.controller('map', function($scope, $http) {
    $http.get("http://tcs-dev.totem.mobi/api/Vehicles")
        .then(function(response) {
            $scope.dataMap = response.data;
            console.log(response.data);

    let latLng = new google.maps.LatLng($scope.dataMap.position.lat, $scope.dataMap.position.lng);

    let iconeVerte = {
        url: "images/picto_voiture-vert.png", // url
        scaledSize: new google.maps.Size(28, 28), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    let iconeGrise = {
        url: "images/picto_voiture-gris.png", // url
        scaledSize: new google.maps.Size(28, 28), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // Creating a marker and putting it on the map
    let markerVert = new google.maps.Marker({
        position: latLng,
        name: data.name,
        icon: iconeVerte,
        optimized: false,
        zIndex: 999
    });


    // Creating a marker and putting it on the map
    let markerGris = new google.maps.Marker({
        position: latLng,
        name: data.name,
        icon: iconeGrise,
        optimized: false,
        zIndex: 999
    });
    if (data.batteryLevel > 56) {
      return markerVert.setMap(map);
    } else {
      return markerGris.setMap(map);
    }


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

  });
})


}
