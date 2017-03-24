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

}

$(document).ready(function() {
    $.getJSON("http://tcs-dev.totem.mobi/api/Zones", function(jsonZones) {
        $.each(jsonZones, function(key, data) {
            let latLng = new google.maps.LatLng(data.position.lat, data.position.lng);

            let zones = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: data.radius / 14,
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
    $.getJSON("http://tcs-dev.totem.mobi/api/Vehicles", function(jsonVehicules) {
        $.each(jsonVehicules, function(key, data) {
            let latLng = new google.maps.LatLng(data.position.lat, data.position.lng);

            let iconeTwizy = {
                url: "images/twizy-topside.png", // url
                scaledSize: new google.maps.Size(32, 22), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            // Creating a marker and putting it on the map
            let marker = new google.maps.Marker({
                position: latLng,
                name: data.name,
                icon: iconeTwizy,
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


        });
    });
});
