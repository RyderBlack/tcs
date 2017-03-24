function initMapContact() {
    let marseille = {
      lat: 43.302969,
      lng: 5.41692910
    };
    let map = new google.maps.Map(document.getElementById('mapContact'), {
        zoom: 17,
        center: marseille
    });

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
